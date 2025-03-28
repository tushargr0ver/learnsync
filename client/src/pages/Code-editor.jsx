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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'white' }}>
      <div style={{ display: 'flex', padding: '10px', backgroundColor: 'white', borderBottom: '1px solid #ccc' }}>
        <button
          onClick={runJavaScript}
          style={{
            marginLeft: '10px',
            padding: '8px 16px',
            backgroundColor: '#2196F3', // Blue run button
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1976D2')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2196F3')}
        >
          Run JavaScript
        </button>
      </div>

      <div style={{ flex: 1, height: '50vh', padding: '10px', backgroundColor: 'black' }}> {/* Adjusted Light blue editor */}
        <MonacoEditor
          height="100%"
          language="javascript"
          value={code}
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          options={{
            minimap: { enabled: false },
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            fontSize: 14,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            theme: 'vs-dark', // Dark theme, but with a lighter blue background
          }}
        />
      </div>

      <div
        style={{
          height: '30vh',
          padding: '10px',
          borderTop: '1px solid #ccc',
          overflowY: 'auto',
          backgroundColor: 'white', // White output area
          borderRadius: '0 0 4px 4px',
        }}
      >
        <h3 style={{ marginBottom: '8px' }}>Output:</h3>
        <pre
          style={{
            backgroundColor: '#f8f8f8',
            padding: '8px',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '14px',
            overflowX: 'auto',
          }}
        >
          {output}
        </pre>
      </div>
    </div>
  );
};

export default JsCodeEditor;