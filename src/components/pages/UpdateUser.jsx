import React, { useState } from "react";
import '../../styles/manageusersStyle.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateuser } from "../../redux/Signup/ActionCreator";

const UpdateUser=()=>{
    const {id} = useParams();
    const user = useSelector((state)=> state.users.find((u)=> u.id === parseInt(id)))
    const [newusername, setNewusername] = useState(user.username)
    const [newemail, setNewemail] = useState(user.email)
    const [newrole, setNewrole] = useState(user.role)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    console.log(user)
    const handleClicke=(e)=>{
        e.preventDefault()
        const newUser={
            id: parseInt(id),
            username:newusername,
            email:newemail,
            role:newrole,
        }
        dispatch(updateuser(newUser))
        navigate('/manage-users ')
    }

    return(<div>
        <form>
            <input type="text" name="username" id="username" placeholder="User Name" value={newusername} onChange={(e)=>setNewusername(e.target.value)}/>
            <input type="text" name="email" id="email" placeholder="email" value={newemail} onChange={(e)=>setNewemail(e.target.value)}/>
            <select name="ville" id="ville" value={newrole} onChange={(e)=>setNewrole(e.target.value)}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                
            </select>
            <button onClick={(e)=>handleClicke(e)}>Enregistrer</button>
        </form>
    </div>)
}
export default UpdateUser;