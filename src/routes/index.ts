import express from 'express';
import templateEngineRoute from './template-engine.route'
import bloodTestRoute from './blood-test.route'

const router = express.Router();

router.get('/', (_, res) => {
  res.status(200).json({
    message: 'Hello World!'
  })
})
router.use('/number-generator', templateEngineRoute);
router.use('/blood-test', bloodTestRoute)

export default router;
