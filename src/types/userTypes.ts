// src/types/userTypes.ts
export interface UserData {
  id: number;
  username: string;
  email: string;
  picture: {
    id: number;
    name: string;
    url: string;
  } | null;
}
