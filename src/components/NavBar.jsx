import Link from 'next/link'
import {IoSearch} from 'react-icons/io5'
import {IoMenu} from 'react-icons/io5'

export default function NavBar() {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
      <div className="px-2 mx-2 navbar-start">
        <span className="text-lg font-bold">
          Samp<span className="text-gray-400">Ag</span>uita
        </span>
      </div> 
      <div className="navbar-center hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch space-x-2">
          <Link href="/">
            <a className="btn btn-ghost btn-sm rounded-btn">
              Home
            </a> 
          </Link>
          <Link href="/">
            <a className="btn btn-ghost btn-sm rounded-btn">
              Periodic Table
            </a> 
          </Link>
          <Link href="/">
            <a className="btn btn-ghost btn-sm rounded-btn">
              About
            </a> 
          </Link>
        </div>
      </div> 
      <div className="navbar-end">
        <button className="md:hidden btn btn-square btn-ghost text-2xl">
          <IoMenu />
        </button>
        <button className="btn btn-square btn-ghost text-2xl">
          <IoSearch />
        </button>
      </div>
    </div>
  )
}