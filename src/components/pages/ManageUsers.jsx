import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router"
import '../../styles/manageusersStyle.css'
import { TbUsersPlus } from "react-icons/tb";
import { removeUser } from "../../redux/Signup/ReducerAuth";

const ManageUsers=()=>{
    const users = useSelector((state)=> state.auth.users)
    const dispatch = useDispatch()
    console.log(users)
    return(<div className="body">
        <h1 className="title">Users Management</h1>
        <Link to='/manage-users/add-user'>
            <div className="add">
                <div className="up-box" >
                    <div className="content">
                    <div className="writhing">
                        <h3>Add usser</h3>
                    </div>
                    <p><TbUsersPlus/> </p>
                    </div>
                </div>
            </div>
        </Link>
        
        <table>
            <thead>
                <tr>
                    <th>UserName </th>
                    <th>Email </th>
                    <th>Role </th>
                    <th>Joined Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>{user.joinedDate}</td>
                        <td>
                            <Link to={`/manage-users/${user.id}`}><button className="upt">Update</button></Link>
                            <button onClick={()=>dispatch(removeUser(user.id))} className="del">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>)
}
export default ManageUsers;