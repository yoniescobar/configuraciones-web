
import { useState } from 'react'

export default function App() {

  const [count, setCout] = useState(0);

  const handleClick = () => {
    setCout((prev) => prev + 1);
    //setCout(count+1)
  }

  return (
    <div className="flex flex-col items-center justify-center mt-7">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase mb-4"
        onClick={handleClick}
      >
        Click me
      </button>
      <h1 className="text-center">Count is: {count}</h1>
    </div>

  )
}
