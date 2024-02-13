import { addUser } from '@/actions/user'
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
    <form
      action={addUser}
      className="mt-5 flex flex-col rounded-sm bg-muted p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex w-96 flex-col space-y-5">
          <Input
            required
            type="text"
            name="name"
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
            <Label htmlFor="role">Privilégio</Label>
            <Select defaultValue="CLIENT" name="role">
              <SelectTrigger className="h-14" id="role">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ADMIN">ADMIN</SelectItem>
                <SelectItem value="CLIENT">CLIENT</SelectItem>
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
            <Label htmlFor="stato">Esta ativo?</Label>
            <Select defaultValue="true" name="stato">
              <SelectTrigger defaultValue="default" className="h-14" id="stato">
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
        name="address"
        id="address"
        placeholder="Endereço"
        className="mt-6 min-h-40"
      />

      <Button className="mt-6">Adcionar</Button>
    </form>
  )
}
