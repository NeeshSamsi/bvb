import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import BhavansLogo from "../assets/Logo.jpg"

const NavBar = () => {
  const router = useRouter()

  return (
    <nav className="container mx-auto py-6 flex justify-between items-center print:hidden">
      <Link href="/">
        <a className="flex items-center space-x-6">
          <div className="w-20">
            <Image
              src={BhavansLogo}
              alt="Bhavan's Logo"
              className="w-full h-full"
            />
          </div>
          <h1 className="font-bold text-3xl text-blue-800">SNS Admin</h1>
        </a>
      </Link>
      <div className="flex items-center space-x-6">
        <Link href="/">
          <a
            className={`font-medium text-xl text-blue-700 hover:underline ${
              router.pathname === "/" ? "underline" : ""
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/receipts">
          <a
            className={`font-medium text-xl text-blue-700 hover:underline ${
              router.pathname === "/" ? "underline" : ""
            }`}
          >
            Receipts
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
