export interface IProduct {
  _id: string;
  title: string;
  slug: string;
  category: {
    title: string;
    slug: string;
  };
  thumb: string;
  price: string;
  status: string;
  individualRating: string;
  averageRating: string;
  reviews: {
    rating: string;
    comment: string;
  }[];
  description: string;
  features: {
    title: string;
    value: string;
  }[];
}
