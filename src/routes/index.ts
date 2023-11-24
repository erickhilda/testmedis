import express from 'express';
import templateEngineRoute from './template-engine.route'

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World!'
  })
})
router.use('/number-generator', templateEngineRoute);

export default router;
