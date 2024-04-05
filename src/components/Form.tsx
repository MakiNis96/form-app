import React, {useCallback, useState} from "react";
import { FormContext } from "../FormContext";

type FormProps = {
  children: React.ReactNode
  initialValues: object
  onSubmit: (data: any) => void
}

export const Form = ({children, initialValues, onSubmit}: FormProps) => {

  const [formData, setFormData] = useState(initialValues)
  
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }, [formData])

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
};