'use client'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import iphone from '../../../../public/iphone.jpg'

interface UseNumericInput {
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

interface SingleProduct {
  params: {
    productName: string
  }
}

export default function SingleProduct({ params }: SingleProduct) {
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
    <div className="mt-5 flex gap-5   ">
      <div className="max-h-64 rounded-sm bg-muted p-5">
        <Image
          src={iphone}
          alt=""
          width={100}
          height={100}
          className="h-52 w-52 rounded-md"
          quality={100}
        />
        <p>{params.productName}</p>
      </div>

      <form className="flex-1 space-y-1 rounded-sm bg-muted p-5" action="">
        <div className="space-y-1">
          <Label>Nome do produto</Label>
          <Input
            type="text"
            defaultValue={params.productName}
            className="border border-gray-600"
          />
        </div>

        <div className="space-y-1">
          <Label>Preço</Label>
          <Input
            type="text"
            defaultValue="3800"
            onChange={price.handleChange}
            className="border border-gray-600"
          />
        </div>

        <div className="space-y-1">
          <Label>Cor</Label>
          <Input
            type="color"
            defaultValue="#000000"
            className="border border-gray-600"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="cat">Categoria</Label>
          <Select defaultValue="pending" name="cat">
            <SelectTrigger id="cat">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pro Max</SelectItem>
              <SelectItem value="canceled">Cancelado</SelectItem>
              <SelectItem value="delivered">Entregue</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label>Estoque</Label>
          <Input
            type="text"
            defaultValue="32"
            className="border border-gray-600"
          />
        </div>

        <div className="space-y-1">
          <Label>Tamanho</Label>
          <Input
            type="text"
            defaultValue="Grande"
            className="border border-gray-600"
          />
        </div>

        <div className="space-y-1">
          <Label>Descrição</Label>
          <Textarea
            name="desc"
            id="desc"
            defaultValue="Camara super zoom"
            className="mt-6 min-h-40"
          />
        </div>

        <Button type="submit" className="w-full">
          Atualizar
        </Button>
      </form>
    </div>
  )
}
