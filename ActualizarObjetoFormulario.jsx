import { useState, useEffect } from 'react'

export default function ActualizarObjeto() {

    const persona = {
        name: '',
        city: ''
    }

    const [user, setUser] = useState(persona)
    const [errors, setErrors] = useState({
        name: false,
        city: false
    })



    const handlechange = (e) => {
        const { name, value } = e.target;

        setUser((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })


        // Restablecer el error cuando el usuario comienza a escribir
        setErrors((prev) => ({
            ...prev,
            [name]: false,
        }));

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, city } = user

        if (name.trim() === '') {
            setErrors((prev) => ({
                ...prev,
                name: true
            }))
            return
        }

        if (city.trim() === '') {
            setErrors((prev) => ({
                ...prev,
                city: true
            }))
            return
        }

        // Restablecer errores al enviar con éxito
        setErrors({
            name: false,
            city: false
        })
    }

    useEffect(() => {
        //fucus en el campo name con el id**
        document.getElementById('nombre').focus()

    }, [])

    return (
        <div className="flex items-center justify-center h-screen flex-col">
            <form className="bg-gray-100 p-6 rounded-lg shadow-md mb-4" onSubmit={handleSubmit}>

                <div className='mb-5'>
                    <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold'>
                        Nombres
                    </label>
                    <input
                        id='nombre'
                        type='text'
                        name='name'
                        value={user.name}
                        onChange={handlechange}
                        placeholder='Your name'
                        className={`mt-2 border-2 ${errors.name ? 'border-red-500' : 'border-gray-300'} bg-white h-10 px-2 rounded-lg text-sm focus:outline-none focus:border-primary w-full`}
                    />

                    {errors.name && (<p className="text-red-500 text-xs italic">*El campo nombre es obligatorio</p>)}
                </div>

                <div className='mb-5'>
                    <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold'>
                        Cuidad
                    </label>
                    <input
                        type='text'
                        name='city'
                        value={user.city}
                        onChange={handlechange}
                        placeholder='Your city'
                        className={`mt-2 border-2 ${errors.city ? 'border-red-500' : 'border-gray-300'} bg-white h-10 px-2 rounded-lg text-sm focus:outline-none focus:border-primary w-full`}
                    />
                    {errors.city && (<p className="text-red-500 text-xs italic">*El campo ciudad es obligatorio</p>)}
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg uppercase"
                    >
                        Submit
                    </button>
                </div>
            </form>


            <div className="mt-4">
                <p className="text-xl text-gray-700 font-semibold">Name: {user.name}</p>
                <p className="text-xl text-gray-700 font-semibold">City: {user.city}</p>
            </div>
            <hr />
        </div>
    )
}
