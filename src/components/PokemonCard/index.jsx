import * as React from 'react';
import pokeball from "../../assets/pokeball.svg";
import './style.css';

export default function PokemonCard({ pokemon, onClick }) {
    const name = pokemon.name
    let img = pokemon.sprites.other.home.front_default
    if (!img) {
        img = pokemon.sprites.front_default
        if (!img) {
            img = pokemon.sprites.other["official-artwork"].front_default
        }
        if (!img) {
            img = pokeball
        }
    }

    return (
        <div onClick={() => onClick(pokemon)} className='card' style={{
            backgroundImage: `url(${img})`,
        }} >
            <h1>{name}</h1>
        </div>
    );
}