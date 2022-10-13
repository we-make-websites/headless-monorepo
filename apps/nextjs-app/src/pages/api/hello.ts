import { sayHello } from '@we-make-websites/core-lib';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handleApiHelloRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.send(sayHello('world loaded from /api/hello'));
}
