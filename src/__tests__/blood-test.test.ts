import { bloodTestAssignments } from "../controller/blood-test-assignments";

describe("Blood Test Assignments", () => {
  it("should return an array [1,2,1,0,2]", () => {
    const result = bloodTestAssignments([7, 8, 10, 9, 9], 2);
    expect(result).toEqual([1, 2, 1, 0, 2]);
  });
  it("should return an array [1,2,3,1,2]", () => {
    const result = bloodTestAssignments([9, 10, 13, 10, 11], 3);
    expect(result).toEqual([1, 2, 3, 1, 2]);
  });
  it("should return an array [1, 2, 3, 0, 1]", () => {
    const result = bloodTestAssignments([9, 10, 10, 10, 11], 3);
    expect(result).toEqual([1, 2, 3, 0, 1]);
  });
})
