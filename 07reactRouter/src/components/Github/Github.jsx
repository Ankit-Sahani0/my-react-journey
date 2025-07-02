import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"


function Github(){
    const data = useLoaderData()
    // const[data,setData] = useState([])
    // useEffect(()=>{
    //         fetch('https://api.github.com/users/Ankit-Sahani0')
    //         .then(res=>res.json())
    //         .then(data=>{
    //             console.log(data);
    //             setData(data)
                
    //         })
    //     },[])

    return (
        <div
        className="text-center m-4 bg-gray-600 text-2xl p-4 text-white">
        Github Followers:{data.followers}
        <img src={data.avatar_url} alt="Git fyp" width={300} />
        </div>
    )
}
export default Github

export const githutInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/Ankit-Sahani0')
    return response.json()
}