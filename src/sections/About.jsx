import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

/**
 * A page component that renders a simple about me section with a 3D globe.
 *
 * The component renders a 3D globe with a few labels and a simple layout with
 * a few sections. The sections are intended to be used to display information
 * about the developer, such as their name, a short bio, and their contact
 * information.
 *
 * The component uses the `react-globe.gl` library to render the 3D globe.
 *
 * @return {React.ReactElement} The About component.
 */
const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const emailAdress = 'n.balaz@outlook.com'
    
    /**
     * Handles the copy-to-clipboard button click event.
     * Copies the email address to the user's clipboard.
     * Triggers a 2-second timeout to reset the `hasCopied` state.
     */
    const handleCopy = () => {
        navigator.clipboard.writeText(emailAdress)
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    return (
        <section className='c-space my-20' id="about">
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid1.png' alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hi, ich bin Norbert!</p>
                            <p className='grid-subtext'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid2.png' alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0, 0, 0, 0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                /* labelsData={[
                                    {
                                        lat: 50.078217,
                                        lng: 8.239761,
                                        text: "I'm here!",
                                        color: 'white',
                                        size: 1,
                                    }
                                ]} */
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>I work remotly across most timezones.</p>
                            <p className='grid-subtext'>I'm based in Germany, with remote work available.</p>
                            <Button name="Contact Me" isBeam containerClass='w-full mt-10'/>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid3.png' alt='grid-3' className='w-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>My passion for coding</p>
                            <p className='grid-subtext'>I love solving problems and building things through code. Coding isn't just my profession - it is my passion.</p>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src='/assets/grid4.png' alt='grid-4' className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>Contact me</p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"></img>
                                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>{emailAdress}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About