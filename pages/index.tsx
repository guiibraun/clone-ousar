import type { NextPage } from 'next'
import Head from 'next/head'
import { BemVindo } from '../components/Home/BemVindo'
import { OQueFazemos } from '../components/Home/OQueFazemos'
import { CasesOusar } from '../components/Home/CasesOusar'
import { Clientes } from '../components/Home/Clientes'
import { PostsType } from '../types/Posts'

type Props = {
  posts: PostsType[]
}

const Home: NextPage<Props> = ({posts}: Props) => {
  
  return (
    <div>
      <Head>
        <title>Agência Ousar | Isso muda tudo.</title>
      </Head>
      <BemVindo />
      <OQueFazemos />
      <CasesOusar />
      <Clientes />
    </div>
  )
}

export default Home

