
import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';

import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef<HTMLFormElement>()
    const [message, setMessage] = useState({ text: '', type: '' })

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (e) => {

        if (!form.current) return;

        const SERVICE = import.meta.env.PUBLIC_EMAIL_SERVICE_ID
        const TEMPLATE = import.meta.env.PUBLIC_EMAIL_TEMPLATE_ID
        const PUBLIC_KEY = import.meta.env.PUBLIC_EMAIL_PUBLIC_KEY

        emailjs.sendForm(SERVICE, TEMPLATE, form.current, PUBLIC_KEY)

            .then((result) => {
                setMessage({ text: 'Mensaje enviado con éxito!', type: 'success' });
                form.current?.reset();
            }, (error) => {
                setMessage({ text: 'Error al enviar el mensaje.', type: 'error' });
            });
    }

    return (
        <form ref={form} method='POST' className="md:w-7/12 w-10/12">
            <div className="mb-6">
                <label htmlFor="name" className="mb-2 block text-base font-semibold">
                    Nombre completo
                </label>
                <input
                    {...register("name", { required: "Este campo es obligatorio" })}
                    type="text"
                    placeholder="Gonzalo Herrera Jiménez"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-medium text-neutral-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <ErrorMessage error={errors.name} />
            </div>

            <div className="mb-6">
                <label htmlFor="mail" className="mb-2 block text-base font-semibold">
                    Correo electrónico
                </label>
                <input
                    {...register("mail", {
                        required: "Este campo es obligatorio",
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Correo electrónico inválido"
                        }
                    })}
                    type="email"
                    placeholder="ejemplo@dominio.com"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-medium text-neutral-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <ErrorMessage error={errors.mail} />
            </div>

            <div className="mb-6">
                <label htmlFor="message" className="mb-2 block text-base font-semibold">
                    Mensaje
                </label>
                <textarea
                    {...register("message", { required: "Este campo es obligatorio" })}
                    rows={4}
                    placeholder="Escribe un mensaje"
                    className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-medium text-neutral-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                ></textarea>
                <ErrorMessage error={errors.message} />
            </div>

            {message.text && (
                <div className={`mt-4 mb-4 alert ${message.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                    {message.text}
                </div>
            )}

            <div>
                <button
                    className="w-full rounded-md bg-custom-blue py-3 px-8 text-base font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    onClick={handleSubmit(onSubmit)}
                >
                    Enviar
                </button>
            </div>
        </form>
    );
};

const ErrorMessage = ({ error }) => {
    return (
        <p className={`mt-2 text-sm text-red-600 ${!error ? 'hidden' : 'animate-fadeIn'}`}>
            {error?.message}
        </p>
    );
};

export default ContactForm;
