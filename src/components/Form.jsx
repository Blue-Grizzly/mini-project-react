import {useState} from "react";

export default function UserForm(){
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [mail, setMail] = useState("");

    try{
    async function handleSubmit(event) {
        event.preventDefault();
        const user = {name, id, mail};

        resetForm();


        await fetch("http://localhost:4000/users",{
            method: "POST",
            headers: { "Content-type" : "application/json"},
            body: JSON.stringify(user)
        });

        function resetForm(){
            setName("");
            setId("");
            setMail("");
        }
            return (
                <div>
                <h3>Create User</h3>
                <form onSubmit={handleSubmit}>
                    <label>Name<input name="name" value={name} onChange={ (event)=> setName(event.target.value)}></input></label><br/>
                    <label>Id<input name="Id" value={id} onChange={ (event)=> setId(event.target.value)}></input></label><br/>
                    <label>Mail<input name="Mail" value={mail} onChange={ (event)=> setMail(event.target.value)}></input></label><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
} catch (err){
    throw(err)    
} 
}