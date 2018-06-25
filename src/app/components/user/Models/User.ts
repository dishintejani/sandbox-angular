export interface User {
  firstName: string;
  lastName: string;
  age?: number;
  image?: string;
  address?: {
    street?: string,
    city?: string,
    state?: string
  };
  isActive?: boolean;
  balance?: number;
  registered?: any;
}
