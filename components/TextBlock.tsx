import * as React from "react";

export interface ITextBlockProps {
  text: Array<string> | string;
  className?: string;
}

export default function TextBlock({ text, className }: ITextBlockProps) {
  return <div className={`text-block ${className}`}>{text}</div>;
}
