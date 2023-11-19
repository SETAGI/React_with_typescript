'use client';
import { useState } from "react";
import { RandomFox } from "./components/RandomFox"

const randomNumber = (): number => {
  return Math.floor(Math.random() * 24) + 1;
}

const image: string = `https://randomfox.ca/images/${randomNumber()}.jpg`

export default function Home() {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/1.jpg`,
    `https://randomfox.ca/images/2.jpg`,
    `https://randomfox.ca/images/3.jpg`,
    `https://randomfox.ca/images/4.jpg`
  ]);
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Sebastian</h1>
      {
        images.map((image) => (
          <div key={image} className="p-4">
            <RandomFox image={image} />
          </div>)
        )
      }
    </main>
  )
}
