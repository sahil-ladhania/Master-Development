import { useEffect, useState } from "react";
import { getUser } from "../10. UseEffect Hook/fetchData";

function ListAndKeysPractice() {
    // State Variables
    const [users , setUsers] = useState([]);

    // useEffect
    useEffect(() => {
        let isMounted = true;
        console.log(isMounted);
        const getUsers = async() => {
            const response = await getUser();
            console.log("response : " , response);
            if(isMounted){
                setUsers(response);
            }
        }
        getUsers();
        return () => {
            isMounted = false;
            console.log(isMounted);
        }
    }, []);



    return (
        <>
            <div className="p-40">
                <h1>List of Users :</h1>
                <br />
                <ul>
                    {/* map the users */}
                    {
                        users.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default ListAndKeysPractice;