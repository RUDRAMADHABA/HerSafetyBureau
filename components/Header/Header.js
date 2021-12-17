import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className=" flex flex-row items-center p-1 justify-between bg-black shadow-xs">
        <div className="flex flex-row">
          <div><a href="/"><img src="https://www.linkpicture.com/q/Untitled_design-removebg-preview_4.png" width={80}></img></a></div>
          <div className='pt-5 px-4 text-2xl text-white font-sans'>herSafety-Bureau</div>
        </div>
      </div>
    </>
  )
}

export default Header