import * as types from "./actionTypes";
import courseApi from "../api/mockCourseApi";

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export const createCoursesSuccess = course => {
  return { type: types.CREATE_COURSE_SUCCESS, course };
};
export const updateCoursesSuccess = course => {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
};

export const loadCourses = () => {
  return function(dispatch) {
    return courseApi
      .getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const saveCourse = course => {
  return function(dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCoursesSuccess(savedCourse))
          : dispatch(createCoursesSuccess(savedCourse));
      })
      .catch(err => {
        throw err;
      });
  };
};
