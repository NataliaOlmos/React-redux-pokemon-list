import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getDataAction, nextPokemonAction} from '../redux/pokemonDucks'
import styles from '../components/Pokemon.module.css'

const Pokemons = () => {

    const dispatch = useDispatch()

    const poke = useSelector(store => store.pokemons.array)
    console.log(poke)

    return(
        <div className={styles.mainwrapper}>
            <h1>Lista de Pokemon</h1>
            <button className={styles.button} onClick={()=>dispatch(getDataAction())}>Get Pokemon</button>
            <button className={styles.button} onClick={()=>dispatch(nextPokemonAction(20))}>Siguiente</button>

            <ul>
                {
                    poke.map(item =>(
                    <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemons