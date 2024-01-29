import Image from 'next/image'

export default function UserName() {
  return (
    <div>
      <div>
        <Image
          src="https://github.com/mariocesar33.png"
          alt=""
          width={50}
          height={50}
          className="h-100 w-100 rounded-md"
        />

        <p>Bem vindo(a)</p>
      </div>
    </div>
  )
}
