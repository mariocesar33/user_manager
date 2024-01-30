import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SignIn() {
  return (
    <div className="flex h-screen w-screen">
      <form
        className="m-auto flex flex-col items-center justify-center space-y-4 rounded-sm bg-muted px-7 py-10"
        action=""
      >
        <h1 className="text-xl font-bold">Login</h1>
        <Input
          className="border border-muted-foreground"
          type="text"
          placeholder="username"
        />
        <Input
          className="border border-muted-foreground"
          type="password"
          placeholder="password"
        />

        <Button className="w-full font-semibold">Login</Button>
      </form>
    </div>
  )
}
