
const randomNumber = (): number => {
  return Math.floor(Math.random() * 24) + 1;
}

export const RandomFox = (): JSX.Element => {
  const image: string = `https://randomfox.ca/images/${randomNumber()}.jpg`
  return (
    <img src={image} width={320} />
  )
}