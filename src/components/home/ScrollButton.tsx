
const handleClick = (scrollIndex) => {

    const scrollMap = {
        0: screen.height - 125,
        1: screen.height * 2,
        2: 0,
    }

    window.scrollTo({
        top: scrollMap[scrollIndex],
        behavior: "smooth"
    })
}

const ScrollButton = ({ screenY, path, customClass }) => {

    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-6 cursor-pointer ${customClass}`}
            onClick={() => handleClick(screenY)}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={path}
            ></path>
        </svg>
    )
}

export default ScrollButton