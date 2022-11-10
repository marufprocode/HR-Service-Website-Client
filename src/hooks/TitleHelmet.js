import { useEffect } from "react"


const useTitleHelmet = title => {
    useEffect(()=>{
        document.title=`HR Vision- ${title}`;
    },[title])
}

export default useTitleHelmet; 