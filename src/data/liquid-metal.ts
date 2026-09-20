import applicationIntro from "../assets/liquid-metal/liquid-metal-coatings-intro.png";
import applicationsShowcase from "../assets/liquid-metal/real-metal-coatings-applications.png";
import artistryMeetsFunction from "../assets/liquid-metal/artistry-meets-function.png";
import metalPalette from "../assets/liquid-metal/metal-finish-palette.png";
import antiqueAesthetic from "../assets/liquid-metal/antique-aesthetic.png";
import studioToSite from "../assets/liquid-metal/studio-to-site.png";
import liquidMetalSample from "../assets/liquid-metal/liquid-metal-sample.jpg";

export const liquidMetalImages = {
  intro: applicationIntro,
  applicationsShowcase,
  artistryMeetsFunction,
  metalPalette,
  antiqueAesthetic,
  studioToSite,
  sample: liquidMetalSample,
};

export const substrates = [
  "Wood",
  "Mild Steel",
  "Glass",
  "FRP",
  "Plastic",
  "MDF",
  "ACP",
  "Concrete",
  "Korean Sheets",
] as const;

export const substrateDetails = [
  {
    name: "Wood",
    texture: "wood",
    description: "A warm, natural grain — a favourite base for feature walls, custom furniture and door skins.",
  },
  {
    name: "Mild Steel",
    texture: "steel",
    description: "A strong, stable metal base — well suited to structural panels and heavy-use architectural pieces.",
  },
  {
    name: "Glass",
    texture: "glass",
    description: "A smooth, translucent surface — Liquid Metal bonds cleanly for a striking layered effect.",
  },
  {
    name: "FRP",
    texture: "frp",
    description: "A lightweight, woven fibreglass surface — popular for moulded, curved and sculptural forms.",
  },
  {
    name: "Plastic",
    texture: "plastic",
    description: "A smooth, rigid plastic surface — suited to product pieces and retail display objects.",
  },
  {
    name: "MDF",
    texture: "mdf",
    description: "An engineered wood-fibre board — a stable, affordable base for interior furniture and panels.",
  },
  {
    name: "ACP",
    texture: "acp",
    description: "Aluminium composite panel — a rigid, lightweight sheet built for signage and facade cladding.",
  },
  {
    name: "Concrete",
    texture: "concrete",
    description: "A raw, textured surface — Liquid Metal transforms exposed concrete into a refined architectural finish.",
  },
  {
    name: "Korean Sheets",
    texture: "korean",
    description: "A rigid PVC foam sheet — light, smooth and easy to work with for indoor signage and display pieces.",
  },
] as const;

export const applications = [
  {
    slug: "custom-furniture",
    name: "Custom Furniture",
    description:
      "Tables, cabinetry and statement furniture pieces finished in real brass, bronze or copper for a solid-metal look and feel.",
  },
  {
    slug: "wall-art",
    name: "Wall Art",
    description:
      "One-of-a-kind metallic wall art pieces that bring texture, depth and a handcrafted metal finish to any interior.",
  },
  {
    slug: "feature-walls",
    name: "Feature Walls",
    description:
      "Large-format feature walls in lobbies, retail stores and hospitality spaces transformed with a seamless real-metal surface.",
  },
  {
    slug: "ceiling-installations",
    name: "Ceiling Installations",
    description:
      "Metallic ceiling panels and installations that catch and reflect light across a room for a dramatic architectural effect.",
  },
  {
    slug: "designer-door-skins",
    name: "Designer Door Skins",
    description:
      "Entry and interior doors clad with a liquid metal finish for a striking, tactile first impression.",
  },
  {
    slug: "sculptures",
    name: "Sculptures & Art Pieces",
    description:
      "Sculptural and decorative art objects finished in real metal, from gallery installations to bespoke commissions.",
  },
  {
    slug: "architectural-details",
    name: "Architectural Details",
    description:
      "Columns, panels, signage and architectural trims finished in metal for facades and interiors alike.",
  },
] as const;

export const finishes = [
  {
    slug: "brass",
    name: "Brass",
    swatch: "#c9a15a",
    description: "A warm, golden metal finish that brings classic luxury to interiors and furniture.",
  },
  {
    slug: "copper",
    name: "Copper",
    swatch: "#b5673f",
    description: "A rich, reddish-warm metal finish prized for its depth and ability to age into striking patinas.",
  },
  {
    slug: "bronze",
    name: "Bronze",
    swatch: "#8a6a45",
    description: "A deep, earthy metal tone with an understated, architectural character.",
  },
  {
    slug: "aluminium",
    name: "Aluminium",
    swatch: "#b7bcc2",
    description: "A cool, contemporary silver-metal finish suited to modern architectural surfaces.",
  },
  {
    slug: "graphite",
    name: "Graphite",
    swatch: "#4b4e54",
    description: "A dark, matte metallic finish for a bold, industrial-modern aesthetic.",
  },
  {
    slug: "zinc",
    name: "Zinc",
    swatch: "#9aa0a6",
    description: "A soft, muted grey-metal finish with a naturally weathered character.",
  },
  {
    slug: "iron",
    name: "Iron",
    swatch: "#5b5651",
    description: "A dense, dark metal finish that pairs well with both industrial and rustic interiors.",
  },
] as const;

export const customAlloyNote =
  "Custom alloy blends can also be developed on request to match a specific architectural or brand palette.";

export const patinaFinishes = [
  {
    slug: "rusted-iron",
    name: "Rusted Iron",
    description:
      "A weathered, oxidised iron texture with deep umber and black tonal variation — handcrafted so every sheet is unique.",
  },
  {
    slug: "verdigris-copper",
    name: "Verdigris Copper",
    description:
      "A blue-green oxidised copper finish reminiscent of aged monuments and heritage architecture.",
  },
  {
    slug: "antique-brass",
    name: "Antique Brass",
    description:
      "A softly tarnished brass finish that reads as instantly vintage while remaining sealed and protected.",
  },
] as const;

export const patinaMetals = ["Steel", "Zinc", "Brass", "Copper"] as const;

export const patinaSizes = ["2 × 2 ft", "2 × 4 ft", "4 × 4 ft", "8 × 4 ft", "Custom sizes on request"] as const;

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We discuss your surface, substrate and desired metal finish to scope the right approach.",
  },
  {
    step: "02",
    title: "Surface Preparation",
    description: "The substrate is prepared to ensure the coating bonds cleanly and evenly.",
  },
  {
    step: "03",
    title: "Metal Application",
    description: "Real metal is applied to the surface, in our workshop or on-site, depending on scale.",
  },
  {
    step: "04",
    title: "Finishing",
    description: "The surface is finished, and where required, aged or sealed with a protective clear coat.",
  },
  {
    step: "05",
    title: "Project Delivery",
    description: "The finished piece or installation is handed over, ready for its space.",
  },
] as const;

export const chromeColours = [
  "Silver",
  "Gold",
  "Rose Gold",
  "Yellow",
  "Orange",
  "Dark Blue",
  "Light Blue",
  "Green",
  "Violet",
  "Black",
  "Pink",
  "Brown",
  "Red",
  "Rose",
] as const;

export const chromeSubstrates = [
  "Ceramics",
  "Plastics",
  "Rubber",
  "Wood",
  "Metals",
  "MDF",
  "Terracotta",
] as const;

export const chromeApplications = [
  { name: "Interior Decor", description: "Wall panels, feature ceilings and lighting." },
  { name: "Furniture", description: "Legs, trims, handles and side tables." },
  { name: "Retail & Displays", description: "Visual merchandising and signage." },
  { name: "Gifting & Packaging", description: "Luxury boxes and decorative items." },
  { name: "Art & Sculpture", description: "Installations and museum pieces." },
  { name: "Auto & Custom Parts", description: "Styling accessories." },
  { name: "Event & Stage Design", description: "Props and backdrops." },
] as const;
