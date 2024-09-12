import { useEffect } from "react";
import api from "../utils/api";


const fetchHaircut = (id) =>{
  useEffect(() => {
       const fetchData = async () =>{
          
          try{
            const  {data}  = await api.get(`/all-haircut/${id}`);
            
          }catch(err){
            console.log(err);
          }
          
       }
     fetchData()
  },[id])
 return data;
}

const fetchDetailHaircut = (id) =>{
  const [data, setData] = useState([])
  const [loadings, setLoading] = useState(false)
  const [error, setError] = useState([])
  useEffect(() => {
       const fetchData = async () =>{
          setLoading(true)
          try{
            const  data  = await api.get(`/detail-haircut/${id}`);
            setData(data)
          }catch(err){
            setError(err)
          }
          setLoading(false)
       }
     fetchData()
  },[id])
 return {data , loadings , error }
}
export { fetchHaircut, fetchDetailHaircut };