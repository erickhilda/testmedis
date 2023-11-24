import { bloodTestAssignments } from "../controller/blood-test-assignments";

describe("Blood Test Assignments", () => {
  it("should return an array [1,2,1,0,2]", () => {
    const result = bloodTestAssignments([7, 8, 10, 9, 9], 2);
    expect(result).toEqual([1, 2, 1, 0, 2]);
  });
})
