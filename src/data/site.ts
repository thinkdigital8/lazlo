export const site = {
  name: "Lazlo",
  tagline: "Real Metal Finishes & Aluminium Profiles",
  legalName: "Lazlo",
  url: "https://lazloindia.com",
  phone: "+91 95588 09753",
  phoneHref: "tel:+919558809753",
  email: "info@lazloindia.com",
  emailHref: "mailto:info@lazloindia.com",
  yearsExperience: "30+",
  addresses: {
    office: {
      label: "Office",
      lines: [
        "D1125, Swati Clover, Shilaj Circle,",
        "Sardar Patel Ring Road, Thaltej,",
        "Ahmedabad, Gujarat – 380054",
      ],
      mapUrl: "https://www.google.com/maps?q=23.0512066,72.4800139",
    },
    workshop: {
      label: "Workshop / Warehouse",
      lines: [
        "6, Aman Warehouses, B/h. Changodar City Center,",
        "Nr. Susha Mechatronics,",
        "Changodar – 382213, Ahmedabad, Gujarat",
      ],
      mapUrl: "https://www.google.com/maps?q=Aman+Warehouses+Changodar+Ahmedabad",
    },
  },
  social: {
    linkedin: "https://www.linkedin.com/company/lazlo-india",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "Liquid Metal",
    href: "/liquid-metal/",
    children: [
      { label: "Overview", href: "/liquid-metal/" },
      { label: "Applications", href: "/liquid-metal/applications/" },
      { label: "Metal Finishes", href: "/liquid-metal/finishes/" },
    ],
  },
  { label: "Antique Patina", href: "/patina/" },
  { label: "Chrome Finishes", href: "/chrome/" },
  {
    label: "Aluminium",
    href: "/aluminium/",
    children: [
      { label: "Overview", href: "/aluminium/" },
      { label: "Aluminium Profiles", href: "/aluminium/profiles/" },
      { label: "SEG Fabric Frames", href: "/aluminium/seg-frames/" },
      { label: "Snap Frames", href: "/aluminium/snap-frames/" },
      { label: "Name Plates", href: "/aluminium/name-plates/" },
      { label: "Directory Systems", href: "/aluminium/directory/" },
      { label: "Box Frames", href: "/aluminium/box-frames/" },
      { label: "Totem", href: "/aluminium/totem/" },
      { label: "Keder", href: "/aluminium/keder/" },
    ],
  },
  { label: "Industries", href: "/industries/" },
  { label: "About", href: "/about/" },
  { label: "Projects", href: "/projects/" },
  { label: "Contact", href: "/contact/" },
] as const;
