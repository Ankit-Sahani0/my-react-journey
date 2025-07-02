import { useParams } from "react-router"
function User(){
    const {userId} = useParams()
    return(
        <>
        <h2 className=" flex justify-center text-orange-400 bg-gray-600 text-bold-400 text-3xl ">User:{userId}</h2>
        </>
    )
}
export default User