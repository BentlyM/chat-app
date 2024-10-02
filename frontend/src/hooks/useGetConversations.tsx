import { useEffect, useState } from 'react'
import { ConversationType } from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<ConversationType[]>([]);

  useEffect(()=>{
    (async () => {
        setLoading(true);
        try{
            const res = await fetch('/api/messages/conversations',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            setConversations(data);
        }catch(error){
            if(error instanceof Error){
                toast.error(error.message);
            }
        }finally{
            setLoading(false);
        }
    })();
  }, []);

  return {loading, conversations};
}

export default useGetConversations