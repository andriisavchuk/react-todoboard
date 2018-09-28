const initialState = {
  todos: [
    {id: '01', title: 'Read book', content: 'Lord of The Rings'},
    {id: '02', title: 'Watch movie', content: 'IT'},
    {id: '03', title: 'Learn JS', content: 'Functional JavaScript'}
  ]
};

const todoReducer = (state = initialState, action) => {
  return state;
};

export default todoReducer;
