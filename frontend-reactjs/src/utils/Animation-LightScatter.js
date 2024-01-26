import gsap from "gsap";

// position sng div or elements
export const getPosition = (element) => {
    var xPosition = 0;
    var yPosition = 0;
    
    var viewportScrollX = document.documentElement.scrollLeft || document.body.scrollLeft
    var viewportScrollY = document.documentElement.scrollTop || document.body.scrollTop;
    
    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    
    xPosition -= viewportScrollX;
    yPosition -= viewportScrollY;
    
    return { x: xPosition, y: yPosition };
}

// animation para mag follow ang mouse
export const updateScatter = (ref, element_width, element_height, mouseCoordinates, timeline) => {
    if (ref) { // kng na rendered na
        const follower = ref.current;
        if (follower) { // kng na rendered na
            timeline.to(
                follower,
                {
                    x: mouseCoordinates.current.x - getPosition(ref.current).x - (element_width/2),
                    y: mouseCoordinates.current.y - getPosition(ref.current).y - (element_height/2),
                    ease: 'power2.out',
                    duration: 0.01
                }
            );
        }
    }
}