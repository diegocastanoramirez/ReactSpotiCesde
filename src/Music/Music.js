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
                <h1>Estamos listos</h1>
                {
                     canciones.tracks.map(function(cancion){

                        return(
                            
                            <>
                            <div className="col- mt-3 bg-dark p-5">
                                <div className="card h-100">
                                <img src={cancion.album.images[1].url} alt="" className="img-fluid w-100 h-100"/>    
                                <h4 className="text-center">{}</h4>
                                    <br></br>
                                    <h5 className="text-center ">{}</h5>
                                    <h5 className="text-center ">{}</h5>
                                </div>    


                            </div>                        
                        </>
                        )

                     })
                }
            </>

        )
    }


}