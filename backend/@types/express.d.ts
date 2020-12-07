declare namespace Express {
  export interface Request {
    userPermission: {
      admin: boolean;
      id: string;
    };
  }
}