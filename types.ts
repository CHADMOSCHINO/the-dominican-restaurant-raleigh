export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'Popular' | 'Mofongo' | 'Lunch' | 'Sides';
  image?: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  cityStateZip: string;
  phone: string;
  managementPhone: string;
  locationNote: string;
  onlineOrderLink: string;
  mapEmbedUrl: string;
  logo: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
}