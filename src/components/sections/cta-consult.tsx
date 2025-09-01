"use client";

import { useState } from "react";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const CtaConsult = () => {
  const [query, setQuery] = useState("");

  const doctronicIconUrl =
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/svgs/doctronic-icon-new-4.svg?";
  const lockIconUrl =
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/svgs/lock-2-line-6.svg?";

  return (
    <section className="bg-secondary py-20 px-6 font-body">
      <div className="container mx-auto flex flex-col items-center text-center max-w-2xl">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
          <Image
            src={doctronicIconUrl}
            alt="Doctronic logo icon"
            width={32}
            height={32}
          />
        </div>

        <h2 className="font-display text-4xl font-bold text-text-primary mb-8 leading-tight">
          Start a{" "}
          <span className="bg-accent text-primary px-2 rounded-md">
            FREE
          </span>{" "}
          Consult
        </h2>

        <div className="w-full max-w-lg bg-card rounded-lg border border-border p-4 shadow-sm mb-4">
          <Textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask me anything about your health"
            className="w-full border-0 resize-none p-2 text-base text-text-secondary placeholder:text-text-caption focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[80px] bg-transparent"
          />
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-text-caption">{query.length} / 1152</p>
            <Button size="lg" className="flex items-center gap-2 font-semibold">
              Get Started
              <Send size={18} />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-text-secondary mb-8 font-medium">
          <Image
            src={lockIconUrl}
            alt="Lock icon"
            width={16}
            height={16}
            className="text-text-secondary"
          />
          <span>HIPAA compliant &amp; anonymous</span>
        </div>

        <p className="text-xs text-text-caption max-w-xl leading-relaxed">
          Always discuss Doctronic output with a doctor. Doctronic is an AI
          doctor, not a licensed doctor, does not practice medicine, and does not
          provide medical advice or care. By using Doctronic, you agree to our{" "}
          <a
            href="https://www.doctronic.ai/privacy-policy/"
            className="underline text-text-secondary hover:text-primary"
          >
            Privacy Policy
          </a>{" "}
          &amp;{" "}
          <a
            href="https://www.doctronic.ai/terms-of-service/"
            className="underline text-text-secondary hover:text-primary"
          >
            Terms of Service
          </a>
          . LegitScript certified.
        </p>
      </div>
    </section>
  );
};

export default CtaConsult;