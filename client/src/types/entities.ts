export interface User {
  id: number;
  email: string;
  name?: string;
  profileImg?: string;
}

export interface Product {
  id: number;
  name: string;
  quantity: number;
}
