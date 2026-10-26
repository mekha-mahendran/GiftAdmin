// Initial Seed and Default Data for GIFTPocket Admin Portal

export const INITIAL_CATEGORIES = [
  {
    id: "phone-charms",
    name: "Bag & Phone Charms",
    slug: "phone-charms",
    description: "Handcrafted floral bell charms, customized pendants, and aesthetic lanyards.",
    color: "#F4D2BE",
    textColor: "#6F5145",
    image: "/uploads/products/enamel-mini-phone-charms.png",
    itemCount: 24,
    order: 1
  },
  {
    id: "bracelets",
    name: "Bracelets & Bands",
    slug: "bracelets",
    description: "Friendship cords, magnetic couple bands, and invisible crystal charms.",
    color: "#C9BDD8",
    textColor: "#332822",
    image: "/uploads/products/lavender-crystal-flower-bracelet.jpg",
    itemCount: 18,
    order: 2
  },
  {
    id: "keychains",
    name: "Miniature Keychains",
    slug: "keychains",
    description: "Cute strap cartoon character keychains, name tags, and pocket keepsakes.",
    color: "#B9C5A0",
    textColor: "#332822",
    image: "",
    itemCount: 32,
    order: 3
  },
  {
    id: "hair-accessories",
    name: "Hair Accessories",
    slug: "hair-accessories",
    description: "Pastel flower claw clips, crystal blue hair barrettes, and vintage bows.",
    color: "#D9A99A",
    textColor: "#332822",
    image: "/uploads/products/ethnic-kundan-hair-ties.jpg",
    itemCount: 15,
    order: 4
  },
  {
    id: "miniature-toys",
    name: "Miniature Desk Toys",
    slug: "miniature-toys",
    description: "Cute panda bamboo companions, pocket desk buddies, and tiny figurines.",
    color: "#E8D49A",
    textColor: "#6F5145",
    image: "/uploads/products/miniature-couple-character-figurines.png",
    itemCount: 20,
    order: 5
  },
  {
    id: "radium-toys",
    name: "Radium & Glow Toys",
    slug: "radium-toys",
    description: "Glow-in-the-dark galaxy buddies and phosphorescent desk collectibles.",
    color: "#67949A",
    textColor: "#F8E8D5",
    image: "",
    itemCount: 12,
    order: 6
  },
  {
    id: "invisible-jewellery",
    name: "Invisible Jewellery",
    slug: "invisible-jewellery",
    description: "Floating illusion nylon necklaces, delicate crystal pendants & aura chokers.",
    color: "#F8E8D5",
    textColor: "#332822",
    image: "",
    itemCount: 14,
    order: 7
  },
  {
    id: "diy-kits",
    name: "DIY Kits",
    slug: "diy-kits",
    description: "All-in-one bead making, charm weaving, and keychain craft stations.",
    color: "#E8D49A",
    textColor: "#6F5145",
    image: "",
    itemCount: 9,
    order: 8
  },
  {
    id: "fridge-magnets",
    name: "Fridge Magnets",
    slug: "fridge-magnets",
    description: "Cute handcrafted keepsake fridge magnets and miniature cutouts.",
    color: "#F4D2BE",
    textColor: "#6F5145",
    image: "",
    itemCount: 22,
    order: 9
  },
  {
    id: "gift-sets",
    name: "Gift Sets & Hampers",
    slug: "gift-sets",
    description: "Curated gift boxes with greeting cards, ribbons and paired treasures.",
    color: "#B96F58",
    textColor: "#F8E8D5",
    image: "",
    itemCount: 16,
    order: 10
  },
  {
    id: "jumkas",
    name: "Jumkas",
    slug: "jumkas",
    description: "Handcrafted traditional bells, terracotta jhumkas, oxidized earrings, and mini festive drops.",
    color: "#E8D49A",
    textColor: "#332822",
    image: "/uploads/products/earrings-silver-jhumka.jpg",
    itemCount: 14,
    order: 11
  }
];

export const INITIAL_PRODUCTS = [
  {
    id: "charm-flower-bell",
    name: "Handcrafted Floral Bell Phone Charm",
    slug: "handcrafted-floral-bell-phone-charm",
    category: "phone-charms",
    price: 149,
    originalPrice: 249,
    wholesalePrice: 65,
    moq: 10,
    costPrice: 38,
    stock: 240,
    rating: 4.9,
    reviewsCount: 42,
    isCustomizable: true,
    isBestseller: true,
    isNewArrival: false,
    badge: "Bestseller",
    images: [
      "/uploads/products/flower-bell-charms.jpg",
      "/uploads/products/flower-bell-charms.jpg"
    ],
    description: "Cute pastel flower lanyard with mini golden chime bell. Customize with up to 8 alphabet beads and vibrant cord colors."
  },
  {
    id: "custom-beaded-wristlet",
    name: "Personalized Letter Charm Wristlet",
    slug: "personalized-letter-charm-wristlet",
    category: "phone-charms",
    price: 199,
    originalPrice: 299,
    wholesalePrice: 85,
    moq: 10,
    costPrice: 45,
    stock: 85,
    rating: 5.0,
    reviewsCount: 68,
    isCustomizable: true,
    isBestseller: true,
    isNewArrival: true,
    badge: "Trending",
    images: [
      "/uploads/products/phone-charm-pastel-tulip.jpg"
    ],
    description: "Sturdy acrylic beads strung on military-grade braided paracord. Perfect for phones, keys, and bags."
  },
  {
    id: "magnetic-couple-bracelet",
    name: "Eternal Bond Magnetic Couple Bracelets",
    slug: "eternal-bond-magnetic-couple-bracelets",
    category: "bracelets",
    price: 299,
    originalPrice: 499,
    wholesalePrice: 120,
    moq: 5,
    costPrice: 70,
    stock: 45,
    rating: 4.8,
    reviewsCount: 31,
    isCustomizable: false,
    isBestseller: false,
    isNewArrival: true,
    badge: "Couples Fav",
    images: [
      "/uploads/products/flower-bell-charms.jpg"
    ],
    description: "Two matching bracelets with mini half-heart magnets that snap together when hands hold."
  },
  {
    id: "pastel-claw-clip-set",
    name: "Korean Matte Flower Claw Clips (Set of 4)",
    slug: "korean-matte-flower-claw-clips-set-4",
    category: "hair-accessories",
    price: 249,
    originalPrice: 399,
    wholesalePrice: 110,
    moq: 12,
    costPrice: 55,
    stock: 310,
    rating: 4.7,
    reviewsCount: 19,
    isCustomizable: false,
    isBestseller: false,
    isNewArrival: false,
    badge: "Value Pack",
    images: [
      "/uploads/products/pastel-flower-claw-clip-set.jpg"
    ],
    description: "Ultra-soft matte pastel floral clips with secure nonslip grip."
  },
  {
    id: "mini-panda-figurine",
    name: "Pocket Bamboo Panda Desk Buddy",
    slug: "pocket-bamboo-panda-desk-buddy",
    category: "miniature-toys",
    price: 129,
    originalPrice: 199,
    wholesalePrice: 50,
    moq: 20,
    costPrice: 28,
    stock: 28,
    rating: 4.9,
    reviewsCount: 54,
    isCustomizable: false,
    isBestseller: true,
    isNewArrival: false,
    badge: "Low Stock",
    images: [
      "/uploads/products/miniature-panda-bamboo-set.jpg"
    ],
    description: "Tiny clay and resin panda clutching bamboo stem. Brings zen and smiles to any workstation."
  },
  {
    id: "luxury-birthday-hamper",
    name: "Celebration Sparkle Curated Gift Hamper",
    slug: "celebration-sparkle-curated-gift-hamper",
    category: "gift-sets",
    price: 899,
    originalPrice: 1299,
    wholesalePrice: 450,
    moq: 3,
    costPrice: 290,
    stock: 140,
    rating: 5.0,
    reviewsCount: 27,
    isCustomizable: true,
    isBestseller: false,
    isNewArrival: true,
    badge: "Premium Box",
    images: [
      "/uploads/products/earrings-silver-jhumka.jpg"
    ],
    description: "Luxury magnetic gift box containing customized charm, greeting card with calligraphy, scented wax melt & ribbon."
  }
,
  {
    "id": "earrings-silver-jhumka",
    "name": "Handcrafted Silver Bell Jumka Earrings",
    "slug": "handcrafted-silver-bell-jumka-earrings",
    "category": "jumkas",
    "price": 149,
    "originalPrice": 220,
    "wholesalePrice": 85,
    "moq": 15,
    "costPrice": 50,
    "stock": 260,
    "rating": 4.9,
    "reviewsCount": 118,
    "isCustomizable": false,
    "isBestseller": true,
    "isNewArrival": true,
    "badge": "Festive Favorite",
    "images": [
      "/uploads/products/earrings-silver-jhumka.jpg"
    ],
    "description": "Traditional oxidized silver-tone jhumka bell earrings with delicate filigree detailing and tiny acoustic bells."
  },
  {
    "id": "charm-enamel-icons",
    "name": "Aesthetic Enamel Icon Phone Charm Straps",
    "slug": "aesthetic-enamel-icon-phone-charm-straps",
    "category": "phone-charms",
    "price": 139,
    "originalPrice": 199,
    "wholesalePrice": 75,
    "moq": 20,
    "costPrice": 40,
    "stock": 320,
    "rating": 4.9,
    "reviewsCount": 88,
    "isCustomizable": false,
    "isBestseller": true,
    "isNewArrival": true,
    "badge": "New Arrival",
    "images": [
      "/uploads/products/enamel-mini-phone-charms.png"
    ],
    "description": "Delicate gold-trimmed enamel phone charms with aesthetic pendants including coffee cup, sneaker, retro camera, moon, yin-yang, and lucky clover."
  },
  {
    "id": "hair-kundan-ties",
    "name": "Handcrafted Kundan Floral Hair Ties & Scrunchies",
    "slug": "handcrafted-kundan-floral-hair-ties",
    "category": "hair-accessories",
    "price": 179,
    "originalPrice": 249,
    "wholesalePrice": 95,
    "moq": 15,
    "costPrice": 55,
    "stock": 240,
    "rating": 4.9,
    "reviewsCount": 94,
    "isCustomizable": false,
    "isBestseller": true,
    "isNewArrival": true,
    "badge": "Handcrafted",
    "images": [
      "/uploads/products/ethnic-kundan-hair-ties.jpg"
    ],
    "description": "Exquisite ethnic Kundan and vibrant multi-stone floral medallion hair ties, perfect for festive hair styling, weddings, and traditional elegance."
  },
  {
    "id": "bracelet-lavender-crystal",
    "name": "Lavender Crystal & Daisy Charm Bracelet",
    "slug": "lavender-crystal-daisy-charm-bracelet",
    "category": "bracelets",
    "price": 199,
    "originalPrice": 299,
    "wholesalePrice": 110,
    "moq": 15,
    "costPrice": 65,
    "stock": 190,
    "rating": 5,
    "reviewsCount": 142,
    "isCustomizable": false,
    "isBestseller": true,
    "isNewArrival": true,
    "badge": "Bestseller",
    "images": [
      "/uploads/products/lavender-crystal-flower-bracelet.jpg"
    ],
    "description": "Dreamy crackle quartz lavender crystal bead bracelet accented with gold spacer beads, faceted champagne crystal droplet, and purple daisy enamel charm."
  },
  {
    "id": "bracelet-gold-charms",
    "name": "Pastel Enamel Rainbow Gold Link Bracelet",
    "slug": "pastel-enamel-rainbow-gold-link-bracelet",
    "category": "bracelets",
    "price": 219,
    "originalPrice": 320,
    "wholesalePrice": 125,
    "moq": 12,
    "costPrice": 75,
    "stock": 180,
    "rating": 4.9,
    "reviewsCount": 105,
    "isCustomizable": false,
    "isBestseller": false,
    "isNewArrival": true,
    "badge": "Charm Special",
    "images": [
      "/uploads/products/gold-charm-link-bracelet.png"
    ],
    "description": "Charming gold-tone link chain loaded with whimsical charms: heart padlock, butterfly, rainbow cloud, and pastel floral petals."
  },
  {
    "id": "toy-glass-flower-vases",
    "name": "Miniature Glass Flower Bouquet Desk Vases",
    "slug": "miniature-glass-flower-bouquet-desk-vases",
    "category": "miniature-toys",
    "price": 169,
    "originalPrice": 249,
    "wholesalePrice": 89,
    "moq": 15,
    "costPrice": 52,
    "stock": 220,
    "rating": 5,
    "reviewsCount": 120,
    "isCustomizable": false,
    "isBestseller": true,
    "isNewArrival": true,
    "badge": "Desk Magic",
    "images": [
      "/uploads/products/miniature-glass-flower-vases.jpg"
    ],
    "description": "Adorable handcrafted miniature glass flower bouquet arrangements in crystal bottles. A cheerful aesthetic pocket desk buddy and keepsake gift."
  },
  {
    "id": "gp-022",
    "name": "Miniature Romantic Couple & Cute Character Figurines",
    "slug": "miniature-romantic-couple-cute-character-figurines",
    "category": "miniature-toys",
    "price": 189,
    "originalPrice": 279,
    "wholesalePrice": 99,
    "moq": 12,
    "costPrice": 58,
    "stock": 180,
    "rating": 5,
    "reviewsCount": 142,
    "isCustomizable": false,
    "isBestseller": true,
    "isNewArrival": true,
    "badge": "Couple Keepsake",
    "images": [
      "/uploads/products/miniature-couple-character-figurines.png"
    ],
    "description": "Adorable handcrafted miniature romantic couple & cartoon character figurines. Featuring cute pairs on scooters, royal wedding duos, cozy animal hoods, and romantic keepsakes for car dashboards, study desks, and anniversary gifting."
  }
];

export const INITIAL_ORDERS = [];

export const INITIAL_WHOLESALE_APPS = [];

export const INITIAL_BULK_ENQUIRIES = [];

export const INITIAL_STORY_FRAMES = [
  {
    id: "frame-1",
    title: "Little things. Big smiles.",
    subtitle: "A cute organic gift boutique handcrafted with love",
    bg: "#F8E8D5",
    animation: "fade",
    tag: "Chapter 01: The Intro",
    order: 1
  },
  {
    id: "frame-2",
    title: "Make it yours. In seconds.",
    subtitle: "Interactive letter and bead charm customizer studio",
    bg: "#F4D2BE",
    animation: "pinned",
    tag: "Chapter 02: 2D Customizer",
    order: 2
  },
  {
    id: "frame-3",
    title: "Curated Joy & Wholesale Tiers.",
    subtitle: "Seamless bulk orders for concept stores & dreamers",
    bg: "#E8D49A",
    animation: "slide",
    tag: "Chapter 03: Wholesale B2B",
    order: 3
  },
  {
    id: "frame-4",
    title: "Give a little. Make it big.",
    subtitle: "Final brand seal & packaging promise",
    bg: "#B96F58",
    textColor: "#F8E8D5",
    animation: "scale",
    tag: "Chapter 04: Brand Finale",
    order: 4
  }
];

export const INITIAL_COUPONS = [
  {
    id: "c-1",
    code: "WELCOME10",
    discountType: "percentage",
    value: 10,
    minOrderAmount: 299,
    maxDiscount: 100,
    isActive: true,
    expiresAt: "2026-12-31",
    usageCount: 142
  },
  {
    id: "c-2",
    code: "SMILE50",
    discountType: "fixed",
    value: 50,
    minOrderAmount: 399,
    maxDiscount: 50,
    isActive: true,
    expiresAt: "2026-11-30",
    usageCount: 88
  },
  {
    id: "c-3",
    code: "FREESHIP",
    discountType: "shipping",
    value: 49,
    minOrderAmount: 499,
    maxDiscount: 49,
    isActive: true,
    expiresAt: "2026-12-31",
    usageCount: 215
  }
];

export const INITIAL_SETTINGS = {
  storeName: "GIFTPocket",
  tagline: "Little Things. Big Smiles.",
  currency: "INR",
  currencySymbol: "₹",
  freeShippingAbove: 499,
  standardShippingFee: 49,
  supportEmail: "hello@giftpocket.in",
  supportPhone: "+91 98656 83004",
  whatsappNumber: "+91 98656 83004",
  gstNumber: "27AAACG9876K1Z1",
  warehouseCity: "Mumbai, Maharashtra",
  storeStatus: "Live & Taking Orders"
};

export const INITIAL_HOMEPAGE_MEDIA = [
  // 01 — HERO CINEMATIC PICTURES
  {
    id: "hero-main",
    section: "hero",
    sectionName: "Hero Cinematic",
    title: "Bestselling Floral Phone Charm",
    subtitle: "Handmade pastel charms with golden chimes",
    tag: "Primary Hero Focus",
    image: "/images/products/bag-charms.jpg",
    link: "/shop?filter=bestseller",
    aspect: "portrait"
  },
  {
    id: "hero-polaroid-1",
    section: "hero",
    sectionName: "Hero Cinematic",
    title: "Customized Letter Charms",
    subtitle: "Custom initials & pastel acrylic beads",
    tag: "Floating Polaroid 1",
    image: "/uploads/products/flower-bell-charms.jpg",
    link: "/customized",
    aspect: "square"
  },
  {
    id: "hero-polaroid-2",
    section: "hero",
    sectionName: "Hero Cinematic",
    title: "Eco Packaging & Gift Boxes",
    subtitle: "Wrapped with love & wax seals",
    tag: "Floating Polaroid 2",
    image: "/uploads/products/earrings-silver-jhumka.jpg",
    link: "/shop?category=gift-sets",
    aspect: "square"
  },

  // 02 — SHOP BY MOOD PICTURES
  {
    id: "mood-birthday",
    section: "moods",
    sectionName: "Shop by Mood",
    title: "Birthday Treats",
    subtitle: "Make their special day sparkle with ready gift hampers",
    tag: "Celebration",
    color: "#F4D2BE",
    image: "/uploads/products/pastel-flower-claw-clip-set.jpg",
    link: "/shop?mood=birthday",
    aspect: "landscape"
  },
  {
    id: "mood-besties",
    section: "moods",
    sectionName: "Shop by Mood",
    title: "For Besties",
    subtitle: "Matching cords, secret charms & initials",
    tag: "Friendship",
    color: "#C9BDD8",
    image: "/uploads/products/flower-bell-charms.jpg",
    link: "/shop?mood=bestie",
    aspect: "landscape"
  },
  {
    id: "mood-couples",
    section: "moods",
    sectionName: "Shop by Mood",
    title: "For Couples",
    subtitle: "Magnetic pairs & custom anniversary tokens",
    tag: "Love & Romance",
    color: "#D9A99A",
    image: "/uploads/products/miniature-couple-character-figurines.png",
    link: "/shop?mood=couple",
    aspect: "landscape"
  },
  {
    id: "mood-just-because",
    section: "moods",
    sectionName: "Shop by Mood",
    title: "Just Because",
    subtitle: "Tiny spontaneous pick-me-ups to make someone smile",
    tag: "Surprise",
    color: "#B9C5A0",
    image: "/uploads/products/miniature-panda-bamboo-set.jpg",
    link: "/shop?mood=cute",
    aspect: "landscape"
  },

  // 03 — COLOR STORY CHAPTER PICTURES
  {
    id: "color-peach",
    section: "color-chapters",
    sectionName: "Color Chapters",
    title: "Candy Peach Phone Charms",
    subtitle: "Aesthetic phone charms for your everyday case",
    tag: "Chapter: Peach",
    bgColor: "#F4D2BE",
    image: "/images/products/bag-charms.jpg",
    link: "/shop?category=phone-charms",
    aspect: "square"
  },
  {
    id: "color-lavender",
    section: "color-chapters",
    sectionName: "Color Chapters",
    title: "Muted Lavender Friendship Bands",
    subtitle: "Keepsake friendship & couple magnetic bands",
    tag: "Chapter: Lavender",
    bgColor: "#C9BDD8",
    image: "/uploads/products/flower-bell-charms.jpg",
    link: "/shop?category=bracelets",
    aspect: "square"
  },
  {
    id: "color-sage",
    section: "color-chapters",
    sectionName: "Color Chapters",
    title: "Matcha Sage Pocket Miniatures",
    subtitle: "Pocket-sized resin shakers & 3D food miniatures",
    tag: "Chapter: Sage",
    bgColor: "#B9C5A0",
    image: "/uploads/products/miniature-panda-bamboo-set.jpg",
    link: "/shop?category=keychains",
    aspect: "square"
  },
  {
    id: "color-yellow",
    section: "color-chapters",
    sectionName: "Color Chapters",
    title: "Butter Yellow DIY Craft Stations",
    subtitle: "Creative charm making & bead craft stations",
    tag: "Chapter: Yellow",
    bgColor: "#E8D49A",
    image: "/uploads/products/pastel-flower-claw-clip-set.jpg",
    link: "/shop?category=diy-kits",
    aspect: "square"
  },

  // 04 — STORYTELLING GIFT MOMENTS
  {
    id: "moment-birthday",
    section: "gift-moments",
    sectionName: "Gift Moments",
    title: "The Birthday Surprise",
    subtitle: "Personalized hampers filled with custom charms, glowing toys & handwritten wishes.",
    tag: "BIRTHDAY",
    image: "/uploads/products/pastel-flower-claw-clip-set.jpg",
    link: "/shop?mood=birthday",
    aspect: "landscape"
  },
  {
    id: "moment-bestie",
    section: "gift-moments",
    sectionName: "Gift Moments",
    title: "The Unbreakable Bestie Bond",
    subtitle: "Matching pastel cords and secret charms that make miles feel like inches.",
    tag: "BESTIE",
    image: "/uploads/products/flower-bell-charms.jpg",
    link: "/shop?mood=bestie",
    aspect: "landscape"
  },
  {
    id: "moment-just-because",
    section: "gift-moments",
    sectionName: "Gift Moments",
    title: "The 'Just Because' Smile",
    subtitle: "Tiny pocket surprises sent for no other reason than to brighten their afternoon.",
    tag: "JUST BECAUSE",
    image: "/uploads/products/miniature-panda-bamboo-set.jpg",
    link: "/shop?mood=cute",
    aspect: "landscape"
  },

  // 05 — PINTEREST LIFESTYLE GALLERY
  {
    id: "gallery-1",
    section: "gallery",
    sectionName: "Pinterest Feed",
    title: "Glow-in-the-Dark Radium Pocket Buddies",
    subtitle: "Phosphorescent desk toys and starry companions",
    tag: "Radium & Glow",
    image: "/uploads/products/miniature-panda-bamboo-set.jpg",
    link: "/shop?category=radium-toys",
    aspect: "portrait"
  },
  {
    id: "gallery-2",
    section: "gallery",
    sectionName: "Pinterest Feed",
    title: "Cute Cartoon Strap Keychains",
    subtitle: "Pastel silicone straps with silicone figurines",
    tag: "Keychains",
    image: "/uploads/products/phone-charm-pastel-tulip.jpg",
    link: "/shop?category=keychains",
    aspect: "portrait"
  },
  {
    id: "gallery-3",
    section: "gallery",
    sectionName: "Pinterest Feed",
    title: "Panda & Bamboo Miniature Figurines",
    subtitle: "Tiny desk companions and zen buddies",
    tag: "Miniature Toys",
    image: "/uploads/products/miniature-panda-bamboo-set.jpg",
    link: "/shop?category=miniature-toys",
    aspect: "square"
  },
  {
    id: "gallery-4",
    section: "gallery",
    sectionName: "Pinterest Feed",
    title: "Pastel Flower Claw Clips & Hair Barrettes",
    subtitle: "Matte aesthetic hair accessories and vintage pins",
    tag: "Hair Accessories",
    image: "/uploads/products/pastel-flower-claw-clip-set.jpg",
    link: "/shop?category=hair-accessories",
    aspect: "portrait"
  },
  {
    id: "gallery-5",
    section: "gallery",
    sectionName: "Pinterest Feed",
    title: "Floral Bell Bag Charms & Pendants",
    subtitle: "Handcrafted lanyard with gentle chiming bells",
    tag: "Bag Charms",
    image: "/uploads/products/flower-bell-charms.jpg",
    link: "/shop?category=phone-charms",
    aspect: "portrait"
  },
  {
    id: "gallery-6",
    section: "gallery",
    sectionName: "Pinterest Feed",
    title: "Miniature Couple & Character Figurines",
    subtitle: "Adorable desk keepsakes & car dashboard buddies",
    tag: "Figurines",
    image: "/uploads/products/miniature-couple-character-figurines.png",
    link: "/shop?category=miniature-toys",
    aspect: "square"
  }
];

export const HOMEPAGE_SECTIONS = [
  { id: "all", name: "All Homepage Pictures" },
  { id: "hero", name: "Hero Cinematic Media" },
  { id: "moods", name: "Shop by Mood Cards" },
  { id: "color-chapters", name: "Color Story Chapters" },
  { id: "gift-moments", name: "Gift Moments Cards" },
  { id: "gallery", name: "Pinterest Lifestyle Feed" }
];

export const INITIAL_CUSTOMIZER_THEMES = [
  {
    id: "theme-lavender",
    name: "Pastel Lavender",
    hex: "#C9BDD8",
    textColor: "#332822",
    beadPalette: ["#C9BDD8", "#F4D2BE", "#F8E8D5"],
    description: "Dreamy lavender cords with cream accent beads",
    isActive: true
  },
  {
    id: "theme-peach",
    name: "Candy Peach",
    hex: "#F4D2BE",
    textColor: "#6F5145",
    beadPalette: ["#F4D2BE", "#D9A99A", "#F8E8D5"],
    description: "Warm sunset peach beads and golden accents",
    isActive: true
  },
  {
    id: "theme-sage",
    name: "Matcha Sage",
    hex: "#B9C5A0",
    textColor: "#332822",
    beadPalette: ["#B96F58", "#E8D49A", "#F8E8D5"],
    description: "Earthy matcha green with cozy butter cream beads",
    isActive: true
  },
  {
    id: "theme-butter",
    name: "Butter Cream",
    hex: "#E8D49A",
    textColor: "#6F5145",
    beadPalette: ["#E8D49A", "#F8E8D5", "#D9A99A"],
    description: "Sunny butter yellow and iridescent glass pearls",
    isActive: true
  },
  {
    id: "theme-bubblegum",
    name: "Bubblegum Pink",
    hex: "#D9A99A",
    textColor: "#332822",
    beadPalette: ["#D9A99A", "#F4D2BE", "#C9BDD8"],
    description: "Sweet strawberry milk tones with silver stars",
    isActive: true
  }
];

export const INITIAL_CUSTOMIZER_SHAPES = [
  { id: "round", name: "Classic Round", icon: "Circle", isActive: true },
  { id: "heart", name: "Sweetheart", icon: "Heart", isActive: true },
  { id: "square", name: "Modern Square", icon: "Square", isActive: true },
  { id: "star", name: "Cosmic Star", icon: "Sparkles", isActive: true }
];

export const INITIAL_CUSTOMIZER_CONFIG = {
  studioTitle: "The Customization Studio",
  studioSubtitle: "Handmade Just For You",
  studioDescription: "Choose a canvas below, pick your pastel bead palettes, spell out your letters, and preview your creation live in real-time.",
  maxLetterLength: 10,
  defaultLetterText: "SMILE",
  charPriceExtra: 0,
  photoUploadEnabled: true,
  inspirationPrompts: [
    { id: "p1", tag: "💖 Bestie Initials", example: 'e.g. "RIA & AMY"' },
    { id: "p2", tag: "⭐ Lucky Word", example: 'e.g. "MAGIC", "HOPE"' },
    { id: "p3", tag: "🧸 Cute Nicknames", example: 'e.g. "BOBA", "SUNNY"' },
    { id: "p4", tag: "🎂 Special Date", example: 'e.g. "24.08.26"' }
  ]
};


