import React from "react";

export default function SeparatorWithText({ text }: { text: string }) {
  return (
    <div className="flex items-center w-full my-4">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-3 text-gray-500 text-sm">{text}</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}
