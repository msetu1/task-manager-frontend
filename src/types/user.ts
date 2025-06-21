export interface IUser {
  userId: string;
  name: string;
  email: string;
  isActive?: boolean;
  iat?: number;
  exp?: number;
}