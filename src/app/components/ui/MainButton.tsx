import React from 'react'
import clsx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export const MainButton: React.FC<Props> = ({children, className, ...rest}) => {
  return (
    <button className={clsx(
        'bg-indigo-500 text-white',
        'py-2 px-8 leading-6',
        'rounded-full',
        'font-semibold tracking-wide',
        'cursor-pointer',
        'inline-flex items-center justify-center',
        'relative shadow',
        // Hover
        'hover:bg-indigo-600 not:disabled hover:shadow-md',
        'transition',
        // Focus
        'outline-none',
        'ring-indifo-500/70 ring-offset-2',
        'focus-visible:ring-2 focus:scale-[0.98]',
        // Disabled
        'disabled:bg-indigo-500/50 disabled:cursor-not-allowed',
         className)} {...rest} >{children}</button>
  )
}
