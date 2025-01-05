import { AppSidebar } from "@/components/app-sidebar";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { LucideSend } from "lucide-react";
// import { TypographyMutedAI } from "@/components/TypographyMutedAI";
import { useContext, useState } from "react";
import { TypographyMutedUser } from "@/components/TypographyMutedUser";
import { AuthContext } from "@/context/AuthContextProvider";

const Dashboard = () => {
  const user = useContext(AuthContext);
  // console.log("user", user);
  const [message, setMessage] = useState([
    {
      text: "Hello, I am AI. How can I help you?",
      user: "NK",
    },
    {
      text: "Hello, I am AI. How can I help you?",
      user: "MK",
    },
    {
      text: "Hello, I am AI. How can I help you?",
      user: "RG",
    },
    {
      text: "Hello, I am AI. How can I help you?",
      user: "NK",
    },
    {
      text: "Hello, Rushi",
      user: "NK",
    },
    {
      text: "Hello, Nilesh",
      user: "RG",
    },
    {
      text: "Hello, what are doing ?",
      user: "NK",
    },
    {
      text: "Hello, Rushi",
      user: "NK",
    },
    {
      text: "Hello, Nilesh",
      user: "RG",
    },
    {
      text: "Hello, what are doing ?",
      user: "NK",
    },
  ]);

  function handleSendMessage() {
    setMessage([
      ...message,
      {
        text: message.text,
      },
    ]);
    console.log("message", message.text);
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-[98%]">
        <header className="flex h-12 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mx-1" />
            <h1 className=" font-semibold">Chat Now</h1>
          </div>
        </header>
        <div className="flex h-full flex-1 flex-col gap-2 p-3  pt-0">
          <div className="h-[86vh] max-sm:mt-1 max-sm:h-[92vh] flex flex-col  justify-between rounded-xl md:min-h-min">
            <ScrollArea className="max-h-[74vh] min-h-[74vh] max-sm:max-h-[84vh] max-sm:min-h-[84vh] w-full rounded-md border px-3  overflow-hidden flex flex-col ">
              {message.map((msg, index) => {
                return <TypographyMutedUser key={index} message={msg} />;
              })}
            </ScrollArea>
            <div className="flex  w-full bottom-0 items-center gap-6">
              <Textarea
                placeholder="Type your message here."
                className="outline-none resize-none"
                id="message"
              />
              <Button
                onClick={handleSendMessage}
                className="rounded-full p-2.5"
              >
                <LucideSend />{" "}
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;
