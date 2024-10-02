import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username: string, password: string) => {
    try {
      setLoading(true);
      const res = await fetch('/api/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include'
      });

      const data = await res.json();

      if (!res.ok || data.errors) {
        if (data.error) {
          toast.error(data.error);
          return;
        }

        data.errors?.forEach((error: { msg: string }) => {
          toast.error(error.msg); // Display each error message
        });
        return;
      }

      setAuthUser(data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        toast.error('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
