
export interface User {
    id: number;
    username: string;
    email: string;
    password: string; // Note: It's recommended to handle passwords securely, such as through hashing
    // Add other user-related   properties as needed
  }