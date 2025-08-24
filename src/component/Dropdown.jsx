import { useState } from 'react';
import Video from './todo.webm'
import Video2 from './users_post.webm'
import { Link } from 'react-router-dom';

function Dropdown() {

  const [selectedValue, setSelectedValue] = useState(''); // State to store the selected value

  const options = [
    { label: 'Todo', value: 'Todo' },
    { label: 'Social Media Application (Users Post)', value: 'Users Post' },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update state on selection change
  };

  return (

    <div className="WelcomeComponent">

        <div class="segment"></div>

        <div class="segment">
           <h2 style={{textAlign: "center"}}>Projects</h2>
            

            <div style={{textAlign: "center"}}>
                <select id="my-dropdown" value={selectedValue} onChange={handleChange}>
                    <option style={{textAlign: "center"}} value="">-- Please choose an option --</option> {/* Default empty option */}
                    {options.map((option) => (
                    <option style={{textAlign: "center"}} key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    
                    ))}
                </select>
  
                <hr></hr>
  
                {selectedValue === 'Todo' ? (
                  <div class="mt-5">
                       <video src={Video} controls="true" autoPlay="true" style={{height: 500, width: 1000,}} />
                  </div>          
                ) : (
                    <p> </p>
                )}

                {selectedValue === 'Users Post' ? (
                  <div class="mt-5">
                       <video src={Video2} controls="true" autoPlay="true" style={{height: 500, width: 1000,}} />
                  </div>          
                ) : (
                    <p> </p>
                )}
                
                {/*
                  {!selectedValue  &&       
                    <div class='mt-5'>  
                      <figure> <img  style={{height: 500, width: 1000,}} src={Todo} alt="fireSpot"/></figure>
                    </div>
                  }
                */}

                {selectedValue=="Todo" && <p><Link className="nav-link" to="https://github.com/kibria1010/Todo_RestAPI" target="_blank">GitHubLink</Link></p>}
                {selectedValue=="Users Post" && <p><Link className="nav-link" to="https://github.com/kibria1010/SocialMediaApplication_Users_Post_RESTful_API" target="_blank">GitHubLink</Link></p>}
                {/*
                {selectedValue=="Todo" && <p>You selected: {selectedValue}</p> }
                */}

            </div>
        </div>

        <div class="segment">

          
        </div>
    </div>
  );
}

export default Dropdown;