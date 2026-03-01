import ProjectData from '@/data/ProjectData'

export default [
  new ProjectData({
    id: "project-1",
    name: "Genopets",
    iconUrl: "img/projects/genopets.jpg",
    description: "Genopets is world's first Move-to-Earn NFT mobile game that combines nurturing, evolving and battle mechanics of Tamagotchi and Pokemon to create a unique blend.",
    accentColor: "#c10606",
    isWide: true,
    videoUrl: "https://www.youtube.com/embed/S1PfRNdd420",
    storeUrl: "https://play.google.com/store/apps/details?id=me.genopets.mobile&hl=en&gl=US",
    storeLabel: "Get on Google Play",
    features: [
      "Move and take steps to bank them and earn energy points.",
      "Get unique pets and customize as well as evolve them.",
      "Nurture and play with pets on daily basis.",
      "Get unique habitats for your pets that yield resources."
    ],
    contributions: [
      "Worked on NFT based projects and developed NFT minting features, procedural NFT generation.",
      "Set up rendering pipeline on cloud machine instances to generate marketplace videos, GIFs and PNGs of NFTs through Unity CLI on each mint."
    ]
  }),
  new ProjectData({
    id: "project-2",
    name: "Gamerize Dictionary",
    iconUrl: "img/projects/gamerize.jpg",
    description: "Gamerize Dictionary is an educational app originally targeted for Japanese students filled with fun adventures that allow graded learning through images, translations and audio paired with kingdom building mechanics.",
    accentColor: "#1ca1e2",
    videoUrl: "https://www.youtube.com/embed/aGZ2D_c3Pfc",
    storeUrl: "https://play.google.com/store/apps/details?id=app.gamerize.gamerize&hl=ja&gl=jp",
    storeLabel: "Get on Google Play",
    features: [
      "Learn skills of reading, writing, speaking and listening.",
      "Collect resources and build kingdom from scratch.",
      "Battle with your favorite heroes and embark on quests.",
      "Customize heroes and kingdom by unlocking upgrades and finding rare items."
    ],
    contributions: [
      "Developed core features of educational 2D game Gamerize Dictionary.",
      "Implemented graded learning systems with images, translations and audio."
    ]
  }),
  new ProjectData({
    id: "project-3",
    name: "Soulside Wonderland",
    iconUrl: "img/projects/soulside.PNG",
    description: "Soulside Wonderland is a social metaverse featuring the creation of 3d spaces filled with effects, art work and music with the ability to share and interact with each others unique creations.",
    accentColor: "#ff00d4",
    videoUrl: "https://www.youtube.com/embed/D8oTZ_9cTz4",
    storeUrl: "https://play.google.com/store/apps/details?id=com.soulside.app",
    storeLabel: "Get on Google Play",
    features: [
      "Create and share immersive spaces.",
      "Import models and create unique 3d experiences.",
      "Interact with and follow people within community.",
      "Explore worlds and modify spaces of other members."
    ],
    contributions: [
      "Laid down multiplayer architecture using Photon/Mirror Networking SDK."
    ]
  }),
  new ProjectData({
    id: "project-4",
    name: "Nail Salon",
    iconUrl: "img/projects/nail-salon.jpg",
    description: "Nail Salon is a superhit hypercasual game made in collaboration with Lion studios. Provides an exhilarating experience in polishing nails.",
    accentColor: "#0c00ff",
    videoUrl: "https://www.youtube.com/embed/h3kWJpX0xY4",
    storeUrl: "https://apps.apple.com/us/app/nail-salon-3d/id1523081624",
    storeLabel: "Get on App Store",
    features: [
      "Fix and adorn feet, hands, toes and finger nails.",
      "Build your own salon and buy new equipment.",
      "Provide special services to VIP clients.",
      "Unlimited range of colors and options for unique nails look."
    ],
    contributions: [
      "Implemented core architecture, gameplay mechanics, AI and Character Controllers.",
      "Collaborated with designers and product owners for rolling out game mechanics and features."
    ]
  }),
  new ProjectData({
    id: "project-5",
    name: "Novi",
    iconUrl: "img/projects/novi.png",
    description: "Novi is a puzzle game involving visual intelligence and tile matching mechanics with a huge number of intricate levels.",
    accentColor: "#00830d",
    videoUrl: "https://www.youtube.com/embed/PQuNJ1Mha8I",
    storeUrl: "https://play.google.com/store/apps/details?id=com.tintash.novi",
    storeLabel: "Get on Google Play",
    features: [
      "Hundreds of unique puzzles.",
      "Solve puzzles with minimum moves.",
      "Boost your visual IQ and compete against top players.",
      "Visually stunning patterns and relaxing background music."
    ],
    contributions: [
      "Implemented core architecture, gameplay mechanics and Level Editor Utilities.",
      "Set up CI/CD pipelines for projects which led to fast production and improved overall workflow."
    ]
  }),
];