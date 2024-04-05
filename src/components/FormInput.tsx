import React, { useCallback, useContext, useMemo } from "react";
import { FormContext } from "../FormContext";

type FormInputProps = {
  type: string
  required?: boolean
  name?: string
  placeHolder?: string
  value?: string
}

export const FormInput = ({type, required, name, placeHolder, value}: FormInputProps) => {

  const { formData, setFormData } = useContext(FormContext)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const name = e.target.name
    const nameParts = name.split('.')
    
    let updatedData = { ...formData }
    let currentLevel = updatedData
    for (let i = 0; i < nameParts.length - 1; i++) {
      const key = nameParts[i]
      currentLevel = currentLevel[key];
    }
  
    currentLevel[nameParts[nameParts.length - 1]] = value;
    setFormData(updatedData)
  }, [formData, setFormData])

  const inputValue: string = useMemo(() => {
    if (!name) return value

    const nameParts = name.split('.')
    let val = formData[nameParts[0]]
    for (let i = 1; i < nameParts.length; i++) {
      val = val[nameParts[i]]
    }

    return val
  }, [name, formData, value])

  return (
    <div style={{padding: '3px'}}>
      <input type={type} required={required} name={name} placeholder={placeHolder} value={inputValue} onChange={handleChange}/>
    </div>
  )
};