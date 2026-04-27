window.CEMAP1_DATA = {
  "meta": {
    "title": "CeMAP 1 Revision Lab",
    "subtitle": "Standalone CeMAP 1 / UKFR study app grounded in revision-guide mock style, textbook test-your-knowledge themes, and existing extracted UKFR materials.",
    "days": 30,
    "questionCount": 180,
    "sourceBreakdown": {
      "revisionGuideDerived": 134,
      "textbookDerived": 46
    },
    "sources": [
      "CeMAP_1_Revision_Guide_November_2024.pdf",
      "Textbook/UKFR 2024-25 Online Full.pdf",
      "_txt/cemap1.txt",
      "_txt/ukfr_drilldown.txt",
      "app/study_data.json",
      "app/qdata.json"
    ],
    "notes": [
      "CeMAP 1 / UKFR only. This app deliberately avoids post-restructure MRT logic.",
      "Question bank combines extracted source MCQs, adapted textbook quick-check facts, and grounded revision-guide style paraphrases.",
      "Every question carries a source label so learners can see whether it came from revision-guide material, textbook-style quick checks, or adapted extracted content."
    ]
  },
  "plan": [
    {
      "day": 1,
      "week": 1,
      "title": "Industry map and institutions",
      "theme": "industry",
      "focusTags": [
        "industry"
      ],
      "hours": "75-90 mins",
      "summary": "Start with how the UK financial-services industry moves money, the role of institutions, and the Bank of England backdrop.",
      "learn": [
        "Learn the industry as a flow of funds from savers to borrowers and wider users of capital.",
        "Know the difference between retail institutions, wholesale markets, mutuals and proprietary firms.",
        "Keep monetary policy separate from conduct regulation."
      ],
      "framework": "FLOW = Funds, Lenders, Official policy, Wider economy.",
      "trapNotes": [
        "Do not mix FCA/PRA roles into Bank of England questions.",
        "Mutual vs proprietary is usually an ownership question first."
      ],
      "table": {
        "headers": [
          "Compare",
          "Remember"
        ],
        "rows": [
          [
            "Mutual",
            "Owned by members"
          ],
          [
            "Proprietary",
            "Owned by shareholders"
          ],
          [
            "BoE / MPC",
            "Monetary-policy backdrop"
          ]
        ]
      },
      "testQuestionIds": [
        "src-001",
        "src-002",
        "src-003",
        "src-004",
        "src-005",
        "ext-001",
        "ext-002",
        "ext-003",
        "ext-004",
        "ext-006"
      ],
      "frameworkDetails": {
        "name": "FLOW",
        "purpose": "Maps how money moves through the UK financial system and reminds you where the Bank of England/MPC sits in the backdrop.",
        "components": [
          [
            "F = Funds",
            "Start with the money itself: surplus cash from savers and investors needs somewhere to go."
          ],
          [
            "L = Lenders / links",
            "Banks, building societies and markets channel those funds onwards."
          ],
          [
            "O = Official policy",
            "The Bank of England / MPC sets the monetary-policy backdrop, especially Bank Rate."
          ],
          [
            "W = Wider economy",
            "The end purpose is funding households, firms and wider economic activity."
          ]
        ],
        "examUse": "Use FLOW when a question asks what the industry does, what intermediation means, or where BoE/MPC fits.",
        "trap": "Do not turn Official policy into conduct regulation. BoE/MPC is not the FCA, PRA, FOS or FSCS."
      },
      "deepDive": [
        "Learn the industry as a flow of funds from savers to borrowers and wider users of capital.",
        "Know the difference between retail institutions, wholesale markets, mutuals and proprietary firms.",
        "Keep monetary policy separate from conduct regulation.",
        "Think of the industry as a routing system: surplus money moves from savers and investors to households, firms and governments that need funding.",
        "When CeMAP asks about institutions, answer the ownership or market-function point first before adding detail.",
        "Keep macro policy separate from supervision: the Bank of England and MPC shape the backdrop, while conduct/prudential bodies supervise firms.",
        "Map the flow: savers → institutions/markets → borrowers and users of capital. This makes institution questions easier because you answer from role, not from memorised buzzwords.",
        "When the question names mutuals, proprietary firms, retail banks or wholesale players, ownership and customer base usually come before fine detail."
      ],
      "mustKnow": [
        "FLOW = Funds, Lenders, Official policy, Wider economy.",
        "Mutual = owned by members; proprietary = owned by shareholders.",
        "Money market = short-term liquidity; capital market = longer-term securities and funding.",
        "Monetary policy is linked to Bank Rate / MPC; fiscal policy is linked to tax and government spending.",
        "Bank of England / MPC = macro backdrop, not day-to-day conduct supervision."
      ],
      "commonMistakes": [
        "Do not mix FCA/PRA roles into Bank of England questions.",
        "Mutual vs proprietary is usually an ownership question first.",
        "Confusing the Bank of England with the FCA or PRA.",
        "Treating every financial institution as if it performs the same role.",
        "Choosing a true statement about markets that does not answer the exact institution/body being tested.",
        "Do not answer “regulator” when the question is actually about central-banking or market function."
      ],
      "examSprint": [
        "FLOW = Funds, Lenders, Official policy, Wider economy.",
        "Mutual = owned by members; proprietary = owned by shareholders.",
        "Do not mix FCA/PRA roles into Bank of England questions."
      ],
      "jumpTargets": {
        "prevDay": null,
        "nextDay": 2,
        "focusTags": [
          "industry"
        ]
      }
    },
    {
      "day": 2,
      "week": 1,
      "title": "Markets, inflation and policy context",
      "theme": "industry",
      "focusTags": [
        "industry"
      ],
      "hours": "75 mins",
      "summary": "Build the exam map for money markets, capital markets, inflation and fiscal vs monetary policy.",
      "learn": [
        "Money markets are short-term; capital markets are linked with longer-term funding.",
        "Inflation matters because it affects the real value of money.",
        "Fiscal policy and monetary policy are different levers."
      ],
      "framework": "M-I-P = Markets, Inflation, Policy.",
      "trapNotes": [
        "Do not call fiscal policy a Bank of England function.",
        "Do not treat all securities as money-market instruments."
      ],
      "table": {
        "headers": [
          "Concept",
          "Memory cue"
        ],
        "rows": [
          [
            "Money market",
            "Short-term liquidity"
          ],
          [
            "Capital market",
            "Longer-term securities"
          ],
          [
            "Fiscal policy",
            "Tax + spending"
          ],
          [
            "Monetary policy",
            "Rates + money conditions"
          ]
        ]
      },
      "testQuestionIds": [
        "src-006",
        "src-007",
        "ext-008",
        "ext-009",
        "ext-010",
        "ext-011",
        "ext-012"
      ],
      "frameworkDetails": {
        "name": "M-I-P",
        "purpose": "Separates market type, inflation effect and policy lever before you look at fine detail.",
        "components": [
          [
            "M = Markets",
            "Ask whether the stem is about money markets or capital markets."
          ],
          [
            "I = Inflation",
            "Check whether the issue is really purchasing power / real value."
          ],
          [
            "P = Policy",
            "Decide whether the policy being tested is fiscal or monetary."
          ]
        ],
        "examUse": "Use this on short-vs-long term market questions and inflation/policy stems.",
        "trap": "Do not call fiscal policy a Bank of England function, and do not dump all securities into the money market."
      },
      "deepDive": [
        "Money markets are short-term; capital markets are linked with longer-term funding.",
        "Inflation matters because it affects the real value of money.",
        "Fiscal policy and monetary policy are different levers.",
        "Think of the industry as a routing system: surplus money moves from savers and investors to households, firms and governments that need funding.",
        "When CeMAP asks about institutions, answer the ownership or market-function point first before adding detail.",
        "Keep macro policy separate from supervision: the Bank of England and MPC shape the backdrop, while conduct/prudential bodies supervise firms.",
        "Inflation questions are usually about purchasing power. A nominal return can still be a poor real return if inflation is high.",
        "Money-market vs capital-market confusion is often solved by asking whether the instrument is mainly short-term liquidity or longer-term funding."
      ],
      "mustKnow": [
        "M-I-P = Markets, Inflation, Policy.",
        "Mutual = owned by members; proprietary = owned by shareholders.",
        "Money market = short-term liquidity; capital market = longer-term securities and funding.",
        "Monetary policy is linked to Bank Rate / MPC; fiscal policy is linked to tax and government spending.",
        "Fiscal policy = government tax/spending; monetary policy = rates / money conditions."
      ],
      "commonMistakes": [
        "Do not call fiscal policy a Bank of England function.",
        "Do not treat all securities as money-market instruments.",
        "Confusing the Bank of England with the FCA or PRA.",
        "Treating every financial institution as if it performs the same role.",
        "Choosing a true statement about markets that does not answer the exact institution/body being tested.",
        "Do not treat “policy” as automatically meaning the Bank of England."
      ],
      "examSprint": [
        "M-I-P = Markets, Inflation, Policy.",
        "Mutual = owned by members; proprietary = owned by shareholders.",
        "Do not call fiscal policy a Bank of England function."
      ],
      "jumpTargets": {
        "prevDay": 1,
        "nextDay": 3,
        "focusTags": [
          "industry"
        ]
      }
    },
    {
      "day": 3,
      "week": 1,
      "title": "Residence, domicile and tax foundations",
      "theme": "tax",
      "focusTags": [
        "tax"
      ],
      "hours": "90 mins",
      "summary": "Today is about separating the core tax families and understanding why residence and domicile appear in CeMAP 1.",
      "learn": [
        "Residence and domicile are tax-status concepts.",
        "Sort taxes by what they apply to: income, gains, estates and transactions.",
        "ISA questions are usually wrapper questions, not risk questions."
      ],
      "framework": "I-G-E-T = Income, Gains, Estates, Transactions.",
      "trapNotes": [
        "A wrapper is not an asset class.",
        "Residence questions are not conduct-regulation questions."
      ],
      "table": {
        "headers": [
          "Tax",
          "Main trigger"
        ],
        "rows": [
          [
            "Income Tax",
            "Income received"
          ],
          [
            "CGT",
            "Disposal gain"
          ],
          [
            "IHT",
            "Estate / transfer"
          ],
          [
            "SDLT",
            "Property purchase"
          ]
        ]
      },
      "testQuestionIds": [
        "src-031",
        "ext-013",
        "ext-014",
        "ext-015",
        "ext-016",
        "ext-017",
        "ext-018"
      ],
      "frameworkDetails": {
        "name": "I-G-E-T",
        "purpose": "Classifies the main UKFR tax families by trigger so you pick the right tax before worrying about numbers.",
        "components": [
          [
            "I = Income",
            "Tax on income received."
          ],
          [
            "G = Gains",
            "CGT is triggered by a disposal that creates a gain."
          ],
          [
            "E = Estates",
            "IHT is the estate/transfer-on-death bucket."
          ],
          [
            "T = Transactions",
            "SDLT is tied to the property transaction itself."
          ]
        ],
        "examUse": "Use I‑G‑E‑T when CeMAP gives you a tax scenario and you need to identify the tax family quickly.",
        "trap": "A wrapper such as an ISA affects tax treatment; it is not a tax family or asset class."
      },
      "deepDive": [
        "Residence and domicile are tax-status concepts.",
        "Sort taxes by what they apply to: income, gains, estates and transactions.",
        "ISA questions are usually wrapper questions, not risk questions.",
        "Most CeMAP tax questions are won by classification before calculation: ask whether the stem is about income, gains, estates or transactions.",
        "Wrappers such as ISAs change tax treatment, but they do not change the underlying product risk by themselves.",
        "Residence, domicile, allowances and nil-rate concepts appear because CeMAP expects you to recognise the tax trigger before the detailed rule.",
        "Residence and domicile are status labels that affect tax treatment; they are not product features or conduct terms.",
        "The cleanest way to revise this day is by sorting taxes into events: earning, disposing, transferring on death, or buying property."
      ],
      "mustKnow": [
        "I-G-E-T = Income, Gains, Estates, Transactions.",
        "Income Tax = income received; CGT = disposal gains; IHT = estate/transfer tax; SDLT = property transaction tax.",
        "Personal allowance, CGT exempt amount, IHT nil-rate band and SDLT thresholds are classic factual recall areas.",
        "Dividend and savings-income questions are often separated on purpose — do not blend them.",
        "ISA appears as a wrapper concept even when the day is mainly about tax foundations."
      ],
      "commonMistakes": [
        "A wrapper is not an asset class.",
        "Residence questions are not conduct-regulation questions.",
        "Picking a familiar tax label without checking what event triggers it.",
        "Assuming a tax wrapper means low risk or guaranteed growth.",
        "Rushing number-based questions and importing a figure from the wrong tax family.",
        "Do not let wrapper language drag you away from the underlying tax question."
      ],
      "examSprint": [
        "I-G-E-T = Income, Gains, Estates, Transactions.",
        "Income Tax = income received; CGT = disposal gains; IHT = estate/transfer tax; SDLT = property transaction tax.",
        "A wrapper is not an asset class."
      ],
      "jumpTargets": {
        "prevDay": 2,
        "nextDay": 4,
        "focusTags": [
          "tax"
        ]
      }
    },
    {
      "day": 4,
      "week": 1,
      "title": "Income tax, allowances and tax ordering",
      "theme": "tax",
      "focusTags": [
        "tax"
      ],
      "hours": "90 mins",
      "summary": "Focus on the factual side of UKFR tax revision: personal allowance, income categories and the logic of the tax system.",
      "learn": [
        "Know the role of the personal allowance.",
        "Keep earned income, savings income and dividend income separate.",
        "CeMAP likes number-based trap questions."
      ],
      "framework": "ALLOWANCE → TYPE OF INCOME → APPLY THE RIGHT RULE.",
      "trapNotes": [
        "Do not confuse dividend points with savings-interest points.",
        "Slow down whenever figures appear."
      ],
      "table": {
        "headers": [
          "Area",
          "Memory cue"
        ],
        "rows": [
          [
            "Personal allowance",
            "Income-tax starting point"
          ],
          [
            "Savings interest",
            "Separate treatment"
          ],
          [
            "Dividends",
            "Own allowance/treatment"
          ]
        ]
      },
      "testQuestionIds": [
        "qdt-008",
        "ext-021",
        "ext-022",
        "src-032",
        "src-033",
        "src-034"
      ],
      "frameworkDetails": {
        "name": "ALLOWANCE → TYPE OF INCOME → APPLY THE RIGHT RULE",
        "purpose": "Stops you from jumping straight to a figure before identifying what kind of income is being taxed.",
        "components": [
          [
            "Allowance",
            "Start with the personal allowance or other basic allowance clue."
          ],
          [
            "Type of income",
            "Separate earned income, savings income and dividend income."
          ],
          [
            "Apply the right rule",
            "Only then use the correct rate / treatment for that income type."
          ]
        ],
        "examUse": "Use it for income-tax questions where similar-looking figures tempt you to rush.",
        "trap": "Do not import dividend treatment into savings-interest questions just because the numbers look familiar."
      },
      "deepDive": [
        "Know the role of the personal allowance.",
        "Keep earned income, savings income and dividend income separate.",
        "CeMAP likes number-based trap questions.",
        "Most CeMAP tax questions are won by classification before calculation: ask whether the stem is about income, gains, estates or transactions.",
        "Wrappers such as ISAs change tax treatment, but they do not change the underlying product risk by themselves.",
        "Residence, domicile, allowances and nil-rate concepts appear because CeMAP expects you to recognise the tax trigger before the detailed rule.",
        "CeMAP likes tax-ordering questions because candidates often recognise the number but not the category it belongs to.",
        "Train yourself to identify whether the income is earned, savings or dividend income before touching the options."
      ],
      "mustKnow": [
        "ALLOWANCE → TYPE OF INCOME → APPLY THE RIGHT RULE.",
        "Income Tax = income received; CGT = disposal gains; IHT = estate/transfer tax; SDLT = property transaction tax.",
        "Personal allowance, CGT exempt amount, IHT nil-rate band and SDLT thresholds are classic factual recall areas.",
        "Dividend and savings-income questions are often separated on purpose — do not blend them.",
        "Personal allowance is the standard starting point for income-tax thinking."
      ],
      "commonMistakes": [
        "Do not confuse dividend points with savings-interest points.",
        "Slow down whenever figures appear.",
        "Picking a familiar tax label without checking what event triggers it.",
        "Assuming a tax wrapper means low risk or guaranteed growth.",
        "Rushing number-based questions and importing a figure from the wrong tax family.",
        "Do not import dividend rules into ordinary savings-interest questions."
      ],
      "examSprint": [
        "ALLOWANCE → TYPE OF INCOME → APPLY THE RIGHT RULE.",
        "Income Tax = income received; CGT = disposal gains; IHT = estate/transfer tax; SDLT = property transaction tax.",
        "Do not confuse dividend points with savings-interest points."
      ],
      "jumpTargets": {
        "prevDay": 3,
        "nextDay": 5,
        "focusTags": [
          "tax"
        ]
      }
    },
    {
      "day": 5,
      "week": 1,
      "title": "CGT, IHT, SDLT and corporation tax",
      "theme": "tax",
      "focusTags": [
        "tax"
      ],
      "hours": "75-90 mins",
      "summary": "Cover the rest of the factual tax set: gains, estates, transaction taxes and company-profit taxation.",
      "learn": [
        "CGT is about chargeable gains on disposal.",
        "IHT is the estate/transfer tax topic.",
        "SDLT is a property transaction tax; corporation tax is about company profits."
      ],
      "framework": "GAIN → ESTATE → TRANSACTION → COMPANY.",
      "trapNotes": [
        "IHT is not the same as probate.",
        "SDLT is not a tax on income."
      ],
      "table": {
        "headers": [
          "Tax",
          "Key link"
        ],
        "rows": [
          [
            "CGT",
            "Disposal gain"
          ],
          [
            "IHT",
            "Estate / transfer"
          ],
          [
            "SDLT",
            "Property purchase"
          ],
          [
            "Corporation Tax",
            "Company profits"
          ]
        ]
      },
      "testQuestionIds": [
        "qdt-009",
        "qdt-010",
        "qdt-011",
        "ext-023",
        "ext-024",
        "src-048",
        "src-049"
      ],
      "frameworkDetails": {
        "name": "GAIN → ESTATE → TRANSACTION → COMPANY",
        "purpose": "Creates a one-glance trigger map for the remaining core taxes.",
        "components": [
          [
            "Gain",
            "Think CGT on disposal gains."
          ],
          [
            "Estate",
            "Think IHT on death-related transfers / estates."
          ],
          [
            "Transaction",
            "Think SDLT on the purchase transaction."
          ],
          [
            "Company",
            "Think Corporation Tax on company profits."
          ]
        ],
        "examUse": "Use it when the exam mixes CGT, IHT, SDLT and Corporation Tax in one set.",
        "trap": "Do not treat SDLT as a general ownership tax or confuse probate/estate administration with IHT."
      },
      "deepDive": [
        "CGT is about chargeable gains on disposal.",
        "IHT is the estate/transfer tax topic.",
        "SDLT is a property transaction tax; corporation tax is about company profits.",
        "Most CeMAP tax questions are won by classification before calculation: ask whether the stem is about income, gains, estates or transactions.",
        "Wrappers such as ISAs change tax treatment, but they do not change the underlying product risk by themselves.",
        "Residence, domicile, allowances and nil-rate concepts appear because CeMAP expects you to recognise the tax trigger before the detailed rule.",
        "This day is best revised as a trigger map: disposal = CGT, estate transfer = IHT, property purchase = SDLT, company profit = corporation tax.",
        "If a question feels too easy, check whether it is trying to lure you into confusing probate/estate administration with IHT."
      ],
      "mustKnow": [
        "GAIN → ESTATE → TRANSACTION → COMPANY.",
        "Income Tax = income received; CGT = disposal gains; IHT = estate/transfer tax; SDLT = property transaction tax.",
        "Personal allowance, CGT exempt amount, IHT nil-rate band and SDLT thresholds are classic factual recall areas.",
        "Dividend and savings-income questions are often separated on purpose — do not blend them.",
        "Corporation tax belongs to company profits, not personal income."
      ],
      "commonMistakes": [
        "IHT is not the same as probate.",
        "SDLT is not a tax on income.",
        "Picking a familiar tax label without checking what event triggers it.",
        "Assuming a tax wrapper means low risk or guaranteed growth.",
        "Rushing number-based questions and importing a figure from the wrong tax family.",
        "Do not treat SDLT as a tax on ownership in general; it is tied to the transaction."
      ],
      "examSprint": [
        "GAIN → ESTATE → TRANSACTION → COMPANY.",
        "Income Tax = income received; CGT = disposal gains; IHT = estate/transfer tax; SDLT = property transaction tax.",
        "IHT is not the same as probate."
      ],
      "jumpTargets": {
        "prevDay": 4,
        "nextDay": 6,
        "focusTags": [
          "tax"
        ]
      }
    },
    {
      "day": 6,
      "week": 1,
      "title": "Cash, bonds, gilts and equities",
      "theme": "products",
      "focusTags": [
        "products"
      ],
      "hours": "90 mins",
      "summary": "Product questions are usually really about purpose, risk and liquidity.",
      "learn": [
        "Cash-like holdings usually mean liquidity and lower volatility.",
        "Gilts and bonds are debt-style investments.",
        "Equities are ownership-linked and more volatile."
      ],
      "framework": "P-R-L = Purpose, Risk, Liquidity.",
      "trapNotes": [
        "A gilt is not a pooled fund.",
        "Equities are not guaranteed."
      ],
      "table": {
        "headers": [
          "Asset",
          "Memory cue"
        ],
        "rows": [
          [
            "Cash",
            "Liquid"
          ],
          [
            "Gilts/Bonds",
            "Debt investment"
          ],
          [
            "Equities",
            "Growth + volatility"
          ]
        ]
      },
      "testQuestionIds": [
        "src-008",
        "src-009",
        "src-010",
        "ext-025",
        "ext-026",
        "ext-027",
        "ext-040",
        "ext-042"
      ],
      "frameworkDetails": {
        "name": "P-R-L",
        "purpose": "Gives you a clean way to compare investments by what they are for, how risky they are, and how easily they can be sold.",
        "components": [
          [
            "P = Purpose",
            "What is the asset mainly used for: cash parking, income, growth, etc.?"
          ],
          [
            "R = Risk",
            "How much capital volatility / issuer risk sits underneath it?"
          ],
          [
            "L = Liquidity",
            "How quickly can it be turned into cash without heavy loss?"
          ]
        ],
        "examUse": "Use P‑R‑L on cash vs bonds vs gilts vs equities comparisons.",
        "trap": "Do not choose “guaranteed” unless the wording truly gives a guarantee."
      },
      "deepDive": [
        "Cash-like holdings usually mean liquidity and lower volatility.",
        "Gilts and bonds are debt-style investments.",
        "Equities are ownership-linked and more volatile.",
        "CeMAP product questions are usually suitability questions in disguise: what need does the product meet, what risk remains, and how liquid is it?",
        "Learn the comparison pairs cold: cash vs equities, term vs whole of life, critical illness vs income protection, buildings vs contents, MPPI vs income protection.",
        "A wrapper, fund structure or repayment method is not the same thing as the underlying asset or protection objective.",
        "Product questions here are mostly contrast questions: liquidity vs growth, debt vs ownership, lower volatility vs higher volatility.",
        "A debt security gives the investor a creditor-style position; an equity gives an ownership-style position."
      ],
      "mustKnow": [
        "P-R-L = Purpose, Risk, Liquidity.",
        "Gilts/bonds are debt investments; equities are ownership-based and more volatile.",
        "Term assurance covers a fixed period; whole-of-life is intended to remain in force for life.",
        "Critical illness tends to be lump sum; income protection is earnings replacement over time.",
        "Cash is usually more liquid; equities usually bring more volatility."
      ],
      "commonMistakes": [
        "A gilt is not a pooled fund.",
        "Equities are not guaranteed.",
        "Treating diversification as the removal of all risk.",
        "Mixing up wrapper, product and asset class in the same answer.",
        "Assuming low starting payments or popular products automatically make them suitable.",
        "Do not choose “guaranteed” unless the wording really supports it."
      ],
      "examSprint": [
        "P-R-L = Purpose, Risk, Liquidity.",
        "Gilts/bonds are debt investments; equities are ownership-based and more volatile.",
        "A gilt is not a pooled fund."
      ],
      "jumpTargets": {
        "prevDay": 5,
        "nextDay": 7,
        "focusTags": [
          "products"
        ]
      }
    },
    {
      "day": 7,
      "week": 1,
      "title": "Collective investments, property and wrappers",
      "theme": "products",
      "focusTags": [
        "products",
        "tax"
      ],
      "hours": "75 mins",
      "summary": "Today is about collective-investment basics, property comparisons and wrapper confusion traps.",
      "learn": [
        "Know the main collective-investment labels: unit trust, OEIC and investment trust.",
        "Property may offer growth and income but is less liquid.",
        "Separate the wrapper from the underlying investment."
      ],
      "framework": "WRAPPER ≠ ASSET.",
      "trapNotes": [
        "Tax-efficient does not mean risk-free.",
        "Diversification reduces risk concentration, not all risk."
      ],
      "table": {
        "headers": [
          "Thing",
          "What it is"
        ],
        "rows": [
          [
            "ISA",
            "Tax wrapper"
          ],
          [
            "Unit trust / OEIC",
            "Open-ended pooled fund structures"
          ],
          [
            "Investment trust",
            "Closed-ended company"
          ],
          [
            "Property",
            "Relatively illiquid asset"
          ]
        ]
      },
      "testQuestionIds": [
        "qdt-012",
        "ext-019",
        "ext-020",
        "ext-028",
        "ext-038",
        "ext-041",
        "ext-086",
        "ext-087",
        "ext-088",
        "src-011"
      ],
      "frameworkDetails": {
        "name": "WRAPPER ≠ ASSET",
        "purpose": "Forces you to separate tax wrapper, fund structure and underlying investment so you do not answer the wrong layer.",
        "components": [
          [
            "Wrapper",
            "ISA and similar labels describe tax treatment."
          ],
          [
            "Structure",
            "A pooled fund tells you how money is organised."
          ],
          [
            "Asset",
            "Property, equities, bonds and cash are the underlying investments."
          ]
        ],
        "examUse": "Use it on ISA, pooled-fund and property questions where CeMAP tests category confusion.",
        "trap": "Tax efficiency does not remove investment risk or automatically make something suitable."
      },
      "deepDive": [
        "Know the main collective-investment labels: unit trust, OEIC and investment trust.",
        "Property may offer growth and income but is less liquid.",
        "Separate the wrapper from the underlying investment.",
        "CeMAP product questions are usually suitability questions in disguise: what need does the product meet, what risk remains, and how liquid is it?",
        "Learn the comparison pairs cold: cash vs equities, term vs whole of life, critical illness vs income protection, buildings vs contents, MPPI vs income protection.",
        "A wrapper, fund structure or repayment method is not the same thing as the underlying asset or protection objective.",
        "Wrappers, pooled funds and asset classes are three different layers; CeMAP often tests whether you can keep them separate under time pressure.",
        "Property can diversify a portfolio, but it still brings valuation and liquidity concerns."
      ],
      "mustKnow": [
        "WRAPPER ≠ ASSET.",
        "Gilts/bonds are debt investments; equities are ownership-based and more volatile.",
        "Term assurance covers a fixed period; whole-of-life is intended to remain in force for life.",
        "Critical illness tends to be lump sum; income protection is earnings replacement over time.",
        "ISA = wrapper; pooled fund = structure; property = asset class."
      ],
      "commonMistakes": [
        "Tax-efficient does not mean risk-free.",
        "Diversification reduces risk concentration, not all risk.",
        "Treating diversification as the removal of all risk.",
        "Mixing up wrapper, product and asset class in the same answer.",
        "Assuming low starting payments or popular products automatically make them suitable.",
        "Do not answer “tax efficient” as if it solved suitability or risk."
      ],
      "examSprint": [
        "WRAPPER ≠ ASSET.",
        "Gilts/bonds are debt investments; equities are ownership-based and more volatile.",
        "Tax-efficient does not mean risk-free."
      ],
      "jumpTargets": {
        "prevDay": 6,
        "nextDay": 8,
        "focusTags": [
          "products",
          "tax"
        ]
      }
    },
    {
      "day": 8,
      "week": 2,
      "title": "Protection basics: life, illness and income",
      "theme": "products",
      "focusTags": [
        "products"
      ],
      "hours": "90 mins",
      "summary": "Learn protection by matching each product to the risk it solves.",
      "learn": [
        "Term assurance mainly solves a fixed-period death risk.",
        "Whole-of-life covers life rather than a set term.",
        "Critical illness and income protection solve different problems."
      ],
      "framework": "D-I-P = Death, Illness, Paycheque.",
      "trapNotes": [
        "Critical illness is not monthly income protection.",
        "Whole of life is not a temporary cover plan."
      ],
      "table": {
        "headers": [
          "Need",
          "Typical product"
        ],
        "rows": [
          [
            "Death over fixed term",
            "Term assurance"
          ],
          [
            "Lifetime cover",
            "Whole of life"
          ],
          [
            "Specified serious illness",
            "Critical illness"
          ],
          [
            "Loss of earnings",
            "Income protection"
          ]
        ]
      },
      "testQuestionIds": [
        "ext-029",
        "ext-030",
        "ext-031",
        "ext-032",
        "qdt-014",
        "src-053",
        "src-054"
      ],
      "frameworkDetails": {
        "name": "D-I-P",
        "purpose": "Matches the protection product to the event being protected against.",
        "components": [
          [
            "D = Death",
            "Life cover / term / whole-of-life sits here."
          ],
          [
            "I = Illness",
            "Critical illness protects against specified serious illness events."
          ],
          [
            "P = Paycheque",
            "Income protection is about earnings replacement if the client cannot work."
          ]
        ],
        "examUse": "Use D‑I‑P when comparing life, critical illness and income protection.",
        "trap": "Do not turn every protection answer into income protection just because “monthly money” sounds useful."
      },
      "deepDive": [
        "Term assurance mainly solves a fixed-period death risk.",
        "Whole-of-life covers life rather than a set term.",
        "Critical illness and income protection solve different problems.",
        "CeMAP product questions are usually suitability questions in disguise: what need does the product meet, what risk remains, and how liquid is it?",
        "Learn the comparison pairs cold: cash vs equities, term vs whole of life, critical illness vs income protection, buildings vs contents, MPPI vs income protection.",
        "A wrapper, fund structure or repayment method is not the same thing as the underlying asset or protection objective.",
        "Protection becomes easier when you start with the risk event: death, specified illness or loss of earnings. Then choose the product.",
        "The exam often rewards precision about the style of payout — fixed term, lifetime, lump sum or income."
      ],
      "mustKnow": [
        "D-I-P = Death, Illness, Paycheque.",
        "Gilts/bonds are debt investments; equities are ownership-based and more volatile.",
        "Term assurance covers a fixed period; whole-of-life is intended to remain in force for life.",
        "Critical illness tends to be lump sum; income protection is earnings replacement over time.",
        "Term assurance = defined period; whole-of-life = life cover; critical illness = specified-condition lump sum; income protection = earnings replacement."
      ],
      "commonMistakes": [
        "Critical illness is not monthly income protection.",
        "Whole of life is not a temporary cover plan.",
        "Treating diversification as the removal of all risk.",
        "Mixing up wrapper, product and asset class in the same answer.",
        "Assuming low starting payments or popular products automatically make them suitable.",
        "Do not turn every protection answer into income protection."
      ],
      "examSprint": [
        "D-I-P = Death, Illness, Paycheque.",
        "Gilts/bonds are debt investments; equities are ownership-based and more volatile.",
        "Critical illness is not monthly income protection."
      ],
      "jumpTargets": {
        "prevDay": 7,
        "nextDay": 9,
        "focusTags": [
          "products"
        ]
      }
    },
    {
      "day": 9,
      "week": 2,
      "title": "Pensions and retirement-income basics",
      "theme": "products",
      "focusTags": [
        "products"
      ],
      "hours": "75 mins",
      "summary": "Use this day to anchor the pension basics most likely to produce easy CeMAP 1 marks without drifting into advanced planning detail.",
      "learn": [
        "Know the pension family names: personal, stakeholder and occupational.",
        "Understand DB vs DC at a simple pass-mark level.",
        "Keep pensions framed as retirement-income planning, with annuities as one income option."
      ],
      "framework": "PENSION TYPE → RETIREMENT PURPOSE → INCOME OUTCOME.",
      "trapNotes": [
        "Do not treat every pension as employer-run.",
        "Do not confuse what is defined in DB with what is defined in DC."
      ],
      "table": {
        "headers": [
          "Area",
          "Memory cue"
        ],
        "rows": [
          [
            "Personal pension",
            "Arranged personally"
          ],
          [
            "Stakeholder",
            "Simple/low-minimum style pension"
          ],
          [
            "Occupational",
            "Workplace scheme"
          ],
          [
            "DB vs DC",
            "Benefit promised vs contribution defined"
          ],
          [
            "Annuity",
            "Retirement income stream"
          ]
        ]
      },
      "testQuestionIds": [
        "ext-081",
        "ext-082",
        "ext-083",
        "ext-084",
        "ext-085",
        "ext-036",
        "qdt-015",
        "src-017",
        "src-056"
      ],
      "frameworkDetails": {
        "name": "PENSION TYPE → RETIREMENT PURPOSE → INCOME OUTCOME",
        "purpose": "Keeps simple pension structure and retirement purpose in order before you chase detail.",
        "components": [
          [
            "Pension type",
            "Identify whether the scheme is personal, stakeholder or occupational."
          ],
          [
            "Retirement purpose",
            "Remember the point is later-life provision, not just generic saving."
          ],
          [
            "Income outcome",
            "Link pensions and annuities to retirement income without overcomplicating the mechanics."
          ]
        ],
        "examUse": "Use it on basic pension-definition questions and simple retirement-income stems.",
        "trap": "Do not confuse scheme label with DB/DC structure or with State Pension facts."
      },
      "deepDive": [
        "Know the pension family names: personal, stakeholder and occupational.",
        "Understand DB vs DC at a simple pass-mark level.",
        "Keep pensions framed as retirement-income planning, with annuities as one income option.",
        "CeMAP product questions are usually suitability questions in disguise: what need does the product meet, what risk remains, and how liquid is it?",
        "Learn the comparison pairs cold: cash vs equities, term vs whole of life, critical illness vs income protection, buildings vs contents, MPPI vs income protection.",
        "A wrapper, fund structure or repayment method is not the same thing as the underlying asset or protection objective.",
        "Keep pensions at pass-mark level: recognise the main scheme labels and what retirement problem they are trying to solve.",
        "Annuities still belong here as a retirement-income outcome, but do not let one annuity fact crowd out the wider pension basics."
      ],
      "mustKnow": [
        "PENSION TYPE → RETIREMENT PURPOSE → INCOME OUTCOME.",
        "Gilts/bonds are debt investments; equities are ownership-based and more volatile.",
        "Term assurance covers a fixed period; whole-of-life is intended to remain in force for life.",
        "Critical illness tends to be lump sum; income protection is earnings replacement over time.",
        "Personal / stakeholder / occupational are the core pension labels; DB vs DC is the core structure distinction."
      ],
      "commonMistakes": [
        "Do not treat every pension as employer-run.",
        "Do not confuse what is defined in DB with what is defined in DC.",
        "Treating diversification as the removal of all risk.",
        "Mixing up wrapper, product and asset class in the same answer.",
        "Assuming low starting payments or popular products automatically make them suitable.",
        "Do not treat a pension as just another generic savings plan with no retirement-income purpose."
      ],
      "examSprint": [
        "PENSION TYPE → RETIREMENT PURPOSE → INCOME OUTCOME.",
        "Gilts/bonds are debt investments; equities are ownership-based and more volatile.",
        "Do not treat every pension as employer-run."
      ],
      "jumpTargets": {
        "prevDay": 8,
        "nextDay": 10,
        "focusTags": [
          "products"
        ]
      }
    },
    {
      "day": 10,
      "week": 2,
      "title": "Protection extras and lighter repayment logic",
      "theme": "products",
      "focusTags": [
        "products"
      ],
      "hours": "60-75 mins",
      "summary": "Keep the remaining protection comparison pairs sharp and only a light touch on repayment-vehicle logic.",
      "learn": [
        "MPPI, buildings and contents are classic comparison questions.",
        "Compact insurance-law principles can produce straightforward marks if remembered as short definitions.",
        "Interest-only logic matters only at a simple credibility level here."
      ],
      "framework": "COMPARE COVER, THEN CHECK REPAYMENT CREDIBILITY.",
      "trapNotes": [
        "Buildings does not mean contents.",
        "Do not overthink mortgage-paper detail in CeMAP 1."
      ],
      "table": {
        "headers": [
          "Compare",
          "Remember"
        ],
        "rows": [
          [
            "MPPI vs income protection",
            "Mortgage payments vs earnings replacement"
          ],
          [
            "Buildings vs contents",
            "Structure vs belongings"
          ],
          [
            "Insurable interest / indemnity",
            "Valid interest / no profit from loss"
          ],
          [
            "Subrogation / contribution",
            "Recovery rights / shared claim"
          ],
          [
            "Proximate cause",
            "Dominant cause"
          ]
        ]
      },
      "testQuestionIds": [
        "ext-033",
        "ext-034",
        "ext-035",
        "ext-037",
        "src-015",
        "src-016",
        "src-055",
        "ext-091",
        "ext-092",
        "ext-093",
        "ext-094",
        "ext-095"
      ],
      "frameworkDetails": {
        "name": "COMPARE COVER, THEN CHECK REPAYMENT CREDIBILITY",
        "purpose": "Handles the remaining product/protection contrasts while keeping repayment logic in its proper, lighter CeMAP 1 place.",
        "components": [
          [
            "Compare cover",
            "Separate MPPI, buildings, contents and insurance-law principles by short definitions."
          ],
          [
            "Then check repayment credibility",
            "If interest-only appears, remember only the simple warning: capital still needs a credible way out."
          ]
        ],
        "examUse": "Use it on late product questions where protection facts and simple repayment warnings appear together.",
        "trap": "Do not drag in detailed mortgage-paper logic when a short UKFR answer is enough."
      },
      "deepDive": [
        "MPPI, buildings and contents are classic comparison questions.",
        "Compact insurance-law principles can produce straightforward marks if remembered as short definitions.",
        "Interest-only logic matters only at a simple credibility level here.",
        "CeMAP product questions are usually suitability questions in disguise: what need does the product meet, what risk remains, and how liquid is it?",
        "Learn the comparison pairs cold: cash vs equities, term vs whole of life, critical illness vs income protection, buildings vs contents, MPPI vs income protection.",
        "A wrapper, fund structure or repayment method is not the same thing as the underlying asset or protection objective.",
        "Use this day for the protection clean-up points that still create avoidable errors: MPPI, buildings/contents and short insurance-law principles.",
        "Keep repayment logic deliberately light: CeMAP 1 only needs the simple warning that capital must still be repaid somehow."
      ],
      "mustKnow": [
        "COMPARE COVER, THEN CHECK REPAYMENT CREDIBILITY.",
        "Gilts/bonds are debt investments; equities are ownership-based and more volatile.",
        "Term assurance covers a fixed period; whole-of-life is intended to remain in force for life.",
        "Critical illness tends to be lump sum; income protection is earnings replacement over time.",
        "Insurance legal-principle questions are usually won by short keyword definitions."
      ],
      "commonMistakes": [
        "Buildings does not mean contents.",
        "Do not overthink mortgage-paper detail in CeMAP 1.",
        "Treating diversification as the removal of all risk.",
        "Mixing up wrapper, product and asset class in the same answer.",
        "Assuming low starting payments or popular products automatically make them suitable.",
        "Do not drift into detailed mortgage-paper calculations or advanced repayment-vehicle analysis."
      ],
      "examSprint": [
        "COMPARE COVER, THEN CHECK REPAYMENT CREDIBILITY.",
        "Gilts/bonds are debt investments; equities are ownership-based and more volatile.",
        "Buildings does not mean contents."
      ],
      "jumpTargets": {
        "prevDay": 9,
        "nextDay": 11,
        "focusTags": [
          "products"
        ]
      }
    },
    {
      "day": 11,
      "week": 2,
      "title": "Advice process and factfinding",
      "theme": "advice-process",
      "focusTags": [
        "advice-process"
      ],
      "hours": "90 mins",
      "summary": "Move into process: how advisers gather information before giving advice.",
      "learn": [
        "Factfind first, recommendation later.",
        "Advice should be evidence-led.",
        "Objectives and circumstances drive suitability."
      ],
      "framework": "FIND = Factfind, Identify needs, Narrow options, Document.",
      "trapNotes": [
        "Do not recommend before you understand the client."
      ],
      "table": {
        "headers": [
          "Stage",
          "Purpose"
        ],
        "rows": [
          [
            "Factfind",
            "Gather circumstances"
          ],
          [
            "Needs analysis",
            "Clarify objectives"
          ],
          [
            "Recommendation",
            "Match solution"
          ]
        ]
      },
      "testQuestionIds": [
        "ext-043",
        "ext-047",
        "ext-050",
        "ext-052",
        "src-026"
      ],
      "frameworkDetails": {
        "name": "FIND",
        "purpose": "Locks in the proper order of the advice process.",
        "components": [
          [
            "F = Factfind",
            "Gather circumstances and evidence first."
          ],
          [
            "I = Identify needs",
            "Clarify objectives, priorities and constraints."
          ],
          [
            "N = Narrow options",
            "Only then compare suitable routes/products."
          ],
          [
            "D = Document",
            "Record the rationale and recommendation clearly."
          ]
        ],
        "examUse": "Use FIND whenever the question is about what should happen first / next in advice.",
        "trap": "Do not recommend before the factfind just because one answer sounds commercially decisive."
      },
      "deepDive": [
        "Factfind first, recommendation later.",
        "Advice should be evidence-led.",
        "Objectives and circumstances drive suitability.",
        "Advice-process marks come from sequence and evidence: gather facts, identify objectives, assess risk/capacity, then recommend and document.",
        "Suitability is never just product knowledge — it depends on affordability, objectives, attitude to risk, capacity for loss and client circumstances.",
        "The best conduct answer usually improves understanding, records the rationale and supports ongoing review.",
        "Good advice starts with factfinding because suitability without facts is guesswork.",
        "Objectives, needs and financial circumstances are the evidence base that justify any later recommendation."
      ],
      "mustKnow": [
        "FIND = Factfind, Identify needs, Narrow options, Document.",
        "Factfind before recommendation.",
        "Attitude to risk = willingness/comfort; capacity for loss = financial ability to absorb harm.",
        "Reviews matter because circumstances, products and suitability can change.",
        "Factfind first; recommendation later."
      ],
      "commonMistakes": [
        "Do not recommend before you understand the client.",
        "Recommending too early before evidence is gathered.",
        "Treating risk tolerance and capacity for loss as the same concept.",
        "Choosing the most commercial answer instead of the most client-protective one.",
        "Do not treat the product pitch as the starting point of the advice process."
      ],
      "examSprint": [
        "FIND = Factfind, Identify needs, Narrow options, Document.",
        "Factfind before recommendation.",
        "Do not recommend before you understand the client."
      ],
      "jumpTargets": {
        "prevDay": 10,
        "nextDay": 12,
        "focusTags": [
          "advice-process"
        ]
      }
    },
    {
      "day": 12,
      "week": 2,
      "title": "Suitability, risk and reviews",
      "theme": "advice-process",
      "focusTags": [
        "advice-process"
      ],
      "hours": "75 mins",
      "summary": "A high-yield conduct day: attitude to risk, capacity for loss and ongoing suitability.",
      "learn": [
        "Attitude to risk and capacity for loss are not the same.",
        "Suitability is about fit, not product complexity.",
        "Reviews matter because people and products change."
      ],
      "framework": "SAFE = Suitable, Affordable, Fair, Explained.",
      "trapNotes": [
        "The higher-return answer is not automatically best."
      ],
      "table": {
        "headers": [
          "Concept",
          "Meaning"
        ],
        "rows": [
          [
            "Attitude to risk",
            "Comfort with risk"
          ],
          [
            "Capacity for loss",
            "Ability to absorb loss"
          ],
          [
            "Review",
            "Check ongoing suitability"
          ]
        ]
      },
      "testQuestionIds": [
        "ext-044",
        "ext-045",
        "ext-046",
        "ext-048",
        "ext-049",
        "ext-051"
      ],
      "frameworkDetails": {
        "name": "SAFE",
        "purpose": "Shows what suitability really needs beyond product knowledge.",
        "components": [
          [
            "S = Suitable",
            "The recommendation must fit the client’s needs/objectives."
          ],
          [
            "A = Affordable",
            "The client must realistically be able to maintain it."
          ],
          [
            "F = Fair",
            "The outcome and process should treat the client fairly."
          ],
          [
            "E = Explained",
            "Risks, costs and rationale must be understandable."
          ]
        ],
        "examUse": "Use SAFE when answers mix return ambition with suitability logic.",
        "trap": "Attitude to risk and capacity for loss are different. Do not merge them."
      },
      "deepDive": [
        "Attitude to risk and capacity for loss are not the same.",
        "Suitability is about fit, not product complexity.",
        "Reviews matter because people and products change.",
        "Advice-process marks come from sequence and evidence: gather facts, identify objectives, assess risk/capacity, then recommend and document.",
        "Suitability is never just product knowledge — it depends on affordability, objectives, attitude to risk, capacity for loss and client circumstances.",
        "The best conduct answer usually improves understanding, records the rationale and supports ongoing review.",
        "This is one of the most exam-relevant conduct distinctions: wanting risk and being able to survive loss are different things.",
        "Ongoing reviews matter because an originally suitable recommendation can become unsuitable as life changes."
      ],
      "mustKnow": [
        "SAFE = Suitable, Affordable, Fair, Explained.",
        "Factfind before recommendation.",
        "Attitude to risk = willingness/comfort; capacity for loss = financial ability to absorb harm.",
        "Reviews matter because circumstances, products and suitability can change.",
        "Attitude to risk and capacity for loss must be assessed separately."
      ],
      "commonMistakes": [
        "The higher-return answer is not automatically best.",
        "Recommending too early before evidence is gathered.",
        "Treating risk tolerance and capacity for loss as the same concept.",
        "Choosing the most commercial answer instead of the most client-protective one.",
        "Do not pick the “higher return” answer just because it sounds more ambitious."
      ],
      "examSprint": [
        "SAFE = Suitable, Affordable, Fair, Explained.",
        "Factfind before recommendation.",
        "The higher-return answer is not automatically best."
      ],
      "jumpTargets": {
        "prevDay": 11,
        "nextDay": 13,
        "focusTags": [
          "advice-process"
        ]
      }
    },
    {
      "day": 13,
      "week": 2,
      "title": "Ownership, wills and estate thinking",
      "theme": "legal",
      "focusTags": [
        "legal"
      ],
      "hours": "75 mins",
      "summary": "This is the legal-planning foundation day: who gets what and what happens if planning is missing.",
      "learn": [
        "Legal ownership and beneficial outcomes are not always the same thing.",
        "A will helps direct estate distribution.",
        "Intestacy rules apply without a valid will."
      ],
      "framework": "PLAN OR THE RULES WILL DECIDE.",
      "trapNotes": [
        "Do not confuse authority to act with who benefits."
      ],
      "table": {
        "headers": [
          "Area",
          "Why it matters"
        ],
        "rows": [
          [
            "Joint tenancy",
            "Survivorship"
          ],
          [
            "Tenants in common",
            "Share can pass by will"
          ],
          [
            "Will",
            "Estate wishes"
          ],
          [
            "Intestacy",
            "Default distribution"
          ]
        ]
      },
      "testQuestionIds": [
        "qdt-019",
        "ext-053",
        "ext-054",
        "ext-089",
        "src-060"
      ],
      "frameworkDetails": {
        "name": "PLAN OR THE RULES WILL DECIDE",
        "purpose": "Captures the difference between estate planning and intestacy defaults.",
        "components": [
          [
            "Plan",
            "A valid will lets the person direct distribution."
          ],
          [
            "Or",
            "This is the decision point: planning exists or it does not."
          ],
          [
            "The rules will decide",
            "Without a valid will, intestacy rules step in."
          ]
        ],
        "examUse": "Use it on wills/intestacy questions to anchor planned distribution versus default distribution.",
        "trap": "Do not confuse who benefits under an estate with who has legal authority to act."
      },
      "deepDive": [
        "Legal ownership and beneficial outcomes are not always the same thing.",
        "A will helps direct estate distribution.",
        "Intestacy rules apply without a valid will.",
        "Legal questions are often really about authority, ownership, distribution or scope. Decide which of those four is being tested before reading the options twice.",
        "A will controls planned distribution; intestacy applies when planning is absent or invalid.",
        "Authority questions ask who may give instructions or act for another person — not who benefits emotionally or practically.",
        "Ownership questions become easier once you separate legal title, beneficial outcome and survivorship.",
        "A will is about directing outcomes; intestacy is about default rules stepping in where planning is absent."
      ],
      "mustKnow": [
        "PLAN OR THE RULES WILL DECIDE.",
        "Intestacy = death without a valid will.",
        "Agency and powers of attorney are authority concepts.",
        "Scope questions are answered by checking whether the rule applies before analysing detail.",
        "Joint tenancy and tenants in common are ownership patterns, not just vocabulary."
      ],
      "commonMistakes": [
        "Do not confuse authority to act with who benefits.",
        "Confusing beneficiary status with legal authority to act.",
        "Choosing an answer that is legally true in general but not relevant to the exact issue in the stem.",
        "Forgetting that bankruptcy/scope points can affect suitability and access, not just legal theory.",
        "Do not confuse survivorship with the ability to leave a defined share by will."
      ],
      "examSprint": [
        "PLAN OR THE RULES WILL DECIDE.",
        "Intestacy = death without a valid will.",
        "Do not confuse authority to act with who benefits."
      ],
      "jumpTargets": {
        "prevDay": 12,
        "nextDay": 14,
        "focusTags": [
          "legal"
        ]
      }
    },
    {
      "day": 14,
      "week": 2,
      "title": "Authority, agency and powers of attorney",
      "theme": "legal",
      "focusTags": [
        "legal"
      ],
      "hours": "75 mins",
      "summary": "Legal authority questions often look simple but catch people out.",
      "learn": [
        "Agency is about authority to act for another.",
        "LPA questions are authority questions.",
        "Always ask who is legally able to give instructions."
      ],
      "framework": "WHO MAY ACT?",
      "trapNotes": [
        "Beneficiary and attorney are not the same thing."
      ],
      "table": {
        "headers": [
          "Term",
          "Memory cue"
        ],
        "rows": [
          [
            "Agency",
            "Acting for another"
          ],
          [
            "LPA",
            "Authority where valid arrangements exist"
          ],
          [
            "Trustee / personal representative",
            "Control/admin role, not automatic beneficial ownership"
          ]
        ]
      },
      "testQuestionIds": [
        "ext-055",
        "ext-056",
        "ext-058",
        "ext-089",
        "ext-090"
      ],
      "frameworkDetails": {
        "name": "WHO MAY ACT?",
        "purpose": "Boils agency and powers of attorney down to the legal authority point.",
        "components": [
          [
            "Who",
            "Identify the person/body in question."
          ],
          [
            "May act",
            "Ask whether they have valid authority to instruct or act for another person."
          ]
        ],
        "examUse": "Use it when CeMAP tests agency, attorney powers or authority to give instructions.",
        "trap": "Family relationship or sympathy is not the same as legal authority."
      },
      "deepDive": [
        "Agency is about authority to act for another.",
        "LPA questions are authority questions.",
        "Always ask who is legally able to give instructions.",
        "Legal questions are often really about authority, ownership, distribution or scope. Decide which of those four is being tested before reading the options twice.",
        "A will controls planned distribution; intestacy applies when planning is absent or invalid.",
        "Authority questions ask who may give instructions or act for another person — not who benefits emotionally or practically.",
        "Agency and LPA questions are authority questions first. Ask who may validly act or instruct.",
        "Trustees and personal representatives are also authority/control roles, which is why ownership and authority must be kept separate."
      ],
      "mustKnow": [
        "WHO MAY ACT?",
        "Intestacy = death without a valid will.",
        "Agency and powers of attorney are authority concepts.",
        "Scope questions are answered by checking whether the rule applies before analysing detail.",
        "LPA = authority to act; trustee/personal representative = control/admin role."
      ],
      "commonMistakes": [
        "Beneficiary and attorney are not the same thing.",
        "Confusing beneficiary status with legal authority to act.",
        "Choosing an answer that is legally true in general but not relevant to the exact issue in the stem.",
        "Forgetting that bankruptcy/scope points can affect suitability and access, not just legal theory.",
        "Do not assume the person who benefits is the same person who has authority to act."
      ],
      "examSprint": [
        "WHO MAY ACT?",
        "Intestacy = death without a valid will.",
        "Beneficiary and attorney are not the same thing."
      ],
      "jumpTargets": {
        "prevDay": 13,
        "nextDay": 15,
        "focusTags": [
          "legal"
        ]
      }
    },
    {
      "day": 15,
      "week": 3,
      "title": "Bankruptcy and scope rules",
      "theme": "legal",
      "focusTags": [
        "legal",
        "consumer-protection"
      ],
      "hours": "60-75 mins",
      "summary": "Today combines insolvency background with the scope logic used in consumer-law questions.",
      "learn": [
        "Bankruptcy can change risk and product access.",
        "Scope questions ask whether a rule applies before anything else.",
        "Read the stem carefully."
      ],
      "framework": "SCOPE BEFORE DETAIL.",
      "trapNotes": [
        "A true statement can still be the wrong answer if it answers a different legal issue."
      ],
      "table": {
        "headers": [
          "Question type",
          "Check first"
        ],
        "rows": [
          [
            "Bankruptcy",
            "Effect on options/risk"
          ],
          [
            "Consumer-credit scope",
            "Borrower + rule scope"
          ],
          [
            "Mixed legal stem",
            "Exact issue asked"
          ]
        ]
      },
      "testQuestionIds": [
        "qdt-018",
        "ext-057",
        "ext-059",
        "ext-060",
        "src-059"
      ],
      "frameworkDetails": {
        "name": "SCOPE BEFORE DETAIL",
        "purpose": "Prevents you from analysing the detail of a rule before checking whether it even applies.",
        "components": [
          [
            "Scope",
            "First ask whether this law/rule/topic is actually engaged."
          ],
          [
            "Before detail",
            "Only after scope is confirmed should you compare the finer points."
          ]
        ],
        "examUse": "Use it on bankruptcy and legal-scope questions, especially where one option is true but irrelevant.",
        "trap": "A technically true sentence can still be the wrong answer if it addresses a different issue."
      },
      "deepDive": [
        "Bankruptcy can change risk and product access.",
        "Scope questions ask whether a rule applies before anything else.",
        "Read the stem carefully.",
        "Legal questions are often really about authority, ownership, distribution or scope. Decide which of those four is being tested before reading the options twice.",
        "A will controls planned distribution; intestacy applies when planning is absent or invalid.",
        "Authority questions ask who may give instructions or act for another person — not who benefits emotionally or practically.",
        "Scope questions are a gift if you slow down. Many candidates jump to detail before deciding whether the rule applies.",
        "Bankruptcy can affect access, suitability and risk profile, so it matters beyond pure legal background."
      ],
      "mustKnow": [
        "SCOPE BEFORE DETAIL.",
        "Intestacy = death without a valid will.",
        "Agency and powers of attorney are authority concepts.",
        "Scope questions are answered by checking whether the rule applies before analysing detail.",
        "Check scope before detail."
      ],
      "commonMistakes": [
        "A true statement can still be the wrong answer if it answers a different legal issue.",
        "Confusing beneficiary status with legal authority to act.",
        "Choosing an answer that is legally true in general but not relevant to the exact issue in the stem.",
        "Forgetting that bankruptcy/scope points can affect suitability and access, not just legal theory.",
        "Do not choose a technically true sentence that answers a different legal issue."
      ],
      "examSprint": [
        "SCOPE BEFORE DETAIL.",
        "Intestacy = death without a valid will.",
        "A true statement can still be the wrong answer if it answers a different legal issue."
      ],
      "jumpTargets": {
        "prevDay": 14,
        "nextDay": 16,
        "focusTags": [
          "legal",
          "consumer-protection"
        ]
      }
    },
    {
      "day": 16,
      "week": 3,
      "title": "Regulation map: FCA, PRA and authorisation",
      "theme": "regulation",
      "focusTags": [
        "regulation"
      ],
      "hours": "90 mins",
      "summary": "This is one of the highest-yield areas in the whole paper. Get the map clean.",
      "learn": [
        "FCA = conduct and customer outcomes.",
        "PRA = prudential safety and soundness.",
        "Authorisation determines whether regulated business can be carried on properly."
      ],
      "framework": "FCA = Conduct; PRA = Prudence.",
      "trapNotes": [
        "Do not give FOS or FSCS the regulator role."
      ],
      "table": {
        "headers": [
          "Body",
          "Main cue"
        ],
        "rows": [
          [
            "FCA",
            "Conduct"
          ],
          [
            "PRA",
            "Prudential"
          ],
          [
            "Authorisation",
            "Permission to do regulated business"
          ],
          [
            "FOS",
            "Complaints/redress, not a regulator"
          ],
          [
            "FSCS",
            "Failure compensation, not a regulator"
          ]
        ]
      },
      "testQuestionIds": [
        "qdt-001",
        "ext-061",
        "ext-062",
        "ext-066",
        "ext-068",
        "ext-069",
        "src-018",
        "src-019"
      ],
      "frameworkDetails": {
        "name": "FCA = Conduct; PRA = Prudence",
        "purpose": "Separates conduct regulation from prudential supervision in one line.",
        "components": [
          [
            "FCA = Conduct",
            "Customer treatment, markets, communications and outcomes."
          ],
          [
            "PRA = Prudence",
            "Safety and soundness of key firms / prudential supervision."
          ]
        ],
        "examUse": "Use it on any regulator-role question before considering authorisation detail.",
        "trap": "Do not give FOS/FSCS/BoE functions to the FCA or PRA."
      },
      "deepDive": [
        "FCA = conduct and customer outcomes.",
        "PRA = prudential safety and soundness.",
        "Authorisation determines whether regulated business can be carried on properly.",
        "This topic rewards clean role separation. If you cannot state each body’s job in one line, you are still at risk of losing easy marks.",
        "FCA/PRA/Consumer Duty/SMCR questions are rarely random: they test conduct, prudential safety, accountability and customer outcomes as separate ideas.",
        "Financial-promotion and conduct questions usually reward fairness, clarity, permission and customer understanding.",
        "This is one of the cleanest mark areas in CeMAP: define each body in one line and protect the boundaries between them.",
        "Authorisation matters because a firm needs the right permission to carry on regulated business."
      ],
      "mustKnow": [
        "FCA = Conduct; PRA = Prudence.",
        "FCA = conduct and consumer outcomes; PRA = prudential safety and soundness.",
        "Consumer Duty = good outcomes for retail customers.",
        "SMCR = accountability, including Statements of Responsibilities.",
        "FCA = conduct; PRA = prudential supervision / safety and soundness."
      ],
      "commonMistakes": [
        "Do not give FOS or FSCS the regulator role.",
        "Giving FOS or FSCS a regulator role.",
        "Reducing Consumer Duty to a disclosure-only exercise.",
        "Missing authorisation/permission clues in stems about who may carry on regulated activities.",
        "Do not give complaint, compensation or Bank Rate functions to the regulators."
      ],
      "examSprint": [
        "Say these cold: FCA conduct, PRA prudential, FOS complaints, FSCS failure compensation.",
        "If the stem asks who may carry on regulated business, think authorisation/permission before service quality.",
        "FCA = Conduct; PRA = Prudence.",
        "FCA = conduct and consumer outcomes; PRA = prudential safety and soundness.",
        "Do not give FOS or FSCS the regulator role."
      ],
      "jumpTargets": {
        "prevDay": 15,
        "nextDay": 17,
        "focusTags": [
          "regulation"
        ]
      }
    },
    {
      "day": 17,
      "week": 3,
      "title": "Consumer Duty, SMCR and principles",
      "theme": "regulation",
      "focusTags": [
        "regulation"
      ],
      "hours": "75 mins",
      "summary": "Today is about principle-heavy material that is still very examinable.",
      "learn": [
        "Consumer Duty is about good outcomes.",
        "SMCR is about accountability.",
        "The Principles for Businesses provide high-level standards."
      ],
      "framework": "OUTCOMES + ACCOUNTABILITY + PRINCIPLES.",
      "trapNotes": [
        "Consumer Duty is broader than giving a document."
      ],
      "table": {
        "headers": [
          "Concept",
          "Memory cue"
        ],
        "rows": [
          [
            "Consumer Duty",
            "Good outcomes"
          ],
          [
            "SMCR",
            "Clear accountability"
          ],
          [
            "Principles",
            "High-level standards"
          ],
          [
            "Consumer understanding",
            "Clients can make effective, timely, informed decisions"
          ],
          [
            "Statement of Responsibilities",
            "SMCR accountability document"
          ]
        ]
      },
      "testQuestionIds": [
        "qdt-002",
        "qdt-003",
        "qdt-021",
        "ext-063",
        "ext-064",
        "ext-067",
        "src-020",
        "src-021",
        "src-022"
      ],
      "frameworkDetails": {
        "name": "OUTCOMES + ACCOUNTABILITY + PRINCIPLES",
        "purpose": "Groups the regulation themes being tested into three examinable buckets.",
        "components": [
          [
            "Outcomes",
            "Consumer Duty is about good retail customer outcomes."
          ],
          [
            "Accountability",
            "SMCR allocates clear personal responsibility."
          ],
          [
            "Principles",
            "High-level conduct standards still shape behaviour."
          ]
        ],
        "examUse": "Use it when a stem mentions Consumer Duty, SMCR, Statements of Responsibilities or broad conduct expectations.",
        "trap": "Do not reduce Consumer Duty to “give a disclosure and move on”."
      },
      "deepDive": [
        "Consumer Duty is about good outcomes.",
        "SMCR is about accountability.",
        "The Principles for Businesses provide high-level standards.",
        "This topic rewards clean role separation. If you cannot state each body’s job in one line, you are still at risk of losing easy marks.",
        "FCA/PRA/Consumer Duty/SMCR questions are rarely random: they test conduct, prudential safety, accountability and customer outcomes as separate ideas.",
        "Financial-promotion and conduct questions usually reward fairness, clarity, permission and customer understanding.",
        "Consumer Duty, SMCR and the Principles work together as an outcomes-and-accountability cluster.",
        "The exam often tests whether you understand that good regulation is broader than document delivery or box-ticking."
      ],
      "mustKnow": [
        "OUTCOMES + ACCOUNTABILITY + PRINCIPLES.",
        "FCA = conduct and consumer outcomes; PRA = prudential safety and soundness.",
        "Consumer Duty = good outcomes for retail customers.",
        "SMCR = accountability, including Statements of Responsibilities.",
        "SMCR allocates accountability through clear responsibilities."
      ],
      "commonMistakes": [
        "Consumer Duty is broader than giving a document.",
        "Giving FOS or FSCS a regulator role.",
        "Reducing Consumer Duty to a disclosure-only exercise.",
        "Missing authorisation/permission clues in stems about who may carry on regulated activities.",
        "Do not reduce Consumer Duty to a single communication rule."
      ],
      "examSprint": [
        "Consumer Duty is outcomes-focused, not just disclosure-focused.",
        "SMCR question? Look for clear named accountability, especially Statement of Responsibilities.",
        "OUTCOMES + ACCOUNTABILITY + PRINCIPLES.",
        "FCA = conduct and consumer outcomes; PRA = prudential safety and soundness.",
        "Consumer Duty is broader than giving a document."
      ],
      "jumpTargets": {
        "prevDay": 16,
        "nextDay": 18,
        "focusTags": [
          "regulation"
        ]
      }
    },
    {
      "day": 18,
      "week": 3,
      "title": "Financial promotions and conduct answers",
      "theme": "regulation",
      "focusTags": [
        "regulation",
        "consumer-protection"
      ],
      "hours": "60-75 mins",
      "summary": "Many questions here are won through exam technique: pick the answer that best protects understanding and fairness.",
      "learn": [
        "Financial promotions must be clear, fair and not misleading.",
        "Conduct answers often favour transparency and customer understanding.",
        "Status disclosure matters."
      ],
      "framework": "CFNM + CUSTOMER UNDERSTANDING.",
      "trapNotes": [
        "The slick commercial answer is often the wrong one."
      ],
      "table": {
        "headers": [
          "Area",
          "Best memory cue"
        ],
        "rows": [
          [
            "Promotion",
            "Clear, fair, not misleading"
          ],
          [
            "Conduct answer",
            "Fair, explained, evidenced"
          ],
          [
            "Disclosure",
            "Client understands service"
          ],
          [
            "Unauthorised firm promotion",
            "Needs approval by an authorised person before communication"
          ],
          [
            "Best conduct answer",
            "Fair + understood + properly evidenced"
          ]
        ]
      },
      "testQuestionIds": [
        "qdt-022",
        "ext-065",
        "ext-070",
        "ext-077",
        "src-023",
        "src-041"
      ],
      "frameworkDetails": {
        "name": "CFNM + CUSTOMER UNDERSTANDING",
        "purpose": "Tells you what a valid promotion must be and what good conduct is trying to achieve.",
        "components": [
          [
            "CFNM",
            "Clear, fair and not misleading."
          ],
          [
            "Customer understanding",
            "The communication should help retail clients understand what is really being offered."
          ]
        ],
        "examUse": "Use it for financial-promotion and conduct-answer questions.",
        "trap": "A polished sales message can still fail if it is unclear, unbalanced or not properly approved."
      },
      "deepDive": [
        "Financial promotions must be clear, fair and not misleading.",
        "Conduct answers often favour transparency and customer understanding.",
        "Status disclosure matters.",
        "This topic rewards clean role separation. If you cannot state each body’s job in one line, you are still at risk of losing easy marks.",
        "FCA/PRA/Consumer Duty/SMCR questions are rarely random: they test conduct, prudential safety, accountability and customer outcomes as separate ideas.",
        "Financial-promotion and conduct questions usually reward fairness, clarity, permission and customer understanding.",
        "Financial-promotion questions reward plain-English conduct logic: would a retail client understand this fairly, or be misled?",
        "Status disclosure matters because customers need to know who is acting, under what status, and what service is being offered."
      ],
      "mustKnow": [
        "CFNM + CUSTOMER UNDERSTANDING.",
        "FCA = conduct and consumer outcomes; PRA = prudential safety and soundness.",
        "Consumer Duty = good outcomes for retail customers.",
        "SMCR = accountability, including Statements of Responsibilities.",
        "Financial promotions must be clear, fair and not misleading."
      ],
      "commonMistakes": [
        "The slick commercial answer is often the wrong one.",
        "Giving FOS or FSCS a regulator role.",
        "Reducing Consumer Duty to a disclosure-only exercise.",
        "Missing authorisation/permission clues in stems about who may carry on regulated activities.",
        "Do not assume the most persuasive sales answer is the best regulatory answer."
      ],
      "examSprint": [
        "If a promotion is flashy but unclear, it is usually wrong on conduct logic.",
        "Unauthorised communicator? Think authorised-person approval, not marketing quality alone.",
        "CFNM + CUSTOMER UNDERSTANDING.",
        "FCA = conduct and consumer outcomes; PRA = prudential safety and soundness.",
        "The slick commercial answer is often the wrong one."
      ],
      "jumpTargets": {
        "prevDay": 17,
        "nextDay": 19,
        "focusTags": [
          "regulation",
          "consumer-protection"
        ]
      }
    },
    {
      "day": 19,
      "week": 3,
      "title": "FOS, FSCS and complaint handling",
      "theme": "consumer-protection",
      "focusTags": [
        "consumer-protection"
      ],
      "hours": "75 mins",
      "summary": "This is classic confusion territory, so fix the distinctions now.",
      "learn": [
        "FOS handles complaints and redress.",
        "FSCS is about compensation after firm failure within scope.",
        "Complaint records matter."
      ],
      "framework": "COMPLAINT ≠ FAILURE COMPENSATION.",
      "trapNotes": [
        "Do not use FSCS as a complaints body."
      ],
      "table": {
        "headers": [
          "Body",
          "Job"
        ],
        "rows": [
          [
            "FOS",
            "Complaint resolution/redress"
          ],
          [
            "FSCS",
            "Compensation on firm failure"
          ],
          [
            "Internal complaint process",
            "Firm handles complaint first"
          ],
          [
            "FOS",
            "External complaint/redress route if unresolved"
          ],
          [
            "FSCS",
            "Compensation if firm has failed and claim is in scope"
          ]
        ]
      },
      "testQuestionIds": [
        "qdt-004",
        "qdt-005",
        "qdt-023",
        "ext-071",
        "ext-072",
        "ext-076",
        "src-024",
        "src-025"
      ],
      "frameworkDetails": {
        "name": "COMPLAINT ≠ FAILURE COMPENSATION",
        "purpose": "Keeps FOS and FSCS in separate memory boxes.",
        "components": [
          [
            "Complaint",
            "FOS is about unresolved complaints/redress."
          ],
          [
            "≠",
            "They are not interchangeable."
          ],
          [
            "Failure compensation",
            "FSCS can compensate when an in-scope firm has failed."
          ]
        ],
        "examUse": "Use it whenever FOS and FSCS appear in the same option set.",
        "trap": "Do not route a service complaint to FSCS just because compensation is mentioned."
      },
      "deepDive": [
        "FOS handles complaints and redress.",
        "FSCS is about compensation after firm failure within scope.",
        "Complaint records matter.",
        "Consumer-protection questions focus on fair treatment after something goes wrong or where harm could arise: complaints, compensation, vulnerability, AML and data handling.",
        "This area is highly process-driven — firms are expected to escalate, record, support and protect rather than improvise.",
        "When torn between two options, prefer the answer that preserves evidence, customer understanding and proper escalation.",
        "This day is all about role purity: complaint route vs failure-compensation route.",
        "Complaint handling also depends on keeping records that show what happened and how the firm responded."
      ],
      "mustKnow": [
        "COMPLAINT ≠ FAILURE COMPENSATION.",
        "FOS = complaints/redress; FSCS = compensation when a firm fails within scope.",
        "MLRO sits in the AML reporting chain.",
        "GDPR is about lawful and secure personal-data handling.",
        "FOS handles complaints/redress; FSCS covers compensation on firm failure within scope."
      ],
      "commonMistakes": [
        "Do not use FSCS as a complaints body.",
        "Using FSCS as if it were a complaints body.",
        "Assuming vulnerability automatically means incapacity.",
        "Thinking suspicious activity or data incidents can be handled informally instead of via firm process.",
        "Do not use FOS and FSCS interchangeably."
      ],
      "examSprint": [
        "Complaint problem = complaint route first; failed-firm problem = FSCS territory.",
        "FOS is about disputes/redress, not prudential supervision and not failure protection.",
        "COMPLAINT ≠ FAILURE COMPENSATION.",
        "FOS = complaints/redress; FSCS = compensation when a firm fails within scope.",
        "Do not use FSCS as a complaints body."
      ],
      "jumpTargets": {
        "prevDay": 18,
        "nextDay": 20,
        "focusTags": [
          "consumer-protection"
        ]
      }
    },
    {
      "day": 20,
      "week": 3,
      "title": "Vulnerability and customer support",
      "theme": "consumer-protection",
      "focusTags": [
        "consumer-protection",
        "advice-process"
      ],
      "hours": "60 mins",
      "summary": "Modern UKFR revision increasingly expects good handling of vulnerability.",
      "learn": [
        "Vulnerability may require different communication and support.",
        "A vulnerable client is not automatically incapable.",
        "Good outcomes often depend on how the process is adapted."
      ],
      "framework": "SPOT → ADAPT → SUPPORT.",
      "trapNotes": [
        "Do not assume incapacity unless facts justify it."
      ],
      "table": {
        "headers": [
          "Bad approach",
          "Better approach"
        ],
        "rows": [
          [
            "Rush",
            "Adapt pace"
          ],
          [
            "Ignore signs",
            "Record and support"
          ],
          [
            "Assume incapacity",
            "Assess properly"
          ],
          [
            "Vulnerability",
            "Need for adapted support"
          ],
          [
            "Capacity/incapacity",
            "Separate legal/decision-making issue"
          ]
        ]
      },
      "testQuestionIds": [
        "ext-073",
        "ext-078",
        "ext-080",
        "src-038"
      ],
      "frameworkDetails": {
        "name": "SPOT → ADAPT → SUPPORT",
        "purpose": "Frames vulnerability as recognition and responsive treatment, not automatic exclusion.",
        "components": [
          [
            "Spot",
            "Recognise indicators of vulnerability."
          ],
          [
            "Adapt",
            "Change pace, explanation or process where needed."
          ],
          [
            "Support",
            "Help the client engage without stripping autonomy unless capacity facts require it."
          ]
        ],
        "examUse": "Use it on vulnerable-customer questions where the best answer is usually the most supportive and process-safe.",
        "trap": "Vulnerability does not automatically equal incapacity."
      },
      "deepDive": [
        "Vulnerability may require different communication and support.",
        "A vulnerable client is not automatically incapable.",
        "Good outcomes often depend on how the process is adapted.",
        "Consumer-protection questions focus on fair treatment after something goes wrong or where harm could arise: complaints, compensation, vulnerability, AML and data handling.",
        "This area is highly process-driven — firms are expected to escalate, record, support and protect rather than improvise.",
        "When torn between two options, prefer the answer that preserves evidence, customer understanding and proper escalation.",
        "Vulnerability is about adapting process and support, not automatically excluding the client or assuming incapacity.",
        "Modern UKFR conduct expects pace, communication and support to flex around customer needs."
      ],
      "mustKnow": [
        "SPOT → ADAPT → SUPPORT.",
        "A vulnerable client is not automatically incapable.",
        "Support should be adapted to client needs without removing autonomy unless the facts justify it.",
        "The best answer usually improves understanding, access, time, and communication clarity.",
        "Vulnerability handling is an ongoing support issue, not a one-off label."
      ],
      "commonMistakes": [
        "Do not assume incapacity unless facts justify it.",
        "Using FSCS as if it were a complaints body.",
        "Assuming vulnerability automatically means incapacity.",
        "Thinking suspicious activity or data incidents can be handled informally instead of via firm process.",
        "Do not jump from vulnerability straight to lack of capacity."
      ],
      "examSprint": [
        "Support and adapt first; do not strip autonomy without facts.",
        "The customer-friendly answer is usually the one that slows down, explains, records, and supports.",
        "SPOT → ADAPT → SUPPORT.",
        "FOS = complaints/redress; FSCS = compensation when a firm fails within scope.",
        "Do not assume incapacity unless facts justify it."
      ],
      "jumpTargets": {
        "prevDay": 19,
        "nextDay": 21,
        "focusTags": [
          "consumer-protection",
          "advice-process"
        ]
      }
    },
    {
      "day": 21,
      "week": 3,
      "title": "AML and data protection",
      "theme": "consumer-protection",
      "focusTags": [
        "consumer-protection"
      ],
      "hours": "60-75 mins",
      "summary": "A process-and-responsibility day: AML reporting, MLRO, GDPR and practical data handling.",
      "learn": [
        "Use the firm’s AML reporting route.",
        "Know what the MLRO does.",
        "GDPR is about lawful and secure handling of personal data."
      ],
      "framework": "AML: NOTICE → REPORT. GDPR: LAWFUL → SECURE.",
      "trapNotes": [
        "Do not improvise your own AML process.",
        "Knowing the client does not remove GDPR duties."
      ],
      "table": {
        "headers": [
          "Area",
          "Memory cue"
        ],
        "rows": [
          [
            "MLRO",
            "Receives / manages AML escalation"
          ],
          [
            "GDPR",
            "Lawful + secure data handling"
          ],
          [
            "Breach / suspicion",
            "Use the proper process"
          ],
          [
            "Suspicion of money laundering",
            "Use the internal reporting route / MLRO"
          ],
          [
            "Personal data",
            "Handle lawfully and securely"
          ]
        ]
      },
      "testQuestionIds": [
        "qdt-006",
        "qdt-007",
        "qdt-024",
        "ext-074",
        "ext-075",
        "ext-079",
        "src-039",
        "src-040",
        "src-047"
      ],
      "frameworkDetails": {
        "name": "AML: NOTICE → REPORT. GDPR: LAWFUL → SECURE.",
        "purpose": "Combines the two process-driven protection topics into two short action chains.",
        "components": [
          [
            "AML notice",
            "Recognise suspicion or red flags."
          ],
          [
            "AML report",
            "Use the internal route / MLRO process."
          ],
          [
            "GDPR lawful",
            "Personal data must be used on a lawful basis."
          ],
          [
            "GDPR secure",
            "Data must also be protected appropriately."
          ]
        ],
        "examUse": "Use it on AML/data-handling questions where the exam wants the internal process, not improvisation.",
        "trap": "Do not confront, delete, or handle informally when firm process is required."
      },
      "deepDive": [
        "Use the firm’s AML reporting route.",
        "Know what the MLRO does.",
        "GDPR is about lawful and secure handling of personal data.",
        "Consumer-protection questions focus on fair treatment after something goes wrong or where harm could arise: complaints, compensation, vulnerability, AML and data handling.",
        "This area is highly process-driven — firms are expected to escalate, record, support and protect rather than improvise.",
        "When torn between two options, prefer the answer that preserves evidence, customer understanding and proper escalation.",
        "AML and GDPR both reward process discipline: spot the issue, follow the route, protect information.",
        "CeMAP likes practical responsibility questions here — who reports, who escalates, and how data should be handled."
      ],
      "mustKnow": [
        "AML: NOTICE → REPORT. GDPR: LAWFUL → SECURE.",
        "MLRO sits in the AML reporting chain.",
        "Suspicion should be escalated through firm AML process, not handled informally.",
        "GDPR is about lawful and secure personal-data handling.",
        "MLRO = AML escalation/reporting role; GDPR = lawful + secure data handling."
      ],
      "commonMistakes": [
        "Do not improvise your own AML process.",
        "Knowing the client does not remove GDPR duties.",
        "Using FSCS as if it were a complaints body.",
        "Assuming vulnerability automatically means incapacity.",
        "Thinking suspicious activity or data incidents can be handled informally instead of via firm process.",
        "Do not improvise a private solution when the firm process should be used."
      ],
      "examSprint": [
        "AML question? Think notice → internal report → MLRO route.",
        "GDPR question? Think lawful use, minimum necessary handling, and security.",
        "AML: NOTICE → REPORT. GDPR: LAWFUL → SECURE.",
        "FOS = complaints/redress; FSCS = compensation when a firm fails within scope.",
        "Do not improvise your own AML process."
      ],
      "jumpTargets": {
        "prevDay": 20,
        "nextDay": 22,
        "focusTags": [
          "consumer-protection"
        ]
      }
    },
    {
      "day": 22,
      "week": 4,
      "title": "Week 4 mixed checkpoint",
      "theme": "mixed",
      "focusTags": [
        "industry",
        "tax",
        "products",
        "advice-process",
        "legal",
        "regulation",
        "consumer-protection"
      ],
      "hours": "60 mins",
      "summary": "Use a mixed paper to find out what is still shaky before the final run-in.",
      "learn": [
        "Classify the question first.",
        "Use compare-pairs when torn between two answers."
      ],
      "framework": "CLASSIFY → COMPARE → COMMIT.",
      "trapNotes": [
        "Do not answer from vibe or familiarity alone."
      ],
      "table": {
        "headers": [
          "If it is about...",
          "Think..."
        ],
        "rows": [
          [
            "System / institutions",
            "Industry"
          ],
          [
            "Figure / allowance",
            "Tax"
          ],
          [
            "Risk / purpose",
            "Products"
          ],
          [
            "Authority / estate",
            "Legal"
          ],
          [
            "Conduct / body",
            "Regulation or protection"
          ]
        ]
      },
      "testQuestionIds": [
        "src-001",
        "ext-018",
        "ext-028",
        "ext-044",
        "ext-054",
        "ext-061",
        "ext-071",
        "ext-075"
      ],
      "frameworkDetails": {
        "name": "CLASSIFY → COMPARE → COMMIT",
        "purpose": "A mixed-paper framework for broad checkpoint days.",
        "components": [
          [
            "Classify",
            "Identify the topic first."
          ],
          [
            "Compare",
            "Rebuild the contrast pair or role difference."
          ],
          [
            "Commit",
            "Choose the best fit and move on."
          ]
        ],
        "examUse": "Use it in mixed revision when topics change quickly.",
        "trap": "Do not answer just because one option contains a familiar keyword."
      },
      "deepDive": [
        "Classify the question first.",
        "Use compare-pairs when torn between two answers.",
        "Mixed days are about classification speed. The fastest gain is to recognise the topic before reading all four options deeply.",
        "When torn between two plausible answers, rebuild the comparison pair in your head."
      ],
      "mustKnow": [
        "CLASSIFY → COMPARE → COMMIT.",
        "Classify → compare → commit."
      ],
      "commonMistakes": [
        "Do not answer from vibe or familiarity alone.",
        "Do not answer based on familiarity alone."
      ],
      "examSprint": [
        "CLASSIFY → COMPARE → COMMIT.",
        "Classify → compare → commit.",
        "Do not answer from vibe or familiarity alone."
      ],
      "jumpTargets": {
        "prevDay": 21,
        "nextDay": 23,
        "focusTags": [
          "industry",
          "tax",
          "products",
          "advice-process",
          "legal",
          "regulation",
          "consumer-protection"
        ]
      }
    },
    {
      "day": 23,
      "week": 4,
      "title": "Topic drill: tax and products",
      "theme": "mixed",
      "focusTags": [
        "tax",
        "products"
      ],
      "hours": "60-75 mins",
      "summary": "A focused repair day for factual product/tax marks.",
      "learn": [
        "Slow down on figures and wrapper questions.",
        "Keep product function and tax treatment separate."
      ],
      "framework": "NUMBER → WRAPPER → PRODUCT PURPOSE.",
      "trapNotes": [
        "A familiar number may belong to the wrong tax."
      ],
      "table": {
        "headers": [
          "Check",
          "Why"
        ],
        "rows": [
          [
            "Figure",
            "Avoid number traps"
          ],
          [
            "Wrapper",
            "Do not confuse with asset"
          ],
          [
            "Product purpose",
            "Match need correctly"
          ]
        ]
      },
      "testQuestionIds": [
        "qdt-008",
        "qdt-011",
        "qdt-012",
        "ext-025",
        "ext-031",
        "ext-037",
        "src-048",
        "src-053"
      ],
      "frameworkDetails": {
        "name": "NUMBER → WRAPPER → PRODUCT PURPOSE",
        "purpose": "Repairs a common mixed error cluster: tax facts, wrappers and product function.",
        "components": [
          [
            "Number",
            "Check the figure belongs to the right rule."
          ],
          [
            "Wrapper",
            "Decide if the question is about tax sheltering."
          ],
          [
            "Product purpose",
            "Then confirm what the underlying product is actually for."
          ]
        ],
        "examUse": "Use it when tax/product questions blur together.",
        "trap": "Remembering the number is useless if you attach it to the wrong category."
      },
      "deepDive": [
        "Slow down on figures and wrapper questions.",
        "Keep product function and tax treatment separate.",
        "This repair day exists because product and tax errors are often factual but fixable with clean contrast cards.",
        "Numbers and wrappers are the main trap zones here, so read every figure and label slowly."
      ],
      "mustKnow": [
        "NUMBER → WRAPPER → PRODUCT PURPOSE.",
        "Keep figures with the correct tax family and keep wrappers separate from products."
      ],
      "commonMistakes": [
        "A familiar number may belong to the wrong tax.",
        "Do not reuse a remembered number without checking which rule it belongs to."
      ],
      "examSprint": [
        "NUMBER → WRAPPER → PRODUCT PURPOSE.",
        "Keep figures with the correct tax family and keep wrappers separate from products.",
        "A familiar number may belong to the wrong tax."
      ],
      "jumpTargets": {
        "prevDay": 22,
        "nextDay": 24,
        "focusTags": [
          "tax",
          "products"
        ]
      }
    },
    {
      "day": 24,
      "week": 4,
      "title": "Topic drill: regulation and customer protection",
      "theme": "mixed",
      "focusTags": [
        "regulation",
        "consumer-protection"
      ],
      "hours": "60-75 mins",
      "summary": "A focused repair day for conduct/regulatory distinctions.",
      "learn": [
        "Separate regulator, ombudsman, compensation scheme and MLRO.",
        "Choose answers that support fairness and understanding."
      ],
      "framework": "WHO DOES WHAT?",
      "trapNotes": [
        "Do not merge FCA, PRA, FOS and FSCS together."
      ],
      "table": {
        "headers": [
          "Body",
          "Role"
        ],
        "rows": [
          [
            "FCA",
            "Conduct"
          ],
          [
            "PRA",
            "Prudential"
          ],
          [
            "FOS",
            "Complaints"
          ],
          [
            "FSCS",
            "Failure compensation"
          ],
          [
            "MLRO",
            "AML escalation"
          ]
        ]
      },
      "testQuestionIds": [
        "qdt-001",
        "qdt-004",
        "qdt-021",
        "qdt-022",
        "qdt-023",
        "qdt-024",
        "ext-063",
        "ext-065",
        "ext-071",
        "ext-072",
        "ext-074",
        "ext-077"
      ],
      "frameworkDetails": {
        "name": "WHO DOES WHAT?",
        "purpose": "A blunt but effective regulator/protection reset.",
        "components": [
          [
            "Who",
            "Identify the body being asked about."
          ],
          [
            "Does what",
            "State its core role in one line before reading distractors."
          ]
        ],
        "examUse": "Use it on FCA/PRA/FOS/FSCS/MLRO role questions.",
        "trap": "Do not collapse all customer protection into “the regulator”."
      },
      "deepDive": [
        "Separate regulator, ombudsman, compensation scheme and MLRO.",
        "Choose answers that support fairness and understanding.",
        "This day is a body-role reset. If you can say each body’s job out loud in one sentence, you will cut a lot of careless errors.",
        "Most near-miss answers here are true facts assigned to the wrong institution."
      ],
      "mustKnow": [
        "WHO DOES WHAT?",
        "Know FCA / PRA / FOS / FSCS / MLRO as separate roles."
      ],
      "commonMistakes": [
        "Do not merge FCA, PRA, FOS and FSCS together.",
        "Do not collapse every customer-protection function into “the regulator”."
      ],
      "examSprint": [
        "WHO DOES WHAT?",
        "Know FCA / PRA / FOS / FSCS / MLRO as separate roles.",
        "Do not merge FCA, PRA, FOS and FSCS together."
      ],
      "jumpTargets": {
        "prevDay": 23,
        "nextDay": 25,
        "focusTags": [
          "regulation",
          "consumer-protection"
        ]
      }
    },
    {
      "day": 25,
      "week": 4,
      "title": "Topic drill: advice process and legal concepts",
      "theme": "mixed",
      "focusTags": [
        "advice-process",
        "legal"
      ],
      "hours": "60 mins",
      "summary": "Final structured drill before mock-heavy days.",
      "learn": [
        "Advice questions are usually solved by process discipline.",
        "Legal questions usually turn on authority, distribution or scope."
      ],
      "framework": "PROCESS + AUTHORITY.",
      "trapNotes": [
        "Many wrong answers are true but answer the wrong issue."
      ],
      "table": {
        "headers": [
          "Area",
          "Ask yourself"
        ],
        "rows": [
          [
            "Advice",
            "What did the adviser know and evidence?"
          ],
          [
            "Legal",
            "Who owns / who can act / what rule applies?"
          ]
        ]
      },
      "testQuestionIds": [
        "ext-043",
        "ext-045",
        "ext-049",
        "ext-053",
        "ext-055",
        "ext-057",
        "ext-059",
        "src-060"
      ],
      "frameworkDetails": {
        "name": "PROCESS + AUTHORITY",
        "purpose": "Handles mixed advice/legal stems by splitting them into two angles.",
        "components": [
          [
            "Process",
            "If it is advice, ask what evidence/order/suitability step matters."
          ],
          [
            "Authority",
            "If it is legal, ask who can act or what rule controls the situation."
          ]
        ],
        "examUse": "Use it when the paper mixes advice-process and legal-concepts questions.",
        "trap": "Do not answer the process half when the stem is really testing authority, or vice versa."
      },
      "deepDive": [
        "Advice questions are usually solved by process discipline.",
        "Legal questions usually turn on authority, distribution or scope.",
        "Advice-process and legal marks come from discipline: what was known, who could act, and what rule applied.",
        "This mixed day works best if you treat advice questions as evidence questions and legal questions as authority/scope questions."
      ],
      "mustKnow": [
        "PROCESS + AUTHORITY.",
        "Advice = process/evidence; legal = authority/distribution/scope."
      ],
      "commonMistakes": [
        "Many wrong answers are true but answer the wrong issue.",
        "Do not be distracted by answers that are partly true but answer the wrong side of the pair."
      ],
      "examSprint": [
        "PROCESS + AUTHORITY.",
        "Advice = process/evidence; legal = authority/distribution/scope.",
        "Many wrong answers are true but answer the wrong issue."
      ],
      "jumpTargets": {
        "prevDay": 24,
        "nextDay": 26,
        "focusTags": [
          "advice-process",
          "legal"
        ]
      }
    },
    {
      "day": 26,
      "week": 4,
      "title": "Mock readiness and weak-tag repair",
      "theme": "mock",
      "focusTags": [
        "industry",
        "tax",
        "products",
        "advice-process",
        "legal",
        "regulation",
        "consumer-protection"
      ],
      "hours": "45-60 mins",
      "summary": "Strip revision notes down to trigger phrases and fix your worst patterns before doing full mocks.",
      "learn": [
        "Weakness patterns matter more than one-off errors.",
        "Compare-table memory is more useful than reading long notes now."
      ],
      "framework": "TRIGGER → RECALL → ELIMINATE.",
      "trapNotes": [
        "Do not revise only what already feels comfortable."
      ],
      "table": {
        "headers": [
          "Weak signal",
          "Repair move"
        ],
        "rows": [
          [
            "Same mistake again",
            "Build a one-line memory cue"
          ],
          [
            "Two options left",
            "Compare exact wording"
          ],
          [
            "Role confusion",
            "Rebuild the body-function table"
          ]
        ]
      },
      "testQuestionIds": [
        "ext-002",
        "ext-019",
        "ext-033",
        "ext-049",
        "ext-061",
        "ext-071"
      ],
      "frameworkDetails": {
        "name": "TRIGGER → RECALL → ELIMINATE",
        "purpose": "A late-stage mock-repair method for weak tags.",
        "components": [
          [
            "Trigger",
            "Spot the pattern you keep missing."
          ],
          [
            "Recall",
            "Say the correct contrast/fact before opening options fully."
          ],
          [
            "Eliminate",
            "Rule out the confusion pair fast."
          ]
        ],
        "examUse": "Use it on weak-area revision and pre-mock repair.",
        "trap": "Do not spend this day rereading favourite topics instead of fixing repeated mistakes."
      },
      "deepDive": [
        "Weakness patterns matter more than one-off errors.",
        "Compare-table memory is more useful than reading long notes now.",
        "Late-stage revision should focus on repeat-error patterns rather than broad rereading.",
        "If the same confusion appears twice, convert it into a one-line trigger phrase or contrast card immediately."
      ],
      "mustKnow": [
        "TRIGGER → RECALL → ELIMINATE.",
        "Weak-tag repair is more valuable than comfort-zone rereading."
      ],
      "commonMistakes": [
        "Do not revise only what already feels comfortable.",
        "Do not spend this day revising only topics you already like."
      ],
      "examSprint": [
        "TRIGGER → RECALL → ELIMINATE.",
        "Weak-tag repair is more valuable than comfort-zone rereading.",
        "Do not revise only what already feels comfortable."
      ],
      "jumpTargets": {
        "prevDay": 25,
        "nextDay": 27,
        "focusTags": [
          "industry",
          "tax",
          "products",
          "advice-process",
          "legal",
          "regulation",
          "consumer-protection"
        ]
      }
    },
    {
      "day": 27,
      "week": 4,
      "title": "Mock paper A",
      "theme": "mock",
      "focusTags": [
        "industry",
        "tax",
        "products",
        "advice-process",
        "legal",
        "regulation",
        "consumer-protection"
      ],
      "hours": "60 mins",
      "summary": "Run a mixed mock under pressure, then review explanations carefully.",
      "learn": [
        "The goal is pattern detection, not just a score.",
        "Every wrong answer should teach a contrast."
      ],
      "framework": "TIME → ANSWER → REVIEW.",
      "trapNotes": [
        "If you are simulating exam pressure, do not review midway."
      ],
      "table": {
        "headers": [
          "After the mock",
          "Do this"
        ],
        "rows": [
          [
            "Wrong number",
            "Add to fact card"
          ],
          [
            "Wrong role/body",
            "Rebuild comparison table"
          ],
          [
            "Wrong conduct answer",
            "Explain the customer-protection logic"
          ]
        ]
      },
      "testQuestionIds": [
        "src-001",
        "qdt-008",
        "ext-025",
        "ext-043",
        "ext-054",
        "ext-061",
        "ext-071",
        "src-039",
        "src-047",
        "src-060"
      ],
      "frameworkDetails": {
        "name": "TIME → ANSWER → REVIEW",
        "purpose": "Keeps mock discipline simple.",
        "components": [
          [
            "Time",
            "Respect pacing."
          ],
          [
            "Answer",
            "Commit and keep moving."
          ],
          [
            "Review",
            "Analyse errors after the paper, not during it."
          ]
        ],
        "examUse": "Use it in full-paper conditions to avoid paralysis.",
        "trap": "Mid-paper over-review kills timing and realism."
      },
      "deepDive": [
        "The goal is pattern detection, not just a score.",
        "Every wrong answer should teach a contrast.",
        "Mock review is where the learning happens. A wrong answer should always become a contrast: what did I confuse this with?",
        "Full-paper stamina matters, but diagnosis after the mock matters more than the raw score alone."
      ],
      "mustKnow": [
        "TIME → ANSWER → REVIEW.",
        "Use mock errors to create targeted repair notes."
      ],
      "commonMistakes": [
        "If you are simulating exam pressure, do not review midway.",
        "Do not review mid-paper if you are trying to simulate exam conditions."
      ],
      "examSprint": [
        "TIME → ANSWER → REVIEW.",
        "Use mock errors to create targeted repair notes.",
        "If you are simulating exam pressure, do not review midway."
      ],
      "jumpTargets": {
        "prevDay": 26,
        "nextDay": 28,
        "focusTags": [
          "industry",
          "tax",
          "products",
          "advice-process",
          "legal",
          "regulation",
          "consumer-protection"
        ]
      }
    },
    {
      "day": 28,
      "week": 4,
      "title": "Mock paper B",
      "theme": "mock",
      "focusTags": [
        "industry",
        "tax",
        "products",
        "advice-process",
        "legal",
        "regulation",
        "consumer-protection"
      ],
      "hours": "60-75 mins",
      "summary": "Do another mixed mock and compare the pattern of errors with Mock A.",
      "learn": [
        "Mock practice should shrink uncertainty.",
        "Use weak-area mode immediately after finishing."
      ],
      "framework": "MOCK → DIAGNOSE → RETRY.",
      "trapNotes": [
        "Do not just repeat what you already know."
      ],
      "table": {
        "headers": [
          "Error type",
          "Best repair"
        ],
        "rows": [
          [
            "Knowledge gap",
            "Re-read the short note"
          ],
          [
            "Confusion pair",
            "Build compare table"
          ],
          [
            "Rushing",
            "Slow stem reading"
          ]
        ]
      },
      "testQuestionIds": [
        "src-002",
        "qdt-011",
        "ext-029",
        "ext-045",
        "ext-057",
        "ext-065",
        "ext-072",
        "src-040",
        "src-041",
        "src-059"
      ],
      "frameworkDetails": {
        "name": "MOCK → DIAGNOSE → RETRY",
        "purpose": "Turns a mock result into targeted repair work.",
        "components": [
          [
            "Mock",
            "Sit the paper properly."
          ],
          [
            "Diagnose",
            "Sort mistakes into knowledge gap, confusion pair or rushing error."
          ],
          [
            "Retry",
            "Re-test the weak area after repair."
          ]
        ],
        "examUse": "Use it after any mock or mixed paper.",
        "trap": "Do not treat the score alone as revision. The diagnosis is the real value."
      },
      "deepDive": [
        "Mock practice should shrink uncertainty.",
        "Use weak-area mode immediately after finishing.",
        "The second mock should be used to compare error patterns, not just to chase a better percentage.",
        "Look for whether your mistakes are knowledge gaps, confusion pairs or rushing errors — each has a different fix."
      ],
      "mustKnow": [
        "MOCK → DIAGNOSE → RETRY.",
        "Mock → diagnose → retry."
      ],
      "commonMistakes": [
        "Do not just repeat what you already know.",
        "Do not repeat the same correction method for every type of mistake."
      ],
      "examSprint": [
        "MOCK → DIAGNOSE → RETRY.",
        "Mock → diagnose → retry.",
        "Do not just repeat what you already know."
      ],
      "jumpTargets": {
        "prevDay": 27,
        "nextDay": 29,
        "focusTags": [
          "industry",
          "tax",
          "products",
          "advice-process",
          "legal",
          "regulation",
          "consumer-protection"
        ]
      }
    },
    {
      "day": 29,
      "week": 5,
      "title": "Final regulation and protection sprint",
      "theme": "final",
      "focusTags": [
        "regulation",
        "consumer-protection"
      ],
      "hours": "45-60 mins",
      "summary": "A short high-yield sprint for the topics most likely to trip final scores.",
      "learn": [
        "Memorise the body-role distinctions cold.",
        "Trust customer-outcome logic when options are close."
      ],
      "framework": "BODY → ROLE → CUSTOMER OUTCOME.",
      "trapNotes": [
        "A true fact about the wrong body is still wrong."
      ],
      "table": {
        "headers": [
          "Must know",
          "Why"
        ],
        "rows": [
          [
            "FCA vs PRA",
            "Regulatory role distinction"
          ],
          [
            "FOS vs FSCS",
            "Complaint vs failure compensation"
          ],
          [
            "Consumer Duty",
            "Outcome focus"
          ],
          [
            "MLRO / GDPR",
            "Process and protection"
          ]
        ]
      },
      "testQuestionIds": [
        "qdt-001",
        "qdt-004",
        "ext-063",
        "ext-071",
        "ext-072",
        "ext-074",
        "ext-075",
        "ext-080"
      ],
      "frameworkDetails": {
        "name": "BODY → ROLE → CUSTOMER OUTCOME",
        "purpose": "Sharpens final regulation/protection recall under pressure.",
        "components": [
          [
            "Body",
            "Which institution/body is in the stem?"
          ],
          [
            "Role",
            "What is its exact job?"
          ],
          [
            "Customer outcome",
            "Which answer best protects / supports the customer in that context?"
          ]
        ],
        "examUse": "Use it when several institutions appear plausible in a final sprint question.",
        "trap": "A true statement about one body is still wrong if the stem asked about another."
      },
      "deepDive": [
        "Memorise the body-role distinctions cold.",
        "Trust customer-outcome logic when options are close.",
        "This sprint is about high-yield distinctions that decide final marks quickly under pressure.",
        "Customer-outcome logic is often the tie-breaker when regulation and protection options look similar."
      ],
      "mustKnow": [
        "BODY → ROLE → CUSTOMER OUTCOME.",
        "FCA vs PRA and FOS vs FSCS should be instant recall by now."
      ],
      "commonMistakes": [
        "A true fact about the wrong body is still wrong.",
        "Do not let a correct statement about one body steal the answer from the body actually asked about."
      ],
      "examSprint": [
        "BODY → ROLE → CUSTOMER OUTCOME.",
        "FCA vs PRA and FOS vs FSCS should be instant recall by now.",
        "A true fact about the wrong body is still wrong."
      ],
      "jumpTargets": {
        "prevDay": 28,
        "nextDay": 30,
        "focusTags": [
          "regulation",
          "consumer-protection"
        ]
      }
    },
    {
      "day": 30,
      "week": 5,
      "title": "Final consolidation and confidence round",
      "theme": "final",
      "focusTags": [
        "industry",
        "tax",
        "products",
        "advice-process",
        "legal",
        "regulation",
        "consumer-protection"
      ],
      "hours": "45-60 mins",
      "summary": "Use a calm final round to reinforce contrasts, review weak tags and finish with confidence.",
      "learn": [
        "Classification beats panic.",
        "Compare-pair recall is your final safety net.",
        "Use one last short mixed drill, then stop cramming."
      ],
      "framework": "CONTRAST CARDS + CALM EXECUTION.",
      "trapNotes": [
        "If an answer sounds flashy but customer-unfriendly, be suspicious."
      ],
      "table": {
        "headers": [
          "Must-know contrast",
          "Why"
        ],
        "rows": [
          [
            "Mutual vs proprietary",
            "Ownership"
          ],
          [
            "CGT vs IHT vs SDLT",
            "Tax family"
          ],
          [
            "Term vs whole of life",
            "Duration"
          ],
          [
            "Critical illness vs income protection",
            "Lump sum vs income"
          ],
          [
            "FCA vs PRA / FOS vs FSCS",
            "Role distinction"
          ]
        ]
      },
      "testQuestionIds": [
        "ext-003",
        "ext-016",
        "ext-029",
        "ext-031",
        "ext-049",
        "ext-054",
        "ext-061",
        "ext-071",
        "ext-072",
        "ext-080"
      ],
      "frameworkDetails": {
        "name": "CONTRAST CARDS + CALM EXECUTION",
        "purpose": "Final-day reminder that clean distinctions beat panic cramming.",
        "components": [
          [
            "Contrast cards",
            "Review ownership, tax triggers, product purpose, authority and regulator roles in pairs."
          ],
          [
            "Calm execution",
            "Trust retrieval and clear elimination rather than last-minute overload."
          ]
        ],
        "examUse": "Use it for your final pass before the exam and during last-day revision.",
        "trap": "Do not add new material so late that you lose clarity and confidence."
      },
      "deepDive": [
        "Classification beats panic.",
        "Compare-pair recall is your final safety net.",
        "Use one last short mixed drill, then stop cramming.",
        "The final day should reinforce calm pattern recognition, not create panic by adding new material.",
        "Your safest last-minute technique is contrast recall: ownership, tax trigger, protection purpose, legal authority, regulatory role."
      ],
      "mustKnow": [
        "CONTRAST CARDS + CALM EXECUTION.",
        "Final success comes from clean contrasts and calm execution."
      ],
      "commonMistakes": [
        "If an answer sounds flashy but customer-unfriendly, be suspicious.",
        "Do not keep cramming right up to the point you lose clarity."
      ],
      "examSprint": [
        "CONTRAST CARDS + CALM EXECUTION.",
        "Final success comes from clean contrasts and calm execution.",
        "If an answer sounds flashy but customer-unfriendly, be suspicious."
      ],
      "jumpTargets": {
        "prevDay": 29,
        "nextDay": null,
        "focusTags": [
          "industry",
          "tax",
          "products",
          "advice-process",
          "legal",
          "regulation",
          "consumer-protection"
        ]
      }
    }
  ],
  "questionBank": [
    {
      "id": "src-001",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "industry"
      ],
      "q": "The main function of the financial services industry is to:",
      "opts": [
        "Regulate banks",
        "Transfer funds between individuals, businesses and government",
        "Issue government bonds",
        "Set interest rates"
      ],
      "a": 1,
      "ex": "The FS industry transfers funds between those with surplus capital and those who need it."
    },
    {
      "id": "src-002",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "industry"
      ],
      "q": "Which of the following is a retail banking institution?",
      "opts": [
        "Investment bank",
        "Building society",
        "Wholesale bank",
        "Pension fund"
      ],
      "a": 1,
      "ex": "Building societies are retail banks owned by members, focusing on private customers."
    },
    {
      "id": "src-003",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "industry"
      ],
      "q": "Peer-to-Peer lending is an example of:",
      "opts": [
        "Disintermediation",
        "Intermediation",
        "Bank intermediation",
        "Wholesale banking"
      ],
      "a": 0,
      "ex": "P2P bypasses traditional banks = disintermediation (direct lender-borrower connection)."
    },
    {
      "id": "src-004",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "industry"
      ],
      "q": "Credit unions are regulated by which body?",
      "opts": [
        "PRA",
        "FCA",
        "Bank of England",
        "HMTreasury"
      ],
      "a": 1,
      "ex": "Credit unions are regulated by the FCA under the Credit Unions Act 1979."
    },
    {
      "id": "src-005",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "industry"
      ],
      "q": "The Bank of England acts as Lender of Last Resort to:",
      "opts": [
        "Individual borrowers",
        "Commercial banks",
        "Retail customers",
        "Government departments"
      ],
      "a": 1,
      "ex": "BoE provides emergency liquidity to banks via the Discount Window Facility."
    },
    {
      "id": "src-006",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "industry"
      ],
      "q": "Which body sets the Bank of England base rate?",
      "opts": [
        "FCA",
        "MPC (Monetary Policy Committee)",
        "PRA",
        "HM Treasury"
      ],
      "a": 1,
      "ex": "The MPC meets 8 times/year to set Bank Rate for the UK's monetary policy."
    },
    {
      "id": "src-007",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "industry"
      ],
      "q": "The inflation target set by the UK government for the MPC is:",
      "opts": [
        "1%",
        "2%",
        "3%",
        "5%"
      ],
      "a": 1,
      "ex": "MPC targets 2% CPI inflation. If inflation deviates >1% from target, MPC must write to Chancellor."
    },
    {
      "id": "src-008",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products"
      ],
      "q": "Government securities (Gilts) are traded in the:",
      "opts": [
        "Money market",
        "Capital market",
        "Retail market",
        "Interbank market"
      ],
      "a": 1,
      "ex": "Gilts are long-term government bonds traded in the capital market (FTSE)."
    },
    {
      "id": "src-009",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "industry"
      ],
      "q": "Which of the following is NOT a money market instrument?",
      "opts": [
        "Treasury Bill",
        "Commercial Paper",
        "UK Government Gilt",
        "Bank Deposit"
      ],
      "a": 2,
      "ex": "Gilts are capital market instruments (long-term >1yr); Treasury Bills are money market."
    },
    {
      "id": "src-010",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products"
      ],
      "q": "A corporate bond with a fixed rate of interest paid semi-annually is called a:",
      "opts": [
        "Equity",
        "Eurobond",
        "Convertible bond",
        "Index-linked gilt"
      ],
      "a": 1,
      "ex": "Eurobonds are international bonds, often fixed-rate, issued outside the borrower's home country."
    },
    {
      "id": "src-011",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products"
      ],
      "q": "The main advantage of investing in equities is:",
      "opts": [
        "Guaranteed income",
        "Capital growth potential",
        "Low risk",
        "Tax efficiency"
      ],
      "a": 1,
      "ex": "Equities offer capital growth (and dividends) but carry higher risk than bonds."
    },
    {
      "id": "src-012",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products"
      ],
      "q": "Commercial property is classified as what type of investment?",
      "opts": [
        "Cash",
        "Bonds",
        "Real estate",
        "Collective investment"
      ],
      "a": 2,
      "ex": "Residential and commercial property are direct real estate investments."
    },
    {
      "id": "src-013",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products",
        "tax"
      ],
      "q": "An ISA (Individual Savings Account) wrapper provides:",
      "opts": [
        "Higher returns than normal accounts",
        "Tax-free returns",
        "Government guarantee",
        "Fixed interest rates"
      ],
      "a": 1,
      "ex": "ISAs provide a tax-free environment for savings (Cash ISA) and investments (Stocks & Shares ISA)."
    },
    {
      "id": "src-014",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products",
        "tax"
      ],
      "q": "The annual ISA subscription limit for 2024/25 is:",
      "opts": [
        "£10,000",
        "£15,000",
        "£20,000",
        "£25,000"
      ],
      "a": 2,
      "ex": "The adult ISA subscription limit is £20,000 for 2024/25 (all types combined)."
    },
    {
      "id": "src-015",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products"
      ],
      "q": "A With-Profits endowment policy aims to:",
      "opts": [
        "Provide maximum returns immediately",
        "Smooth returns via bonuses",
        "Provide pure protection",
        "Eliminate investment risk"
      ],
      "a": 1,
      "ex": "With-profits policies smooth investment returns through regular and final bonuses."
    },
    {
      "id": "src-016",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products"
      ],
      "q": "Unit-linked endowment policies are also known as:",
      "opts": [
        "With-profits",
        "Non-profit",
        "Investment-linked",
        "Capital guaranteed"
      ],
      "a": 2,
      "ex": "Unit-linked = value moves with underlying fund; charges are higher but potential returns greater."
    },
    {
      "id": "src-017",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products"
      ],
      "q": "The State Pension age in the UK is currently:",
      "opts": [
        "60 (women), 65 (men)",
        "66 for both",
        "67 for both",
        "68 for both"
      ],
      "a": 2,
      "ex": "State Pension age is 66 for both men and women (2020-2026), rising to 67 by 2028."
    },
    {
      "id": "src-018",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products"
      ],
      "q": "A critical illness policy pays out:",
      "opts": [
        "Monthly income on disability",
        "A lump sum on diagnosis of a specified illness",
        "Annuity payments",
        "Death benefit only"
      ],
      "a": 1,
      "ex": "Critical Illness Cover pays a lump sum on diagnosis of specified serious illness (e.g., cancer, heart attack)."
    },
    {
      "id": "src-019",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "regulation"
      ],
      "q": "The FCA's primary operational objective is:",
      "opts": [
        "Maximum profit for banks",
        "Market integrity + Consumer protection",
        "Low interest rates",
        "Economic growth"
      ],
      "a": 1,
      "ex": "FCA has three operational objectives: Consumer Protection, Market Integrity, and Competition."
    },
    {
      "id": "src-020",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "regulation"
      ],
      "q": "The PRA's primary objective is:",
      "opts": [
        "Consumer protection",
        "Safety and soundness of firms",
        "Competition in markets",
        "Financial inclusion"
      ],
      "a": 1,
      "ex": "PRA (Prudential Regulation Authority) focuses on safety and soundness of deposit-takers."
    },
    {
      "id": "src-021",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "regulation"
      ],
      "q": "SMCR applies to:",
      "opts": [
        "All financial services firms",
        "Banks only",
        "Insurance companies only",
        "Investment firms only"
      ],
      "a": 0,
      "ex": "Senior Managers & Certification Regime applies to all FCA/PRA regulated firms."
    },
    {
      "id": "src-022",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "regulation"
      ],
      "q": "Under SMCR, a Senior Manager must have a:",
      "opts": [
        "Annual bonus",
        "Statement of Responsibilities",
        "FCA approval number",
        "Professional indemnity insurance"
      ],
      "a": 1,
      "ex": "Senior Managers must have a Statement of Responsibilities, approved by the FCA."
    },
    {
      "id": "src-023",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "regulation"
      ],
      "q": "The Consumer Duty requires firms to act to deliver:",
      "opts": [
        "Maximum profits",
        "Good outcomes for retail customers",
        "Best execution only",
        "Lowest costs always"
      ],
      "a": 1,
      "ex": "Consumer Duty has 4 outcomes: Products & Services, Price & Value, Consumer Understanding, Consumer Support."
    },
    {
      "id": "src-024",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "regulation"
      ],
      "q": "A financial promotion must be:",
      "opts": [
        "Approved by the FCA before publication",
        "Clear, fair and not misleading",
        "Written in legal jargon",
        "Filed with Companies House"
      ],
      "a": 1,
      "ex": "FSMA 2000 requires all financial promotions to be clear, fair and not misleading."
    },
    {
      "id": "src-025",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "consumer-protection"
      ],
      "q": "The FSCS deposit protection limit is:",
      "opts": [
        "£50,000",
        "£75,000",
        "£85,000",
        "£100,000"
      ],
      "a": 2,
      "ex": "FSCS protects deposits up to £85,000 per person per institution (from 2016)."
    },
    {
      "id": "src-026",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "consumer-protection"
      ],
      "q": "The FOS compensation limit for claims is:",
      "opts": [
        "£250,000",
        "£350,000",
        "£430,000",
        "£500,000"
      ],
      "a": 2,
      "ex": "FOS compensation limit is £430,000 (from April 2024) per upheld claim."
    },
    {
      "id": "src-027",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "advice-process"
      ],
      "q": "A vulnerability flag in a factfind indicates:",
      "opts": [
        "The client is fraudulent",
        "The client may need additional support or protection",
        "The advisor must reject the client",
        "The case needs special pricing"
      ],
      "a": 1,
      "ex": "Vulnerable clients (health, life events, financial difficulty) need additional care under Consumer Duty."
    },
    {
      "id": "src-028",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "legal"
      ],
      "q": "The Consumer Rights Act 2015 covers:",
      "opts": [
        "Financial services only",
        "Goods, services and digital content",
        "Mortgages only",
        "Insurance only"
      ],
      "a": 1,
      "ex": "Consumer Rights Act covers goods, services, and digital content — not financial services."
    },
    {
      "id": "src-029",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "legal"
      ],
      "q": "A regulated mortgage contract must be for:",
      "opts": [
        "Business purposes only",
        "Purchase or redemption of land",
        "Speculation only",
        "Car finance only"
      ],
      "a": 1,
      "ex": "A regulated mortgage (MCOB) requires: credit + land + borrower is an individual/trustee."
    },
    {
      "id": "src-030",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "legal"
      ],
      "q": "The Consumer Credit Act 1974 covers loans below:",
      "opts": [
        "£10,000",
        "£25,000",
        "£50,000",
        "£100,000"
      ],
      "a": 1,
      "ex": "CCA 1974 regulates consumer credit agreements below £25,000 (and all consumer hires)."
    },
    {
      "id": "src-031",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products",
        "tax"
      ],
      "q": "Class 2 National Insurance Contributions for self-employed were:",
      "opts": [
        "Still required at £3.45/week",
        "Abolished from 2024/25",
        "Set at £12.50/week",
        "Voluntary only"
      ],
      "a": 1,
      "ex": "Class 2 NICs abolished from 6 April 2024; self-employed still pay Class 4."
    },
    {
      "id": "src-032",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "tax"
      ],
      "q": "The CGT annual exempt amount for 2024/25 is:",
      "opts": [
        "£6,000",
        "£10,300",
        "£12,300",
        "£15,000"
      ],
      "a": 2,
      "ex": "CGT AEA is £12,300 for 2024/25 (basic rate taxpayer; lower for higher rate)."
    },
    {
      "id": "src-033",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "tax"
      ],
      "q": "The IHT nil-rate band is:",
      "opts": [
        "£125,000",
        "£250,000",
        "£325,000",
        "£500,000"
      ],
      "a": 2,
      "ex": "IHT nil-rate band is £325,000; above this, rate is 40% (25% on certain trusts)."
    },
    {
      "id": "src-034",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "tax"
      ],
      "q": "Inheritance Tax is charged at 40% on the value of an estate above the:",
      "opts": [
        "Annual exempt amount",
        "Nil-rate band",
        "Available nil-rate band",
        "Residence nil-rate band"
      ],
      "a": 1,
      "ex": "IHT at 40% applies to estate value above the nil-rate band of £325,000."
    },
    {
      "id": "src-035",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "tax"
      ],
      "q": "The SDLT first-time buyer relief raises the threshold to:",
      "opts": [
        "£300,000",
        "£425,000",
        "£500,000",
        "£625,000"
      ],
      "a": 1,
      "ex": "FTB relief: no SDLT on first £425,000 (max £625,000 property), 5% on £425k-£625k."
    },
    {
      "id": "src-036",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products",
        "tax"
      ],
      "q": "Capital Gains Tax on residential property is now charged at:",
      "opts": [
        "18% and 28%",
        "20% and 28%",
        "24%",
        "10% and 20%"
      ],
      "a": 0,
      "ex": "Residential property CGT: 18% (basic) and 28% (higher/additional rate) from 2024/25."
    },
    {
      "id": "src-037",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products"
      ],
      "q": "Annuities provide:",
      "opts": [
        "A guaranteed lump sum",
        "Income for a set term or lifetime",
        "Capital growth",
        "Tax-free withdrawals"
      ],
      "a": 1,
      "ex": "An annuity pays income for life or a set term; once purchased, most are irrevocable."
    },
    {
      "id": "src-038",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products"
      ],
      "q": "A relevant life assurance policy is:",
      "opts": [
        "A personal policy",
        "A business policy paying to the employer",
        "A state benefit",
        "A pension contribution"
      ],
      "a": 1,
      "ex": "Relevant Life Assurance is a death-in-service benefit paid to the employer (then to dependants)."
    },
    {
      "id": "src-039",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "consumer-protection"
      ],
      "q": "Which is NOT a vulnerable client indicator?",
      "opts": [
        "Health conditions affecting finances",
        "Recent bereavement",
        "Stable employment",
        "Cognitive decline"
      ],
      "a": 2,
      "ex": "Stable employment is generally positive; vulnerability flags include health, life events, financial stress."
    },
    {
      "id": "src-040",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "consumer-protection"
      ],
      "q": "GDPR requires data breaches to be reported to ICO within:",
      "opts": [
        "24 hours",
        "48 hours",
        "72 hours",
        "7 days"
      ],
      "a": 2,
      "ex": "GDPR: report to ICO within 72 hours of becoming aware of a personal data breach."
    },
    {
      "id": "src-041",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "consumer-protection"
      ],
      "q": "GDPR maximum fine is the greater of:",
      "opts": [
        "£500,000 or 1% global turnover",
        "£10m or 2% global turnover",
        "£17.5m or 4% global turnover",
        "£1m or 0.5% global turnover"
      ],
      "a": 2,
      "ex": "GDPR Tier 2: up to £17.5m or 4% of total annual worldwide turnover."
    },
    {
      "id": "src-042",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "regulation"
      ],
      "q": "FCA的兩個法定目標是什麼？",
      "opts": [
        "Market integrity + Consumer protection",
        "Price stability + Economic growth",
        "Safety + Soundness",
        "Competition + Innovation"
      ],
      "a": 0,
      "ex": "<strong>答案：Market integrity + Consumer protection</strong><br>FCA法定目標：①市場誠信 ②消費者保護。PRA目標才是Safety and soundness。 [From RG MCQ]"
    },
    {
      "id": "src-043",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "regulation"
      ],
      "q": "Consumer Duty包含多少個 Outcomes？",
      "opts": [
        "2個",
        "3個",
        "4個",
        "5個"
      ],
      "a": 2,
      "ex": "<strong>答案：4個 Outcomes</strong><br>Consumer Duty（2023年7月生效）4個outcomes：①Products & Services ②Price & Value ③Consumer Understanding ④Consumer Support。 [From RG MCQ]"
    },
    {
      "id": "src-044",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "regulation"
      ],
      "q": "SMCR中，Senior Managers需要準備什麼文件？",
      "opts": [
        "Compliance statement",
        "Statement of Responsibilities",
        "Conduct rules certification",
        "Regulatory business plan"
      ],
      "a": 1,
      "ex": "<strong>答案：Statement of Responsibilities</strong><br>Senior Managers必須有Statement of Responsibilities，明確列出負責的監管職能。 [From RG MCQ]"
    },
    {
      "id": "src-045",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "consumer-protection"
      ],
      "q": "FOS對金融投訴的最高補償限額是多少？",
      "opts": [
        "£150,000",
        "£350,000",
        "£430,000",
        "£500,000"
      ],
      "a": 2,
      "ex": "<strong>答案：£430,000（2024年4月起）</strong><br>FOS最高補償上限£430,000。FSCS存款保障上限£85,000。 [From RG MCQ]"
    },
    {
      "id": "src-046",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "consumer-protection"
      ],
      "q": "FSCS存款保障計劃的上限是多少？",
      "opts": [
        "£50,000",
        "£75,000",
        "£85,000",
        "£100,000"
      ],
      "a": 2,
      "ex": "<strong>答案：£85,000 per person</strong><br>FSCS對存款保障上限£85,000 per person（每個金融機構）。 [From RG MCQ]"
    },
    {
      "id": "src-047",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "consumer-protection"
      ],
      "q": "GDPR最高罰款是多少？",
      "opts": [
        "£5 million",
        "£10 million",
        "£17.5 million or 4% 全球營業額",
        "£50 million"
      ],
      "a": 2,
      "ex": "<strong>答案：£17.5 million 或 4% 全球營業額（以較高者為準）</strong><br>GDPR兩級罰款：最高級£17.5m/4%營業額；較低級£8.7m/2%營業額。 [From RG MCQ]"
    },
    {
      "id": "src-048",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "consumer-protection"
      ],
      "q": "POCA 2002中，MLRO的職責是什麼？",
      "opts": [
        "Marketing compliance",
        "Money Laundering Reporting Officer（洗黑錢舉報主任）",
        "Mortgages product layout",
        "Regulatory capital management"
      ],
      "a": 1,
      "ex": "<strong>答案：Money Laundering Reporting Officer（MLRO）</strong><br>POCA 2002要求任命MLRO，負責監督反洗黑錢合規、接收內部SAR、向外匯報可疑交易。 [From RG MCQ]"
    },
    {
      "id": "src-049",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "tax"
      ],
      "q": "2024/25 Income Tax Personal Allowance 是多少？",
      "opts": [
        "£10,570",
        "£12,570",
        "£14,570",
        "£12,500"
      ],
      "a": 1,
      "ex": "<strong>答案：£12,570</strong><br>2024/25年度Personal Allowance為£12,570。收入超過£100,000，PA按每£2收入減少£1遞減。 [From RG MCQ]"
    },
    {
      "id": "src-050",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "tax"
      ],
      "q": "CGT Annual Exempt Amount 是多少？",
      "opts": [
        "£6,000",
        "£12,300",
        "£24,600",
        "£3,000"
      ],
      "a": 1,
      "ex": "<strong>答案：£12,300</strong><br>CGT年度免稅額£12,300（2024/25）。基本稅率納稅人18%，高薪納稅人28%。 [From RG MCQ]"
    },
    {
      "id": "src-051",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "tax"
      ],
      "q": "IHT Nil-Rate Band 是多少？",
      "opts": [
        "£162,500",
        "£250,000",
        "£325,000",
        "£500,000"
      ],
      "a": 2,
      "ex": "<strong>答案：£325,000</strong><br>IHT零稅率帶£325,000。超過部分40%稅率。Residence Nil-Rate Band額外£175,000。 [From RG MCQ]"
    },
    {
      "id": "src-052",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "tax"
      ],
      "q": "SDLT首置免稅額是多少？",
      "opts": [
        "£125,000",
        "£250,000",
        "£425,000",
        "£500,000"
      ],
      "a": 1,
      "ex": "<strong>答案：£250,000</strong><br>首置買家SDLT免稅額£250,000（房產價值£425,000以下部分）。 [From RG MCQ]"
    },
    {
      "id": "src-053",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products",
        "tax"
      ],
      "q": "2024/25 ISA 訂閱上限是多少？",
      "opts": [
        "£15,000",
        "£17,000",
        "£20,000",
        "£25,000"
      ],
      "a": 2,
      "ex": "<strong>答案：£20,000</strong><br>2024/25年度ISA訂閱上限£20,000。Cash ISA/Stocks & Shares ISA/Innovative Finance ISA可自由分配。 [From RG MCQ]"
    },
    {
      "id": "src-054",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "consumer-protection"
      ],
      "q": "以下哪種產品不受 FSCS 保障？",
      "opts": [
        "銀行存款",
        "政府債券",
        "P2P借貸",
        "人壽保險"
      ],
      "a": 2,
      "ex": "<strong>答案：P2P借貸</strong><br>P2P借貸不受FSCS保障。銀行存款受£85,000保障，政府債券由政府擔保。 [From RG MCQ]"
    },
    {
      "id": "src-055",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products"
      ],
      "q": "Critical Illness Cover 的主要特點是？",
      "opts": [
        "每月支付固定金額直到死亡",
        "確診指定疾病即時支付一筆過款項",
        "支付醫療費用實報實銷",
        "只保障意外死亡"
      ],
      "a": 1,
      "ex": "<strong>答案：確診指定疾病即時支付一筆過款項</strong><br>Critical Illness Cover確診指定嚴重疾病時一次性支付款項。建議以Trust形式寫入。 [From RG MCQ]"
    },
    {
      "id": "src-056",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products"
      ],
      "q": "Annuity（年金）的主要特點是？",
      "opts": [
        "永久支付直到投保人死亡",
        "支付固定年期",
        "可隨時提取",
        "投資性質為主"
      ],
      "a": 0,
      "ex": "<strong>答案：永久支付直到投保人死亡</strong><br>Annuity在投保人生存期間支付，死亡後停止（除非有保證期）。 [From RG MCQ]"
    },
    {
      "id": "src-057",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "products"
      ],
      "q": "With-Profits Endowment 的紅利分配方式是？",
      "opts": [
        "固定利率",
        "平滑回報（smoothing）",
        "每年遞增",
        "與通脹掛鉤"
      ],
      "a": 1,
      "ex": "<strong>答案：平滑回報（smoothing）</strong><br>With-Profits Endowment通過平滑機制分配紅利，減少回報波動。 [From RG MCQ]"
    },
    {
      "id": "src-058",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "consumer-protection"
      ],
      "q": "Consumer Insurance Act 2012的主要改變是？",
      "opts": [
        "強制所有保險使用標準表格",
        "消費者只需回答被問及的問題",
        "所有保費必須公開",
        "保險投訴時效延長至3年"
      ],
      "a": 1,
      "ex": "<strong>答案：消費者只需回答被問及的問題</strong><br>Consumer Insurance Act 2012改變了披露責任：消費者只需如實回答被問及的問題。 [From RG MCQ]"
    },
    {
      "id": "src-059",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "legal"
      ],
      "q": "Consumer Credit Act 1974監管的信貸協議是？",
      "opts": [
        "所有公司借貸",
        "非公司借款人 + 信用額低於 £25,000",
        "所有住宅按揭",
        "所有商業貸款"
      ],
      "a": 1,
      "ex": "<strong>答案：非公司借款人 + 信用額低於 £25,000</strong><br>CCA 1974監管：借款人是個人 + 信用額低於£25,000。住宅按揭受FSMA + MCOB監管。 [From RG MCQ]"
    },
    {
      "id": "src-060",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "legal"
      ],
      "q": "Consumer Credit Act 1974監管的信貸協議門檻是？",
      "opts": [
        "£10,000",
        "£25,000",
        "£50,000",
        "£100,000"
      ],
      "a": 1,
      "ex": "<strong>答案：£25,000</strong><br>CCA 1974監管信用額低於£25,000的非公司借款人信貸協議。 [From RG MCQ]"
    },
    {
      "id": "src-061",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide / extracted study bank",
      "kind": "source-derived",
      "tags": [
        "legal"
      ],
      "q": "Intestacy（無遺囑）下，配偶優先繼承權是多少？",
      "opts": [
        "全部遺產",
        "第一 £250,000 + 一半剩餘",
        "一半遺產",
        "£125,000"
      ],
      "a": 1,
      "ex": "<strong>答案：第一 £250,000 + 一半剩餘</strong><br>配偶優先：第一£250,000遺產 + 剩餘財產的一半。另一半由子女均分。 [From RG MCQ]"
    },
    {
      "id": "qdt-001",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "regulation"
      ],
      "q": "Which FCA objective is most closely linked to protecting retail customers?",
      "opts": [
        "Safety and soundness",
        "Consumer protection",
        "Fiscal policy",
        "Monetary policy"
      ],
      "a": 1,
      "ex": "The FCA is primarily the conduct regulator, and consumer protection sits at the centre of its statutory objectives and wider rulebook."
    },
    {
      "id": "qdt-002",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "regulation",
        "consumer-protection"
      ],
      "q": "How many Consumer Duty outcomes are normally tested in current CeMAP 1 revision?",
      "opts": [
        "2",
        "3",
        "4",
        "5"
      ],
      "a": 2,
      "ex": "The four outcomes are products and services, price and value, consumer understanding, and consumer support."
    },
    {
      "id": "qdt-003",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "regulation"
      ],
      "q": "Under SMCR, which document sets out what a senior manager is responsible for?",
      "opts": [
        "Compliance certificate",
        "Statement of Responsibilities",
        "Complaints register",
        "Product governance plan"
      ],
      "a": 1,
      "ex": "A Statement of Responsibilities is a core SMCR document and helps allocate accountability within a regulated firm."
    },
    {
      "id": "qdt-004",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "consumer-protection",
        "regulation"
      ],
      "q": "What is the key difference between FOS and FSCS?",
      "opts": [
        "FOS sets conduct rules; FSCS sets prudential rules",
        "FOS resolves complaints; FSCS can pay compensation when firms fail",
        "FOS only covers banks; FSCS only covers insurers",
        "There is no difference"
      ],
      "a": 1,
      "ex": "This distinction is a classic CeMAP memory point: complaint redress vs compensation after firm failure."
    },
    {
      "id": "qdt-005",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "consumer-protection"
      ],
      "q": "Which statement best describes the FSCS deposit limit commonly tested in revision?",
      "opts": [
        "A protection limit applies per eligible person per authorised institution",
        "Every investment is fully guaranteed",
        "It applies only to mortgage balances",
        "It covers market losses on shares"
      ],
      "a": 0,
      "ex": "The key point is the structure of protection: per person, per authorised firm, within the relevant limits and scope."
    },
    {
      "id": "qdt-006",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "consumer-protection"
      ],
      "q": "Under GDPR, what is the strongest general rule for advisers handling client data?",
      "opts": [
        "Use data however is commercially useful",
        "Process personal data lawfully and securely",
        "Keep data forever without review",
        "Share data freely inside any group company"
      ],
      "a": 1,
      "ex": "CeMAP focuses on lawful processing, appropriate security, and proper handling of personal data."
    },
    {
      "id": "qdt-007",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "consumer-protection"
      ],
      "q": "What does MLRO stand for?",
      "opts": [
        "Mortgage Lending Review Officer",
        "Money Laundering Reporting Officer",
        "Market Liquidity Reporting Office",
        "Member Lending Resolution Officer"
      ],
      "a": 1,
      "ex": "The MLRO oversees internal anti-money-laundering reporting and escalates suspicious matters appropriately."
    },
    {
      "id": "qdt-008",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "tax"
      ],
      "q": "What is the personal allowance usually remembered as for 2024/25 CeMAP revision?",
      "opts": [
        "£10,570",
        "£12,570",
        "£14,570",
        "£15,000"
      ],
      "a": 1,
      "ex": "The usual revision anchor is the personal allowance figure and the fact that high income can taper it away."
    },
    {
      "id": "qdt-009",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "tax"
      ],
      "q": "CGT is most closely associated with:",
      "opts": [
        "Income received from employment",
        "Chargeable gains on disposal of assets",
        "VAT on purchases",
        "Insurance premiums"
      ],
      "a": 1,
      "ex": "Capital Gains Tax applies to chargeable gains made on disposal, not ordinary income."
    },
    {
      "id": "qdt-010",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "tax"
      ],
      "q": "Which tax is most closely associated with estates and transfers on death?",
      "opts": [
        "VAT",
        "Corporation Tax",
        "Inheritance Tax",
        "Council Tax"
      ],
      "a": 2,
      "ex": "Inheritance Tax is the main CeMAP estate tax topic and is often tested alongside nil-rate band concepts."
    },
    {
      "id": "qdt-011",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "tax"
      ],
      "q": "Which tax is most directly linked to property purchases in England?",
      "opts": [
        "Capital Gains Tax",
        "Insurance Premium Tax",
        "Stamp Duty Land Tax",
        "Income Tax"
      ],
      "a": 2,
      "ex": "SDLT is the transaction tax commonly tested for property purchases in England."
    },
    {
      "id": "qdt-012",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "tax",
        "products"
      ],
      "q": "An ISA is best described as:",
      "opts": [
        "A type of equity",
        "A tax wrapper",
        "A government bond",
        "A life assurance policy"
      ],
      "a": 1,
      "ex": "CeMAP commonly tests the wrapper-vs-asset distinction. An ISA is the wrapper, not the underlying investment."
    },
    {
      "id": "qdt-013",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "products",
        "consumer-protection"
      ],
      "q": "Which option is least likely to carry FSCS protection against investment-style loss?",
      "opts": [
        "A bank deposit in scope",
        "An eligible insurance contract in scope",
        "Peer-to-peer lending performance",
        "A protected cash account"
      ],
      "a": 2,
      "ex": "P2P lending is a common revision warning because normal investment or borrower default risk is not turned into a blanket FSCS guarantee."
    },
    {
      "id": "qdt-014",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "products"
      ],
      "q": "Critical illness cover is mainly designed to:",
      "opts": [
        "Provide a life-long pension income",
        "Pay a lump sum on diagnosis of a specified serious condition",
        "Repay all debts automatically",
        "Cover normal GP visits"
      ],
      "a": 1,
      "ex": "Critical illness cover is generally remembered as a lump-sum product triggered by specified serious illnesses."
    },
    {
      "id": "qdt-015",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "products"
      ],
      "q": "What is the usual CeMAP memory hook for an annuity?",
      "opts": [
        "Tax-free capital growth only",
        "Income while the annuitant remains alive",
        "A high-liquidity cash wrapper",
        "Guaranteed inheritance for children"
      ],
      "a": 1,
      "ex": "An annuity is normally tested as a retirement-income product linked to life expectancy and option selection."
    },
    {
      "id": "qdt-016",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "products"
      ],
      "q": "With-profits funds are often linked with which feature?",
      "opts": [
        "Purely fixed interest",
        "Smoothing of returns",
        "No investment risk",
        "Daily dealing only"
      ],
      "a": 1,
      "ex": "Smoothing is the standard memory cue used to describe the way with-profits bonuses are distributed over time."
    },
    {
      "id": "qdt-017",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "consumer-protection",
        "legal"
      ],
      "q": "Under the Consumer Insurance Act changes, what is the consumer mainly expected to do?",
      "opts": [
        "Volunteer every possible fact unprompted",
        "Answer the insurer’s clear questions honestly",
        "Draft the insurer’s underwriting policy",
        "Guarantee the claim will be paid"
      ],
      "a": 1,
      "ex": "The revision point is that consumers answer the questions asked, rather than carry the old duty to volunteer every material fact."
    },
    {
      "id": "qdt-018",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "legal",
        "consumer-protection"
      ],
      "q": "Why do older CeMAP materials mention a Consumer Credit Act threshold?",
      "opts": [
        "To separate certain consumer-credit agreements from other types of regulated borrowing",
        "To calculate mortgage affordability",
        "To set the Bank Rate",
        "To determine probate"
      ],
      "a": 0,
      "ex": "The threshold concept is examined to show scope rules. For this app, use it as UKFR background rather than mortgage-specific logic."
    },
    {
      "id": "qdt-019",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "legal"
      ],
      "q": "Intestacy questions usually test what core idea?",
      "opts": [
        "How investment funds are priced",
        "How an estate may be distributed when no valid will exists",
        "How insurers set premiums",
        "How the PRA sets capital rules"
      ],
      "a": 1,
      "ex": "Intestacy is about what happens when a person dies without a valid will, including who may inherit under the rules."
    },
    {
      "id": "qdt-020",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "tax"
      ],
      "q": "Why are residence and domicile important in CeMAP 1 tax questions?",
      "opts": [
        "They affect tax treatment",
        "They decide complaint jurisdiction only",
        "They set mortgage interest rates",
        "They replace estate planning"
      ],
      "a": 0,
      "ex": "Residence and domicile are tax-status concepts. They matter because tax exposure can vary depending on status and circumstances."
    },
    {
      "id": "qdt-021",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "regulation",
        "consumer-protection"
      ],
      "q": "Which Consumer Duty outcome is most closely linked to helping retail customers make effective, timely and informed decisions?",
      "opts": [
        "Consumer understanding",
        "Consumer support",
        "Products and services",
        "Price and value"
      ],
      "a": 0,
      "ex": "Consumer understanding is the outcome that focuses on communications supporting effective, timely and properly informed decisions."
    },
    {
      "id": "qdt-022",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "regulation"
      ],
      "q": "If an unauthorised firm wants a financial promotion communicated lawfully, what is the key exam clue?",
      "opts": [
        "It only needs to look professional",
        "It must be approved by an authorised person",
        "It must mention the FSCS",
        "It must avoid all product comparisons"
      ],
      "a": 1,
      "ex": "A classic promotions point is that approval by an authorised person may be needed before communication by an unauthorised person."
    },
    {
      "id": "qdt-023",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "consumer-protection",
        "regulation"
      ],
      "q": "A customer complaint about a firm’s service is most closely associated with which route if unresolved internally?",
      "opts": [
        "PRA capital rules",
        "FSCS deposit protection",
        "Financial Ombudsman Service",
        "Monetary Policy Committee"
      ],
      "a": 2,
      "ex": "Service complaints and redress are linked with the Financial Ombudsman Service, not with prudential regulation or failure compensation."
    },
    {
      "id": "qdt-024",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook / extracted quick-check",
      "kind": "adapted",
      "tags": [
        "consumer-protection"
      ],
      "q": "An employee who spots suspicious activity should normally do what first within the firm process?",
      "opts": [
        "Confront the client immediately",
        "Use the internal AML reporting route to the MLRO",
        "Send the file to the FSCS",
        "Delete the records to avoid a breach"
      ],
      "a": 1,
      "ex": "CeMAP rewards process discipline here: internal reporting and MLRO escalation, not improvisation."
    },
    {
      "id": "ext-001",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "industry"
      ],
      "q": "Why is financial intermediation important in the wider economy?",
      "opts": [
        "It removes all risk from borrowing",
        "It channels funds from savers to borrowers and users of capital",
        "It replaces tax collection",
        "It prevents inflation"
      ],
      "a": 1,
      "ex": "CeMAP repeatedly frames the financial-services sector as an intermediary between surplus and deficit sectors."
    },
    {
      "id": "ext-002",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "industry"
      ],
      "q": "Which body is most closely associated with setting the Bank Rate through monetary policy decisions?",
      "opts": [
        "FCA",
        "FSCS",
        "Monetary Policy Committee",
        "Financial Ombudsman Service"
      ],
      "a": 2,
      "ex": "Base-rate decisions are linked to the Bank of England’s Monetary Policy Committee."
    },
    {
      "id": "ext-003",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "industry"
      ],
      "q": "A proprietary organisation is usually owned by:",
      "opts": [
        "members",
        "policyholders only",
        "shareholders",
        "the Treasury"
      ],
      "a": 2,
      "ex": "The CeMAP contrast is basic: mutual = members, proprietary = shareholders."
    },
    {
      "id": "ext-004",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "industry"
      ],
      "q": "A mutual organisation is usually owned by:",
      "opts": [
        "shareholders",
        "members",
        "bondholders",
        "appointed representatives"
      ],
      "a": 1,
      "ex": "Mutuals are member-owned organisations."
    },
    {
      "id": "ext-005",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "industry"
      ],
      "q": "Which of the following is usually an example of a retail financial institution rather than a wholesale market participant?",
      "opts": [
        "Merchant bank dealing only with institutions",
        "Building society",
        "Clearing house",
        "Central counterparty"
      ],
      "a": 1,
      "ex": "Retail institutions serve personal customers directly; a building society is the standard exam example."
    },
    {
      "id": "ext-006",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "industry"
      ],
      "q": "Disintermediation is best described as:",
      "opts": [
        "Using two banks instead of one",
        "Going directly between lender and borrower without a traditional intermediary",
        "A regulatory penalty process",
        "A tax-relief mechanism"
      ],
      "a": 1,
      "ex": "P2P and direct funding examples are used to illustrate disintermediation."
    },
    {
      "id": "ext-007",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "industry"
      ],
      "q": "Which statement best describes the Bank of England’s lender-of-last-resort role?",
      "opts": [
        "It handles all retail complaints",
        "It may provide emergency liquidity to banks",
        "It calculates inheritance tax",
        "It pays FSCS claims"
      ],
      "a": 1,
      "ex": "The lender-of-last-resort concept is a core Bank of England function in stressed conditions."
    },
    {
      "id": "ext-008",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "industry"
      ],
      "q": "The capital market is more commonly associated with:",
      "opts": [
        "very short-term cash management only",
        "longer-term funding instruments such as bonds and shares",
        "complaints handling",
        "retail current accounts only"
      ],
      "a": 1,
      "ex": "Gilts, corporate bonds and equities are associated with capital markets rather than money markets."
    },
    {
      "id": "ext-009",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "industry"
      ],
      "q": "The money market is mainly associated with:",
      "opts": [
        "longer-term securities",
        "short-term funds and liquidity management",
        "probate planning",
        "complaints resolution"
      ],
      "a": 1,
      "ex": "Money-market instruments are typically short-term and liquidity focused."
    },
    {
      "id": "ext-010",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "industry"
      ],
      "q": "Why can inflation matter to savers and investors?",
      "opts": [
        "It can reduce the real value of money",
        "It eliminates tax",
        "It makes all bonds worthless immediately",
        "It removes conduct regulation"
      ],
      "a": 0,
      "ex": "Inflation risk is about purchasing power, which is a recurring CeMAP theme."
    },
    {
      "id": "ext-011",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "industry"
      ],
      "q": "Which of the following best matches fiscal policy rather than monetary policy?",
      "opts": [
        "Setting Bank Rate",
        "Government decisions on taxation and public spending",
        "PRA supervision of insurers",
        "FOS complaint handling"
      ],
      "a": 1,
      "ex": "Fiscal policy is linked to government taxation and expenditure decisions."
    },
    {
      "id": "ext-012",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "industry"
      ],
      "q": "Why do CeMAP questions mention competition within financial services?",
      "opts": [
        "Because competition can improve customer choice and value",
        "Because competition replaces regulation",
        "Because competition guarantees lower risk products",
        "Because competition removes the need for disclosure"
      ],
      "a": 0,
      "ex": "Competition is part of the wider market framework and is relevant to customer outcomes."
    },
    {
      "id": "ext-013",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "tax"
      ],
      "q": "Residence for tax purposes matters because it can affect:",
      "opts": [
        "how firms are authorised",
        "the individual’s tax exposure",
        "whether an estate has a will",
        "whether a product is pooled"
      ],
      "a": 1,
      "ex": "Residence is used in CeMAP as a tax-status concept affecting liability."
    },
    {
      "id": "ext-014",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "tax"
      ],
      "q": "Domicile is most commonly tested in CeMAP in relation to:",
      "opts": [
        "monetary policy",
        "inheritance-tax exposure and planning",
        "complaints handling",
        "data protection"
      ],
      "a": 1,
      "ex": "Domicile is especially associated with inheritance-tax questions."
    },
    {
      "id": "ext-015",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "tax"
      ],
      "q": "Income tax is primarily charged on:",
      "opts": [
        "chargeable gains only",
        "income received",
        "property purchases",
        "insurance premiums"
      ],
      "a": 1,
      "ex": "The exam often contrasts income tax with CGT, IHT and SDLT."
    },
    {
      "id": "ext-016",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "tax"
      ],
      "q": "CGT is triggered most directly by:",
      "opts": [
        "an inheritance on death",
        "a disposal creating a chargeable gain",
        "a weekly salary payment",
        "a routine complaint"
      ],
      "a": 1,
      "ex": "A disposal that generates a gain is the core CGT event."
    },
    {
      "id": "ext-017",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "tax"
      ],
      "q": "IHT is usually associated with:",
      "opts": [
        "estate transfers and death-related taxation",
        "every monthly salary payment",
        "corporate prudential capital",
        "FSCS levies"
      ],
      "a": 0,
      "ex": "Inheritance Tax is the estate/transfer tax theme in CeMAP 1."
    },
    {
      "id": "ext-018",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "tax"
      ],
      "q": "SDLT is usually remembered as a tax on:",
      "opts": [
        "share dealing only",
        "property purchase transactions in England",
        "bank deposits",
        "life assurance claims"
      ],
      "a": 1,
      "ex": "Stamp Duty Land Tax is the transaction tax for relevant property purchases in England."
    },
    {
      "id": "ext-019",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "tax"
      ],
      "q": "Why is an ISA usually attractive in CeMAP 1 questions?",
      "opts": [
        "It guarantees investment growth",
        "It provides tax-efficient treatment within the wrapper",
        "It removes all inheritance-tax issues",
        "It is only available for pensions"
      ],
      "a": 1,
      "ex": "The wrapper point is tax efficiency, not guaranteed performance."
    },
    {
      "id": "ext-020",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "tax"
      ],
      "q": "Which statement is the safer exam view of tax wrappers?",
      "opts": [
        "A wrapper removes investment risk",
        "A wrapper affects tax treatment, not the underlying investment risk by itself",
        "A wrapper is the same as an equity",
        "A wrapper only exists for corporate investors"
      ],
      "a": 1,
      "ex": "CeMAP repeatedly separates wrapper benefits from product risk."
    },
    {
      "id": "ext-021",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "tax"
      ],
      "q": "A personal allowance question is mainly testing your understanding of:",
      "opts": [
        "how much income may be received before income tax starts applying",
        "how much SDLT a company pays",
        "how the PRA supervises banks",
        "how FOS redress is calculated"
      ],
      "a": 0,
      "ex": "The personal allowance is an income-tax foundation item."
    },
    {
      "id": "ext-022",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "tax"
      ],
      "q": "Which statement best matches dividend taxation as a CeMAP memory point?",
      "opts": [
        "Dividends are always tax free",
        "Dividend income has its own allowance/treatment and should not be confused with deposit interest",
        "Dividends are the same as inheritance-tax receipts",
        "Dividends are outside tax law"
      ],
      "a": 1,
      "ex": "Revision materials often separate earned income, savings interest and dividends."
    },
    {
      "id": "ext-023",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "tax"
      ],
      "q": "Why do double-taxation agreements matter?",
      "opts": [
        "They can help prevent the same income being taxed twice",
        "They replace GDPR rules",
        "They govern mortgage possession actions",
        "They appoint the MLRO"
      ],
      "a": 0,
      "ex": "Double-taxation agreements are designed to mitigate being taxed twice on the same income or gains."
    },
    {
      "id": "ext-024",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "tax"
      ],
      "q": "Which tax is most closely associated with company profits?",
      "opts": [
        "Income Tax",
        "Capital Gains Tax",
        "Corporation Tax",
        "Council Tax"
      ],
      "a": 2,
      "ex": "Corporation Tax is the company-profits tax topic listed in UKFR materials."
    },
    {
      "id": "ext-025",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "A gilt is best described as:",
      "opts": [
        "a government security",
        "a type of endowment bonus",
        "a complaint award",
        "an ISA wrapper"
      ],
      "a": 0,
      "ex": "Gilts are government securities and are typically contrasted with corporate bonds and shares."
    },
    {
      "id": "ext-026",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Equities are most commonly associated with:",
      "opts": [
        "ownership and growth potential with volatility",
        "guaranteed fixed interest",
        "death benefits only",
        "short-term money-market dealing only"
      ],
      "a": 0,
      "ex": "Equities bring growth potential but also price volatility and capital risk."
    },
    {
      "id": "ext-027",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Liquidity refers to:",
      "opts": [
        "how quickly an asset can be converted into cash",
        "whether an asset is regulated by the PRA",
        "whether tax is due immediately",
        "whether a complaint is upheld"
      ],
      "a": 0,
      "ex": "Liquidity is about ease of converting to cash without major loss in value."
    },
    {
      "id": "ext-028",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "A pooled investment is often useful to retail investors because it can:",
      "opts": [
        "eliminate all risk",
        "spread money across a range of underlying assets",
        "guarantee inflation-beating returns",
        "replace life assurance"
      ],
      "a": 1,
      "ex": "Diversification is the key pooled-investment revision point."
    },
    {
      "id": "ext-029",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Whole-of-life assurance is usually distinguished from term assurance because it:",
      "opts": [
        "always costs less",
        "is intended to remain in force for life",
        "is a tax wrapper",
        "pays monthly sickness benefit"
      ],
      "a": 1,
      "ex": "The core distinction is duration of cover."
    },
    {
      "id": "ext-030",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Term assurance is usually designed to provide cover:",
      "opts": [
        "for a defined period only",
        "for the whole of life automatically",
        "for stock-market losses",
        "for data breaches"
      ],
      "a": 0,
      "ex": "Term assurance covers a specified term rather than the whole of life."
    },
    {
      "id": "ext-031",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Critical illness cover is most often contrasted with income protection because:",
      "opts": [
        "one pays a lump sum on specified illness, the other is designed to replace income over time",
        "both are identical",
        "income protection only covers death",
        "critical illness is always monthly income"
      ],
      "a": 0,
      "ex": "This is one of the highest-yield protection distinction questions in CeMAP."
    },
    {
      "id": "ext-032",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Income protection is mainly designed to:",
      "opts": [
        "build a retirement pot",
        "replace income if the client cannot work due to illness or incapacity",
        "pay SDLT",
        "handle complaints"
      ],
      "a": 1,
      "ex": "Income protection is linked to earnings replacement rather than a one-off illness payout."
    },
    {
      "id": "ext-033",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "MPPI is best remembered as cover that may help with:",
      "opts": [
        "stock-market losses",
        "mortgage payments for a limited period after specified events",
        "inheritance-tax liabilities",
        "all household bills forever"
      ],
      "a": 1,
      "ex": "MPPI is about short-to-medium-term payment support, not permanent replacement of all earnings."
    },
    {
      "id": "ext-034",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Buildings insurance mainly covers:",
      "opts": [
        "the fabric and structure of the property",
        "the client’s tax bill",
        "the borrower’s salary",
        "all contents automatically"
      ],
      "a": 0,
      "ex": "Buildings insurance protects the structure; contents insurance protects belongings."
    },
    {
      "id": "ext-035",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Contents insurance mainly covers:",
      "opts": [
        "the legal title to the property",
        "belongings inside the home",
        "the roof and walls only",
        "interest-rate movements"
      ],
      "a": 1,
      "ex": "Contents cover is for possessions rather than the fabric of the building."
    },
    {
      "id": "ext-036",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "An annuity is commonly used to provide:",
      "opts": [
        "retirement income",
        "money-laundering reporting",
        "short-term bridge finance",
        "probate"
      ],
      "a": 0,
      "ex": "An annuity is a retirement-income product linked to lifespan and option selection."
    },
    {
      "id": "ext-037",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Interest-only borrowing creates a classic revision warning because:",
      "opts": [
        "the capital must still be repaid somehow",
        "it always fails affordability",
        "it is outside regulation",
        "it cannot be used with any repayment vehicle"
      ],
      "a": 0,
      "ex": "Interest-only leaves capital outstanding, so a credible repayment strategy is essential."
    },
    {
      "id": "ext-038",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Property as an asset class is often described as:",
      "opts": [
        "highly liquid and low-cost to buy and sell",
        "potentially offering growth/income but being less liquid",
        "risk free because it is tangible",
        "outside tax considerations"
      ],
      "a": 1,
      "ex": "Property may offer growth and income, but it is relatively illiquid and expensive to transact."
    },
    {
      "id": "ext-039",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "With-profits business is commonly associated with:",
      "opts": [
        "smoothing and bonuses",
        "daily share dealing only",
        "no investment risk",
        "FOS decisions"
      ],
      "a": 0,
      "ex": "The classic memory anchor is smoothing."
    },
    {
      "id": "ext-040",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Which statement best describes a bond in basic CeMAP product language?",
      "opts": [
        "A debt investment",
        "A complaint process",
        "A tax wrapper only",
        "A form of legal authority"
      ],
      "a": 0,
      "ex": "A bond is a debt investment; the issuer borrows from investors."
    },
    {
      "id": "ext-041",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Why can diversification matter in investment questions?",
      "opts": [
        "It helps spread risk across assets",
        "It guarantees a positive return",
        "It removes tax",
        "It changes who owns the firm"
      ],
      "a": 0,
      "ex": "Diversification reduces concentration risk, but it does not eliminate investment risk."
    },
    {
      "id": "ext-042",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "What is the safer CeMAP distinction between cash and equities?",
      "opts": [
        "Cash is usually more liquid and lower risk; equities usually offer more growth potential with more volatility",
        "Both are the same",
        "Equities are always guaranteed",
        "Cash is always taxed more heavily"
      ],
      "a": 0,
      "ex": "CeMAP often uses broad risk/liquidity comparisons rather than highly technical pricing points."
    },
    {
      "id": "ext-043",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "advice-process"
      ],
      "q": "The main purpose of a factfind is to:",
      "opts": [
        "avoid discussing the client’s objectives",
        "gather the client’s circumstances, needs and financial facts before advice",
        "guarantee product acceptance",
        "replace record keeping"
      ],
      "a": 1,
      "ex": "Factfinding is the evidence base for suitable advice."
    },
    {
      "id": "ext-044",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "advice-process"
      ],
      "q": "Attitude to risk is best described as a client’s:",
      "opts": [
        "legal authority to act",
        "psychological comfort with investment risk",
        "tax residence",
        "complaints history"
      ],
      "a": 1,
      "ex": "Attitude to risk is about willingness or comfort with risk, not financial resilience."
    },
    {
      "id": "ext-045",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "advice-process"
      ],
      "q": "Capacity for loss is best described as the client’s:",
      "opts": [
        "ability to absorb poor outcomes financially",
        "desire for growth",
        "relationship with the FCA",
        "willingness to complain"
      ],
      "a": 0,
      "ex": "Capacity for loss focuses on the financial impact the client can withstand."
    },
    {
      "id": "ext-046",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "advice-process"
      ],
      "q": "Why is a review process valuable after advice is arranged?",
      "opts": [
        "It is not valuable once a sale completes",
        "Client circumstances and suitability can change over time",
        "It replaces all disclosure obligations",
        "It is only for complaints"
      ],
      "a": 1,
      "ex": "Reviewing advice recognises that suitability can change as life changes."
    },
    {
      "id": "ext-047",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "advice-process"
      ],
      "q": "Which answer best reflects good suitability practice?",
      "opts": [
        "Recommend the highest-commission option",
        "Match the product to objectives, affordability, risk and client circumstances",
        "Assume the client understands everything already",
        "Skip note taking"
      ],
      "a": 1,
      "ex": "Suitability is about the fit between client need and recommendation."
    },
    {
      "id": "ext-048",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "advice-process"
      ],
      "q": "Which client need most directly suggests protection advice?",
      "opts": [
        "Speculative trading upside",
        "Maintaining financial support after death, illness or incapacity",
        "Reducing probate fees only",
        "Avoiding all paperwork"
      ],
      "a": 1,
      "ex": "Protection advice is about insuring adverse life events and income shocks."
    },
    {
      "id": "ext-049",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "advice-process"
      ],
      "q": "If two answers both seem possible in a conduct question, which usually wins?",
      "opts": [
        "The one with more jargon",
        "The one that best supports customer understanding and evidenced suitability",
        "The quickest-selling option",
        "The option with the biggest tax claim"
      ],
      "a": 1,
      "ex": "Exam technique matters: customer-protective, well-evidenced answers usually win."
    },
    {
      "id": "ext-050",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "advice-process"
      ],
      "q": "Why are clear records important during the advice process?",
      "opts": [
        "They help evidence what was discussed and recommended",
        "They remove the need for regulation",
        "They replace the product provider",
        "They are only for tax purposes"
      ],
      "a": 0,
      "ex": "Record keeping supports suitability, complaints handling and regulatory oversight."
    },
    {
      "id": "ext-051",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "advice-process"
      ],
      "q": "Which is the better conduct answer in an advised sale?",
      "opts": [
        "Assume the client is happy if they do not object",
        "Explain the recommendation and key risks clearly",
        "Delay disclosure until after completion",
        "Skip affordability because the client is wealthy"
      ],
      "a": 1,
      "ex": "A strong conduct answer improves customer understanding rather than assuming it."
    },
    {
      "id": "ext-052",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "advice-process"
      ],
      "q": "Why should objectives be established before a recommendation is made?",
      "opts": [
        "Because product features only matter after the sale",
        "Because advice should flow from what the client is trying to achieve",
        "Because tax always comes first",
        "Because objectives are optional"
      ],
      "a": 1,
      "ex": "The recommendation should follow the client’s objectives and constraints."
    },
    {
      "id": "ext-053",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "legal"
      ],
      "q": "A will matters in financial planning because it can help determine:",
      "opts": [
        "how the Bank Rate is set",
        "how assets may pass on death",
        "which regulator supervises a bank",
        "how pooled funds are priced"
      ],
      "a": 1,
      "ex": "Wills are central to estate distribution and planning."
    },
    {
      "id": "ext-054",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "legal"
      ],
      "q": "Intestacy applies when a person dies:",
      "opts": [
        "with a valid will",
        "without a valid will",
        "without a bank account",
        "while insolvent only"
      ],
      "a": 1,
      "ex": "Intestacy rules apply where there is no valid will."
    },
    {
      "id": "ext-055",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "legal"
      ],
      "q": "A lasting power of attorney is mainly about:",
      "opts": [
        "giving legal authority for another person to act in the relevant area",
        "making tax disappear",
        "replacing probate in all cases",
        "setting insurance premiums"
      ],
      "a": 0,
      "ex": "LPA questions test authority and who may act for another person."
    },
    {
      "id": "ext-056",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "legal"
      ],
      "q": "Agency law questions usually focus on:",
      "opts": [
        "who has authority to act on behalf of another",
        "how gilts are issued",
        "how CGT is calculated",
        "who handles complaints"
      ],
      "a": 0,
      "ex": "Agency is about representation and authority."
    },
    {
      "id": "ext-057",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "legal"
      ],
      "q": "Why can bankruptcy matter in product or advice discussions?",
      "opts": [
        "It can affect suitability, access to borrowing and overall risk",
        "It guarantees lower rates",
        "It cancels all taxes forever",
        "It automatically creates a will"
      ],
      "a": 0,
      "ex": "Bankruptcy can materially alter product options and risk profile."
    },
    {
      "id": "ext-058",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "legal"
      ],
      "q": "Why do some CeMAP legal questions ask whether someone has authority to act?",
      "opts": [
        "Because ownership and representation affect valid instructions and planning decisions",
        "Because authority only matters in criminal law",
        "Because tax status depends on handwriting",
        "Because all clients need attorneys"
      ],
      "a": 0,
      "ex": "Authority and ownership are core legal-planning themes."
    },
    {
      "id": "ext-059",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "legal"
      ],
      "q": "Consumer-credit scope questions are often testing what first?",
      "opts": [
        "The borrower type and whether the agreement falls within scope",
        "The base rate",
        "The FSCS deposit limit",
        "The client’s attitude to risk"
      ],
      "a": 0,
      "ex": "Scope questions are about whether the rule applies before anything else."
    },
    {
      "id": "ext-060",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "legal"
      ],
      "q": "What is the safer exam approach when a legal and product answer are both partly true?",
      "opts": [
        "Choose the one that answers the actual legal issue in the question stem",
        "Pick the longest answer",
        "Pick the most commercial answer",
        "Ignore the stem"
      ],
      "a": 0,
      "ex": "Many wrong answers are true facts that answer the wrong question."
    },
    {
      "id": "ext-061",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "regulation"
      ],
      "q": "The FCA is mainly associated with:",
      "opts": [
        "conduct regulation and consumer outcomes",
        "monetary policy",
        "probate administration",
        "fiscal policy"
      ],
      "a": 0,
      "ex": "The FCA is the conduct regulator."
    },
    {
      "id": "ext-062",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "regulation"
      ],
      "q": "The PRA is mainly associated with:",
      "opts": [
        "prudential supervision and safety/soundness",
        "complaint redress",
        "tax relief",
        "money guidance only"
      ],
      "a": 0,
      "ex": "Safety and soundness is the PRA memory anchor."
    },
    {
      "id": "ext-063",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "regulation"
      ],
      "q": "Consumer Duty is best summarised as a requirement to:",
      "opts": [
        "maximise sales conversions",
        "deliver good outcomes for retail customers",
        "abolish suitability",
        "reduce all disclosure to one page"
      ],
      "a": 1,
      "ex": "Consumer Duty focuses on outcomes, not just box-ticking."
    },
    {
      "id": "ext-064",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "regulation"
      ],
      "q": "Why is SMCR examined in CeMAP 1?",
      "opts": [
        "To test individual accountability within firms",
        "To calculate SDLT",
        "To define intestacy",
        "To run the FSCS"
      ],
      "a": 0,
      "ex": "SMCR is about responsibility and accountability in firms."
    },
    {
      "id": "ext-065",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "regulation"
      ],
      "q": "Financial promotions must be:",
      "opts": [
        "short, profitable and frequent",
        "clear, fair and not misleading",
        "approved by the FOS",
        "kept verbal only"
      ],
      "a": 1,
      "ex": "“Clear, fair and not misleading” is the key phrase to remember."
    },
    {
      "id": "ext-066",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "regulation"
      ],
      "q": "Appointed representative questions are usually about:",
      "opts": [
        "whether a person or firm can carry on activities under another principal’s regulatory umbrella",
        "how tax is collected",
        "how wills are signed",
        "how annuities are priced"
      ],
      "a": 0,
      "ex": "CeMAP may test the difference between direct authorisation and appointed-representative arrangements."
    },
    {
      "id": "ext-067",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "regulation"
      ],
      "q": "Why are the Principles for Businesses relevant in revision?",
      "opts": [
        "They provide high-level conduct standards for firms",
        "They set personal tax bands",
        "They regulate probate",
        "They replace all detailed rules"
      ],
      "a": 0,
      "ex": "The Principles form part of the FCA’s broader standards framework."
    },
    {
      "id": "ext-068",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "regulation"
      ],
      "q": "Which answer best fits the FCA/PRA relationship?",
      "opts": [
        "They are identical bodies",
        "They have different core roles: conduct vs prudential regulation",
        "The PRA handles all complaints",
        "The FCA sets the Bank Rate"
      ],
      "a": 1,
      "ex": "CeMAP expects clean role separation between the two regulators."
    },
    {
      "id": "ext-069",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "regulation"
      ],
      "q": "Why might authorisation matter before a firm carries on regulated activities?",
      "opts": [
        "Because firms should be properly permitted to do regulated business",
        "Because it determines inheritance tax",
        "Because it fixes investment returns",
        "Because it replaces competence requirements"
      ],
      "a": 0,
      "ex": "Authorisation and permission scope are core regulatory concepts."
    },
    {
      "id": "ext-070",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "regulation"
      ],
      "q": "What is usually the strongest clue in conduct-rule questions?",
      "opts": [
        "The best answer tends to protect customer understanding and fairness",
        "The best answer is always the cheapest product",
        "The best answer avoids record keeping",
        "The best answer is the least regulated option"
      ],
      "a": 0,
      "ex": "Conduct questions usually reward fair process, transparency and customer understanding."
    },
    {
      "id": "ext-071",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "consumer-protection"
      ],
      "q": "The FOS mainly deals with:",
      "opts": [
        "complaint resolution and redress",
        "prudential supervision",
        "setting ISA limits",
        "issuing gilts"
      ],
      "a": 0,
      "ex": "FOS = complaint handling/redress."
    },
    {
      "id": "ext-072",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "consumer-protection"
      ],
      "q": "The FSCS mainly deals with:",
      "opts": [
        "compensation when authorised firms fail within scope",
        "daily complaints handling",
        "tax collection",
        "money laundering reporting"
      ],
      "a": 0,
      "ex": "FSCS = compensation on firm failure within scope."
    },
    {
      "id": "ext-073",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "consumer-protection"
      ],
      "q": "Why are vulnerable-customer questions important?",
      "opts": [
        "Firms may need to adapt communication and support to achieve good outcomes",
        "Because vulnerable customers cannot use financial services",
        "Because vulnerability replaces capacity",
        "Because it only matters in insurance claims"
      ],
      "a": 0,
      "ex": "The modern conduct focus is support and adaptation, not abandonment."
    },
    {
      "id": "ext-074",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "consumer-protection"
      ],
      "q": "What is the MLRO’s practical role?",
      "opts": [
        "To oversee AML reporting and escalation",
        "To set compensation limits",
        "To manage all complaints personally",
        "To approve tax returns"
      ],
      "a": 0,
      "ex": "The MLRO sits inside the firm’s AML reporting structure."
    },
    {
      "id": "ext-075",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "consumer-protection"
      ],
      "q": "GDPR is mainly concerned with:",
      "opts": [
        "lawful and secure handling of personal data",
        "setting conduct rules for investments",
        "estate distribution",
        "mortgage pricing"
      ],
      "a": 0,
      "ex": "CeMAP treats GDPR as a client-data handling and security obligation."
    },
    {
      "id": "ext-076",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "consumer-protection"
      ],
      "q": "Why does complaint record-keeping matter?",
      "opts": [
        "It creates evidence of what happened and how the firm responded",
        "It guarantees FOS will agree with the firm",
        "It replaces Consumer Duty",
        "It only matters for tax"
      ],
      "a": 0,
      "ex": "Good records support a fair and traceable complaints process."
    },
    {
      "id": "ext-077",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "consumer-protection"
      ],
      "q": "Status disclosure is important because it helps the client understand:",
      "opts": [
        "who the firm is and what service is being offered",
        "how to calculate CGT",
        "how probate works",
        "how to price gilts"
      ],
      "a": 0,
      "ex": "Status disclosure is a transparency and understanding issue."
    },
    {
      "id": "ext-078",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "consumer-protection"
      ],
      "q": "Which is the better vulnerability response?",
      "opts": [
        "Rush the client so the case can be closed",
        "Adjust communication and support to suit the client’s needs",
        "Refuse service automatically",
        "Assume incapacity immediately"
      ],
      "a": 1,
      "ex": "Vulnerability requires thoughtful adaptation, not reflexive exclusion."
    },
    {
      "id": "ext-079",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "consumer-protection"
      ],
      "q": "What is the safer AML answer if suspicious activity is noticed?",
      "opts": [
        "Ignore it to avoid upsetting the client",
        "Follow the firm’s reporting process and escalate appropriately",
        "Ask social media for advice",
        "Wait until the next annual review"
      ],
      "a": 1,
      "ex": "AML questions reward proper internal reporting, not improvisation or delay."
    },
    {
      "id": "ext-080",
      "sourceTag": "textbook-test",
      "sourceLabel": "Textbook test-your-knowledge / adapted",
      "kind": "paraphrase",
      "tags": [
        "consumer-protection"
      ],
      "q": "Why is customer understanding a repeated theme in conduct questions?",
      "opts": [
        "Because information must be communicated in a way the client can genuinely understand",
        "Because jargon always improves compliance",
        "Because explanations are optional if documents are signed",
        "Because understanding only matters after a complaint"
      ],
      "a": 0,
      "ex": "Clear communication is central to good customer outcomes."
    },
    {
      "id": "ext-081",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Which pension type is arranged personally rather than through an employer scheme?",
      "opts": [
        "Occupational pension",
        "Personal pension",
        "Defined benefit scheme",
        "State Pension"
      ],
      "a": 1,
      "ex": "A personal pension is set up by the individual, even if an adviser or provider helps arrange it."
    },
    {
      "id": "ext-082",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "A stakeholder pension is usually remembered for which feature?",
      "opts": [
        "No tax relief available",
        "Simple charging and flexible minimum contributions",
        "Guaranteed annuity rates",
        "Employer-only membership"
      ],
      "a": 1,
      "ex": "Stakeholder pensions are designed to be straightforward, with capped-style charging structures and flexible contributions."
    },
    {
      "id": "ext-083",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "An occupational pension is best described as:",
      "opts": [
        "A pension arranged through employment",
        "A state benefit paid by HMRC",
        "A type of ISA",
        "A mortgage repayment method"
      ],
      "a": 0,
      "ex": "Occupational pensions are linked to the workplace/employer setting."
    },
    {
      "id": "ext-084",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "In pension revision, defined benefit and defined contribution are mainly contrasted by:",
      "opts": [
        "Whether the pension is taxed",
        "Whether the promised retirement outcome or the contribution level is defined",
        "Whether the pension is regulated",
        "Whether the money is held in cash"
      ],
      "a": 1,
      "ex": "Defined benefit focuses on the promised pension benefit; defined contribution focuses on the contributions paid in and investment outcome."
    },
    {
      "id": "ext-085",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Why are pensions commonly described as retirement-income planning rather than just savings?",
      "opts": [
        "Because they are only for tax refunds",
        "Because they are built to provide benefits later in life, often as income",
        "Because they guarantee house purchase finance",
        "Because they replace wills"
      ],
      "a": 1,
      "ex": "The exam-safe framing is later-life provision: building benefits for retirement, often converted into income."
    },
    {
      "id": "ext-086",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Which collective investment is an open-ended fund commonly structured as a company?",
      "opts": [
        "Investment trust",
        "OEIC",
        "Gilt",
        "Direct equity holding"
      ],
      "a": 1,
      "ex": "An OEIC is an open-ended investment company, unlike an investment trust which is a closed-ended company."
    },
    {
      "id": "ext-087",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "A unit trust is best remembered as:",
      "opts": [
        "A direct share in one company only",
        "A pooled fund where investors hold units under a trust structure",
        "A type of annuity",
        "A mortgage indemnity policy"
      ],
      "a": 1,
      "ex": "Unit trusts pool investors' money and issue units under a trust-based structure."
    },
    {
      "id": "ext-088",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "An investment trust is usually contrasted with unit trusts and OEICs because it is:",
      "opts": [
        "A closed-ended company with shares",
        "A guaranteed savings account",
        "A tax wrapper",
        "Always lower risk than all other funds"
      ],
      "a": 0,
      "ex": "Investment trusts are closed-ended companies whose shares trade on the market."
    },
    {
      "id": "ext-089",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "legal"
      ],
      "q": "Which form of co-ownership normally passes automatically by survivorship on death?",
      "opts": [
        "Tenants in common",
        "Joint tenancy",
        "Tenancy at will",
        "Leasehold"
      ],
      "a": 1,
      "ex": "Joint tenancy is linked with the right of survivorship; tenants in common can leave their share by will."
    },
    {
      "id": "ext-090",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "legal"
      ],
      "q": "A trustee or personal representative is mainly concerned with:",
      "opts": [
        "Setting Bank Rate",
        "Holding or administering assets according to legal duties",
        "Providing prudential supervision",
        "Determining market prices"
      ],
      "a": 1,
      "ex": "Trustees and personal representatives are legal-role questions about control and administration, not beneficial enjoyment alone."
    },
    {
      "id": "ext-091",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Which insurance principle means the policyholder must stand to suffer a loss if the event occurs?",
      "opts": [
        "Contribution",
        "Insurable interest",
        "Subrogation",
        "Average"
      ],
      "a": 1,
      "ex": "Insurable interest is the requirement for a valid insurance interest in the subject matter."
    },
    {
      "id": "ext-092",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Which insurance principle allows an insurer, after paying a claim, to pursue recovery from a responsible third party?",
      "opts": [
        "Proximate cause",
        "Subrogation",
        "Indemnity",
        "Disclosure"
      ],
      "a": 1,
      "ex": "Subrogation lets the insurer step into the insured's shoes to seek recovery from a liable third party after settlement."
    },
    {
      "id": "ext-093",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Which insurance principle is most closely linked to putting the insured back into the same financial position rather than allowing profit from a loss?",
      "opts": [
        "Indemnity",
        "Contribution",
        "Insurable interest",
        "Utmost good faith"
      ],
      "a": 0,
      "ex": "Indemnity means the insured should be compensated for the loss, not profit from it."
    },
    {
      "id": "ext-094",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "If two policies cover the same loss, which principle helps insurers share the claim fairly?",
      "opts": [
        "Subrogation",
        "Contribution",
        "Insurable interest",
        "Mitigation"
      ],
      "a": 1,
      "ex": "Contribution applies where more than one insurer covers the same risk and loss."
    },
    {
      "id": "ext-095",
      "sourceTag": "revision-guide",
      "sourceLabel": "Revision guide mock / topic summary",
      "kind": "paraphrase",
      "tags": [
        "products"
      ],
      "q": "Which insurance principle asks for the dominant or effective cause of a loss to be identified?",
      "opts": [
        "Proximate cause",
        "Average",
        "Escalation",
        "Assignment"
      ],
      "a": 0,
      "ex": "Proximate cause focuses on the dominant effective cause of the loss when deciding policy response."
    }
  ],
  "studyModes": {
    "dailyPassMark": 70,
    "topicTests": [
      {
        "id": "topic-reg",
        "title": "Regulation + Consumer Protection",
        "questionIds": [
          "ext-061",
          "ext-062",
          "ext-063",
          "ext-064",
          "ext-065",
          "ext-066",
          "ext-067",
          "ext-068",
          "ext-069",
          "ext-070",
          "ext-071",
          "ext-072",
          "ext-073",
          "ext-074",
          "ext-075",
          "ext-076",
          "ext-077",
          "ext-078",
          "ext-079",
          "ext-080",
          "qdt-001",
          "qdt-002",
          "qdt-003",
          "qdt-004",
          "qdt-005",
          "qdt-006",
          "qdt-007",
          "qdt-013",
          "qdt-017",
          "qdt-018",
          "qdt-021",
          "qdt-022",
          "qdt-023",
          "qdt-024",
          "src-019",
          "src-020",
          "src-021",
          "src-022",
          "src-023",
          "src-024",
          "src-025",
          "src-026",
          "src-039",
          "src-040",
          "src-041",
          "src-042",
          "src-043",
          "src-044",
          "src-045",
          "src-046",
          "src-047",
          "src-048",
          "src-054",
          "src-058"
        ]
      },
      {
        "id": "topic-tax-prod",
        "title": "Tax + Products + Protection",
        "questionIds": [
          "ext-013",
          "ext-014",
          "ext-015",
          "ext-016",
          "ext-017",
          "ext-018",
          "ext-019",
          "ext-020",
          "ext-021",
          "ext-022",
          "ext-023",
          "ext-024",
          "ext-025",
          "ext-026",
          "ext-027",
          "ext-028",
          "ext-029",
          "ext-030",
          "ext-031",
          "ext-032",
          "ext-033",
          "ext-034",
          "ext-035",
          "ext-036",
          "ext-037",
          "ext-038",
          "ext-039",
          "ext-040",
          "ext-041",
          "ext-042",
          "ext-081",
          "ext-082",
          "ext-083",
          "ext-084",
          "ext-085",
          "ext-086",
          "ext-087",
          "ext-088",
          "ext-091",
          "ext-092",
          "ext-093",
          "ext-094",
          "ext-095",
          "qdt-008",
          "qdt-009",
          "qdt-010",
          "qdt-011",
          "qdt-012",
          "qdt-013",
          "qdt-014",
          "qdt-015",
          "qdt-016",
          "qdt-020",
          "src-008",
          "src-010",
          "src-011",
          "src-012",
          "src-013",
          "src-014",
          "src-015",
          "src-016",
          "src-017",
          "src-018",
          "src-031",
          "src-032",
          "src-033",
          "src-034",
          "src-035",
          "src-036",
          "src-037",
          "src-038",
          "src-049",
          "src-050",
          "src-051",
          "src-052",
          "src-053",
          "src-055",
          "src-056",
          "src-057"
        ]
      },
      {
        "id": "topic-advice-legal",
        "title": "Advice Process + Legal Concepts",
        "questionIds": [
          "ext-043",
          "ext-044",
          "ext-045",
          "ext-046",
          "ext-047",
          "ext-048",
          "ext-049",
          "ext-050",
          "ext-051",
          "ext-052",
          "ext-053",
          "ext-054",
          "ext-055",
          "ext-056",
          "ext-057",
          "ext-058",
          "ext-059",
          "ext-060",
          "ext-089",
          "ext-090",
          "qdt-017",
          "qdt-018",
          "qdt-019",
          "src-027",
          "src-028",
          "src-029",
          "src-030",
          "src-059",
          "src-060",
          "src-061"
        ]
      },
      {
        "id": "topic-industry",
        "title": "Industry + Institutions",
        "questionIds": [
          "src-001",
          "src-002",
          "src-003",
          "src-004",
          "src-005",
          "src-006",
          "src-007",
          "src-009",
          "ext-001",
          "ext-002",
          "ext-003",
          "ext-004",
          "ext-005",
          "ext-006",
          "ext-007",
          "ext-008",
          "ext-009",
          "ext-010",
          "ext-011",
          "ext-012"
        ]
      }
    ],
    "topicDrills": [
      {
        "id": "tag-industry",
        "tag": "industry",
        "title": "Industry & institutions",
        "questionIds": [
          "src-001",
          "src-002",
          "src-003",
          "src-004",
          "src-005",
          "src-006",
          "src-007",
          "src-009",
          "ext-001",
          "ext-002",
          "ext-003",
          "ext-004",
          "ext-005",
          "ext-006",
          "ext-007",
          "ext-008",
          "ext-009",
          "ext-010",
          "ext-011",
          "ext-012"
        ]
      },
      {
        "id": "tag-tax",
        "tag": "tax",
        "title": "Taxation",
        "questionIds": [
          "src-013",
          "src-014",
          "src-031",
          "src-032",
          "src-033",
          "src-034",
          "src-035",
          "src-036",
          "src-049",
          "src-050",
          "src-051",
          "src-052",
          "src-053",
          "qdt-008",
          "qdt-009",
          "qdt-010",
          "qdt-011",
          "qdt-012",
          "qdt-020",
          "ext-013",
          "ext-014",
          "ext-015",
          "ext-016",
          "ext-017",
          "ext-018",
          "ext-019",
          "ext-020",
          "ext-021",
          "ext-022",
          "ext-023",
          "ext-024"
        ]
      },
      {
        "id": "tag-products",
        "tag": "products",
        "title": "Products & protection",
        "questionIds": [
          "src-008",
          "src-010",
          "src-011",
          "src-012",
          "src-013",
          "src-014",
          "src-015",
          "src-016",
          "src-017",
          "src-018",
          "src-031",
          "src-036",
          "src-037",
          "src-038",
          "src-053",
          "src-055",
          "src-056",
          "src-057",
          "qdt-012",
          "qdt-013",
          "qdt-014",
          "qdt-015",
          "qdt-016",
          "ext-025",
          "ext-026",
          "ext-027",
          "ext-028",
          "ext-029",
          "ext-030",
          "ext-031",
          "ext-032",
          "ext-033",
          "ext-034",
          "ext-035",
          "ext-036",
          "ext-037",
          "ext-038",
          "ext-039",
          "ext-040",
          "ext-041",
          "ext-042",
          "ext-081",
          "ext-082",
          "ext-083",
          "ext-084",
          "ext-085",
          "ext-086",
          "ext-087",
          "ext-088",
          "ext-091",
          "ext-092",
          "ext-093",
          "ext-094",
          "ext-095"
        ]
      },
      {
        "id": "tag-advice-process",
        "tag": "advice-process",
        "title": "Advice process",
        "questionIds": [
          "src-027",
          "ext-043",
          "ext-044",
          "ext-045",
          "ext-046",
          "ext-047",
          "ext-048",
          "ext-049",
          "ext-050",
          "ext-051",
          "ext-052"
        ]
      },
      {
        "id": "tag-legal",
        "tag": "legal",
        "title": "Legal concepts",
        "questionIds": [
          "src-028",
          "src-029",
          "src-030",
          "src-059",
          "src-060",
          "src-061",
          "qdt-017",
          "qdt-018",
          "qdt-019",
          "ext-053",
          "ext-054",
          "ext-055",
          "ext-056",
          "ext-057",
          "ext-058",
          "ext-059",
          "ext-060",
          "ext-089",
          "ext-090"
        ]
      },
      {
        "id": "tag-regulation",
        "tag": "regulation",
        "title": "Regulation",
        "questionIds": [
          "src-019",
          "src-020",
          "src-021",
          "src-022",
          "src-023",
          "src-024",
          "src-042",
          "src-043",
          "src-044",
          "qdt-001",
          "qdt-002",
          "qdt-003",
          "qdt-004",
          "qdt-021",
          "qdt-022",
          "qdt-023",
          "ext-061",
          "ext-062",
          "ext-063",
          "ext-064",
          "ext-065",
          "ext-066",
          "ext-067",
          "ext-068",
          "ext-069",
          "ext-070"
        ]
      },
      {
        "id": "tag-consumer-protection",
        "tag": "consumer-protection",
        "title": "Consumer protection",
        "questionIds": [
          "src-025",
          "src-026",
          "src-039",
          "src-040",
          "src-041",
          "src-045",
          "src-046",
          "src-047",
          "src-048",
          "src-054",
          "src-058",
          "qdt-002",
          "qdt-004",
          "qdt-005",
          "qdt-006",
          "qdt-007",
          "qdt-013",
          "qdt-017",
          "qdt-018",
          "qdt-021",
          "qdt-023",
          "qdt-024",
          "ext-071",
          "ext-072",
          "ext-073",
          "ext-074",
          "ext-075",
          "ext-076",
          "ext-077",
          "ext-078",
          "ext-079",
          "ext-080"
        ]
      }
    ],
    "mockPresets": [
      {
        "id": "mock-25",
        "title": "25-question mixed mock",
        "count": 25
      },
      {
        "id": "mock-50",
        "title": "50-question full mock",
        "count": 50
      },
      {
        "id": "mock-75",
        "title": "75-question long mixed mock",
        "count": 75
      }
    ],
    "curatedMocks": [
      {
        "id": "paper-a",
        "title": "Curated Mock A",
        "questionIds": [
          "src-001",
          "src-004",
          "src-008",
          "src-010",
          "src-018",
          "src-020",
          "src-024",
          "src-031",
          "src-039",
          "src-047",
          "qdt-003",
          "qdt-008",
          "ext-016",
          "ext-025",
          "ext-029",
          "ext-031",
          "ext-043",
          "ext-055",
          "ext-061",
          "ext-071"
        ]
      },
      {
        "id": "paper-b",
        "title": "Curated Mock B",
        "questionIds": [
          "src-002",
          "src-006",
          "src-011",
          "src-021",
          "src-025",
          "src-032",
          "src-040",
          "src-053",
          "src-060",
          "qdt-002",
          "qdt-011",
          "ext-019",
          "ext-028",
          "ext-033",
          "ext-045",
          "ext-057",
          "ext-063",
          "ext-065",
          "ext-072",
          "ext-075"
        ]
      }
    ]
  },
  "tagLabels": {
    "industry": "Industry & institutions",
    "tax": "Taxation",
    "products": "Products & protection",
    "advice-process": "Advice process",
    "legal": "Legal concepts",
    "regulation": "Regulation",
    "consumer-protection": "Consumer protection"
  }
};
