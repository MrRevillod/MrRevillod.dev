
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} method='POST' className="w-7/12">
            <div className="mb-6">
                <label htmlFor="name" className="mb-2 block text-base font-semibold">
                    Nombre / Emisor
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
                <label htmlFor="email" className="mb-2 block text-base font-semibold">
                    Correo electrónico
                </label>
                <input
                    {...register("email", {
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
                <ErrorMessage error={errors.email} />
            </div>

            <div className="mb-6">
                <label htmlFor="subject" className="mb-2 block text-base font-semibold">
                    Sujeto
                </label>
                <input
                    {...register("subject", { required: "Este campo es obligatorio" })}
                    type="text"
                    placeholder="Solicitud de Contacto"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-medium text-neutral-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <ErrorMessage error={errors.subject} />
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

            <div>
                <button
                    type="submit"
                    className="w-full rounded-md bg-blue-800 py-3 px-8 text-base font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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

