import { Form } from "../../Form"

export const Contato = () => {
    return (
        <div className="bg-black min-h-screen bg-[url('/images/bg-contato.png')]">
            <div className="w-full bg-blackOusar h-full absolute overflow-hidden opacity-60"></div>
            <div className="grid md:grid-cols-2 grid-cols-1 container h-screen">
                <div></div>
                <div className="text-white z-20 flex flex-col justify-center">
                    <Form />
                </div>
            </div>
        </div>
    )
}