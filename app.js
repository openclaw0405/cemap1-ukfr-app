const DATA = window.CEMAP1_DATA;
const PASS_MARK = DATA.studyModes.dailyPassMark || 70;
const STORAGE_KEY = 'cemap1_revision_lab_state_v3';

const byId = (id) => document.getElementById(id);
const questionMap = Object.fromEntries(DATA.questionBank.map(q => [q.id, q]));
let currentDay = getInitialDayFromHash();
let state = loadState();
let activeTab = getInitialTabFromHash();
let lastQuizContext = null;

const FRAMEWORK_BY_TAG = {
  industry: 'Map the system first: saver → institution/market → borrower/user → regulator/policy backdrop.',
  tax: 'Classify the trigger first: income, disposal, death/transfer, or transaction.',
  products: 'Match need → product → payout/return style → main risk still left.',
  'advice-process': 'Sequence wins marks: factfind → objectives → risk/capacity → recommendation → review.',
  legal: 'Identify whether the stem is about authority, ownership/distribution, or scope.',
  regulation: 'Separate roles cleanly: conduct, prudential safety, accountability, promotion permissions.',
  'consumer-protection': 'Prefer the answer that protects the customer through process, escalation, evidence, and support.',
  mixed: 'Classify the topic before chasing detail.',
  mock: 'Use classify → compare → commit, then review the confusion pair afterwards.',
  final: 'Recall contrasts, not paragraphs.'
};

function loadState() {
  const empty = {
    completedDays: {},
    dayScores: {},
    questionStats: {},
    topicScores: {},
    mockHistory: []
  };
  try {
    return Object.assign(empty, JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'));
  } catch {
    return empty;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function sampleQuestions(ids, count = ids.length) {
  return shuffle(ids.map(id => questionMap[id]).filter(Boolean)).slice(0, count);
}

function getDay(dayNo) {
  return DATA.plan.find(d => d.day === dayNo);
}

function getCompletedCount() {
  return Object.values(state.completedDays).filter(Boolean).length;
}

function getQuestionAccuracy() {
  const stats = Object.values(state.questionStats);
  const attempts = stats.reduce((n, s) => n + (s.attempts || 0), 0);
  const correct = stats.reduce((n, s) => n + (s.correct || 0), 0);
  return { attempts, correct, pct: attempts ? Math.round(correct / attempts * 100) : 0 };
}

function getWeakTags(limit = 5) {
  const bucket = {};
  for (const q of DATA.questionBank) {
    const stat = state.questionStats[q.id];
    if (!stat || !stat.attempts) continue;
    const wrong = stat.attempts - stat.correct;
    const weight = wrong <= 0 ? 0 : wrong / stat.attempts;
    for (const tag of q.tags || []) {
      bucket[tag] = bucket[tag] || { tag, wrong: 0, attempts: 0 };
      bucket[tag].wrong += wrong;
      bucket[tag].attempts += stat.attempts;
      bucket[tag].weight = (bucket[tag].weight || 0) + weight;
    }
  }
  return Object.values(bucket)
    .map(x => ({ ...x, ratio: x.attempts ? x.wrong / x.attempts : 0 }))
    .filter(x => x.wrong > 0)
    .sort((a,b) => b.ratio - a.ratio || b.wrong - a.wrong)
    .slice(0, limit);
}

function getInitialDayFromHash() {
  const match = window.location.hash.match(/day-(\d+)/);
  const day = Number(match?.[1] || 1);
  return day >= 1 && day <= DATA.plan.length ? day : 1;
}

function getInitialTabFromHash() {
  if (window.location.hash.includes('day-')) return 'daily';
  const tab = window.location.hash.replace('#', '');
  return ['dashboard', 'daily', 'topics', 'weak', 'mock'].includes(tab) ? tab : 'dashboard';
}

function updateHash() {
  const hash = activeTab === 'daily' ? `day-${currentDay}` : activeTab;
  history.replaceState(null, '', `#${hash}`);
}

function jumpToDailyTop() {
  requestAnimationFrame(() => {
    const anchor = byId(`day-detail-${currentDay}`) || byId('daily');
    anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function renderHero() {
  const breakdown = DATA.meta.sourceBreakdown || {};
  byId('heroMeta').innerHTML = `
    <span class="badge">📅 ${DATA.meta.days} day plan</span>
    <span class="badge">🧠 ${DATA.meta.questionCount} grounded questions</span>
    <span class="badge">🧩 Framework-first memory design</span>
    <span class="badge">📘 ${breakdown.revisionGuideDerived || 0} rev-guide grounded</span>
    <span class="badge">📗 ${breakdown.textbookDerived || 0} textbook/adapted</span>
    <span class="badge">✅ Daily + topic drills + weak mode + mock</span>
  `;
}

function renderDayList() {
  byId('overallDone').textContent = `${getCompletedCount()} / ${DATA.plan.length} complete`;
  byId('questionCount').textContent = `${DATA.meta.questionCount} questions`;
  byId('dayList').innerHTML = DATA.plan.map(day => {
    const score = state.dayScores[day.day];
    return `
      <button class="day-card ${day.day === currentDay ? 'active' : ''}" onclick="openDay(${day.day})">
        <div class="day-row">
          <div class="day-title">Day ${day.day} · Week ${day.week}</div>
          <span class="chip ${state.completedDays[day.day] ? 'done' : (score != null ? 'warn' : 'muted')}">${state.completedDays[day.day] ? 'Done' : (score != null ? score + '%' : 'Open')}</span>
        </div>
        <div class="small"><strong>${escapeHtml(day.title)}</strong></div>
        <div class="day-sub">${escapeHtml(day.summary)}</div>
      </button>
    `;
  }).join('');
}

function renderDashboard() {
  const acc = getQuestionAccuracy();
  const weak = getWeakTags(6);
  const recentMock = state.mockHistory[state.mockHistory.length - 1];
  byId('dashboard').innerHTML = `
    <div class="stat-grid">
      <div class="stat"><b>${DATA.plan.length}</b><span>Planned days</span></div>
      <div class="stat"><b>${getCompletedCount()}</b><span>Days completed</span></div>
      <div class="stat"><b>${acc.pct}%</b><span>Question accuracy</span></div>
      <div class="stat"><b>${acc.attempts}</b><span>Questions attempted</span></div>
    </div>

    <div class="jump-strip card" style="margin-bottom:16px">
      <div>
        <div class="kicker">Fast jump</div>
        <h3 style="margin:0 0 6px">Open any day instantly</h3>
        <div class="small muted">Each day now follows the same memory-optimised pattern: what it means, framework, chunked notes, comparison table, facts, mistakes, recall, MC drill, and wrong-answer retry.</div>
      </div>
      <div class="day-jump-grid">
        ${DATA.plan.map(day => `<button class="mini-day ${day.day === currentDay ? 'active' : ''}" onclick="openDay(${day.day})">Day ${day.day}</button>`).join('')}
      </div>
    </div>

    <div class="card-grid">
      <div class="card">
        <div class="kicker">How this app is built</div>
        <h3>CeMAP 1 only, exam-first and memory-first</h3>
        <p class="muted">The app keeps full content coverage but changes how the material is presented: frameworks come first, notes are chunked into smaller retrieval-friendly blocks, comparison logic is explicit, and question explanations point back to the right thinking pattern.</p>
        <div class="chips" style="margin:10px 0 12px">
          <span class="chip">Revision guide grounded: ${DATA.meta.sourceBreakdown?.revisionGuideDerived || 0}</span>
          <span class="chip">Textbook/adapted: ${DATA.meta.sourceBreakdown?.textbookDerived || 0}</span>
          <span class="chip">Retry wrong answers built in</span>
        </div>
        <ul class="list-clean small">
          ${DATA.meta.notes.map(note => `<li>${escapeHtml(note)}</li>`).join('')}
        </ul>
      </div>

      <div class="card">
        <div class="kicker">Weak-area radar</div>
        <h3>Your current trouble spots</h3>
        ${weak.length ? `<div class="chips">${weak.map(w => `<span class="chip warn">${escapeHtml(w.tag)} · ${Math.round(w.ratio*100)}% wrong</span>`).join('')}</div>` : `<div class="empty">No weak areas recorded yet. Do a daily test or mock and the retry engine will start tracking patterns.</div>`}
      </div>

      <div class="card">
        <div class="kicker">How to revise in this app</div>
        <h3>Use the same rhythm every day</h3>
        <ol class="list-clean small">
          <li><strong>What is this topic about?</strong> Understand what CeMAP is actually testing.</li>
          <li><strong>Use the framework.</strong> Classify before reading all four options deeply.</li>
          <li><strong>Study the chunks.</strong> Learn in contrast pairs, not one huge wall of notes.</li>
          <li><strong>Do recall before the MCQ.</strong> Retrieval beats rereading.</li>
          <li><strong>Retry what you miss.</strong> Turn mistakes into repaired memory traces.</li>
        </ol>
      </div>

      <div class="card">
        <div class="kicker">Latest mock</div>
        <h3>Most recent exam-mode result</h3>
        ${recentMock ? `<div class="score-box"><strong>${recentMock.title}</strong><div class="small">${recentMock.correct}/${recentMock.total} correct · ${recentMock.score}% · ${new Date(recentMock.at).toLocaleString()}</div></div>` : `<div class="empty">No mock completed yet. Use Mock mode in week 4 or any time you want a timed mixed paper.</div>`}
      </div>
    </div>
  `;
}

function buildDaySections(day) {
  const notePool = [
    ...(day.learn || []),
    ...(day.deepDive || []).filter(item => !(day.learn || []).includes(item))
  ];
  const chunks = [];
  for (let i = 0; i < notePool.length; i += 3) {
    chunks.push(notePool.slice(i, i + 3));
  }

  const factPool = [
    ...(day.mustKnow || []),
    day.framework,
    ...(day.table?.rows || []).flat()
  ].filter(Boolean);

  const mustMemorise = Array.from(new Set(factPool)).filter(item =>
    /£|\d|FCA|PRA|FOS|FSCS|MPC|MLRO|SMCR|ISA|CGT|IHT|SDLT|LPA|GDPR|Consumer Duty|Bank Rate|whole-of-life|term assurance/i.test(item)
  ).slice(0, 8);

  const recall = Array.from(new Set([
    `In one line, what is Day ${day.day} really testing?`,
    `Say the framework aloud: ${day.framework}`,
    ...(day.table?.rows || []).slice(0, 3).map(row => `Compare ${row[0]} with ${row[1]}.`),
    ...(day.mustKnow || []).slice(0, 3).map(item => `Recall: ${item}`),
    ...(day.commonMistakes || []).slice(0, 2).map(item => `Avoid this trap: ${item}`)
  ])).slice(0, 8);

  const examSprint = Array.from(new Set([
    ...(day.examSprint || []),
    ...(day.table?.rows || []).slice(0, 2).map(row => `${row[0]} → ${row[1]}`),
    ...(day.trapNotes || []).slice(0, 1)
  ])).slice(0, 5);

  const frameworkComponents = (day.frameworkDetails?.components || []).map((item, idx) => {
    const pair = Array.isArray(item) ? item : [item.label || `Part ${idx + 1}`, item.meaning || item.description || ''];
    return { label: pair[0], meaning: pair[1] };
  });

  return { chunks, mustMemorise, recall, examSprint, frameworkComponents };
}

function renderDaily() {
  const day = getDay(currentDay);
  const score = state.dayScores[day.day];
  const relatedTopics = (day.focusTags || []).map(tag => DATA.tagLabels[tag] || tag);
  const sections = buildDaySections(day);

  byId('daily').innerHTML = `
    <article id="day-detail-${day.day}">
      <div class="daily-jumpbar card">
        <div>
          <div class="kicker">Day navigation</div>
          <h3 style="margin:0 0 6px">Jump without scrolling</h3>
        </div>
        <div class="daily-jump-controls">
          <button class="btn alt" onclick="jumpRelativeDay(-1)" ${day.jumpTargets?.prevDay ? '' : 'disabled'}>← Previous day</button>
          <select id="dayJumpSelect" onchange="jumpToSelectedDay(this.value)">
            ${DATA.plan.map(item => `<option value="${item.day}" ${item.day === day.day ? 'selected' : ''}>Day ${item.day} · ${escapeHtml(item.title)}</option>`).join('')}
          </select>
          <button class="btn alt" onclick="jumpRelativeDay(1)" ${day.jumpTargets?.nextDay ? '' : 'disabled'}>Next day →</button>
          <button class="btn ghost" onclick="scrollToDailyQuiz()">Go to day test</button>
        </div>
      </div>

      <div class="inline-row" style="justify-content:space-between;margin-bottom:14px">
        <div>
          <div class="kicker">Day ${day.day} · Week ${day.week}</div>
          <h2 style="margin:0 0 6px">${escapeHtml(day.title)}</h2>
          <div class="muted">${escapeHtml(day.summary)}</div>
        </div>
        <div class="chips">
          <span class="chip">${escapeHtml(day.hours)}</span>
          <span class="chip muted">${relatedTopics.map(escapeHtml).join(' · ')}</span>
          <span class="chip ${state.completedDays[day.day] ? 'done' : (score != null ? 'warn' : 'muted')}">${state.completedDays[day.day] ? 'Passed' : (score != null ? `Last score ${score}%` : 'Not tested')}</span>
          <button class="btn alt" onclick="toggleDayDone(${day.day})">${state.completedDays[day.day] ? 'Mark not done' : 'Force mark done'}</button>
        </div>
      </div>
      <div class="progress"><div style="width:${(day.day / DATA.plan.length) * 100}%"></div></div>

      <div class="overview-grid" style="margin-top:16px">
        <div class="card section-card">
          <div class="kicker">1 · What this topic is about</div>
          <h3>What CeMAP is actually testing here</h3>
          <p class="muted">${escapeHtml(day.summary)}</p>
          <ul class="list-clean small">${(day.deepDive || []).slice(0, 4).map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        </div>
        <div class="card section-card framework-card">
          <div class="kicker">2 · High-yield framework</div>
          <h3>Use this before reading the options</h3>
          <p class="framework-text">${escapeHtml(day.frameworkDetails?.name || day.framework)}</p>
          <div class="framework-stack">
            <div class="framework-panel">
              <div class="framework-mini-label">What it helps you remember</div>
              <div class="small">${escapeHtml(day.frameworkDetails?.purpose || 'Use this to classify the topic before comparing options.')}</div>
            </div>
            <div class="framework-panel">
              <div class="framework-mini-label">Breakdown</div>
              <div class="framework-breakdown">
                ${sections.frameworkComponents.map(item => `<div class="framework-part"><strong>${escapeHtml(item.label)}</strong><span>${escapeHtml(item.meaning)}</span></div>`).join('')}
              </div>
            </div>
            <div class="framework-panel framework-usage">
              <div><span class="framework-mini-label">Exam use</span><div class="small">${escapeHtml(day.frameworkDetails?.examUse || FRAMEWORK_BY_TAG[day.theme] || FRAMEWORK_BY_TAG.mixed)}</div></div>
              ${(day.frameworkDetails?.trap || day.trapNotes?.[0]) ? `<div><span class="framework-mini-label warn">Common trap</span><div class="small">${escapeHtml(day.frameworkDetails?.trap || day.trapNotes?.[0])}</div></div>` : ''}
            </div>
          </div>
          <div class="small muted">Default thinking cue: ${escapeHtml(FRAMEWORK_BY_TAG[day.theme] || FRAMEWORK_BY_TAG.mixed)}</div>
        </div>
      </div>

      <div class="card note-accent-card" style="margin-top:16px">
        <div class="kicker">2.5 · Exam-priority sprint</div>
        <h3 style="margin-top:0">Five things to know before you open the drill</h3>
        <div class="recall-grid">
          ${sections.examSprint.map((item, idx) => `<div class="recall-card"><strong>${idx + 1}.</strong> ${escapeHtml(item)}</div>`).join('')}
        </div>
      </div>

      <div class="card" style="margin-top:16px">
        <div class="kicker">3 · Full notes in chunks</div>
        <h3 style="margin-top:0">Smaller blocks for better retention</h3>
        <div class="chunk-grid">
          ${sections.chunks.map((chunk, idx) => `
            <div class="chunk-card">
              <div class="chunk-no">Chunk ${idx + 1}</div>
              <ul class="list-clean small">${chunk.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="card" style="margin-top:16px">
        <div class="kicker">4 · Comparison table</div>
        <h3 style="margin-top:0">Build distinction memory, not vague familiarity</h3>
        <table class="compare-table">
          <thead><tr>${day.table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead>
          <tbody>${day.table.rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
      </div>

      <div class="deep-grid" style="margin-top:16px">
        <div class="card section-card warn-card">
          <div class="kicker">5 · Must memorise numbers / facts</div>
          <h3>Fast anchors</h3>
          <ul class="list-clean small">${sections.mustMemorise.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        </div>
        <div class="card section-card bad-card">
          <div class="kicker">6 · Common mistakes</div>
          <h3>Where candidates lose easy marks</h3>
          <ul class="list-clean small">${(day.commonMistakes || []).map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        </div>
        <div class="card section-card note-accent-card">
          <div class="kicker">7 · Trap notes</div>
          <h3>True statement, wrong question</h3>
          <ul class="list-clean small">${(day.trapNotes || []).map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        </div>
      </div>

      <div class="card" style="margin-top:16px">
        <div class="kicker">8 · Quick recall check</div>
        <h3 style="margin-top:0">Say these out loud before you test yourself</h3>
        <div class="recall-grid">
          ${sections.recall.map((item, idx) => `<div class="recall-card"><strong>${idx + 1}.</strong> ${escapeHtml(item)}</div>`).join('')}
        </div>
      </div>

      <div class="quiz-wrap" id="daily-quiz-start" style="margin-top:18px">
        <div class="inline-row" style="justify-content:space-between;margin-bottom:10px">
          <div>
            <div class="kicker">9 · MC drill</div>
            <h3 style="margin:0">${day.testQuestionIds.length} focused questions</h3>
            <div class="small muted">Explanations link back to the correct framework so you repair understanding, not just mark right/wrong.</div>
          </div>
          <button class="btn ghost" onclick="startDailyQuiz(${day.day})">Restart this daily test</button>
        </div>
        <div id="dailyQuizArea"></div>
      </div>
    </article>
  `;
  startDailyQuiz(day.day);
}

function renderTopics() {
  byId('topics').innerHTML = `
    <div class="kicker">Topic tests</div>
    <h2 style="margin:0 0 8px">High-yield grouped practice</h2>
    <p class="muted">Run grouped papers or go narrower with single-topic drills built from the larger CeMAP 1 / UKFR bank.</p>
    <div class="mode-grid" style="margin-top:14px">
      ${DATA.studyModes.topicTests.map(test => {
        const latest = state.topicScores[test.id]?.slice(-1)[0];
        return `
          <div class="mode-card">
            <h3>${escapeHtml(test.title)}</h3>
            <p class="small muted">${test.questionIds.length} bank entries available. Each attempt shuffles a focused subset.</p>
            <div class="chips" style="margin:10px 0">
              <span class="chip">${test.questionIds.length} available</span>
              ${latest ? `<span class="chip ${latest.score >= PASS_MARK ? 'done' : 'warn'}">Last ${latest.score}%</span>` : `<span class="chip muted">No score yet</span>`}
            </div>
            <button class="btn" onclick="startTopicTest('${test.id}')">Start grouped topic test</button>
          </div>
        `;
      }).join('')}
    </div>

    <div class="card" style="margin-top:18px">
      <div class="kicker">Single-topic drills</div>
      <h3 style="margin-top:0">Practice one UKFR topic at a time</h3>
      <div class="mode-grid">
        ${DATA.studyModes.topicDrills.map(test => {
          const latest = state.topicScores[test.id]?.slice(-1)[0];
          return `
            <div class="mode-card">
              <h3>${escapeHtml(test.title)}</h3>
              <p class="small muted">${test.questionIds.length} questions tagged to this topic.</p>
              <div class="chips" style="margin:10px 0">
                <span class="chip">${test.questionIds.length} tagged</span>
                ${latest ? `<span class="chip ${latest.score >= PASS_MARK ? 'done' : 'warn'}">Last ${latest.score}%</span>` : `<span class="chip muted">Fresh topic</span>`}
              </div>
              <button class="btn alt" onclick="startTopicDrill('${test.id}')">Start topic drill</button>
            </div>
          `;
        }).join('')}
      </div>
    </div>
    <div id="topicQuizArea" style="margin-top:18px"></div>
  `;
}

function renderWeak() {
  const weak = getWeakTags(10);
  byId('weak').innerHTML = `
    <div class="kicker">Weak-area retry</div>
    <h2 style="margin:0 0 8px">Target the mistakes you actually make</h2>
    <p class="muted">This mode uses your answer history. It prioritises tags with the highest wrong-answer ratio and can also rebuild a drill from your specifically missed questions.</p>
    ${weak.length ? `<div class="chips" style="margin:12px 0 16px">${weak.map(w => `<span class="chip warn">${escapeHtml(w.tag)} · ${Math.round(w.ratio*100)}% wrong</span>`).join('')}</div>` : ''}
    <div class="mode-grid">
      <div class="mode-card">
        <h3>Retry 10 questions</h3>
        <p class="small muted">Fast repair round for one short sitting.</p>
        <button class="btn" onclick="startWeakRetry(10)">Start 10Q retry</button>
      </div>
      <div class="mode-card">
        <h3>Retry 20 questions</h3>
        <p class="small muted">Better if you already have a clear weak cluster.</p>
        <button class="btn" onclick="startWeakRetry(20)">Start 20Q retry</button>
      </div>
      <div class="mode-card">
        <h3>Retry missed questions</h3>
        <p class="small muted">Build a paper from the questions you personally got wrong most often.</p>
        <button class="btn alt" onclick="startMissedOnlyRetry(20)">Start missed-only drill</button>
      </div>
    </div>
    <div id="weakQuizArea" style="margin-top:18px"></div>
  `;
}

function renderMock() {
  byId('mock').innerHTML = `
    <div class="kicker">Mock mode</div>
    <h2 style="margin:0 0 8px">Mixed-paper practice</h2>
    <p class="muted">Use this for exam-style stamina. You can run random mixed papers or launch one of the curated balanced mocks.</p>
    <div class="mock-controls">
      <select id="mockPreset">
        ${DATA.studyModes.mockPresets.map(p => `<option value="${p.count}">${escapeHtml(p.title)}</option>`).join('')}
      </select>
      <button class="btn warn" onclick="startMock()">Start random mock</button>
      <button class="btn alt" onclick="renderMockHistory()">Refresh history</button>
    </div>
    <div class="mode-grid" style="margin:12px 0 18px">
      ${DATA.studyModes.curatedMocks.map(mock => `
        <div class="mode-card">
          <h3>${escapeHtml(mock.title)}</h3>
          <p class="small muted">${mock.questionIds.length} pre-balanced questions covering the full CeMAP 1 / UKFR spread.</p>
          <button class="btn alt" onclick="startCuratedMock('${mock.id}')">Launch curated mock</button>
        </div>
      `).join('')}
    </div>
    <div id="mockQuizArea"></div>
    <div id="mockHistory" style="margin-top:18px"></div>
  `;
  renderMockHistory();
}

function renderMockHistory() {
  const wrap = byId('mockHistory');
  const rows = [...state.mockHistory].reverse();
  wrap.innerHTML = rows.length ? `
    <div class="card">
      <h3>Mock history</h3>
      <table class="compare-table">
        <thead><tr><th>Attempt</th><th>Score</th><th>Correct</th><th>When</th></tr></thead>
        <tbody>${rows.map(r => `<tr><td>${escapeHtml(r.title)}</td><td>${r.score}%</td><td>${r.correct}/${r.total}</td><td>${new Date(r.at).toLocaleString()}</td></tr>`).join('')}</tbody>
      </table>
    </div>
  ` : '<div class="empty">No mock attempts yet.</div>';
}

function getFrameworkForQuestion(q, meta) {
  const tags = q.tags || [];
  for (const tag of tags) {
    if (FRAMEWORK_BY_TAG[tag]) return FRAMEWORK_BY_TAG[tag];
  }
  if (meta?.type === 'daily' && meta.day) {
    return getDay(meta.day)?.framework || FRAMEWORK_BY_TAG.mixed;
  }
  return FRAMEWORK_BY_TAG.mixed;
}

function getQuestionExplanationHtml(q, meta) {
  const framework = getFrameworkForQuestion(q, meta);
  const tagPills = (q.tags || []).map(tag => `<span class="chip muted">${escapeHtml(DATA.tagLabels[tag] || tag)}</span>`).join('');
  return `
    <div class="explanation-stack">
      <div><strong>Why this is right:</strong> ${escapeHtml(q.ex)}</div>
      <div class="framework-link"><strong>Framework link:</strong> ${escapeHtml(framework)}</div>
      ${tagPills ? `<div class="chips" style="margin-top:8px">${tagPills}</div>` : ''}
      <div class="small muted" style="margin-top:8px">Source: ${escapeHtml(q.sourceLabel || q.sourceTag || 'source')}</div>
    </div>
  `;
}

function renderQuiz(containerId, questions, meta) {
  lastQuizContext = { containerId, questions, meta };
  const container = byId(containerId);
  let answered = 0;
  let correct = 0;
  const answers = {};
  const wrongQuestions = [];

  container.innerHTML = `
    <div class="score-box" style="margin-bottom:14px">
      <div class="inline-row" style="justify-content:space-between">
        <div>
          <strong>${escapeHtml(meta.title)}</strong>
          <div class="small muted">${escapeHtml(meta.subtitle || '')}</div>
        </div>
        <div class="chips">
          <span class="chip" id="${containerId}-progress">0 / ${questions.length} answered</span>
          <span class="chip muted" id="${containerId}-score">0% correct</span>
        </div>
      </div>
    </div>
    ${questions.map((q, idx) => `
      <div class="quiz-q">
        <div class="inline-row" style="justify-content:space-between;margin-bottom:8px">
          <div class="small muted">${escapeHtml((q.tags || []).join(' · '))}</div>
          <div class="chips"><span class="chip muted">${escapeHtml(q.sourceLabel || q.sourceTag || 'source')}</span></div>
        </div>
        <h4>Q${idx + 1}. ${escapeHtml(q.q)}</h4>
        <div class="opt-list">
          ${q.opts.map((opt, optIdx) => `<button class="opt" data-q="${idx}" data-opt="${optIdx}">${String.fromCharCode(65 + optIdx)}. ${escapeHtml(opt)}</button>`).join('')}
        </div>
        <div class="expl" id="${containerId}-expl-${idx}">${getQuestionExplanationHtml(q, meta)}</div>
      </div>
    `).join('')}
    <div class="inline-row">
      <button class="btn good" id="${containerId}-finish" disabled>Finish test</button>
      <button class="btn alt" id="${containerId}-restart">Restart this set</button>
    </div>
    <div id="${containerId}-result" style="margin-top:14px"></div>
  `;

  const finishBtn = byId(`${containerId}-finish`);
  const restartBtn = byId(`${containerId}-restart`);
  container.querySelectorAll('.opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const qIndex = Number(btn.dataset.q);
      const optIndex = Number(btn.dataset.opt);
      if (answers[qIndex] != null) return;
      const q = questions[qIndex];
      answers[qIndex] = optIndex;
      answered += 1;
      const wasCorrect = optIndex === q.a;
      if (wasCorrect) {
        correct += 1;
      } else {
        wrongQuestions.push(q);
      }
      recordQuestionAttempt(q.id, wasCorrect);

      container.querySelectorAll(`.opt[data-q="${qIndex}"]`).forEach(optionBtn => {
        optionBtn.classList.add('locked');
        const o = Number(optionBtn.dataset.opt);
        if (o === q.a) optionBtn.classList.add('correct');
        if (o === optIndex && o !== q.a) optionBtn.classList.add('wrong');
      });
      byId(`${containerId}-expl-${qIndex}`).classList.add('on');
      byId(`${containerId}-progress`).textContent = `${answered} / ${questions.length} answered`;
      byId(`${containerId}-score`).textContent = `${Math.round(correct / answered * 100)}% correct`;
      if (answered === questions.length) finishBtn.disabled = false;
      saveState();
    });
  });

  finishBtn.addEventListener('click', () => {
    const score = Math.round(correct / questions.length * 100);
    handleQuizComplete(meta, questions, score, correct);
    byId(`${containerId}-result`).innerHTML = `
      <div class="score-box">
        <h3 style="margin-top:0">Finished · ${score}%</h3>
        <p class="small">${correct}/${questions.length} correct. Pass mark target in this app: ${PASS_MARK}%.</p>
        <div class="chips" style="margin:10px 0 14px">
          <span class="chip ${score >= PASS_MARK ? 'done' : 'warn'}">${score >= PASS_MARK ? 'Pass-level round' : 'Needs repair'}</span>
          <span class="chip muted">${wrongQuestions.length} wrong to revisit</span>
        </div>
        <div class="inline-row">
          ${wrongQuestions.length ? `<button class="btn warn" onclick="retryWrongAnswers('${containerId}')">Retry wrong answers</button>` : ''}
          <button class="btn alt" onclick="reviewFrameworksForLastQuiz('${containerId}')">Show framework recap</button>
        </div>
      </div>
    `;
    lastQuizContext = { containerId, questions, meta, wrongQuestions };
    renderAll();
    if (containerId === 'dailyQuizArea') {
      byId(`${containerId}-result`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  restartBtn.addEventListener('click', () => {
    renderQuiz(containerId, questions, meta);
  });
}

function recordQuestionAttempt(questionId, wasCorrect) {
  const stat = state.questionStats[questionId] || { attempts: 0, correct: 0 };
  stat.attempts += 1;
  if (wasCorrect) stat.correct += 1;
  state.questionStats[questionId] = stat;
}

function handleQuizComplete(meta, questions, score, correct) {
  if (meta.type === 'daily') {
    state.dayScores[meta.day] = score;
    if (score >= PASS_MARK) state.completedDays[meta.day] = true;
  }
  if (meta.type === 'topic') {
    state.topicScores[meta.id] = state.topicScores[meta.id] || [];
    state.topicScores[meta.id].push({ score, at: Date.now() });
  }
  if (meta.type === 'mock') {
    state.mockHistory.push({ title: meta.title, score, correct, total: questions.length, at: Date.now() });
  }
  saveState();
}

function retryWrongAnswers(containerId) {
  if (!lastQuizContext || lastQuizContext.containerId !== containerId) return;
  const wrong = lastQuizContext.wrongQuestions || [];
  if (!wrong.length) return;
  renderQuiz(containerId, shuffle(wrong), {
    ...lastQuizContext.meta,
    title: `${lastQuizContext.meta.title} · retry wrong answers`,
    subtitle: 'Repair round built only from the questions missed in the previous attempt'
  });
}

function reviewFrameworksForLastQuiz(containerId) {
  if (!lastQuizContext || lastQuizContext.containerId !== containerId) return;
  const result = byId(`${containerId}-result`);
  const questions = lastQuizContext.questions || [];
  const frameworks = Array.from(new Set(questions.map(q => getFrameworkForQuestion(q, lastQuizContext.meta))));
  result.innerHTML += `
    <div class="card" style="margin-top:12px">
      <div class="kicker">Framework recap</div>
      <h3 style="margin-top:0">What thinking patterns this quiz was testing</h3>
      <ul class="list-clean small">${frameworks.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
    </div>
  `;
}

function startDailyQuiz(dayNo) {
  const day = getDay(dayNo);
  const qs = sampleQuestions(day.testQuestionIds);
  renderQuiz('dailyQuizArea', qs, {
    type: 'daily',
    day: dayNo,
    title: `Day ${day.day} end-of-day test`,
    subtitle: `${day.title} · focused recall and exam-trap checking`
  });
}

function startTopicTest(id) {
  const test = DATA.studyModes.topicTests.find(t => t.id === id);
  const count = Math.min(20, test.questionIds.length);
  renderQuiz('topicQuizArea', sampleQuestions(test.questionIds, count), {
    type: 'topic',
    id,
    title: test.title,
    subtitle: `${count} randomised questions from the grouped topic bank`
  });
}

function startTopicDrill(id) {
  const test = DATA.studyModes.topicDrills.find(t => t.id === id);
  const count = Math.min(15, test.questionIds.length);
  renderQuiz('topicQuizArea', sampleQuestions(test.questionIds, count), {
    type: 'topic',
    id,
    title: test.title,
    subtitle: `${count} question single-topic drill`
  });
}

function startWeakRetry(count) {
  const weakTags = getWeakTags(6).map(w => w.tag);
  let pool = DATA.questionBank.filter(q => (q.tags || []).some(tag => weakTags.includes(tag)));
  if (!pool.length) {
    pool = DATA.questionBank.filter(q => ['regulation','consumer-protection','tax','products'].some(tag => (q.tags || []).includes(tag)));
  }
  renderQuiz('weakQuizArea', shuffle(pool).slice(0, Math.min(count, pool.length)), {
    type: 'weak',
    title: `Weak-area retry · ${Math.min(count, pool.length)} questions`,
    subtitle: weakTags.length ? `Built from your weakest tags: ${weakTags.join(', ')}` : 'Fallback mixed high-yield set because no weakness data exists yet'
  });
}

function startMissedOnlyRetry(count) {
  const pool = DATA.questionBank
    .map(q => ({ q, stat: state.questionStats[q.id] || { attempts: 0, correct: 0 } }))
    .filter(({ stat }) => stat.attempts > stat.correct)
    .sort((a, b) => ((b.stat.attempts - b.stat.correct) - (a.stat.attempts - a.stat.correct)) || (b.stat.attempts - a.stat.attempts))
    .map(({ q }) => q);

  const fallback = pool.length
    ? pool
    : DATA.questionBank.filter(q => ['regulation','consumer-protection','tax','products'].some(tag => (q.tags || []).includes(tag)));

  renderQuiz('weakQuizArea', shuffle(fallback).slice(0, Math.min(count, fallback.length)), {
    type: 'weak',
    title: `Missed-question retry · ${Math.min(count, fallback.length)} questions`,
    subtitle: pool.length ? 'Built from questions you have previously missed' : 'No missed-question history yet, so this falls back to a high-yield mixed set'
  });
}

function startMock() {
  const count = Number(byId('mockPreset').value);
  renderQuiz('mockQuizArea', shuffle(DATA.questionBank).slice(0, Math.min(count, DATA.questionBank.length)), {
    type: 'mock',
    title: `${count}-question mixed mock`,
    subtitle: 'Timed in spirit — use it as a full-paper rehearsal and review the explanations after finishing'
  });
}

function startCuratedMock(id) {
  const mock = DATA.studyModes.curatedMocks.find(m => m.id === id);
  renderQuiz('mockQuizArea', sampleQuestions(mock.questionIds, mock.questionIds.length), {
    type: 'mock',
    title: mock.title,
    subtitle: 'Curated balanced mock covering the main CeMAP 1 / UKFR topic spread'
  });
}

function toggleDayDone(dayNo) {
  state.completedDays[dayNo] = !state.completedDays[dayNo];
  saveState();
  renderAll();
}

function openDay(dayNo) {
  currentDay = Number(dayNo);
  setActiveTab('daily', { scrollToDay: true });
}

function jumpRelativeDay(delta) {
  const target = Math.min(DATA.plan.length, Math.max(1, currentDay + delta));
  openDay(target);
}

function jumpToSelectedDay(dayNo) {
  openDay(Number(dayNo));
}

function scrollToDailyQuiz() {
  byId('daily-quiz-start')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setActiveTab(tab, options = {}) {
  activeTab = tab;
  document.querySelectorAll('.tabbtn').forEach(btn => {
    const on = btn.dataset.tab === tab;
    btn.classList.toggle('on', on);
    btn.classList.toggle('alt', !on);
  });
  document.querySelectorAll('.section').forEach(sec => sec.classList.toggle('on', sec.id === tab));
  updateHash();
  renderAll();
  if (tab === 'daily' || options.scrollToDay) jumpToDailyTop();
}

function renderAll() {
  renderDayList();
  renderDashboard();
  renderDaily();
  renderTopics();
  renderWeak();
  renderMock();
  document.querySelectorAll('.section').forEach(sec => sec.classList.toggle('on', sec.id === activeTab));
  updateHash();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

document.querySelectorAll('.tabbtn').forEach(btn => {
  btn.addEventListener('click', () => setActiveTab(btn.dataset.tab));
});

window.addEventListener('hashchange', () => {
  const hashDay = getInitialDayFromHash();
  const hashTab = getInitialTabFromHash();
  currentDay = hashDay;
  activeTab = hashTab;
  renderAll();
});

renderHero();
renderAll();
if (activeTab === 'daily') jumpToDailyTop();
window.openDay = openDay;
window.jumpRelativeDay = jumpRelativeDay;
window.jumpToSelectedDay = jumpToSelectedDay;
window.scrollToDailyQuiz = scrollToDailyQuiz;
window.startDailyQuiz = startDailyQuiz;
window.startTopicTest = startTopicTest;
window.startTopicDrill = startTopicDrill;
window.startWeakRetry = startWeakRetry;
window.startMissedOnlyRetry = startMissedOnlyRetry;
window.startMock = startMock;
window.startCuratedMock = startCuratedMock;
window.toggleDayDone = toggleDayDone;
window.renderMockHistory = renderMockHistory;
window.retryWrongAnswers = retryWrongAnswers;
window.reviewFrameworksForLastQuiz = reviewFrameworksForLastQuiz;
