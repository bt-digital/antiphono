/* Central content datasets — all images use local /images/ paths */

const PROJECTS = [
  {
    slug: "policyfly",
    title: "PolicyFly — InsurTech platform & design system",
    client: "PolicyFly",
    categories: ["InsurTech", "Design System", "Product Design"],
    active: true,
    year: "2018–Present",
    visual: "fintech",
    coverImage: "/images/policyfly/PF_header.jpg",
    deliverables: ["Product Research", "UX Design", "UI Design", "Design System"],
    summary: "An all-in-one insurance administration platform — from design system foundations to multi-line product launches.",
    overview: [
      "PolicyFly is revolutionising insurance administration for insurers who need to move fast without sacrificing compliance. As UI/UX lead, the work spans a Material Design-grounded system that ensures consistency from print collateral to complex underwriting workflows across multiple platforms.",
      "The design system was built to scale with a rapidly growing product suite — new lines of business, new entitlement states, new device targets. Every component decision had to serve both the designer building screens and the engineer implementing them, with no ambiguity in between.",
      "Over multiple years and product launches, the focus has remained the same: making sophisticated insurance workflows feel less like bureaucracy and more like a product people actually want to use."
    ],
    sections: [
      { type: "fullwidth", image: "/images/policyfly/PF_home.jpg", alt: "PolicyFly dashboard overview" },
      { type: "split", image: "/images/policyfly/PF_schedules.jpg", alt: "Policy schedules view",
        heading: "Schedules, simplified",
        body: "Managing active policy lines across multiple classes of business required a unified view that surfaced the right information at the right time — without overwhelming underwriters with data they didn't need right now." },
      { type: "split", image: "/images/policyfly/PF_tasks.jpg", alt: "Task management interface", flip: true,
        heading: "Workflow that works for people",
        body: "The task management system was rebuilt around how underwriters actually work — not how the system assumed they did. Assignment, prioritisation and status are visible at a glance, with actions surfaced contextually." },
      { type: "slider", label: "Design System", slides: [
        { image: "/images/policyfly/PF_DesignSystem_Colors.jpg", caption: "Colour tokens — primary, semantic and interactive palettes" },
        { image: "/images/policyfly/PF_DesignSystem_Typography.jpg", caption: "Type scale — hierarchy built for data-dense interfaces" },
        { image: "/images/policyfly/PF_DesignSystem_Buttons.jpg", caption: "Action components — variants, states and accessibility" },
        { image: "/images/policyfly/PF_DesignSystem_Navigation.jpg", caption: "Navigation patterns — sidebar, tabs and breadcrumbs" },
        { image: "/images/policyfly/PF_DesignSystem_Menus.jpg", caption: "Menu components — dropdowns, context menus and multi-select" },
        { image: "/images/policyfly/PF_DesignSystem_Feedback.jpg", caption: "Feedback patterns — alerts, toasts and validation states" },
        { image: "/images/policyfly/PF_DesignSystem_Icons.jpg", caption: "Icon system — custom set aligned to insurance domain" }
      ]},
      { type: "grid", cols: 2, images: [
        { image: "/images/policyfly/PF_print.jpg", alt: "Print collateral" },
        { image: "/images/policyfly/PF_brand.jpg", alt: "Brand application" }
      ]},
      { type: "fullwidth", image: "/images/policyfly/PF_overview.jpg", alt: "Platform overview" }
    ]
  },

  {
    slug: "winter-olympics-on-7",
    title: "Winter Olympics on 7 — OTT streaming platform",
    client: "Seven Network",
    categories: ["OTT Streaming", "Product Strategy", "UX Design"],
    active: false,
    year: "2018",
    visual: "robotics",
    coverImage: "/images/winter-games/PC_keyvisual.jpg",
    deliverables: ["Product Strategy", "User Experience", "Interface & Brand Design"],
    summary: "Thousands of hours of live and on-demand Olympic coverage, streamed to every screen — built and shipped for PyeongChang 2018.",
    overview: [
      "Following the success of Seven's Rio Olympics digital campaign, the brief was to design and deliver a new high-quality OTT product set for the PyeongChang Winter Games — compelling Australian sports stories on every screen, across native apps, web and IPTV platforms.",
      "Research began with what users actually wanted from their viewing experience across different devices. Extensive user, market and expert investigation mapped the hierarchy of features that would shape the ecosystem: live event widgets, social content, competitions, and a premium entitlement tier unlocking HD streaming and reduced advertising.",
      "Each platform app adhered to native design principles to reduce the learning curve for new users. Low content density kept each session highly discoverable, and wayfinding between events was kept deliberately intuitive — because during the Games, every second of friction is a missed moment."
    ],
    sections: [
      { type: "fullwidth", image: "/images/winter-games/PC_keyvisual.jpg", alt: "Winter Olympics key visual" },
      { type: "slider", label: "Information Architecture", slides: [
        { image: "/images/winter-games/PC_IA1.jpg", caption: "Content hierarchy — organising thousands of hours of sport" },
        { image: "/images/winter-games/PC_IA2.jpg", caption: "Navigation system — sport, event and athlete discovery" },
        { image: "/images/winter-games/PC_IA3.jpg", caption: "Feature map — live, on-demand and highlights flows" },
        { image: "/images/winter-games/PC_IA4.jpg", caption: "Premium entitlement — free vs subscription content gates" }
      ]},
      { type: "split", image: "/images/winter-games/PC_UI.jpg", alt: "Platform UI design",
        heading: "Designed for every sports fan",
        body: "The interface balanced discovery with depth — casual fans needed the highlights while dedicated followers needed schedules, results and athlete profiles. The platform served both without compromise." },
      { type: "split", image: "/images/winter-games/PC_chromecast.jpg", alt: "Chromecast TV experience", flip: true,
        heading: "Every screen, every moment",
        body: "From mobile alerts to living room Chromecast streaming, the experience adapted intelligently across devices. Native app patterns reduced the learning curve — Olympic moments followed the viewer seamlessly." },
      { type: "slider", label: "Platform Screens", slides: [
        { image: "/images/winter-games/PC_platform1.jpg", caption: "Home — live schedule and sport discovery" },
        { image: "/images/winter-games/PC_platform2.jpg", caption: "Sport hub — events, results and athlete profiles" },
        { image: "/images/winter-games/PC_platform3.jpg", caption: "Video player — live and on-demand with controls" },
        { image: "/images/winter-games/PC_platform4.jpg", caption: "Results — medal table and event results" },
        { image: "/images/winter-games/PC_platform5.jpg", caption: "Schedule — full event calendar across all sports" },
        { image: "/images/winter-games/PC_platform6.jpg", caption: "Athlete profiles — stories behind the competitors" }
      ]},
      { type: "grid", cols: 2, images: [
        { image: "/images/winter-games/PC_account.jpg", alt: "Account and subscription" },
        { image: "/images/winter-games/PC_responsive.jpg", alt: "Responsive design" }
      ]}
    ]
  },

  {
    slug: "oscar-winter",
    title: "Oscar Winter — Luxury e-commerce for engagement rings",
    client: "Oscar Winter",
    categories: ["E-commerce", "UX Design", "Brand Design"],
    active: false,
    year: "2019",
    visual: "fintech",
    coverImage: "/images/oscar-winter/OW_key-visual.jpg",
    deliverables: ["Product Strategy", "User Experience", "Interface & Brand Design"],
    summary: "Brought the attentiveness of a high-end jeweller consultation online — for millennial couples shopping for the most personal purchase of their lives.",
    overview: [
      "Oscar Winter is a luxury retail platform allowing customers to design and purchase high-quality engagement and wedding rings online at an accessible price. Initially launching to a US audience, the experience targets the desires and habits of millennial consumers who expect elegance without complexity — and who research everything before they buy.",
      "In addition to a carefully crafted identity, the site houses extensive education and certification documentation to establish trust within a highly personal purchase decision. Through extensive user research and testing, the experience affords users unprecedented control of product specifications with controls that are intelligent but never cold.",
      "Gem shoppers can explore the complete Oscar Winter diamond list with sophisticated filtering to source the perfect stone. Those less familiar with precious gems are presented with a guided product selection process designed to reflect the in-store experience of a high-end jeweller."
    ],
    sections: [
      { type: "fullwidth", image: "/images/oscar-winter/OW_key-visual.jpg", alt: "Oscar Winter key visual" },
      { type: "slider", label: "Brand Identity", slides: [
        { image: "/images/oscar-winter/OW_manifesto1.jpg", caption: "Brand manifesto — identity and tone of voice" },
        { image: "/images/oscar-winter/OW_manifesto2.jpg", caption: "Typography — editorial weight for a luxury context" },
        { image: "/images/oscar-winter/OW_manifesto3.jpg", caption: "Photography — intimate, human, aspirational" },
        { image: "/images/oscar-winter/OW_manifesto4.jpg", caption: "Colour system — restrained, premium palette" },
        { image: "/images/oscar-winter/OW_manifesto5.jpg", caption: "Brand in use — digital touchpoints" },
        { image: "/images/oscar-winter/OW_manifesto6.jpg", caption: "Motion principles — smooth, intentional, never rushed" },
        { image: "/images/oscar-winter/OW_manifesto7.jpg", caption: "Layout system — space as a luxury signal" },
        { image: "/images/oscar-winter/OW_manifesto8.jpg", caption: "Brand application — from mobile to marketing" }
      ]},
      { type: "split", image: "/images/oscar-winter/OW_checkout.jpg", alt: "Checkout experience",
        heading: "The most personal checkout in retail",
        body: "Purchasing an engagement ring is not like buying a phone case. Every step of the checkout experience was designed to reflect the gravity of the moment — reassuring, unhurried, and deeply personal." },
      { type: "split", image: "/images/oscar-winter/OW_diamondlist.jpg", alt: "Diamond selection", flip: true,
        heading: "A jeweller in your pocket",
        body: "The diamond list gives gem shoppers unprecedented control — filtering by cut, clarity, carat and certification with real-time guidance on what each attribute means for their specific ring design and budget." },
      { type: "grid", cols: 3, images: [
        { image: "/images/oscar-winter/OW_recommendation.jpg", alt: "Guided recommendations" },
        { image: "/images/oscar-winter/OW_filters.jpg", alt: "Advanced filtering" },
        { image: "/images/oscar-winter/OW_designprinciples.jpg", alt: "Design principles" }
      ]},
      { type: "fullwidth", image: "/images/oscar-winter/OW_keyscreens.jpg", alt: "Key screens overview" }
    ]
  },

  {
    slug: "live-network",
    title: "Live Network — White-label publishing platform",
    client: "Pacific",
    categories: ["Digital Publishing", "Product Strategy", "UX Design"],
    active: false,
    year: "2017",
    visual: "logistics",
    coverImage: "/images/live-network/Live_keyvisual.jpg",
    deliverables: ["Product Strategy", "User Experience", "Interface & Brand Design"],
    summary: "16 editorial brands. 16 live sites. 6 weeks. After acquiring Yahoo's digital publishing rights, we built the platform that made it possible.",
    overview: [
      "After procuring the digital publishing rights from Yahoo!, the challenge was to plan and rapidly develop an intuitive white label publishing platform allowing Pacific to enter the digital market across 16 editorial brands simultaneously. The approach had to be scalable while retaining the formats and flavour of each unique brand experience.",
      "The initial launch featured multiple content formats housed within a purpose-built modular framework and open source backend. Future iterations focused on sophisticated commercial and editorial features — responsive ad formats, branded content formats, and native sponsorship opportunities creating a comprehensive offering for advertisers.",
      "Behavioural data helped evolve the editorial experience over time. The key objective was to retain readers for longer, decreasing reliance on social channels for traffic. Session times increased significantly through infinite content scrolling, tactical content drivers and direct remarketing channels."
    ],
    sections: [
      { type: "fullwidth", image: "/images/live-network/Live_keyvisual.jpg", alt: "Live Network key visual" },
      { type: "split", image: "/images/live-network/Live_editorial.jpg", alt: "Editorial platform",
        heading: "One platform, sixteen voices",
        body: "The modular framework had to support everything from celebrity gossip to financial news — each brand with its own visual language, all running on the same content engine. Flexibility and consistency weren't in conflict; they were the brief." },
      { type: "slider", label: "16 Editorial Brands", slides: [
        { image: "/images/live-network/Live_carousel-1.jpg", caption: "Brand palette 1 — editorial and lifestyle" },
        { image: "/images/live-network/Live_carousel-2.jpg", caption: "Brand palette 2 — news and business" },
        { image: "/images/live-network/Live_carousel-3.jpg", caption: "Brand palette 3 — women and culture" },
        { image: "/images/live-network/Live_carousel-4.jpg", caption: "Brand palette 4 — technology and entertainment" }
      ]},
      { type: "split", image: "/images/live-network/Live_retention.jpg", alt: "Reader retention", flip: true,
        heading: "Built to keep readers reading",
        body: "Retention was the North Star metric. Content discovery tools, infinite scroll, and personalised recommendations were designed not just to bring readers in — but to keep them exploring long after the article that found them." },
      { type: "grid", cols: 2, images: [
        { image: "/images/live-network/Live_framework.jpg", alt: "Content framework" },
        { image: "/images/live-network/Live_sponsorship.jpg", alt: "Sponsorship formats" }
      ]}
    ]
  },

  {
    slug: "beautycrew",
    title: "BeautyCrew — Beauty community & editorial platform",
    client: "Pacific",
    categories: ["Editorial Platform", "UX Design", "Brand Design"],
    active: false,
    year: "2017",
    visual: "health",
    coverImage: "/images/beauty-crew/BC_Showcase1.png",
    deliverables: ["Product Strategy", "User Experience", "Interface & Brand Design"],
    summary: "Aggregated the editorial power of Seven's beauty brands into one community platform — elegant, age-agnostic, and designed to make content shoppable.",
    overview: [
      "BeautyCrew aims to revolutionise the way consumers interact with beauty through a community approach to editorial, referral and retail. The platform established a firm foothold aggregating the reach, editorial power and brand equity of Seven's beauty and fashion brands, amplified by a market-leading mobile web experience.",
      "The product, brand and content experience is intentionally elegant but age-agnostic — its audience is extremely diverse, spanning teens to age preventers. The central ethos of the content strategy was to engage users in conversation, with editorial designed and worded to encourage dialogue within the community.",
      "Retail placements are integrated throughout various stages of the editorial experience to encourage and validate purchase decisions. The ReviewCrew feature actively rewards knowledge exchange — user reviews help people understand the quality of the latest cosmetics before they buy."
    ],
    sections: [
      { type: "fullwidth", image: "/images/beauty-crew/BC_Showcase1.png", alt: "BeautyCrew showcase" },
      { type: "slider", label: "Platform Experience", slides: [
        { image: "/images/beauty-crew/BC_carousel_1.jpg", caption: "Home — hero editorial and brand aggregation" },
        { image: "/images/beauty-crew/BC_carousel_2.jpg", caption: "Category pages — beauty, skincare, makeup" },
        { image: "/images/beauty-crew/BC_carousel_3.jpg", caption: "Article template — community-first reading flow" },
        { image: "/images/beauty-crew/BC_carousel_4.jpg", caption: "Product pages — shoppable editorial integration" },
        { image: "/images/beauty-crew/BC_carousel_5.jpg", caption: "ReviewCrew — community ratings and user-generated content" },
        { image: "/images/beauty-crew/BC_carousel_6.jpg", caption: "Search — product and editorial discovery" },
        { image: "/images/beauty-crew/BC_carousel_7.jpg", caption: "Profile — user accounts and reading history" },
        { image: "/images/beauty-crew/BC_carousel_8.jpg", caption: "Newsletter — email experience design" }
      ]},
      { type: "split", image: "/images/beauty-crew/BC_Editorial.jpg", alt: "Editorial layout",
        heading: "Editorial that earns its place",
        body: "Every article was designed to feel worth reading — not just worth clicking. Typography, image treatment and content hierarchy were crafted to make the act of reading feel as premium as the products being discussed." },
      { type: "split", image: "/images/beauty-crew/BC_Comment.jpg", alt: "Community interaction", flip: true,
        heading: "Community is the product",
        body: "Beauty decisions are social by nature. The comment and review system was designed to surface real voices and create genuine dialogue — building trust through peer recommendation rather than editorial alone." },
      { type: "grid", cols: 2, images: [
        { image: "/images/beauty-crew/BC_Showcase2.png", alt: "Platform showcase 2" },
        { image: "/images/beauty-crew/BC_Showcase3.png", alt: "Platform showcase 3" }
      ]}
    ]
  },

  {
    slug: "7travel",
    title: "7travel — Shoppable travel editorial platform",
    client: "SevenWest Media",
    categories: ["Travel Tech", "Product Strategy", "UX Design"],
    active: false,
    year: "2016",
    visual: "logistics",
    coverImage: "/images/7travel/PORT_7trevel_parallax-head.jpg",
    deliverables: ["Product Strategy", "User Experience", "Interface & Brand Design"],
    summary: "The travel stories Seven had always told on TV became shoppable online — synchronised with the broadcast schedule, discoverable any time.",
    overview: [
      "7Travel fuses the power and reach of the 7 Network's TV brands with a mirrored digital platform, inspiring consumers to transact on their holiday ideas. By synchronising the editorial schedule with the broadcast EPG, millions of traditional media viewers brought a second device to their content experience — suddenly the travel stories Seven had always shared became shoppable, anywhere, any time.",
      "7Travel drives acquired TV, social and organic users into a three-stage journey: Learn, Inspire, Transact. The feed of destination cards on-site live-updates to reflect travel content broadcast on 7's linear channels and social feeds.",
      "We observed that some users knew where they wanted to go, while others knew what type of experience they wanted. A sophisticated content calendar was developed around tags that matched destinations — creating a simple path for users to discover content whether they explored destination-first or category-first."
    ],
    sections: [
      { type: "fullwidth", image: "/images/7travel/PORT_7trevel_parallax-head.jpg", alt: "7travel hero" },
      { type: "split", image: "/images/7travel/7t_destination-feed.jpg", alt: "Destination feed",
        heading: "Your screen, synced with the broadcast",
        body: "The destination feed updated in real time to match what was on air — when viewers saw a story about Bali on breakfast TV, the feed surfaced Bali holidays. The gap between inspiration and transaction closed to seconds." },
      { type: "slider", label: "Discover Your Journey", slides: [
        { image: "/images/7travel/7t_carousel1.jpg", caption: "Destination cards — editorial and booking in one view" },
        { image: "/images/7travel/7t_carousel2.jpg", caption: "Region explorer — country and region discovery" },
        { image: "/images/7travel/7t_carousel3.jpg", caption: "Travel themes — experience-first browsing" },
        { image: "/images/7travel/7t_carousel4.jpg", caption: "Itinerary builder — multi-destination planning" },
        { image: "/images/7travel/7t_carousel5.jpg", caption: "Deal cards — promotional and last-minute offers" },
        { image: "/images/7travel/7t_carousel6.jpg", caption: "Editorial articles — travel inspiration and guides" },
        { image: "/images/7travel/7t_carousel7.jpg", caption: "Booking flow — integrated with travel partners" },
        { image: "/images/7travel/7t_carousel8.jpg", caption: "Account — saved trips and booking history" }
      ]},
      { type: "split", image: "/images/7travel/7t_editorial.jpg", alt: "Travel editorial", flip: true,
        heading: "Editorial that converts",
        body: "The editorial team could write stories knowing that every article had a direct path to purchase. From inspiration to booking confirmation, the platform connected content and commerce in a way traditional publishing couldn't." },
      { type: "slider", label: "Brand Identity", slides: [
        { image: "/images/7travel/Brand-caro1.jpg", caption: "Brand system — extending the 7 Network identity" },
        { image: "/images/7travel/Brand-caro2.jpg", caption: "Typography — bold, inviting, distinctly Australian" },
        { image: "/images/7travel/Brand-caro3.jpg", caption: "Colour palette — warm, energetic, travel-inspired" },
        { image: "/images/7travel/Brand-caro4.jpg", caption: "Photography style — aspirational but accessible" },
        { image: "/images/7travel/Brand-caro5.jpg", caption: "Icon system — destination and category icons" },
        { image: "/images/7travel/Brand-caro6.jpg", caption: "Brand in motion — social and digital applications" }
      ]}
    ]
  },

  {
    slug: "yesville",
    title: "Yesville — Loyalty platform for Optus",
    client: "Optus",
    categories: ["Loyalty Platform", "UX Design", "Gamification"],
    active: false,
    year: "2014",
    visual: "fintech",
    coverImage: "/images/yesville/YV_keyvisual.jpg",
    deliverables: ["Product Strategy", "User Experience", "Interface & Brand Design"],
    summary: "A rewards platform for Australia's second-largest telco — designed to say thank you in ways customers actually feel.",
    overview: [
      "The Yesville web app is the centrepiece of a new customer rewards proposition by Optus. Amplified by an extensive customer base and the brand's existing digital presence, the central logic of the product is to learn about its users and reward them in ways they actually find rewarding — not generic discounts, but genuinely personalised experiences.",
      "The core sentiment of Yesville is gratitude. Content and products are sourced globally to offer at varying stages of the program for users to earn and redeem. The tone of voice and interactions instil a sense of playfulness — constantly reaffirming gamification and gratitude.",
      "Aligning with and extending Optus's corporate brand assets, a clean and welcoming UI encourages positive interaction. Users are identified and onboarded in a way that allows the platform to personalise their experience immediately — only content and rewards matching the user's interests are shown."
    ],
    sections: [
      { type: "fullwidth", image: "/images/yesville/YV_keyvisual.jpg", alt: "Yesville key visual" },
      { type: "split", image: "/images/yesville/YV_landing.jpg", alt: "Landing experience",
        heading: "A warm welcome to loyalty",
        body: "The landing experience was designed to immediately communicate Yesville's core proposition: this is a rewards program that actually rewards you. The tone is warm and playful from the first pixel, setting the expectation of what's to come." },
      { type: "grid", cols: 3, images: [
        { image: "/images/yesville/YV_persona-bob.jpg", alt: "Bob — user persona" },
        { image: "/images/yesville/YV_persona-jen.jpg", alt: "Jen — user persona" },
        { image: "/images/yesville/YV_persona-sam.jpg", alt: "Sam — user persona" }
      ]},
      { type: "slider", label: "Platform Experience", slides: [
        { image: "/images/yesville/YV_carousel-3.jpg", caption: "Rewards feed — personalised offers and experiences" },
        { image: "/images/yesville/YV_carousel-4.jpg", caption: "Category browse — rewards by interest and lifestyle" },
        { image: "/images/yesville/YV_carousel-5.jpg", caption: "Reward detail — offer, terms and redemption flow" },
        { image: "/images/yesville/YV_carousel-6.jpg", caption: "Earning — tracking points and milestone progress" },
        { image: "/images/yesville/YV_carousel-7.jpg", caption: "Redemption — claiming rewards and confirmation states" },
        { image: "/images/yesville/YV_carousel-8.jpg", caption: "Notifications — timely and personalised alerts" },
        { image: "/images/yesville/YV_carousel-9.jpg", caption: "Profile — tier status and reward history" },
        { image: "/images/yesville/YV_carousel-10.jpg", caption: "Social proof — community activity and trending rewards" }
      ]},
      { type: "grid", cols: 2, images: [
        { image: "/images/yesville/YV_loyalty.jpg", alt: "Loyalty mechanics" },
        { image: "/images/yesville/YV_redeem.jpg", alt: "Redemption experience" }
      ]}
    ]
  },

  {
    slug: "open-live",
    title: "Open Live — Independent music platform",
    client: "Reborn",
    categories: ["Music Tech", "Product Design", "UX Design"],
    active: false,
    year: "2016",
    visual: "robotics",
    coverImage: "/images/open-live/OL_keyvisual.jpg",
    deliverables: ["User Experience", "Interface & Brand Design"],
    summary: "Closed the gap between artist and fan — a live music platform with patented IOT hardware and a streaming app built for discovery.",
    overview: [
      "Open Live actively aims to close the gap between the Artist and Music Fan through unique physical and digital technology. Through its patented hardware and accompanying application, it allows Artists to create new revenue streams through live performances and merchandising with no capital outlay — and gives fans IOT-powered access to the live music they love.",
      "The UX and UI are designed to encourage discoverability for music lovers, creating clean funnels for streaming, saving and purchasing. The platform aims to extend access to live music moments beyond bars, theatres and stadiums — capturing those sessions and making them available anywhere, any time.",
      "Artist profiles facilitate simple publishing and music management for musicians. The experience creates a deep connection and direct marketing channel between artists and music lovers. Artists can even record directly into the platform using its patented Gingerbreadman cloud software."
    ],
    sections: [
      { type: "fullwidth", image: "/images/open-live/OL_keyvisual.jpg", alt: "Open Live key visual" },
      { type: "split", image: "/images/open-live/OL_live.jpg", alt: "Live music experience",
        heading: "Every venue, every night",
        body: "Open Live captures the moments that would otherwise be lost — the session at the local venue, the late-night set from a favourite artist. The IOT-connected experience brings the energy of live music to the streaming era." },
      { type: "split", image: "/images/open-live/OL_styleguide.jpg", alt: "Brand system", flip: true,
        heading: "A brand for the music underground",
        body: "The visual identity was designed to feel authentic to independent music culture — raw, confident, and built around the artist rather than the algorithm. Typography and colour choices deliberately avoid the polished sheen of major streaming services." },
      { type: "grid", cols: 2, images: [
        { image: "/images/open-live/OL_gingerbread.jpg", alt: "Gingerbreadman recording software" },
        { image: "/images/open-live/OL_discoverabilit.jpg", alt: "Music discoverability" }
      ]},
      { type: "slider", label: "Platform Screens", slides: [
        { image: "/images/open-live/OL_dash2.jpg", caption: "Dashboard — artist activity and audience metrics" },
        { image: "/images/open-live/OL_dash3.jpg", caption: "Events — upcoming shows and live sessions" },
        { image: "/images/open-live/OL_dash4.jpg", caption: "Analytics — listener data and engagement stats" },
        { image: "/images/open-live/OL_dash5.jpg", caption: "Recordings — manage and publish live captures" },
        { image: "/images/open-live/OL_tracks.jpg", caption: "Track management — setlist and release tools" },
        { image: "/images/open-live/OL_user.jpg", caption: "Fan profile — discovery history and saved artists" }
      ]}
    ]
  },

  {
    slug: "commgames",
    title: "Commonwealth Games on 7 — OTT streaming platform",
    client: "Seven Network",
    categories: ["OTT Streaming", "UX Design", "Product Design"],
    active: false,
    year: "2018",
    visual: "robotics",
    coverImage: "/images/commgames/GC_keyvisual.jpg",
    deliverables: ["Product Strategy", "User Experience", "Interface & Brand Design"],
    summary: "Australia's biggest sporting moment on every screen — a comprehensive streaming platform for the Gold Coast 2018 Commonwealth Games.",
    overview: [
      "Following the success of Seven's PyeongChang digital campaign, the brief for Gold Coast 2018 was to go bigger — more sports, more screens, more moments. The platform needed to deliver thousands of hours of live and on-demand Commonwealth Games coverage across athletics, aquatics, cycling, wrestling and over 18 other sports.",
      "User research identified distinct viewing patterns — the dedicated sports follower, the casual fan tracking Australian medal stories, and families watching together across multiple devices. Each scenario demanded different navigation and content hierarchies, brought together in a single adaptive interface.",
      "The result scaled seamlessly from mobile first-check to living room Chromecast, with personalised medal tracking, sport-by-sport scheduling, and a premium subscription tier offering HD streams and ad-free viewing for the dedicated viewer."
    ],
    sections: [
      { type: "fullwidth", image: "/images/commgames/GC_keyvisual.jpg", alt: "Commonwealth Games key visual" },
      { type: "slider", label: "Platform Screens", slides: [
        { image: "/images/commgames/GC_platform1.jpg", caption: "Home — live schedule and sport discovery" },
        { image: "/images/commgames/GC_platform2.jpg", caption: "Sport hub — events, results and athletes" },
        { image: "/images/commgames/GC_platform4.jpg", caption: "Video player — live streaming with real-time stats" },
        { image: "/images/commgames/GC_platform5.jpg", caption: "Medal table — Australian results and rankings" },
        { image: "/images/commgames/GC_platform7.jpg", caption: "Search — cross-sport content and athlete discovery" },
        { image: "/images/commgames/GC_platform8.jpg", caption: "Schedule — full event calendar with reminders" },
        { image: "/images/commgames/GC_platform9.jpg", caption: "Highlights — catch-up and best-of moments" },
        { image: "/images/commgames/GC_platform10.jpg", caption: "Athlete profiles — stories behind the competitors" }
      ]},
      { type: "split", image: "/images/commgames/GC_UI.jpg", alt: "Platform UI design",
        heading: "Designed for every sports fan",
        body: "The interface balanced discovery with depth. Casual fans needed the highlights while dedicated followers wanted schedules, statistics and athlete profiles. The platform served both without complexity — you could find what you needed in under three taps." },
      { type: "split", image: "/images/commgames/GC_chromecast.jpg", alt: "Chromecast TV experience", flip: true,
        heading: "From phone to the big screen",
        body: "Chromecast support brought the Games to the living room without friction. The TV interface was redesigned from the ground up — readable at distance, navigable from the couch, and optimised for shared viewing experiences." },
      { type: "grid", cols: 3, images: [
        { image: "/images/commgames/GC_account.jpg", alt: "Account management" },
        { image: "/images/commgames/GC_responsive.jpg", alt: "Responsive design" },
        { image: "/images/commgames/GC_premium.jpg", alt: "Premium subscription" }
      ]}
    ]
  },

  {
    slug: "editor-group",
    title: "Editor Group — Brand identity & digital platform",
    client: "Editor Group",
    categories: ["Brand Design", "Web Design", "Design System"],
    active: false,
    year: "2023",
    visual: "logistics",
    coverImage: "/images/editor-group/EG_Hero.jpg",
    deliverables: ["Brand Strategy", "Visual Identity", "Web Design", "Design System"],
    summary: "A complete brand overhaul and website redesign for one of Australia's most respected B2B media and advisory groups.",
    overview: [
      "Editor Group sits at the intersection of B2B media, research and advisory services — a positioning that required a brand equal parts rigorous and accessible. The brief was to modernise a trusted but dated identity while retaining the authority that their audience expects.",
      "The visual system was built around clarity and credibility. A restrained palette, purposeful typography hierarchy and a modular grid system allow complex editorial content to breathe while maintaining the visual density that signals expertise. Circular imagery became a distinctive motif, differentiating the brand's human-centred storytelling.",
      "The website design system emerged from the brand foundation — a component library covering every content type from long-form articles to event listings, case studies and team profiles. Every pattern was tested against real content to ensure the system could flex without breaking."
    ],
    sections: [
      { type: "fullwidth", image: "/images/editor-group/EG_Hero.jpg", alt: "Editor Group hero" },
      { type: "split", image: "/images/editor-group/EG_Rebrand.jpg", alt: "Brand identity rebrand",
        heading: "A new identity, grounded in authority",
        body: "The mark needed to signal credibility to senior business leaders while feeling contemporary enough to attract the next generation of B2B decision-makers. Clean geometry, considered weight, and precise spacing — every decision earned its place." },
      { type: "slider", label: "Website Design", slides: [
        { image: "/images/editor-group/EG_Homepage.jpg", caption: "Homepage — editorial hub and thought leadership positioning" },
        { image: "/images/editor-group/EG_Articles.jpg", caption: "Articles — long-form B2B editorial and research" },
        { image: "/images/editor-group/EG_Case-Studies.jpg", caption: "Case studies — client success and outcomes" },
        { image: "/images/editor-group/EG_Landing.jpg", caption: "Landing pages — campaign and event acquisition" },
        { image: "/images/editor-group/EG_Services.jpg", caption: "Services — advisory and research positioning" },
        { image: "/images/editor-group/EG_Team.jpg", caption: "Team — leadership profiles and expertise" }
      ]},
      { type: "split", image: "/images/editor-group/EG_Design-System.jpg", alt: "Design system", flip: true,
        heading: "A system built to scale",
        body: "The component library gives the Editor Group team the tools to publish at scale — consistently. From article cards to event modules, every component enforces the brand while giving editors the creative flexibility they need." },
      { type: "fullwidth", image: "/images/editor-group/EG_Challenge.jpg", alt: "The editorial challenge" }
    ]
  },

  {
    slug: "hearsay",
    title: "Hearsay — AI-powered meeting intelligence",
    client: "Hearsay",
    categories: ["AI Product Design", "UX Design", "Product Strategy"],
    active: false,
    year: "2023",
    visual: "health",
    coverImage: "/images/hearsay/HS_Hero.jpg",
    deliverables: ["Product Research", "UX Design", "UI Design", "Prototyping"],
    summary: "Designed the experience for an AI meeting assistant that captures, transcribes and surfaces the insights that matter — so teams can focus on the conversation, not the notes.",
    overview: [
      "Hearsay began with a simple observation: the most valuable part of any meeting rarely makes it into the notes. An AI assistant that could capture everything was only half the solution — the real design challenge was surfacing what mattered, to the right person, at the right time.",
      "The meeting flow was designed around natural transitions: pre-meeting preparation, live attendance, and post-meeting review. Each phase had distinct user goals and attention states — the interface had to step back during the live session and come forward at the moments of value.",
      "The Hearsay workspace gives teams visibility into the conversations that shape decisions. Highlights, action items, and key moments are automatically extracted and attributed — turning what used to be a memory exercise into a shared, searchable record of how the business actually works."
    ],
    sections: [
      { type: "fullwidth", image: "/images/hearsay/HS_Hero.jpg", alt: "Hearsay hero" },
      { type: "split", image: "/images/hearsay/HS_Meeting.jpg", alt: "Live meeting interface",
        heading: "Designed for the live moment",
        body: "The live meeting view is deliberately minimal — the AI works quietly in the background while participants stay focused on the conversation. When something important happens, the interface surfaces it without interrupting the moment." },
      { type: "split", image: "/images/hearsay/HS_Insights.jpg", alt: "Meeting insights", flip: true,
        heading: "Insights that surface themselves",
        body: "Post-meeting, Hearsay automatically identifies key moments, decisions and action items. We spent significant time on confidence calibration — what the model is certain about is presented differently to what it's inferring from context." },
      { type: "slider", label: "Key Screens", slides: [
        { image: "/images/hearsay/HS_Keyscreens.jpg", caption: "Core screen set — meeting lifecycle overview" },
        { image: "/images/hearsay/HS_Transcript.jpg", caption: "Live transcript — timestamped, speaker-attributed and searchable" },
        { image: "/images/hearsay/HS_Outtakes.jpg", caption: "Outtakes — memorable moments worth revisiting" },
        { image: "/images/hearsay/HS_Prototypes.jpg", caption: "Interaction prototypes — testing the key decision flows" },
        { image: "/images/hearsay/HS_meeting-flow.jpg", caption: "Meeting flow — end-to-end user journey mapping" }
      ]},
      { type: "fullwidth", image: "/images/hearsay/HS_Challenge.jpg", alt: "The design challenge" }
    ]
  },

  {
    slug: "peq",
    title: "ParentalEQ — Co-parenting support platform",
    client: "ParentalEQ",
    categories: ["Product Design", "UX Design"],
    active: false,
    year: "2021",
    visual: "health",
    coverImage: "/images/peq/screencapture-web-archive-org-web-20210702204836-https-parentaleq-com-2023-06-09-10_50_19.png",
    deliverables: ["Product Strategy", "UX Design", "Interface Design"],
    summary: "A digital platform designed to support separated parents in building healthier co-parenting relationships — keeping children at the centre of every interaction.",
    overview: [
      "ParentalEQ was built on a recognition that the tools separated parents needed simply didn't exist. Shared calendars weren't designed for the complexity of custody arrangements. Messaging apps weren't designed to reduce conflict. Court documents weren't designed to be understood.",
      "The platform brought together the practical tools of co-parenting — scheduling, communication records, expense tracking — with a tone of voice and experience deliberately calibrated to reduce friction. Every design decision was tested against real scenarios from real separated families.",
      "The mobile-first experience extended to a web platform and native app, ensuring parents could manage arrangements on whatever device was at hand — whether picking up kids from school or in a lawyer's waiting room."
    ],
    sections: [
      { type: "fullwidth", image: "/images/peq/screencapture-web-archive-org-web-20210702204836-https-parentaleq-com-2023-06-09-10_50_19.png", alt: "ParentalEQ website" },
      { type: "grid", cols: 2, images: [
        { image: "/images/peq/screencapture-web-archive-org-web-20211208190607-https-parentaleq-com-2023-06-09-10_22_45.png", alt: "ParentalEQ platform overview" },
        { image: "/images/peq/screencapture-play-google-store-apps-details-2023-06-09-10_51_58.png", alt: "Android app on Google Play" }
      ]}
    ]
  }
];

const ARTICLES = [];

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
