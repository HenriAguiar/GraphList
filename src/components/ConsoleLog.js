// src/components/ConsoleLog.js
import React from 'react';

const ConsoleLog = ({ logs }) => (
  <div className="w-full bg-gray-900 text-gray-200 p-4 rounded-lg">
    <h5 className="text-lg font-bold text-white mb-3">Console</h5>
    <div className="h-48 overflow-y-auto bg-gray-800 border border-gray-600 rounded-lg p-2">
      {logs.map((log, index) => (
        <div
          key={index}
          className={`text-sm ${
            log.startsWith("[ERROR]:") ? "text-red-500" : "text-green-500"
          }`}
        >
          {log}
        </div>
      ))}
    </div>
  </div>
);

export default ConsoleLog;
