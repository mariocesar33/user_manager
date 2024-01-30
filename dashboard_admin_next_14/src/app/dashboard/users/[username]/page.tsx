import Image from 'next/image'

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

interface UserNameProps {
  params: {
    username: string
  }
}

export default function UserName({ params }: UserNameProps) {
  return (
    <div className="mt-5 flex gap-5   ">
      <div className="max-h-64 rounded-sm bg-muted p-5">
        <Image
          src="https://github.com/mariocesar33.png"
          alt=""
          width={100}
          height={100}
          className="h-52 w-52 rounded-md"
          quality={100}
        />
        <p>Bem vindo(a)</p>
      </div>

      <form className="flex-1 space-y-1 rounded-sm bg-muted p-5" action="">
        <div className="space-y-1">
          <Label>Username</Label>
          <Input
            type="text"
            defaultValue={params.username}
            className="border border-gray-600"
          />
        </div>

        <div className="space-y-1">
          <Label>Email</Label>
          <Input
            type="email"
            defaultValue="silva@gmail.com"
            className="border border-gray-600"
          />
        </div>

        <div className="space-y-1">
          <Label>Password</Label>
          <Input
            type="password"
            defaultValue="123456"
            className="border border-gray-600"
          />
        </div>

        <div className="space-y-1">
          <Label>Telefone</Label>
          <Input
            type="tel"
            defaultValue="985 39 05"
            className="border border-gray-600"
          />
        </div>

        <div className="space-y-1">
          <Label>Endereço</Label>
          <Textarea
            defaultValue="Achada grande tras"
            className="border border-gray-600"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="admin">É administrador?</Label>
          <Select defaultValue="false" name="cat">
            <SelectTrigger className="h-14" id="admin">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Sim</SelectItem>
              <SelectItem value="false">Não</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label htmlFor="active">Esta ativo?</Label>
          <Select defaultValue="false" name="cat">
            <SelectTrigger defaultValue="default" className="h-14" id="active">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Sim</SelectItem>
              <SelectItem value="false">Não</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full">
          Atualizar
        </Button>
      </form>
    </div>
  )
}
