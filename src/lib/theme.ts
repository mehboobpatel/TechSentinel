import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const theme = {
  colors: {
    primary: "rgb(126 100 237)",
    secondary: "rgb(126 100 237 / 60%)",
    accent: "rgb(126 100 237 / 60%)",
    background: "rgb(10 10 10)",
    foreground: "rgb(250 250 250)",
    muted: "rgb(40 40 40)",
    "muted-foreground": "rgb(160 160 160)",
    border: "rgb(40 40 40)",
    input: "rgb(40 40 40)",
    ring: "rgb(126 100 237 / 60%)",
  },
  fonts: {
    sans: "var(--font-sans)",
    mono: "var(--font-mono)",
  },
  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
  },
} as const 