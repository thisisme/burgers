import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: React.ReactNode,
}

const routes = [
  {
    name: "Rate",
    route: "/rate",
  },
  {
    name: "Login",
    route: "/login",
  }
]

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  console.log(router)
  return (
    <>
      <Head>
        <title>Burgers @ srvr.at</title>
        <meta name="description" content="Burgers rated" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='flex'>
        <div className='logo'>
          Logo
        </div>
        <ul className='flex ml-auto'>
          {routes.map((route: any) => (
            <li key={route.route} className={`${router.asPath === route.route ? "bg-georgiaPeach-500" : "bg-peanutButterChicken-500"} px-2 py-1`}>
              <Link href={route.route}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </header>
      <main className='container mx-auto'>{children}</main>
      <footer className="">
        <h1>Footer</h1>
      </footer>
    </>
  );
}
