import {useEffect, useState} from "react";

function UseEffectPractice() {
    // State Variables
    const [data, setData] = useState(null);

    // useEffect
    useEffect(() => {
        let isMounted = true;
        console.log(isMounted);
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
                console.log("Whole Response : " , response);
                console.log("Status : " , response.status);
                console.log("Headers : " , response.headers);
                console.log("StatusText : " , response.statusText);
                console.log("Body : " , response.body);
                const result = await response.json();
                console.log("Whole Result : " , result);
                console.log("Id : " , result.id);
                console.log("Name : " , result.name);
                console.log("UserName : " , result.username);
                console.log("Email : " , result.email);
                console.log("Address : " , result.address);
                if(isMounted){
                    setData(result);
                }
            }
            catch (error) {
                console.log("Error Fetching Data : " , error);
            }
        }
        fetchData();
        return () => {
            isMounted = false;
            console.log(isMounted);
        };
    }, []);

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