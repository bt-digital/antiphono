/* Central dummy-content datasets. Replace/extend these arrays with real content —
   every page (homepage previews, listing pages, detail templates) renders from here. */

const PROJECTS = [
  {
    slug: "meridian-capital",
    title: "Meridian Capital — Explainable risk scoring",
    client: "Meridian Capital",
    categories: ["Fintech", "Product design"],
    active: true,
    year: "2026",
    visual: "fintech",
    summary: "Redesigned a black-box credit model's output into a UI analysts could question, not just accept.",
    overview: [
      "Meridian's underwriting team had a model that scored risk well but explained nothing — analysts either rubber-stamped its output or overrode it on instinct. Neither was good enough once volumes tripled.",
      "We rebuilt the review interface around the model's actual feature weights: every score now traces back to the inputs that drove it, with confidence ranges shown instead of a single number. Override rates dropped, but more importantly, overrides became traceable decisions rather than gut calls."
    ],
    gallery: [
      { caption: "Risk score breakdown with feature-level attribution" },
      { caption: "Analyst override flow with reasoning capture" },
      { caption: "Confidence-range states across the review queue" }
    ]
  },
  {
    slug: "solace-health",
    title: "Solace Health — Triage copilot",
    client: "Solace Health",
    categories: ["Healthcare", "Research + design"],
    active: false,
    year: "2025",
    visual: "health",
    summary: "A clinician-facing assistant with calibrated confidence states, validated across 40 care sites.",
    overview: [
      "Solace's triage model was accurate in testing but clinicians didn't trust it on the floor — it spoke in absolutes about cases that were genuinely ambiguous. We spent six weeks in care rooms before touching a single screen.",
      "The shipped interface separates 'the model is confident' from 'the model is guessing' with distinct visual states, and always shows the two or three features driving a recommendation. Adoption followed almost immediately once clinicians could see the model's uncertainty instead of being asked to trust it blindly."
    ],
    gallery: [
      { caption: "Triage queue with calibrated confidence bands" },
      { caption: "Clinician override and feedback capture" },
      { caption: "Shift-handoff summary view" }
    ]
  },
  {
    slug: "vela-robotics",
    title: "Vela Robotics — Fleet ops console",
    client: "Vela Robotics",
    categories: ["Robotics", "Design system"],
    active: true,
    year: "2026",
    visual: "robotics",
    summary: "A unified system for monitoring autonomous fleets, built around model uncertainty as a visual primitive.",
    overview: [
      "Vela's ops team was monitoring forty autonomous vehicles across six dashboards, none of which agreed on what 'uncertain' meant. We designed one component library where uncertainty is a first-class visual state, not an afterthought bolted onto a status dot.",
      "The console now scales from a single vehicle's sensor confidence to fleet-wide anomaly patterns using the same visual language throughout, so an operator's mental model doesn't have to be rebuilt at every zoom level."
    ],
    gallery: [
      { caption: "Fleet-wide anomaly heatmap" },
      { caption: "Single-vehicle sensor confidence breakdown" },
      { caption: "Design system tokens for uncertainty states" }
    ]
  },
  {
    slug: "greenfield-logistics",
    title: "Greenfield Logistics — Demand forecasting UI",
    client: "Greenfield Logistics",
    categories: ["Logistics", "Prototyping"],
    active: false,
    year: "2025",
    visual: "logistics",
    summary: "Turned a forecasting model's output into a planning tool warehouse teams actually trust on Mondays.",
    overview: [
      "Forecast accuracy wasn't the problem — trust was. Planners were overriding the model wholesale every Monday because a single wrong week had burned them once. We prototyped six different ways to present forecast ranges before warehouse leads stopped reaching for the override button by default.",
      "The winning pattern showed historical forecast accuracy alongside every prediction, so planners could see exactly how often — and by how much — the model had been right before deciding whether to trust this week's number."
    ],
    gallery: [
      { caption: "Weekly demand forecast with historical accuracy band" },
      { caption: "Planner override flow with rationale logging" },
      { caption: "Warehouse-level drill-down view" }
    ]
  },
  {
    slug: "arclight-bank",
    title: "Arclight Bank — Fraud review workspace",
    client: "Arclight Bank",
    categories: ["Fintech", "Product design"],
    active: false,
    year: "2025",
    visual: "fintech",
    summary: "Cut fraud-analyst review time in half by surfacing model reasoning instead of just a risk score.",
    overview: [
      "Arclight's fraud queue gave analysts a number from one to a hundred and nothing else. Analysts built their own mental shortcuts to compensate, which meant inconsistent decisions across the team.",
      "We redesigned the workspace around the transaction signals the model actually weighed — device history, velocity, merchant category — letting analysts agree or disagree with specific evidence rather than a single opaque score."
    ],
    gallery: [
      { caption: "Transaction signal breakdown panel" },
      { caption: "Analyst decision workspace" },
      { caption: "Team-level consistency dashboard" }
    ]
  },
  {
    slug: "northwind-health",
    title: "Northwind Health — Patient intake assistant",
    client: "Northwind Health",
    categories: ["Healthcare", "UX research"],
    active: false,
    year: "2024",
    visual: "health",
    summary: "Research-led redesign of an intake chatbot that patients were abandoning at an 40% rate.",
    overview: [
      "Northwind's intake assistant was technically capable but patients dropped out before finishing — our research found the bot never told people how many questions were left or why it needed sensitive information.",
      "We redesigned the flow around basic conversational transparency: visible progress, plain-language explanations for sensitive questions, and an easy human handoff. Completion rates recovered within the first month."
    ],
    gallery: [
      { caption: "Intake flow with visible progress and rationale" },
      { caption: "Sensitive-question handling pattern" },
      { caption: "Human handoff trigger states" }
    ]
  },
  {
    slug: "atlas-mobility",
    title: "Atlas Mobility — Autonomous dispatch dashboard",
    client: "Atlas Mobility",
    categories: ["Robotics", "Design system"],
    active: false,
    year: "2024",
    visual: "robotics",
    summary: "A dispatch system that lets human operators intervene at exactly the right moment, no earlier.",
    overview: [
      "Atlas's dispatch operators were intervening on routine autonomous decisions far too often, slowing the whole fleet down. The dashboard was showing everything with equal visual weight, so nothing read as routine.",
      "We rebuilt the visual hierarchy around intervention likelihood, reserving high-contrast alerts for situations that statistically needed a human. Routine operations faded into a calmer, lower-priority view."
    ],
    gallery: [
      { caption: "Intervention-priority dispatch view" },
      { caption: "Routine vs. flagged decision states" },
      { caption: "Operator handoff and resolution log" }
    ]
  },
  {
    slug: "pulsewave",
    title: "Pulsewave — Realtime anomaly monitor",
    client: "Pulsewave",
    categories: ["Logistics", "Prototyping"],
    active: true,
    year: "2026",
    visual: "logistics",
    summary: "Prototyped a monitoring tool that surfaces the three anomalies that matter out of three thousand.",
    overview: [
      "Pulsewave's sensor network generated thousands of anomaly flags a day, almost all noise. Operators had stopped looking at the dashboard entirely by the time we were brought in.",
      "We prototyped a ranking layer on top of the existing detection model, surfacing only the anomalies most likely to need action and explaining why each one was ranked where it was. The team now actually opens the dashboard."
    ],
    gallery: [
      { caption: "Ranked anomaly feed with reasoning" },
      { caption: "Drill-down into a single flagged event" },
      { caption: "Operator feedback loop for re-ranking" }
    ]
  },
  {
    slug: "hearth-finance",
    title: "Hearth Finance — Personal budgeting copilot",
    client: "Hearth Finance",
    categories: ["Fintech", "Product design"],
    active: false,
    year: "2024",
    visual: "fintech",
    summary: "A budgeting assistant that explains its suggestions instead of just making them.",
    overview: [
      "Hearth's first AI budgeting feature made confident suggestions that users routinely ignored — testing showed people didn't trust advice they couldn't trace back to their own spending.",
      "Every suggestion in the redesigned product links directly to the transactions behind it, and the copilot distinguishes between patterns it's confident about and ones it's still learning. Suggestion acceptance roughly doubled."
    ],
    gallery: [
      { caption: "Budget suggestion with linked transaction evidence" },
      { caption: "Confidence states for spending patterns" },
      { caption: "Monthly review and adjustment flow" }
    ]
  },
  {
    slug: "continuum-energy",
    title: "Continuum Energy — Grid load forecasting",
    client: "Continuum Energy",
    categories: ["Logistics", "Research + design"],
    active: false,
    year: "2023",
    visual: "logistics",
    summary: "Helped grid operators decide when to trust a load forecast and when to lean on manual judgment.",
    overview: [
      "Continuum's forecasting model performed well on average but degraded sharply during weather extremes — exactly when operators needed it most. The existing UI gave no signal that this was happening.",
      "We added an explicit model-confidence layer tied to known failure conditions, so operators could see when the forecast was operating outside its reliable range and switch to manual judgment with full awareness, not by accident."
    ],
    gallery: [
      { caption: "Load forecast with reliability-range indicator" },
      { caption: "Weather-extreme degradation warning state" },
      { caption: "Operator manual-override workflow" }
    ]
  },
  {
    slug: "helios-data",
    title: "Helios Data — Sensor fusion debugging tools",
    client: "Helios Data",
    categories: ["Robotics", "Design system"],
    active: false,
    year: "2023",
    visual: "robotics",
    summary: "Internal tooling that made it possible for engineers to see exactly where sensor fusion disagreed.",
    overview: [
      "Helios's engineers were debugging sensor fusion failures by reading raw logs — a process that could take a full day to trace a single disagreement between sensors.",
      "We designed a visual debugging tool that overlays each sensor's confidence and shows exactly where and when they diverge, cutting the average debugging session from hours to minutes."
    ],
    gallery: [
      { caption: "Multi-sensor confidence overlay" },
      { caption: "Divergence timeline view" },
      { caption: "Exportable debugging report" }
    ]
  },
  {
    slug: "cortex-cloud",
    title: "Cortex Cloud — Clinical documentation assistant",
    client: "Cortex Cloud",
    categories: ["Healthcare", "Product design"],
    active: false,
    year: "2023",
    visual: "health",
    summary: "An ambient documentation tool clinicians actually trust enough to leave running during patient visits.",
    overview: [
      "Cortex's ambient note-taking assistant was accurate but clinicians edited almost everything it produced, defeating the point. Interviews revealed they didn't trust it because they couldn't see what it had heard versus inferred.",
      "We redesigned the draft view to clearly separate transcribed speech from the assistant's clinical interpretation, so clinicians could quickly verify the parts that mattered and trust the rest. Edit rates dropped by more than half."
    ],
    gallery: [
      { caption: "Draft note with transcription vs. interpretation split" },
      { caption: "Quick-verify review flow" },
      { caption: "Session summary handoff view" }
    ]
  }
];

const ARTICLES = [
  {
    slug: "why-ai-native-ux-still-means-good-ux",
    title: "Why \"AI-native\" UX still means good UX",
    category: "Design",
    date: "2026-05-12",
    visual: "fintech",
    excerpt: "Most AI interface failures are ordinary usability failures wearing a new coat of paint.",
    body: [
      "Every few months a new term arrives to describe designing for AI products, and every few months teams use it as an excuse to forget the basics. \"AI-native\" doesn't mean the usual rules of clarity, feedback, and forgiveness stop applying — if anything, they matter more.",
      "The interfaces we see fail aren't failing because the model is bad. They're failing because users don't know what the system can do, can't tell when it's guessing, and have no graceful way to correct it. Those are interface problems with decades of established solutions.",
      "Treat the model as a new kind of input, not a new kind of user. The product still needs a clear mental model, visible system state, and a way to recover from mistakes — the same things every well-designed tool has needed since before machine learning existed."
    ]
  },
  {
    slug: "notes-from-40-clinician-interviews",
    title: "Notes from 40 clinician interviews",
    category: "Research",
    date: "2026-03-22",
    visual: "health",
    excerpt: "What changed our minds about confidence intervals after sitting in actual triage rooms.",
    body: [
      "We went into the Solace Health engagement assuming clinicians wanted a single, confident recommendation. Forty interviews later, the opposite was true: clinicians actively distrusted tools that sounded certain about ambiguous cases.",
      "What they wanted was closer to a second opinion than an answer — something that showed its reasoning and let them disagree without friction. Confidence intervals weren't a hedge, they were the entire value proposition.",
      "The lesson generalizes past healthcare: in any domain where the user is the expert, a model that performs certainty it doesn't have will be ignored, however accurate it actually is."
    ]
  },
  {
    slug: "small-taxonomy-of-ai-error-states",
    title: "A small taxonomy of AI error states",
    category: "Design",
    date: "2026-01-15",
    visual: "robotics",
    excerpt: "Wrong, uncertain, stale, and unauthorized are four very different design problems.",
    body: [
      "Most products handle every AI failure with one generic error message, which is a bit like a car having a single warning light for engine trouble, low fuel, and a flat tire.",
      "We've found it useful to separate at least four states: the model is confidently wrong, the model is uncertain, the model's data is stale, and the model isn't authorized to answer. Each needs a different visual treatment and a different recovery path.",
      "Designing these states explicitly — rather than collapsing them into a generic apology — is one of the highest-leverage changes a team can make to an AI product's perceived reliability."
    ]
  },
  {
    slug: "evaluating-agent-reliability-in-prod",
    title: "Evaluating agent reliability in production",
    category: "Engineering",
    date: "2025-11-08",
    visual: "logistics",
    excerpt: "Offline evals told us our agent was ready. Production told us otherwise, in week one.",
    body: [
      "Our eval suite scored the agent at 94% task success before launch. Within a week of production traffic, real success was closer to 70% — not because the model regressed, but because real users don't behave like eval prompts.",
      "The gap came almost entirely from edge cases our test set never sampled: ambiguous requests, mid-task corrections, and multi-step tasks where one wrong early decision compounded.",
      "We now treat production logs as a continuously growing eval set, not a separate concern from testing. The two have to be the same pipeline, or the eval score will keep lying to you."
    ]
  },
  {
    slug: "writing-microcopy-for-uncertain-systems",
    title: "Writing microcopy for uncertain systems",
    category: "Design",
    date: "2025-09-19",
    visual: "fintech",
    excerpt: "\"Something went wrong\" is doing a lot of quiet damage to user trust.",
    body: [
      "Generic error and loading copy was tolerable in deterministic software because failures were rare and usually fixable by refreshing. AI products fail differently and far more often — vague copy compounds the damage.",
      "Specific, honest microcopy — \"I'm not confident about this part\" instead of a spinner, or \"this might be outdated\" instead of a silent wrong answer — does more for perceived trustworthiness than most model improvements we've measured.",
      "Treat every loading state, error, and fallback message as a trust-building opportunity, not a placeholder to fill in last."
    ]
  },
  {
    slug: "running-a-confidence-calibration-study",
    title: "Running a confidence calibration study",
    category: "Research",
    date: "2025-07-03",
    visual: "health",
    excerpt: "How we tested eleven different ways of showing a percentage before picking one.",
    body: [
      "Before redesigning any confidence indicator, we ran a forced-choice study across eleven visual patterns — percentages, ranges, qualitative labels, color bands — measuring not just preference but actual calibration: did people's trust track the model's real accuracy?",
      "The winner wasn't the most precise-looking option. A simple three-band qualitative label (low / moderate / high confidence) calibrated better than exact percentages, which users tended to over-trust regardless of the underlying number.",
      "Precision in the UI doesn't guarantee precision in the user's mental model. We now test calibration directly rather than assuming a more detailed indicator is automatically more honest."
    ]
  },
  {
    slug: "instrumenting-llm-features-for-feedback",
    title: "Instrumenting LLM features for feedback",
    category: "Engineering",
    date: "2025-05-27",
    visual: "robotics",
    excerpt: "Thumbs up/down gets you almost nothing. Here's what we instrument instead.",
    body: [
      "Binary feedback widgets feel like measurement but rarely produce usable signal — users rate based on mood as much as accuracy, and the data rarely maps cleanly to a specific failure.",
      "We've had far more success instrumenting behavioral signals: edit distance on generated text, time-to-accept, whether a suggestion was used as-is or modified, and whether the user retried the same request differently.",
      "These signals are noisier individually but, aggregated, tell you precisely where a feature is failing — something a thumbs-down button structurally cannot do."
    ]
  },
  {
    slug: "designing-for-graceful-model-failure",
    title: "Designing for graceful model failure",
    category: "Design",
    date: "2025-03-11",
    visual: "logistics",
    excerpt: "The best AI interfaces we've shipped spend most of their design budget on the failure path.",
    body: [
      "It's tempting to spend design effort on the happy path where the model performs well, since that's the demo everyone wants to see. But the happy path rarely needs much design — it's the failure path that determines whether users stick around.",
      "Graceful failure means the product degrades predictably: it tells the user what it doesn't know, offers a manual fallback, and never silently guesses. None of this is exciting work, but it's the work that determines retention.",
      "If your roadmap allocates more design time to the success state than the failure state, that ratio is very likely backwards."
    ]
  },
  {
    slug: "what-we-learned-shipping-12-ai-features",
    title: "What we learned shipping 12 AI features in a year",
    category: "Research",
    date: "2025-01-20",
    visual: "fintech",
    excerpt: "A few patterns repeated often enough across clients that we now treat them as defaults.",
    body: [
      "Across a year and twelve shipped features, the same few mistakes kept recurring across completely unrelated industries — fintech, healthcare, logistics — which told us they were interface patterns, not domain-specific quirks.",
      "Confident-sounding language when the model was guessing. No visible path to correct a wrong output. Treating every interaction like the first one, with no memory of prior corrections. All three showed up almost everywhere we looked.",
      "We now start every new engagement by checking for these three failure modes before designing anything new — fixing them tends to move trust metrics more than any net-new feature does."
    ]
  }
];

const REPORTS = [
  {
    title: "Designing Trust into Agentic Interfaces",
    year: "2026",
    abstract: "A field study on how delegation cues, undo affordances, and action previews change user trust in autonomous agents.",
    file: "reports/designing-trust-agentic-interfaces.pdf",
    filesize: "1.2 MB"
  },
  {
    title: "Calibrating Confidence: UI Patterns for Probabilistic Output",
    year: "2026",
    abstract: "Comparing eleven confidence-display patterns across 600 participants to find what users actually calibrate against.",
    file: "reports/calibrating-confidence-ui-patterns.pdf",
    filesize: "1.4 MB"
  },
  {
    title: "The Latency Tax: Response Time and Perceived Competence",
    year: "2025",
    abstract: "How streaming, skeletons, and thinking-states change perceived intelligence independent of model accuracy.",
    file: "reports/latency-tax-response-time.pdf",
    filesize: "0.9 MB"
  }
];
