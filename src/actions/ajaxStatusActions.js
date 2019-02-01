import * as types from "./actionTypes";

export function beginAjaxCall() {
  return { type: types.BEGIN_AJAX_CALL };
}

export function ajaxCallError() {
  return { type: types.AJAX_CALL_ERROR };
}

// TODO: try this:
// export const beginAjaxCall = () => {
//   type: types.BEGIN_AJAX_CALL;
// };
