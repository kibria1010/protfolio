import React, { useState } from 'react';

function Dropdown() {
  const [selectedValue, setSelectedValue] = useState(''); // State to store the selected value

  const options = [
    { label: 'Todo', value: 'option1' },
    { label: 'Social Media Application (Users Post)', value: 'option2' },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update state on selection change
  };

  return (

    <div className="WelcomeComponent">

        <div class="segment"></div>

        <div class="segment">
           <h2 style={{textAlign: "center"}}>Projects</h2>
            <hr></hr>

            <div style={{textAlign: "center"}}>
                <select id="my-dropdown" value={selectedValue} onChange={handleChange}>
                    <option style={{textAlign: "center"}} value="">-- Please choose an option --</option> {/* Default empty option */}
                    {options.map((option) => (
                    <option style={{textAlign: "center"}} key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                </select>
                {selectedValue && <p>You selected: {selectedValue}</p>}
            </div>
        </div>

        <div class="segment"></div>
    </div>
  );
}

export default Dropdown;