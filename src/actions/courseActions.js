import * as types from "./actionTypes";

//Action creators:

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course: course };
}
