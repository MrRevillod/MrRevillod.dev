
const handleClick = (screenY) => {

    const y = screenY === "screen" ? screen.height : screenY

    window.scrollTo({
        top: y,
        behavior: "smooth"
    })
}

export const ScrollButton = ({ screenY, path }) => {

    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-6"
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