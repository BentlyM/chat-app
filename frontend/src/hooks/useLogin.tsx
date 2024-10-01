import  { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username: string, password: string) => {

    try{
        setLoading(true);
        const res = await fetch('http://127.0.0.1:5000/api/auth/login', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({username, password}),
        })

        const data = await res.json();
        console.log(data);

        if(!res.ok || data.error) {
            throw new Error(data.error);
        }

        setAuthUser(data);
    }catch(error){
        if (error instanceof Error) {
            console.log(error.message);
            toast.error(error.message);
          } 
    }finally{
        setLoading(false);
    }
  }

  return {loading, login}
}

export default useLogin