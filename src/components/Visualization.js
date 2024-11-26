// src/components/Visualization.js
import React from 'react';
import Download from './Download';

const Visualization = ({ svgContainerRef }) => (
  <div className="w-full bg-gray-900 text-gray-200 p-4 rounded-lg">
    <div className="flex items-center justify-between mb-3">
      <h5 className="text-lg font-bold text-white">
        Visualização da Lista
      </h5>
      <Download
        comandos={[]}
        valores={[]}
        svgContainerRef={svgContainerRef}
        type="svg"
      />
    </div>
    <div
      id="svg-container"
      ref={svgContainerRef}
      className="w-full h-64 bg-gray-800 border border-gray-600 rounded-lg"
    ></div>
  </div>
);

export default Visualization;
