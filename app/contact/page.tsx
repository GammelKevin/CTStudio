"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Edit2, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
};

type FormData = {
  subject?: string;
  name?: string;
  email?: string;
  phone?: string;
};

const steps = [
  { key: "subject", question: "Hallo! 👋 Worum geht es bei deiner Anfrage?", placeholder: "Deine Nachricht..." },
  { key: "name", question: "Super! Wie heißt du?", placeholder: "Name" },
  { key: "email", question: "Wie können wir dich per E-Mail erreichen?", placeholder: "E-Mail" },
  { key: "phone", question: "Möchtest du uns auch deine Telefonnummer geben? (Optional - einfach Enter drücken zum Überspringen)", placeholder: "Telefon (optional)" },
];

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: steps[0].question,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState<FormData>({});
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    // Scroll within the chat container only, not the whole page
    const messagesContainer = messagesEndRef.current?.parentElement;
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  };

  useEffect(() => {
    // Only scroll on bot messages (when isTyping changes to false)
    if (!isTyping && messages.length > 0 && messages[messages.length - 1].sender === "bot") {
      setTimeout(() => scrollToBottom(), 100);
    }
  }, [messages, isTyping]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [currentStep]);

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length,
          text,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleEditField = (stepIndex: number) => {
    setShowPreview(false);
    setCurrentStep(stepIndex);
    setInputValue(formData[steps[stepIndex].key as keyof FormData] || "");
  };

  const handleCancelPreview = () => {
    setShowPreview(false);
    addBotMessage("Kein Problem! Möchtest du etwas ändern oder die Anfrage komplett abbrechen?");
  };

  const handleConfirmSend = async () => {
    setShowPreview(false);
    setIsTyping(true);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: prev.length,
              text: "Vielen Dank! 🎉 Deine Nachricht wurde erfolgreich versendet. Wir melden uns bald bei dir!",
              sender: "bot",
              timestamp: new Date(),
            },
          ]);
          setIsTyping(false);
          setIsComplete(true);
        }, 1500);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length,
            text: "Ups! Da ist etwas schiefgelaufen. Bitte versuche es später erneut oder kontaktiere uns direkt unter kundenservice@ct-studio.store",
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, 1500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim() && steps[currentStep].key !== "phone") return;

    // Validate email if current step is email
    if (steps[currentStep].key === "email" && inputValue.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputValue)) {
        // Show error message
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length,
            text: "Bitte gib eine gültige E-Mail-Adresse ein (z.B. name@beispiel.de)",
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
        return;
      }
    }

    // Add user message
    const userMessage: Message = {
      id: messages.length,
      text: inputValue || "(Übersprungen)",
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Save form data
    const stepKey = steps[currentStep].key as keyof FormData;
    const newFormData = { ...formData, [stepKey]: inputValue };
    setFormData(newFormData);

    setInputValue("");

    // Check if we're done
    if (currentStep < steps.length - 1) {
      // Move to next step
      setCurrentStep(currentStep + 1);
      addBotMessage(steps[currentStep + 1].question);
    } else {
      // Show preview
      setTimeout(() => {
        setShowPreview(true);
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="container mx-auto px-4 max-w-4xl pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Lass uns sprechen
          </h1>
          <p className="text-gray-400 text-lg">
            Unser Chat-Assistent hilft dir schnell und einfach
          </p>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative bg-black/40 backdrop-blur-xl rounded-3xl border border-purple-500/20 overflow-hidden shadow-2xl shadow-purple-500/10"
        >
          {/* Chat Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      message.sender === "bot"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : "bg-gradient-to-r from-blue-500 to-cyan-500"
                    }`}
                  >
                    {message.sender === "bot" ? (
                      <Bot className="w-5 h-5 text-white" />
                    ) : (
                      <User className="w-5 h-5 text-white" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                      message.sender === "bot"
                        ? "bg-purple-500/10 border border-purple-500/30 text-white"
                        : "bg-blue-500/10 border border-blue-500/30 text-white"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <motion.div
                      className="w-2 h-2 bg-purple-400 rounded-full"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-purple-400 rounded-full"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-purple-400 rounded-full"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          {!isComplete && !showPreview && (
            <div className="border-t border-purple-500/20 p-4 bg-black/20">
              <div className="flex gap-3">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={steps[currentStep]?.placeholder || "Deine Nachricht..."}
                  disabled={isSubmitting}
                  className="flex-1 bg-black/40 border-purple-500/30 focus:border-purple-500 text-white placeholder:text-gray-500"
                />
                <Button
                  onClick={handleSend}
                  disabled={isSubmitting || (!inputValue.trim() && steps[currentStep].key !== "phone")}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/30"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Preview Modal Overlay */}
        <AnimatePresence>
          {showPreview && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                onClick={handleCancelPreview}
              />

              {/* Preview Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
              >
                <div className="relative w-full max-w-2xl">
                  {/* Glow Effects */}
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-black via-purple-950/40 to-black border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20">
                    {/* Header */}
                    <div className="relative p-8 pb-6 border-b border-purple-500/20">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10" />
                      <div className="relative">
                        <motion.h3
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                        >
                          Fast geschafft! ✨
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-gray-400"
                        >
                          Überprüfe deine Angaben bevor wir sie absenden
                        </motion.p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-3">
                      {/* Subject */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-black/40 border border-purple-500/20 rounded-2xl p-4 hover:border-purple-500/40 transition-all">
                          <div className="flex items-start gap-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">Nachricht</p>
                              <p className="text-white text-lg font-medium truncate">{formData.subject}</p>
                            </div>
                            <Button
                              onClick={() => handleEditField(0)}
                              size="icon"
                              variant="ghost"
                              className="flex-shrink-0 text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 rounded-xl transition-all hover:scale-110"
                            >
                              <Edit2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>

                      {/* Name */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-pink-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-black/40 border border-purple-500/20 rounded-2xl p-4 hover:border-pink-500/40 transition-all">
                          <div className="flex items-start gap-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-pink-400 uppercase tracking-wider mb-2">Name</p>
                              <p className="text-white text-lg font-medium truncate">{formData.name}</p>
                            </div>
                            <Button
                              onClick={() => handleEditField(1)}
                              size="icon"
                              variant="ghost"
                              className="flex-shrink-0 text-pink-400 hover:text-pink-300 hover:bg-pink-500/20 rounded-xl transition-all hover:scale-110"
                            >
                              <Edit2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>

                      {/* Email */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-black/40 border border-purple-500/20 rounded-2xl p-4 hover:border-purple-500/40 transition-all">
                          <div className="flex items-start gap-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">E-Mail</p>
                              <p className="text-white text-lg font-medium truncate">{formData.email}</p>
                            </div>
                            <Button
                              onClick={() => handleEditField(2)}
                              size="icon"
                              variant="ghost"
                              className="flex-shrink-0 text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 rounded-xl transition-all hover:scale-110"
                            >
                              <Edit2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>

                      {/* Phone */}
                      {formData.phone && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="group relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-pink-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative bg-black/40 border border-purple-500/20 rounded-2xl p-4 hover:border-pink-500/40 transition-all">
                            <div className="flex items-start gap-4">
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-pink-400 uppercase tracking-wider mb-2">Telefon</p>
                                <p className="text-white text-lg font-medium truncate">{formData.phone}</p>
                              </div>
                              <Button
                                onClick={() => handleEditField(3)}
                                size="icon"
                                variant="ghost"
                                className="flex-shrink-0 text-pink-400 hover:text-pink-300 hover:bg-pink-500/20 rounded-xl transition-all hover:scale-110"
                              >
                                <Edit2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Footer Actions */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="p-8 pt-6 border-t border-purple-500/20 bg-gradient-to-b from-transparent to-black/40"
                    >
                      <div className="flex gap-4">
                        <Button
                          onClick={handleCancelPreview}
                          variant="outline"
                          className="flex-1 h-14 text-base border-2 border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 rounded-2xl transition-all hover:scale-105"
                        >
                          <X className="w-5 h-5 mr-2" />
                          Abbrechen
                        </Button>
                        <Button
                          onClick={handleConfirmSend}
                          disabled={isSubmitting}
                          className="flex-1 h-14 text-base bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 shadow-lg shadow-purple-500/50 rounded-2xl transition-all hover:scale-105 hover:shadow-purple-500/70"
                        >
                          <Check className="w-5 h-5 mr-2" />
                          Jetzt senden
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            Oder schreibe uns direkt an{" "}
            <a
              href="mailto:kundenservice@ct-studio.store"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              kundenservice@ct-studio.store
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
