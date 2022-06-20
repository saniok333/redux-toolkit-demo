import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  removeLastTodo,
  increment,
  decrement,
} from './toolkitRedux/toolkitSlice';

const addAsyncTodo = () => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(addTodo('ASYNC TODO'));
    }, 2000);
  };
};

function App() {
  const count = useSelector((state) => state.toolkit.count);
  const todos = useSelector((state) => state.toolkit.todos);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(addTodo(prompt()))}>ADD TODO</button>
      <button onClick={() => dispatch(removeLastTodo())}>
        REMOVE LAST TODO
      </button>
      <button onClick={() => dispatch(addAsyncTodo())}>ADD ASYNC TODO</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
