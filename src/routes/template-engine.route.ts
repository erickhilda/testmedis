import express from 'express';
import { TemplateEngine } from '../controller/template-engine';

const router = express.Router();

const templateEngine = new TemplateEngine();

router.route('/').post((req, res) => {
  const { regType, seq, template } = req.body;

  const data = {
    regType,
    currentDate: new Date(),
    seq
  }

  const result = templateEngine.generateNumber(data, template);

  if (result) {
    res.status(200).json({
      result
    })
  }
})

export default router;
