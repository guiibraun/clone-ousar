import Head from "next/head"
import { SomosOusar } from "../../components/QuemSomos/SomosOusar";

const QuemSomos = () => {
    return (
        <>
        <Head>
            <title>Quem Somos | Agência Ousar</title>
        </Head>
            <div>
                <SomosOusar/>
            </div>
        </>
    )
}

export default QuemSomos;