export async function servioCanciones(){

    const URI="https://api.spotify.com/v1/artists/3ygJTpJJIK7eEeC2EFRl9D/top-tracks?market=us"
    const TOKEN="Bearer BQAJwEeJPN4DpePL68vKgTsXscsCPHU2fD4Mby868pCZ5lCbFbEQLS03NDzX79Gu6pi2UiWi533qN1sjYLOH-4WhM3O8HglfkiOrFqZOoIWokP8Y2i1N4hdkLSsUoSUxKy4na_HczygU6wAgMzIBzvVyg4rVnteg5GiAiPB704sqFyyatthT6OFiDeWDPLTT8Zo"
    const PETICION={
        method: "GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let canciones= await respuesta.json()

    return canciones 

}