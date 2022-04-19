import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useGifState = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    
    //solo llama a la funcion getGif una vez con el arreglo vacio []
    useEffect( ()=> {
        getGif( category )
            .then( imgs => {
                setTimeout( ()=>{
                    setState( {
                        data: imgs,
                        loading: false
                    } );
                }, 2000);
            } );
    }, [ category ])

    return state; // { data: [], loading: true }
}
