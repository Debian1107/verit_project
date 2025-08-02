import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data";

export function Header() {
  return (
    <header className="w-full relative">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 rounded-2xl bg-[#072530]/60 backdrop-blur-lg shadow-md">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image
            src="/verito-logo.png"
            alt="VeritSpace Logo"
            width={36}
            height={36}
            priority
          />
          <span className="text-xl font-semibold text-white">VeritSpace</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-16 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border-[1px] border-white/20 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-light text-white hover:text-[#36ae58] transition-colors"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3 text-xl">
          <Button
            variant={"outline"}
            className="w-fit rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white"
          >
            Contact Sales
          </Button>
          <Button className="w-fit rounded-full bg-[#36ae58] text-white ">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-gray-700"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-verit-dark-header border-gray-800 text-white"
          >
            <div className="grid gap-4 p-4">
              <Link
                href="#"
                className="flex items-center gap-2 mb-4"
                prefetch={false}
              >
                <Image
                  src="/verito-logo.png"
                  alt="VeritSpace Logo"
                  width={32}
                  height={32}
                />
                <span className="text-lg font-semibold">VeritSpace</span>
              </Link>
              <nav className="grid gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-base  transition-colors "
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="grid gap-3 mt-4">
                <Button className="bg-[#36ae58] text-white w-full rounded-full">
                  Get Started
                </Button>
                <Button className="w-full rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white">
                  Contact Sales
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
