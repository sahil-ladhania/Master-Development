import axios from 'axios';

const api = "https://jsonplaceholder.typicode.com/users";

export const getUser = async() => {
    try{
        const response = await axios.get(api);
        const data = response.data;
        return data;
    }
    catch(error){
        throw new Error("Something went wrong : " , error);
    }
}