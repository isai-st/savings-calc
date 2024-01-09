export type index = 0 | 1 | 2;

export type results = [
  {
    regular: number;
    offer: number;
    result: number;
  },
  {
    regular: number;
    offer: number;
    quantityOffer: number;
    result: number;
  },
  {
    offer: number;
    quantityOffer: number;
    regular: number;
    quantityRegular: number;
    result: number;
  }
];
