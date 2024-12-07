import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchJoke } from "./jokeSlice";

function App() {
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const joke = useSelector((state) => state.joke.joke);
  const dispatch = useDispatch();

  function handleAdd(eve) {
    setCategory(eve.target.value);
  }

  async function handleFetch() {
    if (!category) return; // Avoid fetching without a category
    setIsLoading(true);
    try {
      await dispatch(fetchJoke(category));
    } catch (error) {
      console.error("Failed to fetch joke:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 p-4">
      <div style={{boxshadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className="w-full max-w-md bg-gray-500 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Joke Generator</h1>
        <input
          value={category}
          onChange={handleAdd}
          placeholder="Enter joke category"
          className="w-full  p-2 border bg-gray-500 rounded border-black mb-4"
        />
        <button
          onClick={handleFetch}
          className="w-full bg-gray-700 text-white p-2 rounded hover:bg-black"
        >
          {isLoading ? "Loading..." : "Show"}
        </button>
        <div className="mt-4 text-center">
          {isLoading ? (
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-red-800 mx-auto"></div>
          ) : joke ? (
            <h1 className="text-lg font-medium">{joke}</h1>
          ) : (
            <p className="text-gray-500">No joke available for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
