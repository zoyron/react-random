import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-slate-600 px-3 py-2 rounded-xl">
            <button
              className="outline-none text-white p-2 rounded-md"
              style={{ backgroundColor: "#fa3000" }}
              onClick={() => setColor("#fa3000")}
            >
              Red
            </button>
            <button
              className="outline-none text-white p-2 rounded-md"
              style={{ backgroundColor: "#40fa00" }}
              onClick={() => setColor("#40fa00")}
            >
              Green
            </button>
            <button
              className="outline-none text-white p-2 rounded-md"
              style={{ backgroundColor: "#0080fa" }}
              onClick={() => setColor("#0080fa")}
            >
              Blue
            </button>
            <button
              className="outline-none text-white p-2 rounded-md"
              style={{ backgroundColor: "#ffaf00" }}
              onClick={() => setColor("#ffaf00")}
            >
              Yellow
            </button>
            <button
              className="outline-none text-white p-2 rounded-md"
              style={{ backgroundColor: "#008080" }}
              onClick={() => setColor("#008080")}
            >
              Teal
            </button>
            <button
              className="outline-none text-white p-2 rounded-md"
              style={{ backgroundColor: "#000000" }}
              onClick={() => setColor("#000000")}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
