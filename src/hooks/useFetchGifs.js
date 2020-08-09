import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";





export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //useEffect se utiliza para que un codigo dentro de una función no se ejecute varias veces. 
    useEffect(() => {

        getGifs( category )
        .then(imgs => setState({
            data: imgs,
            loading: false
        }));

    }, [category])



    return state;

}