import React from 'react'
import Head from 'next/head'

export default function Layout({children, title}) {
  return (
    <>
        <Head>
        <title>{title ? title + '- Aclue' : 'AClue'}</title>
        <meta name="description" content="ECommerce Website" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
        </div>
    </>
  )
}
