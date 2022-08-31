
import { useContext, useState } from "react"
import { AuthContext} from "../context/AuthContext" 
import { NewEntry } from "../components/NewEntry";
import useEntries from "../hooks/useEntries";
import { EntriesList } from "../components/EntriesList";
import { ErrorMessage } from "../components/ErrorMesage";

import { BusquedaBarrio } from "../components/busquedaBarrio";

export const HomePage =  () => {
  

    const {entries, loading, error, addEntry, removeEntry} = useEntries();
    const {user} = useContext(AuthContext);

    if (loading) return <p>Loading Metalteruits...</p>;
    if (error) return <ErrorMessage message={error}/>;

    console.log(entries)
    
  


    return <section className="HomePageStyles">
      {user && (user.id ==! null) ? <NewEntry addEntry={addEntry}  />  : null}
      
        <h1>Últimos Metalteruits: </h1>
        <EntriesList entries={entries} removeEntry={removeEntry} />
    </section>

}
