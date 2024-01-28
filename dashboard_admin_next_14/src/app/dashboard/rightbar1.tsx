import { Button } from '@/components/ui/button'

export function RightbarOne() {
  return (
    <div className="flex flex-col rounded-md bg-muted p-4">
      <span className="text-xs">🔥Agora disponível</span>

      <h1 className="my-2.5 text-sm font-semibold ">
        Como usar a nova versão do painel de administração?
      </h1>

      <p className=" text-[12px] text-muted-foreground">
        Leva 4 minutos para aprender
      </p>

      <p className="my-3.5 text-[12px] text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
        inventore tempora perspiciatis maxime libero iusto similique quaerat.
      </p>

      <Button className="h-8 w-20 gap-2 text-slate-200 dark:bg-emerald-500 dark:hover:bg-emerald-400">
        Assista
      </Button>
    </div>
  )
}
