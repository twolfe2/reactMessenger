import { Router } from 'express';

const router = Router();

import restaurants from './restaurants';
import details from './details';

router.use('/details', details);
router.use('/restaurants', restaurants);

export default router;
