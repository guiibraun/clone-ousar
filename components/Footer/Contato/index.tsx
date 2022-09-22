import { Form } from "../../Form"

export const Contato = () => {
    return (
        <div className="bg-black md:min-h-screen bg-[url('/images/bg-contato.png')]">
            <div className="w-full bg-blackOusar h-full absolute overflow-hidden opacity-60"></div>
            <div className="grid md:grid-cols-2 md:h-screen grid-cols-1 max-w-6xl mx-auto w-11/12 py-8 items-center">
                <div></div>
                <div className="text-white z-20 flex flex-col justify-center">
                    <Form />
                </div>
            </div> 
        </div>
    )
}