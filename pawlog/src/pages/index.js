
import Hero from '@/components/hero'
import Header from '@/components/header'
import { Inter } from 'next/font/google'
import { UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (  
    <>
      <Header />
      <Hero />
    </>
    
  )
}
