import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Burgers @ srvr.at</title>
      </Head>
      <main className="flex flex-col">
        <h1 className="font-sans text-4xl text-megaman-500">
          Welcome to burgers.srvr.at
        </h1>
        <section>
          <h2 className='font-sans text-lg'>Senaste burgarna</h2>
          <ul className='flex flex-col'>
            <li>
              <article className="flex">
                <Image
                  src={`/images/default-burger.jpeg`}
                  alt="En burgare"
                  width={300}
                  height={300}
                  />
                <h3 className="font-sans text-lg">Cheese från Hotbox</h3>
              </article>
            </li>
            <li>
              <article className="flex">
                <Image
                  src={`/images/default-burger.jpeg`}
                  alt="En burgare"
                  width={300}
                  height={300}
                  />
                <h3 className="font-sans text-lg">Cheese från Hotbox</h3>
              </article>
            </li>
            <li>
              <article className="flex">
                <Image
                  src={`/images/default-burger.jpeg`}
                  alt="En burgare"
                  width={300}
                  height={300}
                  />
                <h3 className="font-sans text-lg">Cheese från Hotbox</h3>
              </article>
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}

export default Home
