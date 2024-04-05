import {createContext} from "react";

interface ContextType {
  formData: {[key: string]: any};
  setFormData: (formData: object) => void;
}

const initialContext = {
  formData: {},
  setFormData: () => {}
}

export const FormContext = createContext<ContextType>(initialContext)
