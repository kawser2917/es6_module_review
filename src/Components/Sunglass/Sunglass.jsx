import React from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, divide, mul } from '../../utlis/utlis';

const Sunglass = () => {
    sum = add(10,20)
    gunfol = mul(10,2)
    vaag = divide(20,10)
    return (
        <div>
            <Watch></Watch>  
        </div>
    );
};

export default Sunglass;