import { Card } from "./ui/card";
import Logo from "../assets/artificial-intelligence-ai-processor-chip-icon-symbol-for-graphic-design-logo-web-site-social-media-png.webp";
import UserLogo from "../assets/avatar-dummy-sign.webp";
import Markdown from "markdown-to-jsx";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

export function TypographyMutedUser(message) {
  // console.log(aiMessage)
  function parseAIResponse(response) {
    const parts = response.split(/```[\w]*\n?/); // Split response at code blocks
    const result = [];
    let isCode = false;

    parts.forEach((part, index) => {
      if (isCode) {
        // If the part is code, remove trailing and leading spaces
        result.push({ type: "code", content: part.trim() });
      } else if (part.trim()) {
        // If it's text, push it as a text part
        result.push({ type: "text", content: part.trim() });
      }
      isCode = !isCode; // Toggle between text and code
    });
    console.log(result);
    return result;
  }
  const response = parseAIResponse(message.message.text);



  return (
    <div
      className={`w-full flex  ${
        message.message.user == true ? "justify-end" : "justify-start"
      } items-center pt-1`}
    >
      <div
        className={`flex  gap-2 ${
          message.message.user == true ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <img
          className="w-9 h-9  max-sm:w-6 max-sm:h-6  rounded-full"
          src={`${message.message.user == true ? UserLogo : Logo}`}
          alt="logo"
        />
        <Card
          className={`max-w-[500px] max-sm:max-w-[220px] p-2 top-2 right-4 mb-1`}
        >
          {response.map((item) => {
            if (item.type == "text") {
              return (
                <Markdown
                  key={item}
                  className="text-sm max-sm:text-sm text-black"
                >
                  {item.content}
                </Markdown>
              );
            } else {
              return (
                <SyntaxHighlighter
                  className="w-full my-5 font-medium max-sm:text-sm max-sm:font-thin  text-sm"
                  key={item}
                  style={github}
                >
                  {item.content}
                </SyntaxHighlighter>
              );
            }
          })}

        </Card>
      </div>
    </div>
  );
}
