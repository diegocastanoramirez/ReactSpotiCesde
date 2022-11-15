export function Integrantes(){

    let integrantes=[
        {
            nombre:"Gambeta",
            instrumento:"cantante",
            edad:"32 años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cinedc.appspot.com/o/Gambeta.jpg?alt=media&token=a581923c-30ac-44a6-9255-1ad589dc5637"
        },
        {
            nombre:"Kaztro",
            instrumento:"cantante",
            edad:"26 años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cinedc.appspot.com/o/integrante.jpg?alt=media&token=53de1832-4a41-4aac-87a7-87076c6e1aa1"
        },
        {
            nombre:"Fa-Zeta",
            instrumento:"compositor",
            edad:"31 años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cinedc.appspot.com/o/Fa-Zeta.jpg?alt=media&token=b79a750e-7695-4c9f-92cd-8f654672f25e"
        },
        
    ]

    return(
       <div className="row row-cols-1 row-cols-md-3 g-0 mt-5">

            {
                integrantes.map(function(integrante){
                    return(
                        <>
                            <div className="col- mt-3 bg-dark p-5">
                                <div className="card h-100">
                                <img src={integrante.fotografia} alt="" className="img-fluid w-100 h-100"/>    
                                <h4 className="text-center">{integrante.nombre}</h4>
                                    <br></br>
                                    <h5 className="text-center ">{integrante.instrumento}</h5>
                                    <h5 className="text-center ">{integrante.edad}</h5>
                                </div>    


                            </div>                        
                        </>
                    )
                })
            } 


       </div>
    )

}