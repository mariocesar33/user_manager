'use client'

import { ChangeEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

interface UseNumericInput {
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function AddProduct() {
  function useNumericInput(): UseNumericInput {
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

  const price = useNumericInput()
  const stock = useNumericInput()
  const size = useNumericInput()

  return (
    <form className="mt-5 flex flex-col rounded-sm bg-muted p-4">
      <div className="flex items-center justify-between">
        <div className="flex w-96 flex-col space-y-5">
          <Input
            required
            type="text"
            name="title"
            className="h-14"
            placeholder="Nome do produto"
          />

          <Input
            className="h-14"
            name="price"
            type="text"
            value={price.value}
            onChange={price.handleChange}
            placeholder="preço"
          />

          <Input name="color" className="h-14" type="color" placeholder="Cor" />
        </div>

        <div className="flex w-96 flex-col space-y-5">
          <Select defaultValue="default" name="cat">
            <SelectTrigger defaultValue="default" className="h-14">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Escolha uma categoria</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="canceled">Cancelado</SelectItem>
              <SelectItem value="processing">Em preparo</SelectItem>
              <SelectItem value="delivering">Em entregue</SelectItem>
              <SelectItem value="delivered">Entregue</SelectItem>
            </SelectContent>
          </Select>
          <Input
            className="h-14"
            name="stock"
            type="text"
            value={stock.value}
            onChange={stock.handleChange}
            placeholder="Estoque"
          />
          <Input
            className="h-14"
            name="size"
            type="text"
            value={size.value}
            onChange={size.handleChange}
            placeholder="Tamanho"
          />
        </div>
      </div>

      <Textarea
        name="desc"
        id="desc"
        placeholder="Descrição"
        className="mt-6 min-h-40"
      />

      <Button className="mt-6">Adcionar</Button>
    </form>
  )
}
