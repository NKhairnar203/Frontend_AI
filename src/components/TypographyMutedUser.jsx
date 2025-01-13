import { useState } from "react";
import { Card } from "./ui/card";
import Logo from "../assets/artificial-intelligence-ai-processor-chip-icon-symbol-for-graphic-design-logo-web-site-social-media-png.webp";
import UserLogo from "../assets/avatar-dummy-sign.webp";

export function TypographyMutedUser(message) {

// console.log(message)

  return (
    <div
      className={`w-full flex  ${
        message.message.user !== "AI" ? "justify-end" : "justify-start"
      } items-center pt-1`}
    >
      <div
        className={`flex  gap-2 ${
          message.message.user !== "AI" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <img
          className="w-9 h-9  max-sm:w-7 max-sm:h-7  rounded-full"
          src={`${message.message.user !== "AI" ? UserLogo : Logo}`}
          alt="logo"
        />
        <Card
          className={`max-w-[450px] max-sm:max-w-[200px] p-3 top-2 right-4 mb-1`}
        >
          <p className="text-sm text-muted-foreground text-black">
            {message.message.text}
          </p>
        </Card>
      </div>
    </div>
  );
}
