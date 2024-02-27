import React, { useRef, useLayoutEffect, useContext, useState, useEffect } from "react"
import gsap from "gsap"
import { Context_Global } from "./Context-Global"
import { updateScatter } from '../utils/Animation-LightScatter';

const Nav = ( props ) => {
    const { mouseCoordinates } = useContext(Context_Global)
    const svgRef = useRef(null)
    const lightScatter = useRef(null)
    const navRef = useRef(null)
    const tl_nav = useRef(null) // para inde mag sulit sulit himo timeline kag mag overlap

    const [ svgPaths, setSvgPaths ] = useState([])
    useEffect(() => {
        setSvgPaths(Object.keys(props.nav["path"]))
    }, [])

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
    }, [svgPaths])

    useLayoutEffect(() => {
        window.addEventListener('mousemove', () => updateScatter(lightScatter, 2, 2, mouseCoordinates))
        return () => window.removeEventListener("mousemove", updateScatter)
    }, [])

    const test = () => {
        console.log(svgPaths)
    }

    return (
        <div>
            <button onClick={test}> test </button>
            <div className="nav" ref={navRef} onMouseEnter={() => {tl_nav.current.play()}} onMouseLeave={() => {tl_nav.current.kill(); tl_nav.current.reverse({ duration: 0.6 })}}>
                <svg className="nav-icon" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef}>
                    {svgPaths.map((index) => (<path fill-rule="evenodd" clip-rule="evenodd" d={props.nav["path"][index]} fill="#0A1D40"/>))}
                </svg>
                <p className="nav-name"> {props.nav["title"]} </p>
                <div className="container-lightScatter" ref={lightScatter}>
                    <div className="lightScatter"></div>
                    <div className="lightScatter2"></div>
                </div>
            </div>
        </div>
    )
}

export default Nav