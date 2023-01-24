import axios from 'axios';
import React, { useEffect, useState } from "react";
import arrowLeft from '../assets/arrow_left.svg';
import arrowRight from '../assets/arrow_right.svg';
import Footer from "../components/Footer/index";
import Modal from '../components/Modal';
import Navbar from "../components/Navbar/index";
import PokemonCard from "../components/PokemonCard/index";
let pokemonNumber = 0
let currentPage = 0
let count = 0

export const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState([])
    const [hidden, setHidden] = useState(true)
    const [currentPokemon, setCurrentPokemon] = useState('')

    useEffect(() => {
        GetPokemon(pokemonNumber)
    }, [page])

    function btnPrev() {
        pokemonNumber -= 30
        currentPage -= 1

        if (currentPage < 0) {
            currentPage = Math.floor(count / 30)
            pokemonNumber = 1260
        }
        return setPage(currentPage)
    }

    function btnNext() {
        pokemonNumber += 30
        currentPage += 1

        if (currentPage > Math.floor(count / 30)) {
            currentPage = 0
            pokemonNumber = 0
        }
        return setPage(currentPage)
    }

    function handleModal(pokemonInfo) {
        setCurrentPokemon(pokemonInfo)
        setHidden(false)
    }

    const GetPokemon = async (start) => {
        const localPokemons = []
        const req = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${start}limit=30`)
        count = req.data.count
        for (let pokemonCru of req.data.results) {
            const pokemon = await axios.get(pokemonCru.url)
            localPokemons.push(pokemon.data)
        }
        setPokemons(localPokemons)
    }
    return (
        <div className='container'>
            <Navbar />
            <div className='page'>
                <img onClick={() => btnPrev()} src={arrowLeft} alt="Pagina anterior" />
                <h1>{page + 1}</h1>
                <img onClick={() => btnNext()} src={arrowRight} alt="Próxima página" />
            </div>
            <main className='container_cards'>
                {pokemons.map((pokemon, key) => {
                    return (
                        <PokemonCard onClick={handleModal} key={key} pokemon={pokemon} />
                    )
                })}
            </main>
            {!hidden && <Modal pokemon={currentPokemon} setHidden={setHidden} />}
            <Footer />
        </div>
    )

}