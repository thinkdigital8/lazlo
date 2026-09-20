import healthcare from "../assets/industries/healthcare.png";
import education from "../assets/industries/education.png";
import corporate from "../assets/industries/corporate-offices.png";
import industriesIcon from "../assets/industries/industries.png";
import realEstate from "../assets/industries/real-estate.png";
import residential from "../assets/industries/residential.png";
import publicInfra from "../assets/industries/public-infrastructure.png";
import banks from "../assets/industries/banks.png";
import retail from "../assets/industries/retail.png";

export const industries = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: healthcare,
    description:
      "Wayfinding, directory systems and name plates for hospitals and clinics that need to be clear, durable and easy to sanitise.",
  },
  {
    slug: "education",
    name: "Education",
    icon: education,
    description:
      "Signage, notice frames and feature surfaces for schools, colleges and campuses that balance durability with design.",
  },
  {
    slug: "corporate-offices",
    name: "Corporate Offices",
    icon: corporate,
    description:
      "Reception feature walls, name plates and directory signage finished in real metal or precision aluminium for a premium first impression.",
  },
  {
    slug: "industries",
    name: "Industrial Facilities",
    icon: industriesIcon,
    description:
      "Rugged aluminium profile systems and protective finishes built for demanding industrial and warehouse environments.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: realEstate,
    description:
      "Show-stopping liquid metal and patina feature walls for sales lounges, lobbies and show flats that need to sell a lifestyle.",
  },
  {
    slug: "residential",
    name: "Residential",
    icon: residential,
    description:
      "Custom furniture, door skins and wall art finished in brass, bronze or copper for architects and interior designers.",
  },
  {
    slug: "public-infrastructure",
    name: "Public Infrastructure",
    icon: publicInfra,
    description:
      "Weatherproof aluminium directory, totem and signage systems engineered for high-traffic public spaces.",
  },
  {
    slug: "banks",
    name: "Banks & Financial Institutions",
    icon: banks,
    description:
      "Name plates, branch signage and premium interior finishes that reinforce trust and brand presence.",
  },
  {
    slug: "retail",
    name: "Retail",
    icon: retail,
    description:
      "SEG fabric frames, snap frames and eye-catching liquid metal displays engineered for retail visual merchandising.",
  },
] as const;
