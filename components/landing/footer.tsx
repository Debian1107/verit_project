import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#072530] text-white border-t border-white/10 ">
      <div className="custom-container pt-14 mx-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-4 lg:pl-0 pl-7">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="mb-6">
              <Image
                src="https://verito.com/assets/flogo.svg"
                alt="Verito Logo"
                width={160}
                height={40}
                className="mb-4"
              />
              <p className="text-gray-400 text-[14px]">
                Secure Cloud Solutions for <br /> Tax & Accounting Professionals
              </p>
            </div>
            <p className="text-white text-[16px]">
              3524 Silverside rd. Suite 35B, Wilmington, Delaware 19810
            </p>
          </div>

          <div className="col-span-1">
            <div className="font-medium mb-4 text-[16px]">Services</div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/veritspace"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Dedicated Private Server Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/veritguard"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link
                  href="/veritcomplete"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  VeritComplete
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <div className="font-medium mb-4 text-[16px]">Pricing</div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/veritspace-pricing"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  VeritSpace Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/veritguard-pricing"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  VeritGuard Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <div className="font-medium mb-4 text-[16px]">Get Started</div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/managed-hosting-trial"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Free Hosting trial
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Schedule A Demo
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <div className="font-medium mb-4 text-[16px]">Company</div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-data-centers"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Our Datacenters
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-condition"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <div className="font-medium mb-4 text-[16px]">Resources</div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 pt-[20px] pb-[20px]">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center lg:items-start gap-3">
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <Link
                  href="tel:18555837486"
                  className="text-white hover:text-gray-300"
                >
                  1-855-583-7486
                </Link>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <Link
                  href="mailto:sales@verito.com"
                  className="text-white hover:text-gray-300"
                >
                  sales@verito.com
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-center items-start">
              <div className="text-center lg:text-left">
                <p className="font-medium">" EXCELLENT "</p>
                <div className="flex justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292..." />
                    </svg>
                  ))}
                </div>
                <p className="text-[14px] text-gray-400">
                  Based on 406 user reviews
                </p>
                <Image
                  src="https://verito.com/assets/y2.svg"
                  alt="Sitejabber"
                  width={60}
                  height={16}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="col-span-2 lg:col-start-auto lg:col-span-1 flex justify-center lg:justify-start">
              <Image
                src="https://verito.com/assets/y3.png"
                alt="AICPA SOC"
                width={100}
                height={64}
              />
            </div>

            <div className="col-span-2 lg:col-start-auto lg:col-span-1 flex flex-col sm:flex-row items-center gap-2 justify-center lg:justify-start">
              <p className="text-sm text-gray-300">
                Proud Affinity Partner of:
              </p>
              <div className="flex gap-2 items-center">
                <Image
                  src="https://verito.com/assets/y101.png"
                  alt="NAEA"
                  width={32}
                  height={24}
                />
                <Image
                  src="https://verito.com/assets/y5.png"
                  alt="NAEA"
                  width={32}
                  height={24}
                />
                <Image
                  src="https://verito.com/assets/y6.png"
                  alt="USTCP"
                  width={32}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="custom-container text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Verito Technologies. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
