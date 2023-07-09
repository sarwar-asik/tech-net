


import "./App.css";
import { RootState } from "./redux/store";
import { decrement, increment,incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();
  // console.log("🚀 ~ file: App.tsx:9 ~ App ~ count:", count);

  return (
    <div className="w-full mx-auto flex gap-5 justify-evenly items-center bg-blue-200 py-5 ">
      <div className="text-xl font-bold">
        <button
          onClick={() => dispatch(increment())}
          className="bg-slate-400 p-3 text-white rounded-xl my-2"
        >
          Increment
        </button>
       
      </div>
      <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-slate-400 p-3 text-white rounded-xl my-2"
        >
          incrementByAmount
        </button>
      <p className="font-bold text-4xl ">{count}</p>
      <div className="text-xl font-bold">
        <button
          onClick={() => dispatch(decrement())}
          className="bg-slate-400 p-3 text-white rounded-xl my-2"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
