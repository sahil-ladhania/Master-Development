import axios from "axios"

const getUserDetails = async() => {
    const response = await axios.get("http://localhost:3000/api/user");
    console.log("Response : " + JSON.stringify(response.data));
    return response.data;
}

export default async function User() {
    const data = await getUserDetails();

    return (
        <div>
            <h1>Name : {data.name}</h1>
            <h1>Email : {data.email}</h1>
        </div>
    )
};