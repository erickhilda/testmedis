import express from 'express';
import { bloodTestAssignments } from '../comtroller/blood-test-assignments';

const router = express.Router();

router.route('/').post((req, res) => {
  const { requests, teams } = req.body;

  const result = bloodTestAssignments(requests, teams);

  if (result) {
    res.status(200).json({
      requests,
      teams,
      result
    })
  }
})

export default router;
