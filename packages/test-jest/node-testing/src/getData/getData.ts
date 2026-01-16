import axios, { AxiosResponse } from 'axios';
import mapArrToString from '../mapArrToString/mapArrToString';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const getData = async (): Promise<string[] | undefined> => {
    try {
        const response: AxiosResponse<User[]> = await axios.get('https://jsonplaceholder.typicode.com/users');
        const usersIds = response.data.map((user) => user.id);
        return mapArrToString(usersIds);
    } catch (err) {
        console.log(err);
        return undefined;
    }
}

export default getData;
