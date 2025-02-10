import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader  from '../components/CanvasLoader'
import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants/index.js"

const Hero = () => {
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

            <div className="w-full h-full absolute inset-0">
                {/* 
                Leva needs to be placed outside of Canvas since it is not available inside the Three JS Namespace 
                In Order to use Leva we need to refactor the position, rotation and scale so it uses the values from the useControls hook.
                */}
                {/* <Leva /> */} 
                <Canvas className="-w-full h-full">
                    <Suspense fallback = {<CanvasLoader />}>
                        <PerspectiveCamera 
                            makeDefault 
                            position={[0, 0, 20]} 
                        />
                        <HackerRoom 
                            position={sizes.deskPosition}
                            rotation={[0, -Math.PI, 0]}
                            scale={sizes.deskScale}
                        />
                        <ambientLight 
                            intensity={1} 
                        />  
                        <directionalLight 
                            position={[10, 10, 10]} 
                            intensity={0.5}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero