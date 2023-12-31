"use client"
import './globals.css'
import localFont from 'next/font/local';
import variables from '../styles/variables.module.scss';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


const robotoLight = localFont({src:'../public/fonts/Roboto-Regular.ttf'});

//const roboto = Roboto({ weight:'500', subsets: ['latin'], display:'swap',})
// add it to htm  && roboto.className
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode
}) {
  return (
    <html className={variables.htm && robotoLight.className} lang="en">
      <RecoilRoot>
      <body className={variables.bg}>{children}</body>
      </RecoilRoot>
    </html>
  )
}
