import uuid from "uuid";

function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      // let authorExists = state.filter(a => a.authorName === action.author);
      // if (authorExists.length > 0) {
        return [...state, action.author];
      // } else {
      //   return [...state]
      // }

    case "REMOVE_AUTHOR":
      idx = state.findIndex(book => book.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "ADD_BOOK":
      let existingAuthor = state.filter(
        author => author.authorName === action.book.authorName
      );
      if (existingAuthor.length > 0) {
        return state;
      } else {
        return [...state, { authorName: action.book.authorName, id: uuid() }];
      }

    default:
      return state;
  }
}

export default authorsReducer;
