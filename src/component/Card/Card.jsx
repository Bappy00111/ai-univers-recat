import React, { useEffect, useState } from 'react';
import SingelData from '../SingelData/SingelData';
import Button from '../Button/Button';


const Card = () => {
   
    const [data,setData] = useState([])
    const [showAll,SetShowall] = useState(false)

    const showallData= () =>{
        SetShowall(true)
        // console.log('added click')
    }

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => setData(data.data.tools))
    },[])
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-12 mt-16'>
            {
                data?.slice(0, showAll ? 12 : 6).map(singelData => <SingelData
                singleData={singelData}
                key={singelData.id}
                ></SingelData>)
            }
        </div>
        <p onClick={showallData}>
        <Button>see more</Button>
        </p>
        </>
        
    );
};

export default Card;