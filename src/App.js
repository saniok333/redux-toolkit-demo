import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './toolkitRedux/toolkitReducer';

function App() {
  const count = useSelector((state) => state.toolkit.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
    </div>
  );
}

export default App;
