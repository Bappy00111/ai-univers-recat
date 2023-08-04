import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar,faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const SingelData = (props) => {
    console.log(props.singleData)
    const { name, image, features, published_in } = props.singleData
    return (
        <div className='border-2 p-4 rounded-lg  shadow-2xl '>
            <div className="card w-full h-full bg-base-100 ">
                <figure><img className='w-full rounded-xl' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Features</h2>
                    {
                        features.map((feature, index) => <p>{index + 1}.{feature}</p>)
                    }
                    <hr className='border-2' />
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-lg'>{name}</p>
                            <p>
                            <span className='mr-2 '>
                            <FontAwesomeIcon icon={faCalendar} />
                            </span>
                                {published_in}
                                </p>
                        </div>
                       <span className='cursor-pointer'> <FontAwesomeIcon icon={faArrowAltCircleRight} /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingelData;