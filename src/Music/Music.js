import { servioCanciones } from "../services/servicioCanciones"

//necesito usar el hoo USESTATE 
//para almacenar la respuesta de forma loca 
import { useState,useEffect } from "react"

export function Music(){

    //CREANDO MI PRIMER USESTATE
    const[canciones,setCanciones]=useState(null)
    const[estamosCargando,setEstamoscargando]=useState(true)
    //USANDO MI PRIMER USEEFFECT
    useEffect(function(){

        servioCanciones()
        .then(function(respuesta){
             setCanciones(respuesta)
             setEstamoscargando(false)
        })
         

    },[])

    {console.log(canciones)}
    if(estamosCargando==true){
        return(
            <>    
                <h1>Estamos Cargando...</h1>
            </>

        )

    }else{
        return(
            
            <>    
            <div className="row row-cols-1 row-cols-md-5 g-0 mt-5">
                {
                     canciones.tracks.map(function(cancion){

                        return(
                            
                            <>
                            <div className="col- mt-3 bg-dark p-2">
                                <div className="card h-100 ">
                                    <img src={cancion.album.images[1].url} alt="" className="img-fluid w-100 h-100"/>    
                                    <h4 className="text-center">{cancion.name}</h4>
                                    <h4 className="text-center">Album: {cancion.album.name}</h4>
                                        <br></br>
                                        <audio controls="controls" className="w-100" src={cancion.preview_url}></audio>
                                        <h5 className="text-center ">{}</h5>
                                </div>    


                            </div>                        
                        </>
                        )

                     })
                }
            
            </div>
            </>
        )
    }


}