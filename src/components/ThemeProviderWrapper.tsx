"use client";
import { style } from "@/lib/styled";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ThemeProviderWrapper({ children }: Props) {
  return <ThemeProvider theme={style}>{children}</ThemeProvider>;
}
