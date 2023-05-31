import { Router } from 'express';
import { payPlan } from '../controller/plans';

const router: Router = Router();

router.route('/').post(payPlan);

export default router;
