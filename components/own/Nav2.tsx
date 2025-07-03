"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Nav2() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    // Add scroll effect
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/membership", label: "membership" },
    { href: "/privacy-policy", label: "Privacy-policy" },

    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-[#1e40af] text-white transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="md:container px-2 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-[#1e40af] font-bold">B</span>
          </div>
          <span className="font-bold text-white">BUTSACCO</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium hover:text-[#2e7d32] relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1e40af] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* {session ? ( */}
          {/* <Button asChild variant={"ghost"}>
              <Link href="/dashboard">
                <Avatar>
                  <AvatarImage
                    src={session?.user?.image ?? ""}
                    alt={session?.user?.name ?? ""}
                  />
                  <AvatarFallback>
                    {getInitials(session?.user?.name)}
                  </AvatarFallback>
                </Avatar>
                <span className="ml-3">Dashboard</span>
              </Link>
            </Button>
          ) : ( */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex text-black"
              >
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button
                size="sm"
                className="hidden md:flex bg-[#1e40af] hover:bg-[#1b5e20]"
              >
                Join Now
              </Button>
            </Link>
          </div>
          {/* )} */}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative z-50"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[#2e7d32]" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden h-[100vh]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-16 left-0 right-0 h-auto max-h-[calc(100vh-4rem)] overflow-y-auto bg-white text-black  z-40 md:hidden border-b border-gray-200 shadow-lg"
          >
            <div className="container py-6 flex flex-col">
              <nav className="flex flex-col space-y-4 mb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium py-2 px-4 hover:bg-[#e8f5e9] hover:text-[#2e7d32] rounded-md transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* {!session && ( */}
              <div className="flex flex-col space-y-3 mt-2">
                <Link href="/login" className="w-full">
                  <Button variant="outline" className="w-full text-black ">
                    Login
                  </Button>
                </Link>
                <Link href="/register" className="w-full">
                  <Button className="w-full bg-[#1e40af] hover:bg-[#1b5e20]">
                    Join Now
                  </Button>
                </Link>
              </div>
              {/* )} */}

              {/* {session && ( */}
              <div className="flex items-center justify-between bg-[#f5f5f5] p-4 rounded-lg mt-2">
                <div className="flex items-center">
                  {/* <Avatar>
                      <AvatarImage
                        src={session?.user?.image ?? ""}
                        alt={session?.user?.name ?? ""}
                      />
                      <AvatarFallback>
                        {getInitials(session?.user?.name)}
                      </AvatarFallback>
                    </Avatar> */}
                  <div className="ml-3">
                    {/* <p className="font-medium">{session.user?.name}</p> */}
                    <p className="text-sm text-gray-500">
                      {/* {session.user?.email} */}
                    </p>
                  </div>
                </div>
                <Link href="/dashboard">
                  <Button
                    size="sm"
                    className="bg-[#1e40af] md:font-normal hover:bg-[#1b5e20]"
                  >
                    Dashboard
                  </Button>
                </Link>
              </div>
              {/* )} */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
