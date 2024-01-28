import { Button } from '@/components/ui/button'

export function Rightbar() {
  return (
    <div className="flex flex-col rounded-md bg-muted p-4">
      <span className="text-xs">🚀Em breve</span>

      <h1 className="my-2.5 text-sm font-semibold ">
        Novas ações de servidor estão disponíveis, a pré-renderização parcial
        está chegando
      </h1>

      <p className=" text-[12px] text-muted-foreground">
        Aumente sua produtividade
      </p>

      <p className="my-3.5 text-[12px] text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>

      <Button className="h-8 w-20 gap-2 text-slate-200 dark:bg-emerald-500 dark:hover:bg-emerald-400">
        Aprender
      </Button>
    </div>
  )
}
