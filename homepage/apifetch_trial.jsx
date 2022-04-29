import React, { useEffect, useState } from 'react';
import axios from 'axios';

function apifetch_trial() {
    const url='https://codeforces.com/api/problemset.problems?tags=implementation'
    const [Name,setName]=useState(null)
    const [arr,setArr]=useState([])
    
    useEffect(()=>{
        axios.get(url)
          .then(response =>{ 
            setName(response.data.result.problems)
            setArr(response.data.result.problems)
        })

    },[url])


   if (Name){
        return (
            <div>
                {Object.keys(Name).map((name) =>(
                      <p> {}</p>

            ))}
            </div>
            )}
            
    return (
        <div>hello</div>
    )
};
export default apifetch_trial;
