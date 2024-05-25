export interface TechTransfer {
  results: TechTransferElement[];
  count: number;
  total: number;
  perPage: number;
  page: number;
}

export interface TechTransferElement {
  [index: number]: string; // Esto indica que cada ítem es un array de strings
}

export interface TechTransferResult {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}



