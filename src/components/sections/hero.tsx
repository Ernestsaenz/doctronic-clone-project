"use client";

import { useState } from "react";
import Image from "next/image";
import { Send } from "lucide-react";

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col items-center text-center py-12 px-4 space-y-6 bg-background">
      <div className="flex items-center justify-center space-x-2">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/svgs/doctronic-icon-new-4.svg?"
          alt="doctronic logo"
          width={48}
          height={48}
        />
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/icons/0-1.png?"
          alt="😀"
          width={52}
          height={52}
          className="rounded-full"
        />
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/icons/1-2.png?"
          alt="😀"
          width={52}
          height={52}
          className="rounded-full"
        />
      </div>

      <h1 className="font-display text-[48px] font-bold text-text-primary tracking-tight leading-tight">
        Hi, I'm{" "}
        <span className="relative inline-block">
          Doctronic
          <span
            className="absolute bottom-[-10px] left-0 w-full h-[3px]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, var(--color-primary), var(--color-primary) 2px, transparent 2px, transparent 6px)",
            }}
          ></span>
        </span>
      </h1>

      <div className="max-w-lg w-full space-y-2 pt-4">
        <div className="bg-secondary p-4 rounded-xl text-left">
          <p className="text-text-secondary font-sans text-base">
            I'm your private and personal AI doctor.
          </p>
        </div>
        <div className="bg-secondary p-4 rounded-xl text-left">
          <p className="text-text-secondary font-sans text-base">
            As an AI doctor, my service is fast and free. I've already helped
            people{" "}
            <strong className="font-bold text-text-primary">
              14,260,065
            </strong>{" "}
            times!
          </p>
        </div>
        <div className="bg-secondary p-4 rounded-xl text-left">
          <p className="text-text-secondary font-sans text-base">
            After we chat, if you want you can have a video visit with a top
            doctor for only $39.
          </p>
        </div>
        <div className="bg-secondary p-4 rounded-xl text-left">
          <p className="text-text-secondary font-sans text-base">
            What can I help you with today?
          </p>
        </div>
      </div>

      <div className="w-full max-w-2xl pt-4">
        <div className="relative border border-border rounded-lg p-3 bg-card shadow-sm">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask me anything about your health"
            className="w-full h-20 p-2 text-base bg-transparent border-0 focus:ring-0 resize-none text-text-secondary placeholder:text-text-caption font-sans"
            maxLength={1152}
          />
          <div className="flex justify-between items-end mt-2">
            <p className="text-sm text-text-caption font-sans">
              {query.length} / 1152
            </p>
            <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 text-base hover:opacity-90 transition-opacity">
              Get Started
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}