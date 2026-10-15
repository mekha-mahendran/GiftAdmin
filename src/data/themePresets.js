export const THEME_PRESETS = [
  {
    id: "classic-peach",
    name: "Classic Peach & Terracotta",
    description: "Our signature warm artisan aesthetic with cozy peach and earthy terracotta.",
    isDark: false,
    previewHex: "#B96F58",
    colors: {
      primary: "#B96F58",
      primaryHover: "#9E5742",
      primaryText: "#FFFFFF",
      secondary: "#F4D2BE",
      secondaryText: "#6F5145",
      background: "#F8E8D5",
      surface: "#FFFFFF",
      surfaceText: "#332822",
      textPrimary: "#332822",       // Deep Espresso Roast
      textSecondary: "#6F5145",     // Warm Cocoa Muted
      accent: "#E8D49A",
      border: "#D9A99A",
      navBg: "rgba(248, 232, 213, 0.88)",
      cardBg: "rgba(255, 255, 255, 0.92)"
    }
  },
  {
    id: "lavender-dream",
    name: "Pastel Lavender Dream",
    description: "Soft dreamy purple pastels, lilac cords, and ethereal crystal violet accents.",
    isDark: false,
    previewHex: "#8E7CC3",
    colors: {
      primary: "#8E7CC3",
      primaryHover: "#725CA6",
      primaryText: "#FFFFFF",
      secondary: "#E0D7F0",
      secondaryText: "#52436A",
      background: "#F5F0FA",
      surface: "#FFFFFF",
      surfaceText: "#251D33",
      textPrimary: "#251D33",       // Deep Midnight Violet
      textSecondary: "#5E4E75",     // Muted Lavender Slate
      accent: "#F4D2BE",
      border: "#C9BDD8",
      navBg: "rgba(245, 240, 250, 0.88)",
      cardBg: "rgba(255, 255, 255, 0.92)"
    }
  },
  {
    id: "matcha-sage",
    name: "Matcha Sage & Botanical",
    description: "Calming botanical green, natural jade tones, and peaceful matcha cream.",
    isDark: false,
    previewHex: "#5E7C57",
    colors: {
      primary: "#5E7C57",
      primaryHover: "#486242",
      primaryText: "#FFFFFF",
      secondary: "#DCE7D8",
      secondaryText: "#42553E",
      background: "#F2F6F0",
      surface: "#FFFFFF",
      surfaceText: "#1C291B",
      textPrimary: "#1C291B",       // Deep Forest Obsidian
      textSecondary: "#485E46",     // Earthy Sage Olive
      accent: "#E8D49A",
      border: "#B9C5A0",
      navBg: "rgba(242, 246, 240, 0.88)",
      cardBg: "rgba(255, 255, 255, 0.92)"
    }
  },
  {
    id: "butter-cream",
    name: "Butter Cream & Honey",
    description: "Sunny butter yellow, honeycomb gold, and cheerful warm pastel warmth.",
    isDark: false,
    previewHex: "#C49235",
    colors: {
      primary: "#C49235",
      primaryHover: "#A67825",
      primaryText: "#FFFFFF",
      secondary: "#F7E6B8",
      secondaryText: "#5E4320",
      background: "#FAF6EB",
      surface: "#FFFFFF",
      surfaceText: "#2E210E",
      textPrimary: "#2E210E",       // Deep Roasted Chestnut
      textSecondary: "#695029",     // Warm Amber Umber
      accent: "#B96F58",
      border: "#E8D49A",
      navBg: "rgba(250, 246, 235, 0.88)",
      cardBg: "rgba(255, 255, 255, 0.92)"
    }
  },
  {
    id: "strawberry-rose",
    name: "Strawberry Milk & Rose",
    description: "Sweet strawberry milk, romantic rose quartz, and playful pink hues.",
    isDark: false,
    previewHex: "#C95A75",
    colors: {
      primary: "#C95A75",
      primaryHover: "#AA425B",
      primaryText: "#FFFFFF",
      secondary: "#FAD3DD",
      secondaryText: "#6A313E",
      background: "#FDF0F3",
      surface: "#FFFFFF",
      surfaceText: "#30131B",
      textPrimary: "#30131B",       // Deep Velvet Wine
      textSecondary: "#6E3846",     // Rich Berry Mocha
      accent: "#E8D49A",
      border: "#EAA6B8",
      navBg: "rgba(253, 240, 243, 0.88)",
      cardBg: "rgba(255, 255, 255, 0.92)"
    }
  },
  {
    id: "ocean-breeze",
    name: "Ocean Mist & Seafoam",
    description: "Refreshing coastal aquamarine, seafoam breeze, and deep ocean blue.",
    isDark: false,
    previewHex: "#458594",
    colors: {
      primary: "#458594",
      primaryHover: "#336B78",
      primaryText: "#FFFFFF",
      secondary: "#C7E5EB",
      secondaryText: "#30505A",
      background: "#EEF7F9",
      surface: "#FFFFFF",
      surfaceText: "#12242B",
      textPrimary: "#12242B",       // Deep Oceanic Ink
      textSecondary: "#3B5F69",     // Coastal Navy Slate
      accent: "#F4D2BE",
      border: "#9BCBD6",
      navBg: "rgba(238, 247, 249, 0.88)",
      cardBg: "rgba(255, 255, 255, 0.92)"
    }
  },
  {
    id: "midnight-gold",
    name: "Velvet Noir & Gold (Luxury)",
    description: "Ultra-premium dark velvet with luminous champagne gold highlights.",
    isDark: true,
    previewHex: "#D4AF37",
    colors: {
      primary: "#D4AF37",
      primaryHover: "#B89426",
      primaryText: "#18141C",
      secondary: "#2D2633",
      secondaryText: "#F0E4D0",
      background: "#18141C",
      surface: "#241E2B",
      surfaceText: "#FDF8E8",
      textPrimary: "#FDF8E8",       // Luminous Champagne Ivory (Adaptive light for dark mode)
      textSecondary: "#D1C3B4",     // Soft Golden Parchment
      accent: "#E8D49A",
      border: "#4E4259",
      navBg: "rgba(24, 20, 28, 0.92)",
      cardBg: "rgba(36, 30, 43, 0.95)"
    }
  }
];

export const DEFAULT_THEME = THEME_PRESETS[0];

export const isColorLight = (hexColor) => {
  if (!hexColor || typeof hexColor !== 'string') return true;
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2) || '255', 16);
  const g = parseInt(hex.substring(2, 4) || '255', 16);
  const b = parseInt(hex.substring(4, 6) || '255', 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55;
};

export const getAdaptiveTextColors = (bgHex) => {
  const isLight = isColorLight(bgHex);
  if (isLight) {
    return {
      textPrimary: '#2B211C',
      textSecondary: '#634E44',
      surface: '#FFFFFF',
      surfaceText: '#2B211C',
      isDark: false
    };
  } else {
    return {
      textPrimary: '#FDF8E8',
      textSecondary: '#D1C3B4',
      surface: '#241E2B',
      surfaceText: '#FDF8E8',
      isDark: true
    };
  }
};
