import React from 'react';

const Button = (props) => {
  
    const {children} = props;
   
    return (
        <div className='text-center mt-3'>
            <button className="btn btn-primary">{children}</button>
        </div>
    );
};

export default Button;