import express from 'express';
import {
  getStats,
  getEngagementData,
  getTrafficSources
} from '../controllers/dashboardController.js';

const router = express.Router();

router.get('/stats', getStats);
router.get('/engagement', getEngagementData);
router.get('/traffic', getTrafficSources);

export default router;
