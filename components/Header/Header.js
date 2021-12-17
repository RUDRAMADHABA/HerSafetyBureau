import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className=" flex flex-row items-center p-1 justify-between bg-black shadow-xs">
        <div className="ml-8 text-lg text-white hidden md:flex py-3">
          <Link href="/">Her Safety Bureau</Link>
        </div>
        <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
          <i className="fas fa-bars"></i>
        </div>
        {/* <div className="flex flex-row-reverse mr-8 md:flex">
          <div className="text-white text-center bg-gray-400 px-4 py-2 m-2">
            Login
          </div>
          <Link href="/signup">
            <a className="text-white text-center bg-gray-400 px-4 py-2 m-2">
              Sign Up
            </a>
          </Link>
        </div> */}
      </div>
    </>
  )
}

export default Header
