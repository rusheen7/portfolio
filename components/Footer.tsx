import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
        <div className="flex flex-col items-center">
            <h1 className="heading lg: max-w-[45vw]">
                I&apos;m <span className="text-purple">always</span> open to talk, feel free to shoot me an email!
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">Reach out on my socials below.</p>
            <a href="mailto:rusheenpatel@gmail.com">
                <MagicButton 
                    title="Contact Me"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">Rusheen Patel</p>

            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <a
                        key={profile.id}
                        href={profile.link}
                        target="_blank"
                        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                    >
                        <img src={profile.img} alt={String(profile.id)} width={20} height={20} />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer