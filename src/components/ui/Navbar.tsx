import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <section className='p-5 border-b border-blue-500 cursor-pointer'>
      <Link href={"/"}>
        <div className='flex justify-start items-center gap-4 cursor-pointer'>
            <img src="./reddit.png" alt='' className='w-16'/>
            <h1 className='text-white font-sans font-bold text-4xl'>Scrap It</h1>
        </div>
      </Link>
    </section>
  )
}

export default Navbar