import pw105 from "../assets/aluminium/pw105-pillar-wrap-seg-frame.jpg";
import pl25el from "../assets/aluminium/pl25el-snap-frame.jpg";
import pl30sq from "../assets/aluminium/pl30sq-lit-snap-frame.jpg";
import tt70 from "../assets/aluminium/tt70-table-top-name-plate.jpg";
import np50 from "../assets/aluminium/np50-name-plate.jpg";
import dfs from "../assets/aluminium/dfs-directory-name-plate.jpg";
import fs51 from "../assets/aluminium/fs51-seg-fabric-frame.jpg";
import tf25 from "../assets/aluminium/tf25-seg-fabric-frame.jpg";
import keder from "../assets/aluminium/keder-profile.jpg";
import skyloop from "../assets/aluminium/skyloop-fabric-system.jpg";
import hlpBox from "../assets/aluminium/hlp-box-frame.jpg";
import productGroup from "../assets/aluminium/product-group-overview.png";
import workshop from "../assets/aluminium/workshop-in-house.png";
import heroImg from "../assets/aluminium/aluminium-profiles-hero.jpg";

export const aluminiumImages = {
  productGroup,
  workshop,
  hero: heroImg,
};

export type AluminiumProduct = {
  code: string;
  name: string;
  description: string;
  specs: string[];
  colours: string[];
  image: ImageMetadata;
};

export type AluminiumCategory = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  products: AluminiumProduct[];
};

const commonColours = ["Black", "Silver", "White", "Mill Finish", "Custom Coating"];

export const aluminiumCategories: AluminiumCategory[] = [
  {
    slug: "seg-frames",
    name: "SEG Fabric Frames",
    shortName: "SEG Frames",
    description:
      "Aluminium profiles engineered for tensioned fabric graphics — lit and non-lit, from slim wall-mount frames to heavy pillar-wrap systems.",
    products: [
      {
        code: "FS51",
        name: "FS51 — SEG Fabric Frame",
        description:
          "51mm depth heavyweight profile for making lit fabric frames, with a separate slot for sliding an ACP backing sheet up to 5mm.",
        specs: [
          "Material: Aluminium Alloy 6063-T6",
          "Anodising: 15–20 microns",
          "Length: 12.25 ft (3733.8 mm) or 6.125 ft (1866.9 mm)",
          "Media: Fabric / Flex, single side, back-lit or side-lit",
          "Installation: Flange, self-standing, suspended or wall fitting",
        ],
        colours: commonColours,
        image: fs51,
      },
      {
        code: "PW105",
        name: "PW105 — Pillar Wrap SEG Frame",
        description:
          "A heavyweight profile for making edge-to-edge covering pillar fabric frames, with a 105mm profile depth.",
        specs: [
          "Material: Aluminium Alloy 6063-T6",
          "Anodising: 15–20 microns",
          "Length: 12.25 ft (3733.8 mm) or 6.125 ft (1866.9 mm)",
          "Media: Fabric / Flex, single side, back-lit",
          "Installation: Four-sided, pillar wrap, self-standing or wall fitting",
        ],
        colours: commonColours,
        image: pw105,
      },
      {
        code: "TF25",
        name: "TF25 — Non-Lit Fabric Frame",
        description:
          "A 25mm depth heavyweight profile designed for creating non-lit fabric frames, assembled with 45-degree corner connectors.",
        specs: [
          "Material: Aluminium Alloy 6063-T6",
          "Anodising: 15–20 microns",
          "Length: 12.25 ft (3.73 m) or 6.125 ft (1.865 m)",
          "Media: Fabric / Flex, single side, non-lit",
          "Installation: Flange or wall fitting",
        ],
        colours: commonColours,
        image: tf25,
      },
    ],
  },
  {
    slug: "snap-frames",
    name: "Snap Frames",
    shortName: "Snap Frames",
    description:
      "Click-open aluminium snap profiles for fast, tool-light graphic changes — available in lit and non-lit configurations.",
    products: [
      {
        code: "PL25EL",
        name: "PL25EL — Non-Lit Snap Frame",
        description:
          "A lightweight profile for making small non-lit snap frames, with a 25mm front cover and a flip base-and-cover design secured by click accessories.",
        specs: [
          "Material: Aluminium Alloy 6063-T6",
          "Anodising: 15–20 microns",
          "Length: 12.25 ft (3733.8 mm)",
          "Base profile depth: 5 mm",
          "Media: Single-sided rigid sheet or paper",
          "Installation: Wall-mounted, with corner accessories",
        ],
        colours: commonColours,
        image: pl25el,
      },
      {
        code: "PL30SQ",
        name: "PL30SQ — Lit Snap Frame",
        description:
          "A heavy-duty profile for large lit snap frames with a 30mm front cover, featuring separate slots for light-guide panel and foam sheet.",
        specs: [
          "Material: Aluminium Alloy 6063-T6",
          "Anodising: 15–20 microns",
          "Length: 12.25 ft (3733.8 mm)",
          "Depth: 12 mm — accommodates foam up to 2mm, LGP up to 10mm, LED strips",
          "Media: Translite, single side, edge-lit",
          "Installation: Wall fitting",
        ],
        colours: commonColours,
        image: pl30sq,
      },
    ],
  },
  {
    slug: "name-plates",
    name: "Name Plates",
    shortName: "Name Plates",
    description:
      "Desk, door and directory name plate profiles in slide-in and lit configurations, sized for offices, healthcare and hospitality.",
    products: [
      {
        code: "TT70",
        name: "TT70 — Table Top Name Plate",
        description:
          "A 70mm height table top name plate designed to display paper media, which slides directly into the profile.",
        specs: [
          "Material: Aluminium Alloy 6063-T6",
          "Anodising: 15–20 microns",
          "Length: 12.25 ft (3733.8 mm) or 6.125 ft (1866.9 mm)",
          "Media: Paper print / rigid sheet, single side, non-lit",
          "Installation: Table-top placement",
        ],
        colours: commonColours,
        image: tt70,
      },
      {
        code: "NP50",
        name: "NP50 — Double-Sided Lit Name Plate",
        description:
          "A 50mm depth heavyweight profile for making double-sided lit name plate frames, assembled with 45-degree corner connectors.",
        specs: [
          "Material: Aluminium Alloy 6063-T6",
          "Anodising: 15–20 microns",
          "Length: 12.25 ft (3733.8 mm) or 6.125 ft (1866.9 mm)",
          "Media: Rigid sheet, double-sided, lit",
          "Installation: Ceiling suspended",
        ],
        colours: commonColours,
        image: np50,
      },
    ],
  },
  {
    slug: "directory",
    name: "Directory Systems",
    shortName: "Directory",
    description:
      "Slide-in directory profiles for building wayfinding, in single and multi-panel widths for lobbies and public spaces.",
    products: [
      {
        code: "DFS93/124/155",
        name: "DFS93 / 124 / 155 — Directory Flat Slider",
        description:
          "A single-sided heavyweight profile series for making directory name plates in a range of sizes, with media that slides directly into the profile.",
        specs: [
          "Material: Aluminium Alloy 6063-T6",
          "Anodising: 15–20 microns",
          "Length: 12.25 ft (3733.8 mm) or 6.125 ft (1866.9 mm)",
          "Media: Paper print / rigid sheet, single side, non-lit",
          "Installation: Suspended double side or wall fitting",
        ],
        colours: commonColours,
        image: dfs,
      },
    ],
  },
  {
    slug: "box-frames",
    name: "Box Frames",
    shortName: "Box Frames",
    description:
      "Deep box-section aluminium frames for large-format backlit graphics, fabric faces and heavy-duty display applications.",
    products: [
      {
        code: "HLP BOX",
        name: "HLP Box — Backlit Snap Frame",
        description:
          "A heavy-duty profile for creating large backlit snap frames with a 33mm front cover, with separate slots for diffuser, foam sheet and fabric mounting.",
        specs: [
          "Material: Aluminium Alloy 6063-T6",
          "Anodising: 15–20 microns",
          "Length: 12.25 ft (3733.8 mm)",
          "Base depth: 50 mm",
          "Media: Translite, fabric, backlit rigid sheet, single side",
          "Installation: Flange, self-standing, suspended or wall fitting",
        ],
        colours: commonColours,
        image: hlpBox,
      },
    ],
  },
  {
    slug: "totem",
    name: "Totem",
    shortName: "Totem",
    description:
      "Freestanding aluminium totem structures for directional signage, branding and outdoor wayfinding, built on the same profile system as our frames.",
    products: [],
  },
  {
    slug: "keder",
    name: "Keder",
    shortName: "Keder",
    description:
      "Round-slot keder profiles for wrapping and hanging fabric or flex media, ideal for curved and non-linear frame shapes.",
    products: [
      {
        code: "KEDER",
        name: "Keder Profile",
        description:
          "A multipurpose profile used to display a variety of media — innovative frame systems can be designed and built using this profile.",
        specs: [
          "Material: Aluminium Alloy 6063-T6",
          "Anodising: 15–20 microns",
          "Length: 12.25 ft (3.73 m) or 6.125 ft (1.865 m)",
          "Media: Rigid sheet, flex or fabric, single side, non-lit",
          "Installation: Flange, hanging or wall fitting",
        ],
        colours: commonColours,
        image: keder,
      },
      {
        code: "SKYLOOP",
        name: "Skyloop — Fabric Hanging System",
        description:
          "Creates innovative custom fabric hanging and framing systems, particularly suited to non-linear frame shapes.",
        specs: [
          "Material: Aluminium Alloy 6063-T6",
          "Anodising: 15–20 microns",
          "Length: 12.25 ft (3733.8 mm) or 6.125 ft (1866.9 mm)",
          "Media: Flex / fabric, single side, non-lit",
          "Installation: Hanging",
        ],
        colours: commonColours,
        image: skyloop,
      },
    ],
  },
];

export function getCategory(slug: string) {
  return aluminiumCategories.find((c) => c.slug === slug);
}
