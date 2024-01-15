import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Gsap_MouseFollow = () => {
    const lScatter = useRef(null)
    //const [mouseLoc, setMouseLoc] = useState({x: 0, y: 0})
    const mouseLoc_ref = useRef({x: 0, y: 0})


    const tl_lScatter= gsap.timeline()

    const handleMouseMove = (event) => {
        mouseLoc_ref.current = { x: event.clientX, y: event.clientY }
        console.log('Mouse position:', mouseLoc_ref.current.x, mouseLoc_ref.current.y)
        //setMouseLoc((prevState) => ({...prevState, x: event.clientX, y: event.clientY}))
        //console.log('Mouse position:', mouseLoc.x, mouseLoc.y);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            const updateScatter = () => {
                if (lScatter) {
                    const follower = lScatter.current;
                    //const mouseX = mouseLoc.x
                    //const mouseY = mouseLoc.y
                    if (follower) { // kng na rendered na
                        tl_lScatter.to(
                            follower,
                            {
                                x: mouseLoc_ref.current.x - (follower.clientWidth / 2),
                                y: mouseLoc_ref.current.y - (follower.clientHeight / 2),
                                ease: 'power2.out',
                                duration: 0.01
                            }
                        );
                    }
                    console.log(`${lScatter.current.clientWidth}`)
                }
            }

            window.addEventListener('mousemove', updateScatter)

            return () => window.removeEventListener("mousemove", updateScatter)
        })
    }, [])

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                border: "1px solid black",
                overflow: "hidden"
            }}
        >
            <Button variant="primary" style={{width: "100%", height: "200px"}}>
                <div onMouseMove={handleMouseMove} style={{width: "100%", height: "100%"}}>
                    <div
                        className="lScatter"
                        ref={lScatter} 
                        style={{
                            height: "500px",
                            width: "500px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)",
                            filter: "blur(5px)"
                        }}
                    >
                    </div>
                </div>
            </Button> 
        </div>
        
    )
}

export default Gsap_MouseFollow