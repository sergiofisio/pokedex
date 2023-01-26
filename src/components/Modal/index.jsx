import * as React from 'react';
import arrowInfo from "../../assets/icon/arrow-bottom-info.svg";
import close from "../../assets/icon/close-white.svg";
import pokeballModal from "../../assets/icon/pokeball-icon.svg";
import pokeball from "../../assets/pokeball.svg";
import { types } from '../../types.js';

import './style.css';

export default function Modal({ pokemon, setHidden }) {
    let img = pokemon.sprites.other.home.front_default ||
        pokemon.sprites.other["official-artwork"].front_default ||
        pokeball
    let shiny = pokemon.sprites.other.home.front_shiny ||
        pokeball
    return (
        <div className="modal">
            <div className="modal__body">
                <div className="header__modal">
                    <div>
                        <img src={arrowInfo} alt="info" className='info__img' /> <h1 className='text-header'>INFO</h1>
                    </div>
                    <img onClick={() => setHidden(true)} src={close} alt="Close" className='btnClose' />
                </div>
                <div className="body__modal">
                    <div className="info">
                        <div className="imgPokemon">
                            <img src={img} alt='img_pokemon' />
                        </div>
                        <div className='all__info'>
                            <div className="name__type">
                                <div className="name__modal">
                                    <img src={pokeballModal} alt="" className='pokeball__modal' />
                                    <h2>{pokemon.name}</h2>
                                </div>
                                <div className="type">
                                    {pokemon.types.map(({ type }, key) => {
                                        let pkType = types[type.name]
                                        return (
                                            <h2 key={key} className=''><img className='imgType' src={pkType} alt="" />{type.name}</h2>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="shyne__stats">
                                <div className="imgShiny" style={{ backgroundImage: `url(${shiny})` }}>
                                    <h2>shiny</h2>
                                </div>
                                <div className="stats">
                                    <div className="stat_title">
                                        <h2 >status base</h2>
                                    </div>
                                    <div className="status__description">
                                        {pokemon.stats.map((stats, key) => {
                                            return (
                                                <h2 className='stat' key={key}><strong className='statName'>{stats.stat.name}</strong>: {stats.base_stat}</h2>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="height__weight">
                                <h2 className="height"> HT: <strong className='height_Weight'>{pokemon.height} cm </strong></h2>
                                <hr className='line' />
                                <h2 className="weight">WT: <strong className='height_Weight'>{pokemon.weight} g</strong></h2>
                            </div>
                        </div>
                    </div>
                    <div className="description"></div>
                </div>
            </div>
        </div>
    );
}