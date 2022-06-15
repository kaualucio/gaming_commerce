import React, { Dispatch, SetStateAction, useRef, useState } from 'react'

type ButtonFilterProps = {
  label: string,
  btnId: string,
  setButtonId: Dispatch<SetStateAction<string>>,
  buttonId: string,
}


const active = "bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg p-2"

const ButtonFilter = ({label, btnId, setButtonId, buttonId}: ButtonFilterProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const handleFilter = () => {
    if(buttonRef.current) {
      setButtonId(btnId)
    }
  }

  return (
    <button 
      ref={buttonRef} 
      onClick={() => handleFilter()} 
      className={`text-md font-medium inline-block ${buttonId === btnId ? active : null}`}>
      {label}
    </button>
  )
}

export default ButtonFilter