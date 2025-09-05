import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge'
export const cswt=(...input)=>{return twMerge(clsx(...input))}