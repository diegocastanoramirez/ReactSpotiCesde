import { Link } from "react-routerf-dom";

export function Menu(){
    return (
        <>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        <Link class="nav-link" to="/historia">Historias</Link>
        <Link class="nav-link" to="#">Pricing</Link>
        <Link class="nav-link disabled">Disabled</Link>
      </div>
    </div>
  </div>
</nav>    
        </>
    )

}