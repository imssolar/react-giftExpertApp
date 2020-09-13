import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';


export const GifGrid=({category})=>{

    console.log("Category-->",category)

    const {data,loading}=useFetchGifs( category );
    
    
    return(

        <>
        <h3>{category}</h3>

        {loading && <p>Loading</p>}
        <div className="card-grid">
           {data.map(img=>(
               <GifGridItem key={img.id} {...img}/>
           ))}
        </div>
        
        </>
    );
}