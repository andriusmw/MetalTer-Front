
import { useContext, useState } from "react"
import { AuthContext} from "../context/AuthContext" 
//import { NewEntry } from "../components/NewEntry";
//import useEntries from "../hooks/useEntries";
//import { EntriesList } from "../components/EntriesList";
import { ErrorMessage } from "../components/ErrorMesage";

//import { BusquedaBarrio } from "../components/busquedaBarrio";

export const UserProfilePage =  () => {
  

    //const {entries, loading, error, addEntry, removeEntry} = useEntries();
    const {user} = useContext(AuthContext);

    //if (loading) return <p>Loading Metalteruits...</p>;
    //if (error) return <ErrorMessage message={error}/>;

    //console.log(entries)
    
  

// {user  ?  <UserProfile Profiles={profiles} EditProfile={editProfile} />: null}  algo como eso abajo
// para que si hay un usuario logueado, cargue los datos del usuario y deje mirarlos y editarlos. 
//va a haber un botón llamado profile en homepage que cuando le das coja los datos del authcontext del usuario
//para hacer la consulta de usuario por id y cargue los datos del usuario logueado de esa forma un usuario solo 
//recibirá en esta vista sus propios datos para editar.
    return <section className="UserProfilePageStyles">
       
      
        <h1>Últimos Metalteruits: </h1>
       
    </section>

}
