"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "light" | "dark";
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  variant = "default",
  hover = true,
}: GlassCardProps) {
  const baseStyles = `
    relative rounded-2xl p-6
    backdrop-blur-xl
    border border-white/10
    shadow-xl shadow-black/10
  `;

  const variantStyles = {
    default: `
      bg-white/5
      dark:bg-white/5
      text-gray-100 dark:text-gray-100
    `,
    light: `
      bg-white/20
      dark:bg-white/10
      text-gray-800 dark:text-gray-100
    `,
    dark: `
      bg-gray-900/40
      dark:bg-gray-900/60
      text-gray-100
    `,
  };

  const hoverStyles = hover
    ? `
    transition-all duration-300 ease-out
    hover:bg-white/10 hover:border-white/20
    hover:shadow-2xl hover:shadow-purple-500/10
    hover:-translate-y-1
  `
    : "";

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Glass Container with gradient background
interface GlassContainerProps {
  children: ReactNode;
  className?: string;
  gradient?: "purple" | "blue" | "green" | "orange" | "pink";
}

export function GlassContainer({
  children,
  className = "",
  gradient = "purple",
}: GlassContainerProps) {
  const gradientStyles = {
    purple: "from-purple-600/20 via-indigo-600/20 to-blue-600/20",
    blue: "from-blue-600/20 via-cyan-600/20 to-teal-600/20",
    green: "from-green-600/20 via-emerald-600/20 to-teal-600/20",
    orange: "from-orange-600/20 via-amber-600/20 to-yellow-600/20",
    pink: "from-pink-600/20 via-rose-600/20 to-red-600/20",
  };

  return (
    <div className={`relative ${className}`}>
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientStyles[gradient]} rounded-3xl blur-3xl opacity-50`}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Glass Button component
interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

export function GlassButton({
  children,
  onClick,
  className = "",
  variant = "primary",
}: GlassButtonProps) {
  const variantStyles = {
    primary: `
      bg-white/10 hover:bg-white/20
      border-white/20 hover:border-white/30
      text-white
    `,
    secondary: `
      bg-gray-800/50 hover:bg-gray-800/70
      border-gray-600/30 hover:border-gray-500/40
      text-gray-200
    `,
  };

  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-xl
        backdrop-blur-lg
        border
        font-medium
        transition-all duration-300
        hover:shadow-lg hover:shadow-purple-500/20
        active:scale-95
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

// Glass Input component
interface GlassInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
}

export function GlassInput({
  placeholder,
  value,
  onChange,
  className = "",
  type = "text",
}: GlassInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`
        w-full px-4 py-3 rounded-xl
        bg-white/5 hover:bg-white/10
        backdrop-blur-lg
        border border-white/10 focus:border-purple-500/50
        text-white placeholder-gray-400
        outline-none
        transition-all duration-300
        focus:ring-2 focus:ring-purple-500/20
        ${className}
      `}
    />
  );
}
