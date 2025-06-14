'use client'

import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

type Props = {
 children: ReactNode
 animation?: 'fade-in-up' | 'slide-in-left' | 'slide-in-right' // animation propsの型を追加
}

export const ScrollAnimation = ({ children, animation = 'fade-in-up' }: Props) => {
 const { ref, inView } = useInView({
   rootMargin: '-50px',
   triggerOnce: true,
 })

 const animationClass = animation || 'fade-in-up'; // animation propsがなければfade-in-upをデフォルトに

 return (
   <div
     ref={ref}
     className={`scroll-animate ${animationClass} ${inView ? 'is-inview' : ''}`}
   >
     {children}
   </div>
 )
}