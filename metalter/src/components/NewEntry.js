//------------------------------------------ IMPORTS -----------------------------------------------
//
//--------------------------------------------------------------------------------------------------//

import { useContext, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../context/AuthContext";
import { sendEntryService } from "../services";



//-----------------------------------------FUNCIONES --------------------------------------------------
//
//-----------------------------------------------------------------------------------------------------//

//---------------------------------- NEW ENTRY----------------------------
export const NewEntry = ({addEntry}) => {
    const [error, setError] = useState("");
    const [sending, setSending] = useState(false);
    const {token} = useContext(AuthContext)
    //estados para control de los inputs
    const [title, setTitle] = useState("");
    const [descr, setDescr] = useState("");
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");
    const [video, setVideo] = useState("");



//---------------------------------- HANDLE FORM  ----------------------------
    const handleForm = async (e) => {
        e.preventDefault();
    /* -----PARA CONTROLAR LOS CAMPOS Y VER LO QUE SE PASA A FORMDATA
        console.log("title: "+ title);
        console.log("descr: " + descr);
        */

        try{
            setSending(true);

           
            const data = new FormData(e.target);
            const entry = await sendEntryService({data,token});
            
            console.log(entry);
            console.log("entry photo:" + entry.photo)
            addEntry(entry);
            //window.location.reload(false);
          //  swal(`Success`,`added`,`success` )
          setError("");
      
        } catch (error) {
            console.log(error)
            console.log(error.message)
            swal(`Error`,`${error.message}`,`error` )
            setError(error.message);
        } finally {
            setSending(false);
        
        }
    }
 

    //--------------------------------------------- RETURN ------------------------------------------------
    //
    //----------------------------------------------------------------------------------------------------//
   return (
    <>
    <h1>¡CREA UN NUEVO METALTERUIT OSTIA PUTA!</h1>
    <form onSubmit={handleForm} >
        

        <fieldset>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" required onChange={(e) => setTitle(e.target.value)} />
        </fieldset>
        <fieldset>
            <label htmlFor="description">Description: </label>
            <input type="text" id="description" name="description" required  onChange={(e) => setDescr(e.target.value)}/>
        </fieldset>    
        <fieldset>
            <label htmlFor="image">Image (optional): </label>
            <input type="file" id="image" name="image" defaultValue={null} />
        </fieldset>
        <fieldset> 
            <label htmlFor="city">Category: </label>
            <input type="text" id="category" name="category" required onChange={(e) => setCategory(e.target.value)}/>
       </fieldset>
       <fieldset>
            <label htmlFor="neighborhood">Country: </label>
            <input type="text" id="country" name="country" required onChange={(e) => setCountry(e.target.value)} />
        </fieldset>    
        <fieldset className="statusfield">
            <label htmlFor="status">Video_Url (optional):  </label>
            <input type="text" id="video_url" name="video_url" defaultValue={null}  onChange={(e) => setVideo(e.target.value)} />
        </fieldset>
        
            <button>Mandar a tomar porculo</button>
            {sending ? <p>Enviando Metalteruit te esperas coño</p> : null}
            {error ? <p>{error} </p> : null}

       

    </form>
    
</>
   ) 
}