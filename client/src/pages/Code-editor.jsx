import React, { useState, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import Navbar from "../components/Navbar";

const JsCodeEditor = () => {
  const [code, setCode] = useState('console.log("Hello, JavaScript!");');
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("javascript");
  const editorRef = useRef(null);

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const runCode = () => {
    if (language !== "javascript") {
      setOutput("⚠️ Code execution is only available for JavaScript right now.");
      return;
    }
    try {
      const executeFunction = new Function(code);
      const consoleOutput = [];

      const originalConsoleLog = console.log;
      console.log = (...args) => {
        consoleOutput.push(args.join(" "));
        originalConsoleLog(...args);
      };

      executeFunction();

      console.log = originalConsoleLog;

      setOutput(consoleOutput.join("\n"));
    } catch (error) {
      setOutput(`❌ Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center w-full bg-gray-100 py-6">
        {/* Header with Language Selection & Run Code Button */}
        <div className="flex items-center justify-between bg-white  p-4 rounded-lg w-full max-w-7xl">
          <div className="flex items-center space-x-4">
            <label className="text-gray-700 font-medium">Language:</label>
            <select
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="javascript">JavaScript</option>
              {/* Future expansion options */}
              <option value="python" disabled>Python (Coming Soon)</option>
              <option value="cpp" disabled>C++ (Coming Soon)</option>
            </select>
          </div>
          <button
            onClick={runCode}
            className="px-5 py-2 bg-blue-500 text-white font-medium rounded-md shadow-md 
                      hover:bg-blue-600 transition-all duration-300 focus:outline-none"
          >
            ▶ Run Code
          </button>
        </div>

        {/* Code Editor Section */}
        <div className="w-full max-w-7xl p-4 mt-4 bg-black rounded-lg">
          <MonacoEditor
            height="50vh"
            language={language}
            value={code}
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              theme: "vs-dark",
            }}
          />
        </div>

        {/* Output Section */}
        <div className="w-full max-w-7xl bg-white  p-5 border-t border-gray-300 overflow-y-auto mt-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Output:</h3>
          <pre className="bg-gray-200 p-4 rounded-md text-sm font-mono text-gray-900 overflow-x-auto">
            {output || "⚡ Run your code to see the output here."}
          </pre>
        </div>
      </div>
    </>
  );
};

export default JsCodeEditor;
