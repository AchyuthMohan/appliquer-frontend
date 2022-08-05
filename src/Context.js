import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import baseUrl from './utils/urls'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchTerm,setSearchTerm]= useState('a')
    const [jobs,setJobs]= useState([])

    const fetchjobs= async()=>{
        try{
            axios.get(`${baseUrl}/jobs/`).then(res=>{
                setJobs(res.data);
                console.log(jobs)
            })
        }catch(e){



        }

    }
    const[trendings,setTrendings]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/trending/').then((response)=>{
            setTrendings(response.data);
        },(error)=>{
            console.log(error)
        })
    },[])

 /*   useEffect(()=>{
        {

            try{
                axios.get("http://127.0.0.1:8000/jobs/").then(res=>{
                    setJobs(res.data);
                    console.log(jobs)
                })
            }catch(e){}
    
        }
    },[searchTerm]) */


    return <AppContext.Provider value={{
        loading,
        
    }}>{children}</AppContext.Provider>
}


















export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }