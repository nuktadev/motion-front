"use client";
import ShiftingCountdown from "@/components/CountDown";
import FlotingPhone from "@/components/FlotingPhone";
import { HoverImage } from "@/components/HoverImage";
import { CustomKanban } from "@/components/KanbanBoard";
import { LinkAnimation } from "@/components/LinkAnimation";
import ModalAnimation from "@/components/Modal";
import TextLoader from "@/components/TextLoader";
import Example from "@/components/Try";
import TryOne from "@/components/TryOne";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* <ShiftingCountdown />
      <Example />
      <LinkAnimation />
      <TextLoader />
      <ModalAnimation />
      <HoverImage />
      <CustomKanban />
      <FlotingPhone /> */}
      <TryOne />
      <FlotingPhone />
    </div>
  );
}
