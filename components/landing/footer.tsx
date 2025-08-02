import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src="/verito-logo.png" alt="VeritSpace Logo" width={24} height={24} />
            <span className="text-lg font-semibold text-white">VeritSpace</span>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          <div className="text-center md:text-right text-sm">
            <p>&copy; {new Date().getFullYear()} VeritSpace. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
