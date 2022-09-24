import { Form } from "../../Form"

export const Contato = () => {
    return (
        <div className="bg-black min-h-full md:min-h-screen bg-[url('/images/bg-contato.png')] max-h-full relative">
            <div className="bg-black absolute w-full h-full z-20 overflow-hidden opacity-60"></div>
            <div className="container grid md:grid-cols-2 grid-cols-1 py-4">
                <div></div>
                <Form />
            </div>
        </div>
    )
}