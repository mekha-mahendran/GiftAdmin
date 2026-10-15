// Initial Seed and Default Data for GIFTPocket Admin Portal

export const INITIAL_CATEGORIES = [
  {
    id: "phone-charms",
    name: "Bag & Phone Charms",
    slug: "phone-charms",
    description: "Handcrafted floral bell charms, customized pendants, and aesthetic lanyards.",
    color: "#F4D2BE",
    textColor: "#6F5145",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?auto=format&fit=crop&w=600&q=80",
    itemCount: 20,
    order: 5
  },
  {
    id: "gift-sets",
    name: "Gift Sets & Hampers",
    slug: "gift-sets",
    description: "Curated gift boxes with greeting cards, ribbons and paired treasures.",
    color: "#B96F58",
    textColor: "#F8E8D5",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
    itemCount: 16,
    order: 6
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
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
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
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80"
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
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
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
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
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
      "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?auto=format&fit=crop&w=600&q=80"
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
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Luxury magnetic gift box containing customized charm, greeting card with calligraphy, scented wax melt & ribbon."
  }
];

export const INITIAL_ORDERS = [
  {
    id: "ORD-98214",
    orderNumber: "GP-2026-98214",
    customer: {
      name: "Priya Patel",
      email: "priya.patel@gmail.com",
      phone: "+91 98201 44512",
      address: "Flat 402, Sunshine Heights, Bandra West, Mumbai, Maharashtra - 400050"
    },
    items: [
      { id: "charm-flower-bell", name: "Floral Bell Phone Charm", price: 149, quantity: 2, customName: "PRIYA", theme: "Peach Sunrise" },
      { id: "magnetic-couple-bracelet", name: "Couple Bracelets", price: 299, quantity: 1 }
    ],
    subtotal: 597,
    discountAmount: 150,
    shippingFee: 0,
    total: 447,
    status: "Delivered",
    paymentStatus: "Paid (UPI)",
    trackingNumber: "DELHIVERY-98124501",
    date: "2026-08-24",
    type: "Retail"
  },
  {
    id: "ORD-98215",
    orderNumber: "GP-2026-98215",
    customer: {
      name: "Twinkle Trinkets Store (Rohit Verma)",
      email: "orders@twinkletrinkets.in",
      phone: "+91 91102 99881",
      address: "Shop 14, Commercial Plaza, Indiranagar, Bengaluru, Karnataka - 560038"
    },
    items: [
      { id: "charm-flower-bell", name: "Floral Bell Phone Charm", price: 65, quantity: 40 },
      { id: "custom-beaded-wristlet", name: "Letter Charm Wristlet", price: 85, quantity: 15 }
    ],
    subtotal: 3875,
    discountAmount: 0,
    shippingFee: 75,
    total: 3950,
    status: "Shipped",
    paymentStatus: "Paid (NEFT)",
    trackingNumber: "BLUEDART-8821940",
    date: "2026-08-28",
    type: "Wholesale"
  },
  {
    id: "ORD-98216",
    orderNumber: "GP-2026-98216",
    customer: {
      name: "Ananya Sharma",
      email: "ananya.s@outlook.com",
      phone: "+91 98450 12389",
      address: "Villa 22, Green Meadows, Gachibowli, Hyderabad, Telangana - 500032"
    },
    items: [
      { id: "mini-panda-figurine", name: "Pocket Bamboo Panda", price: 129, quantity: 1 },
      { id: "shipping", name: "Standard Shipping", price: 49, quantity: 1 }
    ],
    subtotal: 129,
    discountAmount: 29,
    shippingFee: 49,
    total: 149,
    status: "Processing",
    paymentStatus: "Paid (Razorpay)",
    trackingNumber: "Pending Dispatch",
    date: "2026-08-30",
    type: "Retail"
  },
  {
    id: "ORD-98217",
    orderNumber: "GP-2026-98217",
    customer: {
      name: "Devika Roy",
      email: "devika.roy@yahoo.com",
      phone: "+91 97321 00219",
      address: "B-12, Salt Lake Sector 3, Kolkata, West Bengal - 700091"
    },
    items: [
      { id: "luxury-birthday-hamper", name: "Celebration Sparkle Hamper", price: 899, quantity: 1, customName: "HAPPY BDAY SANYA", notes: "Please add gold ribbon!" }
    ],
    subtotal: 899,
    discountAmount: 90,
    shippingFee: 0,
    total: 809,
    status: "Packed",
    paymentStatus: "Paid (Card)",
    trackingNumber: "SHADOWFAX-661294",
    date: "2026-09-01",
    type: "Retail"
  }
];

export const INITIAL_WHOLESALE_APPS = [
  {
    id: "app-1",
    businessName: "Aura Boutique & Gifts",
    contactPerson: "Meera Sen",
    email: "contact@auraboutique.com",
    phone: "+91 98200 11223",
    city: "Pune",
    state: "Maharashtra",
    businessType: "Gift & Lifestyle Store",
    gst: "27AABCA1234F1Z5",
    status: "APPROVED",
    tier: "Silver (15% Off)",
    appliedDate: "2026-08-15"
  },
  {
    id: "app-2",
    businessName: "Kawaii Corner Online",
    contactPerson: "Kavya Menon",
    email: "kavya@kawaiicorner.shop",
    phone: "+91 94471 88990",
    city: "Kochi",
    state: "Kerala",
    businessType: "Online Boutique",
    gst: "32AAAAA0000A1Z5",
    status: "PENDING",
    tier: "Pending Review",
    appliedDate: "2026-08-29"
  },
  {
    id: "app-3",
    businessName: "Bloom & Sparkle Cafe",
    contactPerson: "Aditya Roy",
    email: "aditya@bloomcafe.in",
    phone: "+91 98112 33445",
    city: "Delhi NCR",
    state: "Delhi",
    businessType: "Concept Cafe & Retail Shelf",
    gst: "07AAACB2234G1Z0",
    status: "PENDING",
    tier: "Pending Review",
    appliedDate: "2026-09-01"
  }
];

export const INITIAL_BULK_ENQUIRIES = [
  {
    id: "enq-101",
    name: "Tanya Kapoor",
    business: "Wedding Favors by Tanya",
    email: "tanya@weddingfavors.in",
    phone: "+91 98100 45678",
    productName: "Personalized Initial Floral Phone Charms",
    quantity: 150,
    targetDate: "2026-10-15",
    notes: "Need pastel pink beads with bridesmaids' names for wedding giveaways in Goa.",
    status: "Quote Sent"
  },
  {
    id: "enq-102",
    name: "Siddharth Rao",
    business: "PixelCraft Technologies",
    email: "hr@pixelcraft.co",
    phone: "+91 99001 22334",
    productName: "Pocket Bamboo Panda & Desk Buddy Kits",
    quantity: 250,
    targetDate: "2026-10-01",
    notes: "Employee welcome swag boxes. Need customized branding cards.",
    status: "New"
  }
];

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
  supportPhone: "+91 98420 13465",
  whatsappNumber: "+91 98420 13465",
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
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=700&q=80",
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
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80",
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
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=700&q=80",
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
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    link: "/shop?category=phone-charms",
    aspect: "portrait"
  },
  {
    id: "gallery-6",
    section: "gallery",
    sectionName: "Pinterest Feed",
    title: "Curated Keepsake Gift Sets & Boxes",
    subtitle: "Luxury magnetic gift hampers with personalized notes",
    tag: "Gift Sets",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
    link: "/shop?category=gift-sets",
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


