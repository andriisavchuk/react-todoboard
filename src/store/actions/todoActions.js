export const createTodo = todo => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to DB
    const firestore = getFirestore();
    firestore
      .collection('todos')
      .add({
        ...todo,
        firstName: 'Andrii',
        lastName: 'Sava',
        userId: 12345,
        dateStamp: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_TODO', todo });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_ERROR', err });
      });
  };
};
