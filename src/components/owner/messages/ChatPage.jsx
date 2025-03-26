"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Link, Send } from "lucide-react";
import { useState } from "react";
import { LiaHomeSolid } from "react-icons/lia";

const agents = [
  {
    name: "Zilan",
    role: "Admin1",
    avatar: "/images/default/avatar.jpeg",
    status: "online",
    location: "123 Sukhumvit Rd, Bangkok, Thailand",
    time: "12:34 PM",
  },
  {
    name: "Zyan",
    role: "Admin2",
    avatar: "/images/default/avatar-1.jpeg",
    status: "online",
    location: "123 Sukhumvit Rd, Bangkok, Thailand",
    time: "12:34 PM",
  },
  {
    name: "Sarah",
    role: "Student",
    avatar: "/images/default/avatar-2.jpeg",
    status: "offline",
    location: "123 Sukhumvit Rd, Bangkok, Thailand",
    time: "12:34 PM",
  },
];

const tenants = [
  {
    name: "Asif",
    role: "Admin1",
    avatar: "/images/default/avatar.jpeg",
    status: "online",
    location: "123 Sukhumvit Rd, Bangkok, Thailand",
    time: "12:34 PM",
  },
  {
    name: "Nora",
    role: "Admin2",
    avatar: "/images/default/avatar-2.jpeg",
    status: "online",
    location: "123 Sukhumvit Rd, Bangkok, Thailand",
    time: "12:34 PM",
  },
];

export default function ChatPage() {
  const [tab, setTab] = useState("Agents");
  const [selectedUser, setSelectedUser] = useState(agents[0]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [input, setInput] = useState("");
  const [conversations, setConversations] = useState({
    Zilan: [
      {
        role: "agent",
        content: "Hi, how can I help you today?",
        time: "10:00 AM",
      },
      {
        role: "user",
        content: "Hey, I'm having trouble with my account.",
        time: "10:02 AM",
      },
    ],
    Zyan: [],
    Sarah: [],
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim() || !selectedUser) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Add the user's message
    const updatedMessages = [
      ...conversations[selectedUser.name],
      { role: "user", content: input, time: currentTime },
    ];

    setConversations({
      ...conversations,
      [selectedUser.name]: updatedMessages,
    });

    setInput("");

    // Simulate agent reply
    setTimeout(() => {
      setConversations((prev) => ({
        ...prev,
        [selectedUser.name]: [
          ...prev[selectedUser.name],
          {
            role: "agent",
            content: "Let me check that for you.",
            time: currentTime,
          },
        ],
      }));
    }, 1000);
  };

  const options = [
    { id: 1, name: "Zayn" },
    { id: 2, name: "John" },
    { id: 3, name: "Dillon" },
    { id: 4, name: "Farhan" },
    { id: 5, name: "Rasheed" },
  ];

  const handleSearch = (query) => {
    console.log("Selected:", query);
  };

  return (
    <>
      <h3 className="text-lg md:text-[22px] font-semibold text-textColor mb-4">
        Chat
      </h3>
      <div className="flex h-full sm:flex-row flex-col gap-4 md:gap-6">
        {/* Sidebar */}
        <Card
          className={`sm:w-1/3 w-full sm:block rounded-lg shadow-none py-0 overflow-y-hidden ${
            isSidebarVisible ? "block" : "hidden"
          }`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Conversation</h2>
              <div className="flex items-center gap-[6px]">
                {["Tenants", "Agents"].map((item, i) => (
                  <button
                    key={i}
                    className={`bg-primary px-[5px] py-2 rounded-sm text-white font-semibold text-[10px] cursor-pointer ${
                      tab === item ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => setTab(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <ul className="mt-4 space-y-4 overflow-y-auto max-h-[100vh] scroll-0">
              {tab === "Agents" &&
                agents.map((agent) => (
                  <li
                    key={agent.name}
                    className={`flex items-center gap-2 px-2 py-4 rounded-lg cursor-pointer ${
                      selectedUser?.name === agent.name
                        ? "bg-[#EDF5FF] border-[0.2px] border-[#EDF5FF]"
                        : "hover:bg-[#EDF5FF] border-[0.2px] border-[#D5E0F6] shadow-xs"
                    }`}
                    onClick={() => {
                      setSelectedUser(agent);
                      setIsSidebarVisible(false);
                    }}
                  >
                    <Avatar className="size-[60px]">
                      <AvatarImage src={agent.avatar} alt={agent.name} />
                      <AvatarFallback>{agent.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-[#1F242F] text-sm">
                          {agent.name}
                        </p>
                        <span className="text-xs text-textColor">
                          {agent.time}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-textColor truncate flex items-center gap-1">
                        <LiaHomeSolid className="text-textColor" />
                        {agent.location}
                      </p>
                    </div>
                  </li>
                ))}
              {tab === "Tenants" &&
                tenants.map((tenant) => (
                  <li
                    key={tenant.name}
                    className={`flex items-center gap-2 px-2 py-4 rounded-lg cursor-pointer ${
                      selectedUser?.name === tenant.name
                        ? "bg-[#EDF5FF] border-[0.2px] border-[#EDF5FF]"
                        : "hover:bg-[#EDF5FF] border-[0.2px] border-[#D5E0F6] shadow-xs"
                    }`}
                    onClick={() => {
                      setSelectedUser(tenant);
                      setIsSidebarVisible(false);
                    }}
                  >
                    <Avatar className="size-[60px]">
                      <AvatarImage src={tenant.avatar} alt={tenant.name} />
                      <AvatarFallback>{tenant.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-[#1F242F] text-sm">
                          {tenant.name}
                        </p>
                        <span className="text-xs text-textColor">
                          {tenant.time}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-textColor truncate flex items-center gap-1">
                        <LiaHomeSolid className="text-textColor" />
                        {tenant.location}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </Card>

        {/* Chat Window */}
        <Card className="flex-1 flex flex-col rounded-lg shadow-none py-0">
          {/* Chat Header */}
          <CardHeader className="flex flex-row items-center space-x-4 border-b p-4">
            <Button
              size="icon"
              variant="ghost"
              className="sm:hidden"
              onClick={() => setIsSidebarVisible(true)}
            >
              <ChevronLeft />
            </Button>
            <Avatar>
              <AvatarImage
                src={selectedUser?.avatar}
                alt={selectedUser?.name}
              />
              <AvatarFallback>{selectedUser?.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{selectedUser?.name}</p>
              <p
                className={`text-sm font-medium capitalize ${
                  selectedUser?.status === "online"
                    ? "text-onlineTextColor"
                    : "text-redText"
                }`}
              >
                {selectedUser?.status}
              </p>
            </div>
          </CardHeader>

          {/* Chat Content */}
          <CardContent className="flex-1 overflow-y-auto p-4 custom-scroll">
            <div className="space-y-4">
              {selectedUser &&
                conversations[selectedUser.name]?.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg text-sm max-w-[70%] ${
                        message.role === "user"
                          ? "bg-primary text-white"
                          : "bg-[#F4F4F5] text-textColor"
                      }`}
                    >
                      <p>{message.content}</p>
                      <div
                        className={`text-xs mt-1 font-light ${
                          message.role === "user"
                            ? "text-white"
                            : "text-[#09090BCC]"
                        }`}
                      >
                        {message.time}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>

          {/* Chat Input */}
          <CardFooter className="p-4 border-t">
            <form
              className="flex items-center w-full space-x-2"
              onSubmit={handleSendMessage}
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                size="icon"
                className="bg-primary text-white hover:bg-primary cursor-pointer outline-none focus:outline-none"
                type="submit"
                disabled={!input.trim()}
              >
                <Send />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
