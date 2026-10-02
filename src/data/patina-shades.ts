const shadeImages = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/patina/shades/*.jpeg",
  { eager: true }
);

export const patinaShadeCodes = [
  "M0001", "M0002", "M0005", "M0008", "M0017", "M0023", "M0031", "M0035", "M0055", "M0071",
  "M0424", "M0425", "M0428", "M0431", "M0437", "M0440", "M0446", "M0454", "M0458", "M0466",
  "M0494", "M0848", "M0851", "M0854", "M0860", "M0862", "M0863", "M0868", "M0869", "M0870",
  "M0878", "M0879", "M0880", "M0881", "M0882", "M0883", "M0884", "M0889", "M0890", "M0891",
  "M0892", "M0903", "M0904", "M0917", "M0921", "M0923", "M0924", "M0925", "M0927",
  "T0001", "T0003", "T0004", "T0005", "T0006", "T0007", "T0008", "T0009", "T0010", "T0012",
  "T0013", "T0014", "T0015", "T0016", "T0017", "T0018", "T0019", "T0020", "T0021", "T0022",
  "T0023", "T0024", "T0025", "T0026", "T0027", "T0029", "T0030", "T0031", "T0032", "T0033",
  "T0034", "T0035", "T0036", "T0043", "T0046", "T0047", "T0048", "T0052", "T0053", "T0054",
  "T0064", "T0067", "T0070", "T0082", "T0085", "T0088", "T0100", "T0103", "T0148", "T0160",
  "T0172",
] as const;

export type PatinaShade = {
  code: string;
  image: ImageMetadata;
};

export const patinaShades: PatinaShade[] = patinaShadeCodes.map((code) => {
  const mod = shadeImages[`../assets/patina/shades/${code.toLowerCase()}.jpeg`];
  if (!mod) {
    throw new Error(`Missing patina shade image for code ${code}`);
  }
  return { code, image: mod.default };
});
