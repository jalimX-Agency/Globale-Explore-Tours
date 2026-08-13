"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";

export type TeamMemberData = {
  name: string;
  role: string;
  roleEn: string;
  roleEs: string;
  photo: string;
};

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TeamGrid({ title, members }: { title: string; members: TeamMemberData[] }) {
  const { language } = useLanguage();

  if (members.length === 0) return null;

  return (
    <div>
      <h2 className="font-display text-center text-2xl font-normal tracking-wide text-neutral-800 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-12">
        {members.map((member, i) => {
          const role = localized(language, member.role, member.roleEn, member.roleEs);
          return (
            <div key={i} className="flex w-28 flex-col items-center text-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-neutral-200">
                {member.photo ? (
                  <Image src={member.photo} alt={member.name} fill className="object-cover" sizes="96px" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-display text-xl text-neutral-500">{initials(member.name)}</span>
                  </div>
                )}
              </div>
              <p className="font-display mt-3 text-sm text-neutral-900">{member.name}</p>
              <p className="font-body mt-0.5 text-xs text-neutral-500">{role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
