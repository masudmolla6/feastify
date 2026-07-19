export interface Food {
  id: number;
  title: string;
  catId: number;
  foodImg: string;
  price: number;
  category: string;

  // Single Food API fields
  video?: string;
  area?: string;
}

export interface FoodsResponse {
  status: number;
  foods: Food[];
}

export interface SingleFoodResponse {
  status: number;
  details: Food;
  message: string;
  send_at: string;
}

export type SearchProps = {
  searchParams: Promise<{
    search?: string;
  }>;
};