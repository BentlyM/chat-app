import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

type SignUpInputs = {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: string;
};

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async (inputs: SignUpInputs) => {
    try {
      setLoading(true);
      const res = await fetch('http://127.0.0.1:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();

      console.log(data);

      if (!res.ok) throw new Error(data.error);
      setAuthUser(data);
    } catch (error) {
      if (error instanceof Error) return console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;
