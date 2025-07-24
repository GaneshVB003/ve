import React from 'react';
import Timeline from './components/Timeline/Timeline';

/**
 * Main App component renders the Timeline UI.
 * Add more UI and layout as needed.
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-white mb-4">Video Editor Timeline Demo</h1>
      <Timeline />
    </div>
  );
}

export default App;