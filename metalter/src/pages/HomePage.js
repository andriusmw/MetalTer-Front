
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

    if (loading) return <p>Loading accessibility issues...</p>;
    if (error) return <ErrorMessage message={error}/>;

    console.log(entries)
    
  


    return <section>
      <NewEntry addEntry={addEntry} /> 

      
        <h1>Latest accessibility issues: </h1>
        <EntriesList entries={entries} removeEntry={removeEntry} />
    </section>

}
