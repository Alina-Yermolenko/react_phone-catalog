export type Product = {
  [x: string]: any;
  capacity: string,
  category: string,
  color: string,
  fullPrice: number,
  id: string,
  image: string,
  itemId: string,
  name: string,
  phoneId: string,
  price: number,
  ram: string,
  screen: string,
  year: number,
  count?: number,
};

export type DetailedProduct = {
  camera: string,
  capacity: string,
  capacityAvailable: [string],
  cell: [string],
  color: string,
  colorsAvailable: [string],
  description: { title:[string], text:[string] },
  fullPrice: number,
  id: string,
  image: [string],
  name: string,
  namespaceId: string,
  priceDiscount: number,
  priceRegular: number,
  processor: string,
  ram: string,
  screen: string,
  zoom: number,
};
