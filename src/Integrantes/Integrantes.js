export function Integrantes(){

    let integrantes=[
        {
            nombre:"Brandon boy",
            instrumento:"cantantes",
            edad:"37",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cinedc.appspot.com/o/cantante.jpg?alt=media&token=b7b25cb5-fb39-40eb-bcee-3b6e857a38b1"
        },
        {
            nombre:"Brandon boy",
            instrumento:"cantantes",
            edad:"37",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cinedc.appspot.com/o/cantante2.jpg?alt=media&token=2db041e7-7fb4-40ec-8c22-9b66cb9b22ff"
        },
        {
            nombre:"Brandon boy",
            instrumento:"cantantes",
            edad:"37",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cinedc.appspot.com/o/cantante3.jpg?alt=media&token=5b41ca5e-304b-4002-84b5-a62f79f5dafd"
        },
        
    ]

    return(
       <div classsName="row row-cols-1 row-cols-md2 g-0 mt-5">

            {
                integrantes.map(function(integrantes){
                    return(
                        <>
                            <div classsName="col mt-3">
                                <div className="card h-100">
                                    <img src={Integrantes.fotografia} alt="foto" className="img-fluid w-100 h-100" ></img>
                                    
                                </div>    


                            </div>                        
                        </>
                    )
                })
            } 


       </div>
    )

}