"use client"
import React from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement>& {
    labelText?: string;
    divClassName?: string
} 

export const FormInput: React.FC<Props> = ({labelText, id, divClassName, ...rest}) => {
  return (
    <div className={divClassName}>
        {labelText && <label className='text-slateGray text-sm' htmlFor={id}>{labelText}</label>}
        <input className='text-md bg-softGray py-2 text-center rounded-full w-full active:ouline-none active:border-none focus:outline-none focus:border-none' id={id} {...rest} />
    </div>
  )
}
