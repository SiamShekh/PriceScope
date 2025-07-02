// 👇 This makes it a module
export { };

declare global {
  namespace Express {
    interface Request {
      user: {
        id: number;
        name: string;
        email: string;
        photo: string;
        createdAt: string;
        iat: number;
      };
    }
  }
}
