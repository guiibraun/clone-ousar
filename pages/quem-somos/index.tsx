import Head from "next/head"
import { GPTW } from "../../components/QuemSomos/GPTW";
import { NossoTime } from "../../components/QuemSomos/NossoTime";
import { SomosOusar } from "../../components/QuemSomos/SomosOusar";

const QuemSomos = () => {
    return (
        <>
        <Head>
            <title>Quem Somos | Agência Ousar</title>
        </Head>
            <div>
                <SomosOusar/>
                <GPTW />
                <NossoTime />
            </div>
        </>
    )
}

export default QuemSomos;