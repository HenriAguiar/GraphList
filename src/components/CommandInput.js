// src/components/CommandInput.js
import React from 'react';
import CustomEditor from './Editor';
import Download from './Download';

const CommandInput = ({ input, setInput, handleExecute, comandos }) => (
  <div className="bg-gray-900 text-gray-200 p-4 rounded-lg">
    <div className="flex justify-between items-center">
      <h5 className="text-lg font-bold text-white mb-3">
        Digitar Comandos
      </h5>
      <Download
        comandos={comandos}
        valores={[]}
        svgContainerRef={null}
        type="comandos"
      />
    </div>
    <div className="h-48">
      <CustomEditor
        value={input}
        onChange={(value) => setInput(value)}
      />
    </div>
    <button
      className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
      onClick={handleExecute}
    >
      Confirmar
    </button>
  </div>
);

export default CommandInput;
