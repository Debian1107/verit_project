import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#072530] backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image
            src="/verito-logo.png"
            alt="VeritSpace Logo"
            width={32}
            height={32}
            priority
          />
          <span className="text-lg font-semibold text-white">VeritSpace</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 transition-colors hover:text-white"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button
            variant="outline"
            className="text-white border-gray-600 hover:bg-gray-700 hover:text-white bg-transparent"
          >
            Contact Sales
          </Button>
          <Button className="bg-[#36ae58] text-white ">Get Started</Button>
        </div>
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
              <nav className="grid gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-gray-700"
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="hidden items-center gap-4 md:flex">
                <Button
                  variant="outline"
                  className="w-fit rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white "
                >
                  Contact Sales
                </Button>
                <Button className="w-fit rounded-full bg-[#36ae58] text-white ">
                  Get Started ddd
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
