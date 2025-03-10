import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader  from '../components/CanvasLoader'
import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants/index.js"
import Target from "../components/Target.jsx"
import ReactLogo from "../components/ReactLogo.jsx"
import Cube from "../components/Cube.jsx"
import Rings from "../components/Rings.jsx"
import HeroCamera from "../components/HeroCamera.jsx"
import Button from "../components/Button.jsx"
import { useInView } from "react-intersection-observer"

const Hero = () => {
    const { ref, inView } = useInView({ threshold: 0.1})
    const controls = useControls('HackerRoom', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionY: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationX: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationY: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationZ: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        scale: {
            value: 1,
            min: 0.1,
            max: 10,
        },
    })
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl text-white font-medium text-center font-generalsans">Hi, ich bin Norbert<span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Ich bin ein Full-Stack Entwickler!</p>
            </div>

            <div ref={ref} className="w-full h-full absolute inset-0">
                {inView && (
                 
                    // Leva needs to be placed outside of Canvas since it is not available inside the Three JS Namespace 
                    // In Order to use Leva we need to refactor the position, rotation and scale so it uses the values from the useControls hook.
                    // <Leva /> 
                    <Canvas className="-w-full h-full" dpr={[1, 2]}>
                        <Suspense fallback = {<CanvasLoader />}>
                            <PerspectiveCamera 
                                makeDefault 
                                position={[0, 0, 20]} 
                            />
                            <HeroCamera isMobile={isMobile}>
                                <HackerRoom 
                                    position={sizes.deskPosition}
                                    rotation={[0, -Math.PI, 0]}
                                    scale={sizes.deskScale}
                                />
                            </HeroCamera>
                            <group>
                                <Target position={sizes.targetPosition}/>
                                <ReactLogo position={sizes.reactLogoPosition}/>
                                <Cube position={sizes.cubePosition}/>
                                <Rings position={sizes.ringPosition}/>
                            </group> 
                            <ambientLight 
                                intensity={1} 
                            />  
                            <directionalLight 
                                position={[10, 10, 10]} 
                                intensity={0.5}
                            />
                        </Suspense>
                    </Canvas>
                )}
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                    <a href="#about" className="w-fit">
                        <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                    </a>
            </div>
        </section>
    )
}

export default Hero 