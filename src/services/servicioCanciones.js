export async function servioCanciones(){

    const URI="https://api.spotify.com/v1/artists/3ygJTpJJIK7eEeC2EFRl9D/top-tracks?market=us"
    const TOKEN=" Bearer BQBO1FsjEO6AALq5bK784ui9vuqDE6iQZv0w6znnrgPY4Kp8XzqQzu1If7amIOINhR6TG2cz8LJA-bX25l6sq1xv9f32vSvnNk3kdZwVQPhGXOpY6_OQkFjpGEoogrir1_2sWUQ01L6cazQyEPm4JUbMNf_Mf3fy0ofOuaHbK_lBgdeD8wRASU50KFtKmeyc1E0"
    const PETICION={
        method: "GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let canciones= await respuesta.json()

    return canciones 

}