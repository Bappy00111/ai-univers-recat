import React, { useEffect, useState } from 'react';
import SingelData from '../SingelData/SingelData';

const Card = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => setData(data.data.tools))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-12 mt-16'>
            {
                data.slice(0,6).map(singelData => <SingelData
                singleData={singelData}
                key={singelData.id}
                ></SingelData>)
            }
        </div>
    );
};

export default Card;