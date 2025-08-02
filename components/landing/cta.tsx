import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Cta() {
  return (
    <div className="bg-verit-green p-5 ">
      <section className="relative w-full max-w-4xl mx-auto rounded-3xl p-8 md:p-12 text-center mb-16 bg-gradient-to-r from-[#3CB55A] to-[#0C8B4F] overflow-hidden mt-6">
        {/* Background SVG */}
        {/* <Image
        alt="Background"
        src="/assets/box2.svg"
        className="object-cover absolute inset-0 w-full h-full z-0"
      /> */}

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-xl md:text-[44px] font-semibold text-white mb-4">
            Ready to Elevate Your
            <br />
            <br />
            Firm&apos;s IT Infrastructure?
          </h2>
          <p className="text-[#B5E0C5] text-sm sm:text-lg mb-8 max-w-2xl mx-auto w-[80%]">
            Experience the Verito difference with secure, reliable cloud hosting
            designed for tax and accounting professionals.
          </p>

          {/* Buttons */}
          <div className=" flex flex-col sm:flex-row gap-4 justify-center ">
            <Button
              size={"xl"}
              className="bg-white  text-slate-800 rounded-lg transition-colors"
            >
              Start Your Free Trial
            </Button>
            <Button
              size={"xl"}
              variant={"outline"}
              className="bg-white/30 backdrop-blur-md hover:bg-verit-green-light text-white hover:text-white transition-colors"
            >
              Schedule A Demo
            </Button>
          </div>

          <p className="mt-5 text-xs sm:text-sm text-[#B1DEC2]">
            14-day risk-free trial.
          </p>
        </div>
      </section>
      <div className="w-full flex flex-col justify-center items-center  ">
        <h3 className="text-white text-xl md:text-2xl font-medium mb-8">
          Backed by the Best in Security &amp; IT
        </h3>

        <div className="flex gap-10 items-center flex-wrap justify-center">
          <Image
            src="https://verito.com/assets/icons/vm-ware.png"
            alt="Partners1"
            width={160}
            height={40}
          />
          <Image
            src="https://verito.com/assets/icons/microsoft.png"
            alt="Partners2"
            width={160}
            height={40}
            className="h-[25px] w-auto"
          />
          <Image
            src="https://verito.com/assets/icons/veeam.png"
            alt="Partners1"
            width={160}
            height={40}
            className="h-[20px] w-auto"
          />
          <Image
            src="https://verito.com/assets/icons/crowdstrike.png"
            alt="Partners2"
            width={160}
            height={40}
            className="h-[25px] w-auto"
          />
        </div>
      </div>
    </div>
  );
}
