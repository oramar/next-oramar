import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import MainLayout from '../components/layouts/MainLayout'
export default function Home() {
  return (
    <MainLayout>
      <h1 className="title">Home page</h1>
      <h1 className="title">
        Ir a <Link href="/about">About</Link>     
      </h1>

      <h1 className="title">
     
        Ir a <Link href="/contact">Contact</Link>
      </h1>

      <p className={'description'}>
        Get started editing{" "}
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </MainLayout>
  );
}
