import { SAVE_COMMENT } from "./types";

export function saveComment(comment) {
  let commentList = [];
  commentList.push(comment);
  return {
    type: SAVE_COMMENT,
    payload: commentList
  };
}
