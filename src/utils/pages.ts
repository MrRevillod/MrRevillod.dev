
type Page = {
    pageName: string,
    imgSrc?: string,
    url?: string,
    desc?: string
}

const pagesMap: Page[] = [
    {
        pageName: "Protección Mayor",
        imgSrc: "/images/proteccionmayor/services.png",
        url: "/proyectos/proteccion-mayor",
        desc: "Sistema de administración de servicios para personas mayores",
    },
    {
        pageName: "MinCode - Tema para VSCode",
        imgSrc: "/images/onedark/rust.png",
        url: "/proyectos/one-dark-minimal",
        desc: "Configuraciones limpia con un enfoque en la escritura de código.",
    },
    {
        pageName: "Authenticator",
        imgSrc: "/images/authenticator.png",
        url: "/proyectos/authenticator",
        desc: "Sistema de autenticación RESTFUL con Rust y Axum"
    },
    {
        pageName: "SmartParking",
        imgSrc: "/images/smartparking/page.png",
        url: "/proyectos/smartparking",
        desc: "Aplicación de administración y manejo de estacionamientos en tiempo real",
    },
    {
        pageName: "Recursos",
        imgSrc: "/images/code.webp",
        url: "/recursos",
        desc: "Articulos, guías y más.",
    },
]

export default pagesMap