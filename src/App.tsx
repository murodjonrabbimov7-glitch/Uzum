import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <motion.div 
        className="bg-white p-8 rounded shadow-md w-full max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-4">Masterclass Landing Page</h1>
        <img src="/hero.png" alt="Landing Hero" className="w-full rounded mb-4"/>
        <p className="text-gray-700 mb-4">
          Join our exclusive masterclass to upgrade your skills and advance your career.
        </p>
        <form className="flex flex-col">
          <input type="text" placeholder="Name" className="mb-2 p-2 border rounded" required/>
          <input type="email" placeholder="Email" className="mb-4 p-2 border rounded" required/>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Join Now
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default App;