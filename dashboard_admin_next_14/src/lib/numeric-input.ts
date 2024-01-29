import { ChangeEvent, useState } from 'react'

export function useNumericInput(e: ChangeEvent<HTMLInputElement>) {
  const [value, setValue] = useState('')

  const inputValue = e.target.value

  // Verifica se o valor é um número positivo
  if (/^\d+$/.test(inputValue) || inputValue === '') {
    setValue(inputValue)
  }

  return value
}
