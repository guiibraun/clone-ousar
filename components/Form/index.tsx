import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';


import 'react-toastify/dist/ReactToastify.css';
import { InputError } from '../InputErrors'


type FormType = {
        name?: string,
        email?: string,
        phone?: string,
        message?: string
}



export const Form = () => {
    const { register, handleSubmit, formState: {errors} } = useForm() 

    const onSubmit = (data: FormType) => {
        if(data.name !== '' && data.phone !== '' && data.phone !== ''){
            toast.success('Formulário enviado com sucesso', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error('Preencha todos os campos obrigatórios', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }

    return (
        <>
            <h4>Entre em contato conosco: </h4>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
                <input type="text" placeholder='Seu nome' {...register('name')} className="py-2 px-4 text-black"/>

                <input type="email" placeholder='Seu melhor e-mail' {...register('email')} className="py-2 px-4 text-black"/>
   
                <input type="text" placeholder='Seu melhor telefone' {...register('phone')} className="py-2 px-4 text-black"/>

                <textarea className="py-2 px-4 text-black" rows={6} placeholder='Mensagem' {...register('message')}/>
                <input type="submit" value="Enviar" className="bg-blackSubmit p-2"/>
            </form>
        </>
    )
}