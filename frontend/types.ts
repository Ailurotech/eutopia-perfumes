export interface Product {
  name: string;
  slug: {
    current: string;
  };
  price: number;
  image: string;
  categories: string; 
}

export interface Section {
  sectionTitle: string;
  products: Product[];
  subtitle: string;
  image: string; 
  linkText: string;
  linkUrl: string;
}

export interface HomePageContent {
  topSellersSection: Section; 
  newArrivalsSection: Section; 
  topSellers: Product[];
  newArrivals: Product[];
  womenPerfume: Section;
  menPerfume: Section;
  neutralPerfume: Section;
}
