'use client'

import { ChangeEvent, useState } from 'react'

interface UseNumericInput {
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function useNumericInput(): UseNumericInput {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    // Verifica se o valor é um número positivo
    if (/^\d+$/.test(inputValue) || inputValue === '') {
      setValue(inputValue)
    }
  }

  return {
    value,
    handleChange,
  }
}
