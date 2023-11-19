import { RandomFox } from "./components/RandomFox"

const randomNumber = (): number => {
  return Math.floor(Math.random() * 24) + 1;
}

const image: string = `https://randomfox.ca/images/${randomNumber()}.jpg`

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Sebastian</h1>
      <RandomFox image={image} />
    </main>
  )
}
