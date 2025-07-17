import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchjoke } from "./JokeSlice";

function App() {
  const dispatch = useDispatch();
  const joke = useSelector((state) => state.joke.joke);
  const loading = useSelector((state) => state.joke.loading);
  const error = useSelector((state) => state.joke.error);

  const [category, setCategory] = useState("");

  function handleChange(e) {
    setCategory(e.target.value);
  }

  function handleFetch() {
    if (category) {
      dispatch(fetchjoke(category));
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6" style={{ fontFamily: '"Google Sans", "Roboto", sans-serif' }}>
      {/* Header with Google-style logo colors */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-semibold mb-2" style={{ 
          background: 'linear-gradient(90deg, #4285F4 0%, #EA4335 25%, #FBBC05 50%, #34A853 75%, #4285F4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          🎭 Random Joke Generator
        </h1>
        <div className="w-16 h-1 bg-gray-700 mx-auto rounded-full"></div>
      </div>

      {/* Google-style search container */}
      <div className="bg-gray-800 rounded-full shadow-lg border border-gray-700 p-2 mb-6 w-full max-w-lg hover:shadow-xl transition-shadow duration-200">
        <div className="flex items-center gap-3">
          <select
            onChange={handleChange}
            className="flex-1 p-3 bg-gray-800 text-gray-200 outline-none text-sm border-none rounded-full"
            style={{ fontFamily: '"Google Sans", "Roboto", sans-serif' }}
          >
            <option value="" className="bg-gray-800 text-gray-200">Select Category</option>
            <option value="animal" className="bg-gray-800 text-gray-200">Animal</option>
            <option value="career" className="bg-gray-800 text-gray-200">Career</option>
            <option value="celebrity" className="bg-gray-800 text-gray-200">Celebrity</option>
            <option value="dev" className="bg-gray-800 text-gray-200">Dev</option>
            <option value="explicit" className="bg-gray-800 text-gray-200">Explicit</option>
            <option value="fashion" className="bg-gray-800 text-gray-200">Fashion</option>
            <option value="food" className="bg-gray-800 text-gray-200">Food</option>
            <option value="history" className="bg-gray-800 text-gray-200">History</option>
            <option value="money" className="bg-gray-800 text-gray-200">Money</option>
            <option value="movie" className="bg-gray-800 text-gray-200">Movie</option>
            <option value="music" className="bg-gray-800 text-gray-200">Music</option>
            <option value="political" className="bg-gray-800 text-gray-200">Political</option>
            <option value="religion" className="bg-gray-800 text-gray-200">Religion</option>
            <option value="science" className="bg-gray-800 text-gray-200">Science</option>
            <option value="sport" className="bg-gray-800 text-gray-200">Sport</option>
            <option value="travel" className="bg-gray-800 text-gray-200">Travel</option>
          </select>
          <button
            onClick={handleFetch}
            className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-medium transition-colors duration-200 shadow-sm"
            style={{ fontFamily: '"Google Sans", "Roboto", sans-serif' }}
          >
            Get Joke
          </button>
        </div>
      </div>

      {/* Google-style result card */}
      <div className="w-full max-w-2xl">
        {loading && (
          <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-300 text-sm" style={{ fontFamily: '"Google Sans", "Roboto", sans-serif' }}>
                Fetching joke...
              </p>
            </div>
          </div>
        )}
        
        {error && (
          <div className="bg-red-900 border border-red-700 rounded-lg p-4 text-center">
            <p className="text-red-300 text-sm" style={{ fontFamily: '"Google Sans", "Roboto", sans-serif' }}>
              Error: {error}
            </p>
          </div>
        )}
        
        {!loading && !error && joke && (
          <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6 hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-300 text-sm">😄</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-200 text-base leading-relaxed" style={{ fontFamily: '"Google Sans", "Roboto", sans-serif' }}>
                  {joke}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Google-style footer */}
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-xs" style={{ fontFamily: '"Google Sans", "Roboto", sans-serif' }}>
Design & Developed by Bazee        </p>
      </div>
    </div>
  );
}

export default App;