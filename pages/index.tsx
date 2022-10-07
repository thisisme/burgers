import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import useSWR from 'swr';
import { gql } from 'graphql-request';
import { graphQLClient } from '../lib/graphql-client';

const fetcher = async (query: any) => await graphQLClient.request(query);

const Home: NextPage = () => {
  const { data, error } = useSWR(
    gql`
      {
        allBurgers {
          data {
            _id
            burger,
            restaurant {
              _id
              name
            }
            user {
              _id
              name
            }
          }
        }
      }
    `,
    fetcher
  );
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
          {data ? (
            <>
            <h2 className='font-sans text-lg'>Senaste burgarna</h2>
            <ul className='flex flex-col'>
              {data.allBurgers.data.map((burger: any) => (
                <li key={burger._id}>
                  <article className="flex flex-col">
                    <Image
                      src={`/images/default-burger.webp`}
                      alt={`${burger.burger} från ${burger.restaurant.name}`}
                      width={300}
                      height={300}
                      />
                    <h3 className="font-sans text-lg">{burger.burger}</h3>
                    <Link href={`burger/${burger._id}`}>
                    {burger.burger}
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
            </>
          ) : (
            <h2 className='font-sans text-lg'>Laddar senaste burgarna</h2>
          )}
        </section>
      </main>
    </Layout>
  )
}

export default Home
