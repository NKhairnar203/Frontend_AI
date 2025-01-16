import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

const New = ({ code, language = "javascript" }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div>
      {/* <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
        <button>{copied ? "Copied!" : "Copy Code"}</button>
      </CopyToClipboard> */}
      <SyntaxHighlighter language={language} style={github}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default New;
