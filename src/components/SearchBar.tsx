"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { X, Search, ArrowRight } from "lucide-react";

interface SearchBarProps {
  open: boolean;
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      onClose();
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  // Trap focus in overlay
  useEffect(() => {
    if (!open) return;
    const handleFocus = (e: FocusEvent) => {
      if (inputRef.current && e.target !== inputRef.current) {
        inputRef.current?.focus();
      }
    };
    document.addEventListener("focusin", handleFocus);
    return () => document.removeEventListener("focusin", handleFocus);
  }, [open]);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (inputRef.current && e.target !== inputRef.current) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  return open ? (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
        aria-label="Close search overlay"
      />
      {/* Centered search bar (desktop) */}
      <div className="hidden md:flex fixed left-0 right-0 top-[88px] z-50 justify-center items-start pointer-events-none">
        <div
          className="w-full max-w-xl bg-[#F6F8F5] shadow-2xl rounded-full border border-[#DCE5DE] px-6 py-3 flex items-center gap-3 pointer-events-auto animate-scale-fade-in"
          style={{ boxShadow: "0 8px 32px 0 rgba(29, 46, 36, 0.18)" }}
        >
          <Search className="h-5 w-5 text-[#5C6B61]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search modern furniture, antiques, collectibles..."
            className="bg-transparent outline-none border-0 flex-1 min-w-0 text-[#1E2621] placeholder-[#5C6B61]/70 text-lg"
            autoFocus={open}
            onKeyDown={handleKeyDown}
            aria-label="Search collection"
          />
          {query.length > 0 && (
            <ArrowRight className="h-5 w-5 text-[#D1A966] animate-bounce-x ml-1" aria-label="Press Enter to search" />
          )}
          <button type="button" onClick={onClose} className="text-[#5C6B61] hover:text-[#1E2621]" aria-label="Close search">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* Mobile search bar */}
      <div className="md:hidden fixed left-4 right-4 top-4 z-50 animate-scale-fade-in">
        <div
          className="w-full bg-[#F6F8F5] shadow-2xl rounded-2xl border border-[#DCE5DE] px-4 py-3 flex items-center gap-3"
        >
          <Search className="h-5 w-5 text-[#5C6B61]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search modern furniture, antiques, collectibles..."
            className="bg-transparent outline-none border-0 flex-1 min-w-0 text-[#1E2621] placeholder-[#5C6B61]/70 text-lg"
            autoFocus={open}
            onKeyDown={handleKeyDown}
            aria-label="Search collection"
          />
          {query.length > 0 && (
            <ArrowRight className="h-5 w-5 text-[#D1A966] animate-bounce-x ml-1" aria-label="Press Enter to search" />
          )}
          <button type="button" onClick={onClose} className="text-[#5C6B61] hover:text-[#1E2621]" aria-label="Close search">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </>
  ) : null;
};

export default SearchBar;
