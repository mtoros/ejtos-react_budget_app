import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
        
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });        
    }
   
    return (
        <div>
            <select  onChange={handleCurrencyChange} name="currency" className="alert alert-secondary"
            value={newCurrency}>
              <option value="$" >$ Dollar</option>
              <option value="£" >£ Pound</option>
              <option value="€" >€ Euro</option>
              <option value="₹" >₹ Ruppee</option>
            </select>
        </div>
    );
};


export default Currency;
