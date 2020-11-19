import axios from 'axios'

///constants
const initialData = {
    array:[],
    offset: 0
}
//types
const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
const GET_NEXT_DATA_SUCCESS = "GET_NEXT_DATA_SUCCESS"

//reducer
export default function pokeReducer(state = initialData, action){
     switch(action.type){
        case GET_DATA_SUCCESS:
            return {...state,array: action.payload}
        case GET_NEXT_DATA_SUCCESS:
            return {...state, array:action.payload.array, offset:action.payload.offset}    
        default:
            return state
     }
}

//acciones
export const getDataAction = () => async (dispatch, getState) => {
    
    console.log('getState', getState().pokemons.offset)
    const offset = getState().pokemons.offset

    try{
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?ffset=${offset}&limit=20`)
        dispatch({
            type: GET_DATA_SUCCESS,
            payload: res.data.results
        })
    } catch (error){
        console.log(error)
    }
}

export const nextPokemonAction = (numero) => async (dispatch, getState) => {

    const offset = getState().pokemons.offset
    const next = offset + numero


    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${next}&limit=20`)

    dispatch({
        type: GET_NEXT_DATA_SUCCESS,
        payload:{
            array:res.data.results,
            offset: next
        }
    })
    } catch (error) {
        console.log(error)
    }
}