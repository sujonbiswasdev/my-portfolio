import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'skill page || web developer in bangladesh',
  description: 'Hi There,i am a Front End Developer expert,my expertise is in HTML,CSS ,Javascript,Typescript,React js, Next Js,Bootstrap,tailwind css,Sass,Git,Github,Material UI and Hero ui and more, i am provide high quality service and clean code to ensure best user experience. if you are Looking for skilled front end developer,then lets work Together',
}
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full flex bg-black h-screen'>
      {children}
    </div>
  )
}