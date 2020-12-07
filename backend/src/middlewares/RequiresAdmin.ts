import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare interface TokenPayloadProps {
  admin: boolean;
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
    jwt.verify(token as string, `${process.env.TOKEN}`);

    const data = jwt.verify(token as string, `${process.env.TOKEN}`)

    const { admin } = data as TokenPayloadProps;

    if(admin) {
      return next();
    } else {
      return res.sendStatus(401).json({ message: 'You are not an admin :(' });
    }
  } catch {
    return res.sendStatus(401).json({ message: 'You are not an admin :(' });
  }
}