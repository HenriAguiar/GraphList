import React, { useEffect, useRef } from "react";
import { Poppins, Ubuntu_Mono } from "next/font/google";

const courier = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const ConsoleLog = ({ logs }) => {
  const logContainerRef = useRef(null);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="w-full bg-gray-900 text-gray-200 p-4 rounded-lg">
      <h5 className="text-lg font-bold text-white mb-3">Console</h5>
      <div
        ref={logContainerRef}
        className="h-[200px] overflow-y-auto bg-gray-800 border border-gray-600 rounded-lg p-2"
        style={{ height: "120px" }}
      >
        {logs.map((log, index) => (
          <div
            key={index}
            className={`text-sm ${
              log.startsWith("[ERROR]:") ? "text-red-500" : "text-green-500"
            } font-mono border-t border-gray-700 pt-2`}
          >
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsoleLog;
