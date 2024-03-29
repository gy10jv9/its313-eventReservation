import React, { useRef, useLayoutEffect, useContext, useState, useEffect } from "react"
import gsap from "gsap"
import { Context_Global } from "./Context-Global"
import { updateScatter } from '../utils/Animation-LightScatter';

const Nav_About = () => {
    const { mouseCoordinates } = useContext(Context_Global)
    const svgRef = useRef(null)
    const lightScatter = useRef(null)
    const navRef = useRef(null)
    const tl_nav = useRef(null) // para inde mag sulit sulit himo timeline kag mag overlap

    useLayoutEffect(() => {
        let paths = svgRef.current.querySelectorAll('path')
        tl_nav.current = gsap.timeline()
            .fromTo(paths, {
                fill: '#0A1D40'
            }, {
                duration: 0.6,
                fill: 'white',
                ease: "power2.inOut",
            })
        tl_nav.current.pause()

        window.addEventListener('mousemove', () => updateScatter(lightScatter, 2, 2, mouseCoordinates))
        return () => window.removeEventListener("mousemove", updateScatter)
    }, [])

    return (
        <div>
            <div className="nav" ref={navRef} 
                onMouseEnter={() => {
                    tl_nav.current.play()
                }} 
                onMouseLeave={() => {
                    tl_nav.current.kill() 
                    tl_nav.current.reverse({ duration: 0.6 })
                }}
            >
                
            <svg className="nav-icon" height="20px" width="20px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ref={svgRef}>
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <g> 
                        <path class="st0" d="M290.671,135.434c37.324-3.263,64.949-36.175,61.663-73.498c-3.241-37.324-36.152-64.938-73.476-61.675 c-37.324,3.264-64.949,36.164-61.686,73.488C220.437,111.096,253.348,138.698,290.671,135.434z"></path> 
                        <path class="st0" d="M311.31,406.354c-16.134,5.906-43.322,22.546-43.322,22.546s20.615-95.297,21.466-99.446 c8.71-41.829,33.463-100.86-0.069-136.747c-23.35-24.936-53.366-18.225-79.819,7.079c-17.467,16.696-26.729,27.372-42.908,45.322 c-6.55,7.273-9.032,14.065-5.93,24.717c3.332,11.515,16.8,17.226,28.705,12.871c16.134-5.895,43.3-22.534,43.3-22.534 s-12.595,57.997-18.869,87c-0.874,4.137-36.06,113.292-2.505,149.18c23.35,24.949,53.343,18.226,79.819-7.066 c17.467-16.698,26.729-27.373,42.908-45.334c6.55-7.263,9.009-14.054,5.93-24.706C336.66,407.733,323.215,402.01,311.31,406.354z"></path> 
                    </g> 
                </g>
            </svg>

                <p className="nav-name"> About </p>
                <div className="container-lightScatter" ref={lightScatter}>
                    <div className="lightScatter"></div>
                    <div className="lightScatter2"></div>
                </div>
            </div>
        </div>
    )
}

export default Nav_About