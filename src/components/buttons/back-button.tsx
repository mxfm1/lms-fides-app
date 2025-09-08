import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

interface Props {
  href: string;
  label: string;
  variant?: VariantProps<typeof buttonVariants>["variant"]
  className?: string;
}

const BackButton = ({ href, label, variant, className }: Props) => {
  return (
    <Button asChild variant={variant} className={className}>
      <Link href={href}>
        <ArrowLeftIcon size={20} /> {label}
      </Link>
    </Button>
  );
};

export default BackButton;
