import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare interface TokenPayloadProps {
  id: string;
  iat: number;
  exp: number;
}

export default ( req: Request, res: Response, next: NextFunction ) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
    res.status(401).json({ message: 'Authentication required :(' });
  }

  const token = authorization?.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token as string, `${process.env.JWT_TOKEN}`)

    const { id } = data as TokenPayloadProps;

    req.userId = id;

    return next();
  } catch {
    res.sendStatus(401);
  }
}