import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { RootState } from "./redux/store";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  console.log("🚀 ~ file: App.tsx:9 ~ App ~ count:", count)

  return (
    <div className="w-full mx-auto flex gap-5 justify-evenly">
      <div className="text-xl font-bold">
        <button className="bg-slate-400 p-3 text-white rounded-xl my-2">
          Increment
        </button>
      </div>
      <p className="font-bold text-2xl ">{count}</p>
      <div className="text-xl font-bold">
        <button className="bg-slate-400 p-3 text-white rounded-xl my-2">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
