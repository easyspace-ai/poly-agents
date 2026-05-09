import { Router, Request, Response } from 'express';
import { fetchBalances } from '../adapters/balance';
import { notifyPolymarketBalancesIfChanged } from '../telegram/notify';

const router = Router();

router.get('/api/balances', async (_req: Request, res: Response) => {
  const balances = await fetchBalances();
  notifyPolymarketBalancesIfChanged(balances);
  res.json(balances);
});

export default router;
