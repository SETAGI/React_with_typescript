'use client';
import { MouseEventHandler, useState } from "react";
import { RandomFox } from "./components/RandomFox"

const randomNumber = (): number => Math.floor(Math.random() * 24) + 1;

const idGenerator = () => Math.random().toString(36).substr(2, 9);

type ImageItem = { id: string, url: string }

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    const newImage = { id: idGenerator(), url: `https://randomfox.ca/images/${randomNumber()}.jpg` }
    setImages([...images, newImage])
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Sebastian</h1>
      <button onClick={addNewFox}> Add new fox </button>
      {
        images.map(({ id, url }) => (
          <div key={id} className="p-4">
            <RandomFox image={url} />
          </div>)
        )
      }
    </main>
  )
}
