import React, { useRef, useLayoutEffect, useContext, useState, useEffect } from "react"
import gsap from "gsap"
import { Context_Global } from "./Context-Global"
import { updateScatter } from '../utils/Animation-LightScatter';

const Nav_Reservations = () => {
    const { mouseCoordinates } = useContext(Context_Global)
    const svgRef = useRef(null)
    const lightScatter = useRef(null)
    const navRef = useRef(null)
    const tl_nav = useRef(null) // para inde mag sulit sulit himo timeline kag mag overlap

    useLayoutEffect(() => {
        let paths = svgRef.current.querySelectorAll('path')
        tl_nav.current = gsap.timeline()
            .fromTo(paths, {
                stroke: '#0A1D40'
            }, {
                duration: 0.6,
                stroke: 'white',
                ease: "power2.inOut",
            })
        tl_nav.current.pause()

        window.addEventListener('mousemove', () => updateScatter(lightScatter, 2, 2, mouseCoordinates))
        return () => window.removeEventListener("mousemove", updateScatter)
    }, [])

    return (
        <div>
            <div className="nav" ref={navRef} onMouseEnter={() => {tl_nav.current.play()}} onMouseLeave={() => {tl_nav.current.kill(); tl_nav.current.reverse({ duration: 0.6 })}}>
                
            <svg className="nav-icon" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef}>
                <path d="M7 10H17M7 14H12M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

                <p className="nav-name"> Reservations </p>
                <div className="container-lightScatter" ref={lightScatter}>
                    <div className="lightScatter"></div>
                    <div className="lightScatter2"></div>
                </div>
            </div>
        </div>
    )
}

export default Nav_Reservations