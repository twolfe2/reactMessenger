import { Router } from 'express'
const router = Router();



router.get('/', (req,res) => {
  // const { location, place } = req.body;
  if(err) return res.status(400).send(err);
  res.send('hi');
}

export default router;
