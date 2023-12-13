
import { useState, useEffect } from "react"

const ProjectImage = ({ image, customClasses }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")
    const [modalStyle, setModalStyle] = useState({ opacity: 0, transition: 'opacity 300ms ease-in-out' })

    const openModal = (image) => {
        setSelectedImage(image)
        setIsModalOpen(true)
        setTimeout(() => setModalStyle({ ...modalStyle, opacity: 1 }), 10)
    }

    const closeModal = () => {
        setModalStyle({ ...modalStyle, opacity: 0 })
        setTimeout(() => setIsModalOpen(false), 300)
    }

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal()
        }
    }

    useEffect(() => {
        const handleKeyDown = (e) => { if (e.key === "Escape") closeModal() }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <>

            <img
                key={image}
                src={image}
                alt={`Slide ${image}`}
                className={`block transition-all cursor-pointer duration-1000 ease-linear rounded-md ${customClasses}`}
                onClick={() => openModal(image)}
            />

            {isModalOpen && (
                <div
                    className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
                    onClick={handleOutsideClick}
                    style={modalStyle}
                >
                    <div className="relative p-4">
                        <img src={selectedImage} alt="Selected" className="max-w-[80vw] max-h-[80vh] rounded-lg" />
                    </div>
                </div>
            )}
        </>
    )
}

export default ProjectImage
