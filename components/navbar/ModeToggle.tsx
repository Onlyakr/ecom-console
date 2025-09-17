"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
}
