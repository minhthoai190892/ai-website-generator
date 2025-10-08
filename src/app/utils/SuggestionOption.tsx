import { HomeIcon, Key, LayoutDashboard, User } from "lucide-react";
import React from "react";

export interface SuggestionType {
  label: string;
  prompt: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export const suggestion: SuggestionType[] = [
  {
    label: "Dashboard",
    prompt:
      "Create an analytics dashboard to track customers and revenue data for a SaaS",
    icon: LayoutDashboard,
  },
  {
    label: "SignUp Form",
    prompt:
      "Create a modern signup form with email/password fields, Google and Github login options, and terms checkbox",
    icon: Key,
  },
  {
    label: "Hero",
    prompt:
      "Create a modern header and centered hero section for a productivity SaaS",
    icon: HomeIcon,
  },
  {
    label: "User Profile Card",
    prompt:
      "Create a modern user profile card component for a social media website",
    icon: User,
  },
];
