
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
        <div className='row'>
            <div className = 'col-0'>
            <div className='alert alert-secondary'>       
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
            </div>
            {/* <div className='col-10'> */}
            {/* <select className="custom-select" id="inputGroupSelect01" style={{backgroundColor:'green',color:'white'}}>
<option defaultValue hidden={true}>Currency (£ Pound)</option>
<option value="Dollar" name="Dollar">$ Dollar</option>
<option value="Pound" name="Pound">£ Pound</option>
<option value="Euro" name="Euro"> € Euro</option>
<option value="Rupee" name="Rupee">₹ Rupee</option>
  </select>
            </div> */}
        </div>
 


        

    );
};
export default Budget;