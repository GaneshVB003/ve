import React from 'react';
import { useTimelineStore } from '../../store/timeline';

/**
 * Timeline component displays all layers horizontally with scroll and snap support.
 * Responsive and touch-optimized for mobile and desktop.
 */
const Timeline = () => {
  const { layers, selectLayer, selectedLayerId } = useTimelineStore();

  return (
    <div className="w-full overflow-x-auto scroll-smooth snap-x flex space-x-2 py-2 bg-gray-900 min-h-[80px] md:min-h-[120px] lg:min-h-[160px]">
      {layers.map(layer => (
        <div
          key={layer.id}
          className={`min-w-[120px] snap-center bg-gray-700 rounded p-2 cursor-pointer transition border-2 ${selectedLayerId === layer.id ? 'border-blue-400' : 'border-transparent'}`}
          onClick={() => selectLayer(layer.id)}
        >
          <div className="font-bold text-white text-xs md:text-sm truncate">{layer.name}</div>
          {/* Placeholder for layer content/clip */}
          <div className="h-6 md:h-10 bg-gray-600 rounded mt-2" />
        </div>
      ))}
    </div>
  );
};

export default Timeline;