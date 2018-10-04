export const createTodo = todo => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to DB
    dispatch({ type: 'CREATE_TODO', todo });
  };
};
