export interface Catalog {
  slug: string;
  title: string;
  format: string;
  fileUrl: string;
}

// Catalog name is taken directly from the PDF's filename.
// Add more catalogs here as PDF files are placed in /public/catalogs/.
export const catalogs: Catalog[] = [
  {
    slug: "lazlo-wall-catalog",
    title: "Lazlo Wall Catalog",
    format: "PDF",
    fileUrl: "/catalogs/LAZLO_WALL_CATALOG_20251224.pdf",
  },
  {
    slug: "lazlo-lm",
    title: "Lazlo LM",
    format: "PDF",
    fileUrl: "/catalogs/LAZLO_LM.pdf",
  },
  {
    slug: "lazlo-patina",
    title: "Lazlo Patina",
    format: "PDF",
    fileUrl: "/catalogs/LAZLO_PATINA.pdf",
  },
  {
    slug: "lazlo-hardware",
    title: "Lazlo Hardware",
    format: "PDF",
    fileUrl: "/catalogs/LAZLO_HARDWARE.pdf",
  },
  {
    slug: "lazlo-doorskin-shutters",
    title: "Lazlo Doorskin Shutters",
    format: "PDF",
    fileUrl: "/catalogs/LAZLO_DOORSKIN_SHUTTERS.pdf",
  },
  {
    slug: "lazlo-chrome",
    title: "Lazlo Chrome",
    format: "PDF",
    fileUrl: "/catalogs/LAZLO_CHROME.pdf",
  },
  {
    slug: "lazlo-patina106-ecatalog",
    title: "Lazlo Patina106 eCatalog",
    format: "PDF",
    fileUrl: "/catalogs/LAZLO_PATINA106_eCATALOG.pdf",
  },
  {
    slug: "lazlo-patina-brochure",
    title: "Lazlo Patina Brochure",
    format: "PDF",
    fileUrl: "/catalogs/LAZLO_PATINA_BROCHURE.pdf",
  },
] as const;
