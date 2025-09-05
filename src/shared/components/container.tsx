import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'
type ItemData ={
  children:React.ReactNode,
  className:string
}
const Container = ({children,className}:ItemData) => {
  return  <section className={twMerge(clsx('max-w-[1440px] mx-auto ',className))}>
    {children}
    </section>
    
  
}

export default Container