import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from 'components/Navbar'
import Faq from 'components/Faq'
import Feature from 'components/Feature'
import Banner from 'components/Banner'
import Blog from 'components/Blog'
import Bear from '../../public/graphics/bear-poses/outdoor-2.png'
import Footer from 'components/Footer'
import Grid from 'components/Grid'
import Badges from 'components/Badges'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Scout Toolbox</title>
        <meta name="description" content="Website for Scouts made by Scouts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid/>
      <Badges/>
      <Faq/>
    </>
  )
}
