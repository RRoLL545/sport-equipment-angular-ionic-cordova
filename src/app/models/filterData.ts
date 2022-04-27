export interface FilterData {
  values: Values;
  types: string[];
  maxPrice: number;
}

export interface Values {
  type: string | null;
  season: Seasons;
  availability: boolean;
  priceRange: PriceRange;
}

export interface PriceRange {
  lower: number;
  upper: number;
}

export interface Seasons {
  'весна': boolean;
  'лето': boolean;
  'осень': boolean;
  'зима': boolean;
}
