export interface Item {
  id: number;
  title: string;
  imgUrl: string;
  type: string;
  season: string[];
  price: number;
  availability: boolean;
  booking?: string[];
}
