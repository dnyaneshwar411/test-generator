import express from "express";
import {
  testCreate,
  getTests,
  getTestDomainwise,
  gettestByid,
  updateTest,
  deleteTest,
  submitAnswers,
  releaseTest,
  isReleasedTest,
  completedTestsByuser,
  testCreatedbyAdmin
} from "../controller/test_controller.js";

const router = express.Router();

router.get("/getTests", getTests);
router.get("/getTestDomainwise",getTestDomainwise)
router.get("/gettest/:testId", gettestByid);
router.post("/create", testCreate);
router.put('/updateTest/:id', updateTest);
router.delete('/deleteTest/:id', deleteTest);


router.put('/release/:id', releaseTest);
//submit test, result
router.post('/submit/:id', submitAnswers);
router.get('/isReleasedTest/:id',isReleasedTest)
router.get("/completedTestsByuser/:_id",completedTestsByuser)
router.get("/testCreatedbyAdmin/:id",testCreatedbyAdmin)
export default router;
