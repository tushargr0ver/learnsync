import React, { useState, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import axios from "axios";

const JDoodle_CLIENT_ID = import.meta.env.VITE_JDOODLE_ID;
const JDoodle_CLIENT_SECRET = import.meta.env.VITE_JDOODLE_SECRET;

const languageMap = {
  javascript: { jdoodle: "nodejs", version: "1" },
  python: { jdoodle: "python3", version: "3" },
  cpp: { jdoodle: "cpp17", version: "1" },
  c: { jdoodle: "c", version: "1" },
  java: { jdoodle: "java", version: "1" },
  php: { jdoodle: "php", version: "1" },
};

const CodeEditor = () => {
  const [code, setCode] = useState('console.log("Hello, World!");');
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("javascript");
  const editorRef = useRef(null);

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const runCode = async () => {
    setOutput("⏳ Running code...");
    const langConfig = languageMap[language];
    if (!langConfig) return setOutput("❌ Unsupported language");

    try {
      const response = await axios.post("http://localhost:5000/execute", {
        clientId: JDoodle_CLIENT_ID,
        clientSecret: JDoodle_CLIENT_SECRET,
        script: code,
        language: langConfig.jdoodle,
        versionIndex: langConfig.version,
      });

      setOutput(response.data.output || "No output");
    } catch (error) {
      setOutput(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-gray-100 py-6">
      <div className="flex items-center justify-between bg-white p-4 rounded-lg w-full max-w-7xl">
        <div className="flex items-center space-x-4">
          <label className="text-gray-700 font-medium">Language:</label>
          <select
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {Object.keys(languageMap).map((lang) => (
              <option key={lang} value={lang}>{lang.toUpperCase()}</option>
            ))}
          </select>
        </div>
        <button
          onClick={runCode}
          className="px-5 py-2 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 transition-all duration-300 focus:outline-none"
        >
          ▶ Run Code
        </button>
      </div>

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

      <div className="w-full max-w-7xl bg-white p-5 border-t border-gray-300 overflow-y-auto mt-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Output:</h3>
        <pre className="bg-gray-200 p-4 rounded-md text-sm font-mono text-gray-900 overflow-x-auto">
          {output || "⚡ Run your code to see the output here."}
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;
