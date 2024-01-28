import React, { useRef, useLayoutEffect, useContext } from "react"
import gsap from "gsap"
import { Context_Global } from "./Context-Global"
import { updateScatter } from '../utils/Animation-LightScatter';
import Nav_Home from "./Nav-Home"
import Nav_Reservations from "./Nav-Reservations"
import Nav_About from "./Nav-About"
import "./SideNav.css"

const SideNav = () => {
    // Nav1 Refs & Animation
    const tl_nav1 = useRef(null)
    const navRef1 = useRef(null)
    const svgRef1 = useRef(null)
    const lightScatter1 = useRef(null)
    // animation
    useLayoutEffect(() => {
        let paths = svgRef1.current.querySelectorAll('path')
        tl_nav1.current = gsap.timeline()
            .fromTo(paths, {
                fill: '#0A1D40'
            }, {
                duration: 0.3,
                fill: 'white',
                ease: "power2.inOut",
            })
        tl_nav1.current.pause()
    }, [])

    // Nav2 Refs & Animation
    const tl_nav2 = useRef(null)
    const navRef2 = useRef(null)
    const svgRef2 = useRef(null)
    const lightScatter2 = useRef(null)
    // animation
    useLayoutEffect(() => {
        let paths = svgRef2.current.querySelectorAll('path')
        tl_nav2.current = gsap.timeline()
            .fromTo(paths, {
                stroke: '#0A1D40'
            }, {
                duration: 0.3,
                stroke: 'white',
                ease: "power2.inOut",
            })
        tl_nav2.current.pause()
    }, [])

        // Nav2 Refs & Animation
        const tl_nav3 = useRef(null)
        const navRef3 = useRef(null)
        const svgRef3 = useRef(null)
        const lightScatter3 = useRef(null)
        // animation
        useLayoutEffect(() => {
            let paths = svgRef3.current.querySelectorAll('path')
            tl_nav3.current = gsap.timeline()
                .fromTo(paths, {
                    fill: '#0A1D40'
                }, {
                    duration: 0.3,
                    fill: 'white',
                    ease: "power2.inOut",
                })
            tl_nav3.current.pause()
        }, [])

    return (
        <div className="d-flex container-sideNavs">
            <div className="sideNavs sideNavs-header">
                <div className="container-logo">
                    <div className="logo-lccb"></div>
                    <div className="container-txt">
                        <h1> PPGS </h1>
                        <h2> Venue Reservations </h2>
                    </div>
                </div>
            </div>
            <div className="flex-grow-1 sideNavs">
                <div className="nav" ref={navRef1} onMouseEnter={() => {tl_nav1.current.play()}} onMouseLeave={() => {tl_nav1.current.kill(); tl_nav1.current.reverse({ duration: 0.6 })}}>
                <svg className="nav-icon" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef1}>
                    <path d="M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z" fill="#1C274C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C11.2919 1.25 10.6485 1.45282 9.95055 1.79224C9.27585 2.12035 8.49642 2.60409 7.52286 3.20832L5.45628 4.4909C4.53509 5.06261 3.79744 5.5204 3.2289 5.95581C2.64015 6.40669 2.18795 6.86589 1.86131 7.46263C1.53535 8.05812 1.38857 8.69174 1.31819 9.4407C1.24999 10.1665 1.24999 11.0541 1.25 12.1672V13.7799C1.24999 15.6837 1.24998 17.1866 1.4027 18.3616C1.55937 19.567 1.88856 20.5401 2.63236 21.3094C3.37958 22.0824 4.33046 22.4277 5.50761 22.5914C6.64849 22.75 8.10556 22.75 9.94185 22.75H14.0581C15.8944 22.75 17.3515 22.75 18.4924 22.5914C19.6695 22.4277 20.6204 22.0824 21.3676 21.3094C22.1114 20.5401 22.4406 19.567 22.5973 18.3616C22.75 17.1866 22.75 15.6838 22.75 13.7799V12.1672C22.75 11.0541 22.75 10.1665 22.6818 9.4407C22.6114 8.69174 22.4646 8.05812 22.1387 7.46263C21.8121 6.86589 21.3599 6.40669 20.7711 5.95581C20.2026 5.5204 19.4649 5.06262 18.5437 4.49091L16.4771 3.20831C15.5036 2.60409 14.7241 2.12034 14.0494 1.79224C13.3515 1.45282 12.7081 1.25 12 1.25ZM8.27953 4.50412C9.29529 3.87371 10.0095 3.43153 10.6065 3.1412C11.1882 2.85833 11.6002 2.75 12 2.75C12.3998 2.75 12.8118 2.85833 13.3935 3.14119C13.9905 3.43153 14.7047 3.87371 15.7205 4.50412L17.7205 5.74537C18.6813 6.34169 19.3559 6.76135 19.8591 7.1467C20.3487 7.52164 20.6303 7.83106 20.8229 8.18285C21.0162 8.53589 21.129 8.94865 21.1884 9.58104C21.2492 10.2286 21.25 11.0458 21.25 12.2039V13.725C21.25 15.6959 21.2485 17.1012 21.1098 18.1683C20.9736 19.2163 20.717 19.8244 20.2892 20.2669C19.8649 20.7058 19.2871 20.9664 18.2858 21.1057C17.2602 21.2483 15.9075 21.25 14 21.25H10C8.09247 21.25 6.73983 21.2483 5.71422 21.1057C4.71286 20.9664 4.13514 20.7058 3.71079 20.2669C3.28301 19.8244 3.02642 19.2163 2.89019 18.1683C2.75149 17.1012 2.75 15.6959 2.75 13.725V12.2039C2.75 11.0458 2.75076 10.2286 2.81161 9.58104C2.87103 8.94865 2.98385 8.53589 3.17709 8.18285C3.36965 7.83106 3.65133 7.52164 4.14092 7.1467C4.6441 6.76135 5.31869 6.34169 6.27953 5.74537L8.27953 4.50412Z" fill="#1C274C"/>
                </svg>
                    <p className="nav-name"> Home </p>
                    <div className="container-lightScatter" ref={lightScatter1}>
                        <div className="lightScatter"></div>
                        <div className="lightScatter2"></div>
                    </div>
                </div>
                <div className="nav" ref={navRef2} onMouseEnter={() => {tl_nav2.current.play()}} onMouseLeave={() => {tl_nav2.current.kill(); tl_nav2.current.reverse({ duration: 0.6 })}}>
                <svg className="nav-icon" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef2}>
                    <path d="M7 10H17M7 14H12M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    <p className="nav-name"> Reservations </p>
                    <div className="container-lightScatter" ref={lightScatter2}>
                        <div className="lightScatter"></div>
                        <div className="lightScatter2"></div>
                    </div>
                </div>
                <div className="nav" ref={navRef3} onMouseEnter={() => {tl_nav3.current.play()}} onMouseLeave={() => {tl_nav3.current.kill(); tl_nav3.current.reverse({ duration: 0.6 })}}>
                <svg className="nav-icon" height="20px" width="20px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ref={svgRef3}>
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
                    <div className="container-lightScatter" ref={lightScatter3}>
                        <div className="lightScatter"></div>
                        <div className="lightScatter2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav