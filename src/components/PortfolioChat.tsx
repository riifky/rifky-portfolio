
"use client";

import { useState } from "react";
import { Bot, X, Send, User, LoaderCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Message = {
  role: "user" | "model";
  text: string;
};

export default function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Halo! Aku Rifky AI 👋 Tanya aku tentang pengalaman, proyek, skill, atau latar belakang Rifky.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessage() {
    const message = input.trim();

    if (!message || isLoading) return;

    const updatedMessages: Message[] = [
      ...messages,
      { role: "user", text: message },
    ];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          history: messages.slice(1).slice(-10),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Chatbot sedang mengalami kendala.");
      }

      setMessages([
        ...updatedMessages,
        { role: "model", text: data.reply },
      ]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "model",
          text: "Maaf, aku belum bisa menjawab sekarang. Coba lagi sebentar, ya.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {isOpen && (
        <div className="mb-4 flex h-[min(520px,75vh)] w-[min(370px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-gray-950 px-4 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Bot size={23} />
              </div>
              <div>
                <p className="font-semibold">Rifky AI</p>
                <p className="text-xs text-gray-300">
                  Personal Portfolio Assistant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Tutup chatbot"
              className="rounded-lg p-2 transition hover:bg-white/10"
            >
              <X size={20} />
            </button>
          </div>

          <div
            className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4"
            aria-live="polite"
          >
            {messages.map((item, index) => (
              <div
                key={index}
                className={`flex gap-2 ${
                  item.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {item.role === "model" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-700">
                    <Bot size={17} />
                  </div>
                )}

                <div
                  className={`max-w-[82%] whitespace-pre-wrap break-words rounded-2xl px-3 py-2.5 text-sm leading-relaxed ${
                    item.role === "user"
                      ? "rounded-br-md bg-gray-950 text-white"
                      : "rounded-bl-md border border-gray-200 bg-white text-gray-800"
                  }`}
                >
                  <ReactMarkdown
                    components={{p: ({ children }) => (
                    <p className="mb-1 last:mb-0">{children}</p>),
                    strong: ({ children }) => (<strong className="font-semibold">{children}</strong>),
                      ul: ({ children }) => (<ul className="my-2 list-disc space-y-1 pl-5">{children}</ul>),
                      ol: ({ children }) => (<ol className="my-2 list-decimal space-y-1 pl-5">{children}</ol>),
                      a: ({ children, href }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                            >
                              {children}
                              </a>
                              ),
                              }}
                              >
                                {item.text}
                    </ReactMarkdown>
                  

                </div>

                {item.role === "user" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <User size={17} />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <LoaderCircle size={17} className="animate-spin" />
                Rifky AI sedang mengetik...
              </div>
            )}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              void sendMessage();
            }}
            className="flex items-center gap-2 border-t border-gray-200 bg-white p-3"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Tanya tentang Rifky..."
              maxLength={2000}
              disabled={isLoading}
              aria-label="Pesan untuk Rifky AI"
              className="min-w-0 flex-1 rounded-xl border border-gray-200 px-3 py-3 text-sm outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-100 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Kirim pesan"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-950 text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup Rifky AI" : "Buka Rifky AI"}
          className="flex items-center gap-2 rounded-full bg-gray-950 px-5 py-4 text-white shadow-xl transition hover:-translate-y-1 hover:bg-gray-800"
        >
          {isOpen ? <X size={21} /> : <Bot size={22} />}
          <span className="text-sm font-semibold">
            {isOpen ? "Tutup Chat" : "Tanya Rifky AI"}
          </span>
        </button>
      </div>
    </div>
  );
}
