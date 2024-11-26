import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";

function CustomEditor({ value, onChange }) {

  function handleEditorChange(value) {
    onChange(value); 
  }

  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: "8px",
        height: "12rem",
        backgroundColor: "#2d3748", // bg-gray-800 no código hexadecimal
      }}
    >
      <Editor
        theme="vs-dark"
        language="javascript"
        value={value} 
        onChange={handleEditorChange} 
        options={{
          automaticLayout: true,
          quickSuggestions: false,
          wordBasedSuggestions: false,
          validate: false, 
        }}
      />
    </div>
  );
}

export default CustomEditor;
