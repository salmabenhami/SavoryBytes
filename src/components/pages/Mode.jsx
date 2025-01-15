
import { useParams } from "react-router";

const Mode=()=>{
    const {mode} = useParams()
    return(<div className="mode">
        <h1>{mode.toUpperCase()}</h1>
    </div>)
}

export default Mode;