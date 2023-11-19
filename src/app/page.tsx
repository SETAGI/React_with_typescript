'use client';
import { useState } from "react";
import { RandomFox } from "./components/RandomFox"

const randomNumber = (): number => Math.floor(Math.random() * 24) + 1;

const idGenerator = () => Math.random().toString(36).substr(2, 9);

const image: string = `https://randomfox.ca/images/${randomNumber()}.jpg`

type ImageItem = { id: string, url: string }

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([
    { id: idGenerator(), url: `https://randomfox.ca/images/1.jpg` },
    { id: idGenerator(), url: `https://randomfox.ca/images/2.jpg` },
    { id: idGenerator(), url: `https://randomfox.ca/images/3.jpg` },
    { id: idGenerator(), url: `https://randomfox.ca/images/4.jpg` },
  ]);
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Sebastian</h1>
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
