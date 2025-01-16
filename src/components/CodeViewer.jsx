import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { saveAs } from "file-saver";

const CodeViewer = ({ code}) => {
  const [copied, setCopied] = useState(false);

  const saveToMarkdown = (code) => {
    const blob = new Blob([`~~~\n${code}\n~~~`], {
      type: "text/markdown;charset=utf-8",
    });
    saveAs(blob, "code-snippet.md");
  };

  return (
    <div>
      <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
        <button>{copied ? "Copied!" : "Copy Code"}</button>
      </CopyToClipboard>
      <button className="text-red-600" >Download as Markdown</button>
      <SyntaxHighlighter language={language} style={github}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;
