import {useEffect, useState} from "react";
import { getUser } from "./fetchData";

function UseEffectPractice() {
    // State Variables
    const [data, setData] = useState(null);

    // useEffect
    useEffect(() => {
        let isMounted = true;
        console.log(isMounted);
        const fetchData = async() => {
            try{
                const response = await getUser();
                if(isMounted){
                    setData(response);
                }
            }   
            catch(error){
                throw new Error("Something went wrong : " , error);
            }
        }
        fetchData();
        return () => {
            isMounted = false;
            console.log(isMounted);
        }
    },[])

    return (
        <>
            <div className="p-20">
                <h1 className="pb-5">Practice UseEffect !!!</h1>
                {
                    data ?
                        <div>
                            <h2>Name : {data.name}</h2>
                            <p>Email : {data.email}</p>
                            <p>Phone : {data.phone}</p>
                        </div>
                        :
                        <span>Loading...</span>
                }
            </div>
        </>
    );
}

export default UseEffectPractice;