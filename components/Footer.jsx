import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
           <Image src={assets.mail_icon} alt='' className='w-6'/>
           coderkrishu@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>

        <p>© 2025 Krishu. All rights reserved.</p>
        <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
          <li><a target='_blank' href="https://github.com/krishna-kumar7">GitHub</a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/krishna-kumar-44b140253/">LinkedIn</a></li>
          <li><a target='_blank' href="https://www.instagram.com/_krishna_kumar.07/">Instagram</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
