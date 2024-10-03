import {useEffect, useRef} from 'react';
import { MessageType } from '../zustand/useConversation';

function useChatScroll(dep: MessageType[]) {
    const ref = useRef<HTMLElement>();

    useEffect(() => {
        setTimeout(() => {
            if(ref.current){
                ref.current.scrollTop = ref.current.scrollHeight;
            }
        }, 100);
    }, [dep]);

    return ref;
}

export default useChatScroll;