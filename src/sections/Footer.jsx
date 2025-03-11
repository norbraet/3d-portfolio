import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className='c-space py-7 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className="text-white-500 flex gap-2 [&>*:not(:last-child)]:after:content-['|'] [&>*:not(:last-child)]:after:mx-2">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Privacy Policy</p>
            </div>
            <div className='flex gap-3'>
                <a href="https://github.com/norbraet" target="_blank" className='social-icon'>
                    <img src="/assets/github.svg" alt="GitHub" className='w-1/2 h-1/2'/>
                </a>
                <a href="https://github.com/norbraet" target="_blank" className='social-icon'>
                    <img src="/assets/twitter.svg" alt="Twitter" className='w-1/2 h-1/2'/>
                </a>
                <a href="https://github.com/norbraet" target="_blank" className='social-icon'>
                    <img src="/assets/instagram.svg" alt="Instagram" className='w-1/2 h-1/2'/>
                </a>
            </div>
            <p className='text-white-500'>&copy; {year} Norbert Balaz. All rights reserved</p>
        </footer>
    )
}

export default Footer