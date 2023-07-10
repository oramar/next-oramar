import Head from 'next/head'
import styles from './MainLayout.module.css'
import NavBar from '../NavBar'
import React, { ReactNode } from 'react'
const MainLayout= ({children}: {children: ReactNode}) => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Home -Oramar</title>
            <meta name='description' content='Home page'/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar/>
        <main className={styles.main}>
            {children}
        </main>
    </div>
  )
}

export default MainLayout