const initialState = {
  todos: [
    { id: '01', title: 'Read book', content: 'Lord of The Rings' },
    { id: '02', title: 'Watch movie', content: 'IT' },
    { id: '03', title: 'Learn JS', content: 'Functional JavaScript' }
  ]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      console.log('ToDo created', action.todo);
      return state;
    case 'CREATE_ERROR':
      console.log('Create ToDo error', action.err);
      return state;
    default:
      return state;
  }
};

export default todoReducer;
