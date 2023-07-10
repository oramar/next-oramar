import Head from "next/head";
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })
import MainLayout from '../components/layouts/MainLayout'
export default function Contact() {
    return(
      <MainLayout>
      <h1 className="title">Contact page</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>     
      </h1>

      <h1 className="title">
     
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={'description'}>
        Get started editing{" "}
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </MainLayout>
       
    )

}