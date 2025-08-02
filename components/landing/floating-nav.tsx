"use client";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";
import Link from "next/link";

export function FloatingNav() {
  return (
    <div className="md:hidden fixed bottom-4 right-4 z-50">
      <Button asChild className="rounded-full h-16 w-16 bg-[#36ae58] shadow-lg">
        <Link href="#pricing">
          <DollarSign className="h-8 w-8 text-white" />
          <span className="sr-only">View Pricing</span>
        </Link>
      </Button>
    </div>
  );
}
