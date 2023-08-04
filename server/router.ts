import { Router } from 'express';
import controllers from './controllers/index.controller';

const router = Router();

router.get('/', controllers.home.getHome);
router.get('/whois', controllers.whois.lookUp);
router.post('/location', controllers.location.lookUp);

export default router;
