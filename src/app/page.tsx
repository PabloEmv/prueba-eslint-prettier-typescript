'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './styles/page.module.css'
interface Character {
    id: number
    name: string
    origin: {
        name: string
        url: string
    }
}
type PropsCharacter = {
    id: number
    name: string
    status: string
    species: string
    gender: string
    origin: {
        name: string
        url: string
    }
    image: string
}
export default function Page(): JSX.Element {
    const [character, setCharacter] = useState([])
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const response = await fetch(
                    'https://rickandmortyapi.com/api/character'
                )
                const data = await response.json()
                setCharacter(data.results)
            } catch (error) {
                console.log(error)
            }
        }
        void fetchData()
    }, [])

    return (
        <div className=''>
            <h1 className='text-center mb-16'>Characters</h1>
            {character.map((c: PropsCharacter) => (
                <div key={c.id} className={styles.row}>
                    <li className='text-center text-black'>{c.name}</li>
                    <Image
                        src={c.image}
                        alt={c.name}
                        width={200}
                        height={200}
                    />
                </div>
            ))}
        </div>
    )
}
