import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

type LayoutProps = {
  children: React.ReactNode,
}

export default function Layout({ children }: LayoutProps) {
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
          <li>
            <Link href={`/rate`}>Rate</Link>
          </li>
          <li className='ml-4'>
            <Link href={`/login`}>Login</Link>
          </li>
        </ul>
      </header>
      <main className='container mx-auto'>{children}</main>
      <footer className="">
        <h1>Footer</h1>
      </footer>
    </>
  );
}
