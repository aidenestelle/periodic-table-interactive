// ElementTypes.ts
// TypeScript type for a chemical element, matching elements.json structure

export interface Element {
  name: string;
  appearance?: string;
  atomic_mass: number;
  boil?: number;
  category: string;
  density?: number;
  discovered_by?: string;
  melt?: number;
  molar_heat?: number;
  named_by?: string;
  number: number;
  group: number;
  period: number;
  phase?: string;
  source?: string;
  bohr_model_image?: string;
  bohr_model_3d?: string;
  spectral_img?: string;
  summary: string;
  symbol: string;
  xpos: number;
  ypos: number;
  wxpos: number;
  wypos: number;
  shells: number[];
  electron_configuration: string;
  electron_configuration_semantic: string;
  electron_affinity?: number;
  electronegativity_pauling?: number;
  ionization_energies?: number[];
  cpk_hex?: string;
  image?: {
    title: string;
    url: string;
    attribution: string;
  };
  block?: string;
}
