import { Html, useProgress } from "@react-three/drei"

/* 
This component gets inserted inside 3D Canvas environment where we cannot display standard HTML Tags. For that i need
to use the Html component from @react-three/drei.
*/
const CanvasLoader = () => {
    const {progress} = useProgress()
    return (
        <Html 
            as="div" 
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
            >
                <span className="canvas-loader"/>
                <p style={{ fontSize: 14, color: '#F1F1F1', fontWeight: 800, marginTop: 40}}>
                    { progress !== 0 ? `${progress.toFixed(2)}%` : '...'}
                </p>
        </Html>
    )
}
export default CanvasLoader