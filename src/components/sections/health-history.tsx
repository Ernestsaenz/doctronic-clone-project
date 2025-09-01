import type { LucideIcon } from "lucide-react";
import React from 'react';
import Image from "next/image";
import {
  Link2,
  Beaker,
  Paperclip,
  Asterisk,
  Heart,
  FileText,
  CalendarDays,
  FilePlus2,
} from "lucide-react";

const getPosition = (angle: number, radius: string): React.CSSProperties => {
  const rad = (angle * Math.PI) / 180;
  const x = `calc(50% + ${Math.cos(rad)} * ${radius})`;
  const y = `calc(50% - ${Math.sin(rad)} * ${radius})`;
  return {
    top: y,
    left: x,
    transform: 'translate(-50%, -50%)',
  };
};

const radius = "140px";

const iconData: { Icon: LucideIcon; style: React.CSSProperties }[] = [
  { Icon: Link2, style: getPosition(90, radius) },
  { Icon: Beaker, style: getPosition(45, radius) },
  { Icon: Paperclip, style: getPosition(0, radius) },
  { Icon: Asterisk, style: getPosition(-45, radius) },
  { Icon: Heart, style: getPosition(-90, radius) },
  { Icon: FileText, style: getPosition(-135, radius) },
  { Icon: CalendarDays, style: getPosition(180, radius) },
  { Icon: FilePlus2, style: getPosition(135, radius) },
];

export default function HealthHistory() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center">
          <h2 className="font-display text-[36px] font-bold text-text-primary leading-tight">
            I'll remember your health history so
            <br />
            you don't have to
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base text-text-secondary">
            Skip the repetitive intake forms and forgotten details. I maintain your complete health timeline, remembering things like medications, lab results, and more, making every interaction with me or any other doctor you use more personal and every recommendation more precise.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative h-96 w-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="h-[280px] w-[280px] rounded-full border border-dashed border-border"
              />
            </div>

            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/icons/1-4.jpg"
              alt="Patient profile"
              width={160}
              height={160}
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover ring-2 ring-white"
            />

            {iconData.map(({ Icon, style }, index) => (
              <div
                key={index}
                className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-white shadow-md"
                style={style}
              >
                <Icon className="h-6 w-6 text-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}