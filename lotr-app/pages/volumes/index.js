import VolumeDetail from './[slug]'
import React from 'react'

export default function OverView() {
  return (
    // <h1>{slug}</h1>

    <Link href="/">HomePage</Link>
    <h1>{eps.title}</h1>
    <p>{eps.description}</p>
    <ul>
      {eps.books.map((book) => (
        <li key={book.ordinal}>
          {book.ordinal}.{book.title}
        </li>
      ))}
    </ul>
    <Image
      src={eps.cover}
      height={230}
      width={140}
      alt="the-fellowship-of-the-ring"
    />
    <ul>
      <li>
        <Link href="./the-two-towers">Next Volumn</Link>
      </li>
    </ul>
  )
}
