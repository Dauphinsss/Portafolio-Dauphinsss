"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Correo() {
  const [email, setEmail] = useState("marcosvelasquezvela123@gmail.com");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="space-y-2 sm:space-y-0 sm:flex sm:items-center sm:justify-between max-w-full">
      <div className="flex items-center space-x-2">
        <Label className="font-bold hidden sm:block">Mi Correo</Label>
        <Input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-zinc-950 ring-offset-cremita w-64 border-cremita text-sm"
          readOnly
        />
        <Button
          variant="outline"
          size="icon"
          onClick={copyToClipboard}
          className="transition-all duration-200 bg-zinc-950 hover:bg-cremita border-cremita"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
