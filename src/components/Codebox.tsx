
import { useState } from 'react'

const CodeBox = ({ text }) => {

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 5000)
    }

    return (
        <div className="relative rounded-md bg-zinc-800 p-4 my-4">
            <div className="absolute top-3.5 right-3 cursor-pointer" onClick={handleCopy}>

                {copied ? (

                    <img
                        alt="copy"
                        width="24"
                        height="24"
                        src="https://img.icons8.com/material-outlined/F5F5F5/copy.png"
                    />

                ) : (

                    <img
                        width="30"
                        height="30"
                        alt="checkmark--v1"
                        src="https://img.icons8.com/ios-glyphs/F5F5F5/checkmark--v1.png"
                    />
                )}

            </div>
            <pre className="text-gray-100 font-mono text-sm max-w-full overflow-x-auto">$ {text}</pre>
        </div>
    )
}

export default CodeBox