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
import {  LucideSend } from "lucide-react";
// import { TypographyMutedAI } from "@/components/TypographyMutedAI";
import { useContext, useState } from "react";
import { TypographyMutedUser } from "@/components/TypographyMutedUser";
import { AuthContext } from "@/context/AuthContextProvider";
import axios from "@/config/axios";

const Dashboard = () => {
  const user = useContext(AuthContext);

  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);

  const handleAIServer = () => {
    axios
      .post("/ai/get-result", {
        input,
      })
      .then((res) => {
        setMessage((prev) => [...prev, { text: res.data.message, user: "AI" }]);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessage((prev) => [...prev, { text: input, user: true }]);
      setInput("");
      // console.log(input);

      handleAIServer();
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-[98%]">
        <header className="flex h-12 shrink-0 items-center gap-2">
          <div className="flex items-center justify-between w-full gap-2 px-4">
            <div className="flex">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mx-1" />
              <h1 className=" font-semibold">Chat with Think_AI</h1>
            </div>
           
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
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button
                disabled={input.trim() ? false : true}
                onClick={handleSend}
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
