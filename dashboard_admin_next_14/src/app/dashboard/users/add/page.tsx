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

export default function AddUser() {
  return (
    <form className="mt-5 flex flex-col rounded-sm bg-muted p-4">
      <div className="flex items-center justify-between">
        <div className="flex w-96 flex-col space-y-5">
          <Input
            required
            type="text"
            name="username"
            className="h-14"
            placeholder="Nome do utilizador"
          />

          <Input
            className="h-14"
            name="password"
            type="password"
            placeholder="Palavra-passe"
          />

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
        </div>

        <div className="flex w-96 flex-col space-y-5">
          <Input
            className="h-14"
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <Input
            className="h-14"
            name="phone"
            type="tel"
            placeholder="Telefone"
          />
          <div className="space-y-1">
            <Label htmlFor="active">Esta ativo?</Label>
            <Select defaultValue="false" name="cat">
              <SelectTrigger
                defaultValue="default"
                className="h-14"
                id="active"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Sim</SelectItem>
                <SelectItem value="false">Não</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Textarea
        name="desc"
        id="desc"
        placeholder="Endereço"
        className="mt-6 min-h-40"
      />

      <Button className="mt-6">Adcionar</Button>
    </form>
  )
}
