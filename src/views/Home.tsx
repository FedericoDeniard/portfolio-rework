import { useState } from 'react';
import viteLogo from '/vite.svg';
import Header from '../components/layout/Header'; // Corrected import path
import './Home.css';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center pt-20">
        <div className="flex items-center space-x-4 mb-8">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
          </a>
        </div>
        <h1 className="font-secondary text-5xl font-bold mb-4">Vite + React</h1>
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-center">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg mb-4"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="mb-4">
            Edit <code>src/views/Home.tsx</code> and save to test HMR
          </p>
          <p className="text-gray-400">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </main>
    </>
  );
}

export default Home;
