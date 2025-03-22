import React, { useState, useRef } from 'react';
import MonacoEditor from '@monaco-editor/react';

const JsCodeEditor = () => {
  const [code, setCode] = useState('console.log("Hello, JavaScript!");');
  const [output, setOutput] = useState('');
  const editorRef = useRef(null);

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const runJavaScript = () => {
    try {
      const executeFunction = new Function(code);
      const consoleOutput = [];

      const originalConsoleLog = console.log;
      console.log = (...args) => {
        consoleOutput.push(args.join(' '));
        originalConsoleLog(...args); 
      };

      executeFunction();

      console.log = originalConsoleLog;

      setOutput(consoleOutput.join('\n'));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex', padding: '10px' }}>
        <button onClick={runJavaScript} style={{ marginLeft: '10px' }}>
          Run JavaScript
        </button>
      </div>

      <div style={{ flex: 1, height: '50vh' }}>
        <MonacoEditor
          height="100%"
          language="javascript"
          value={code}
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
        />
      </div>

      <div style={{ height: '30vh', padding: '10px', borderTop: '1px solid #ccc', overflowY: 'auto' }}>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default JsCodeEditor;