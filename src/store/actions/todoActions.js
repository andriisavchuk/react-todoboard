export const createTodo = (todo) => {
  return (dispatch, getState) => {
    // make async call to DB
    dispatch({type: 'CREATE_TODO', todo});
  }
};
