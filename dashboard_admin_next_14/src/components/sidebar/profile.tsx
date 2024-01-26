import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid-cols-profile flex items-center gap-3">
      <Image
        src="https://github.com/mariocesar33.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="truncate text-sm font-semibold text-foreground">
          Mário César Silva
        </span>
        <span className="truncate text-sm text-zinc-400">
          mcgato33g@gmail.com
        </span>
      </div>
    </div>
  )
}
