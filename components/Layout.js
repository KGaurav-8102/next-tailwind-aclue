import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({children, title}) {
  return (
    <>
        <Head>
        <title>{title ? title + '- Aclue' : 'AClue'}</title>
        <meta name="description" content="ECommerce Website" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <nav className='flex h-12 items-center px-4 justify-between shadow-md'>
            <Link href='/'>
              <a className='text-lg font-bold'>AClue</a>
            </Link>
          <div>
            <Link href='/cart'><a className='font-bold p-2'>Cart</a></Link>
            <Link href='/login'><a className='font-bold p-2'>Login</a></Link>
          </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='flex h-10 justify-center items-center shadow-inner'>Copyright © 2022 AClue</footer>
        </div>
    </>
  )
}