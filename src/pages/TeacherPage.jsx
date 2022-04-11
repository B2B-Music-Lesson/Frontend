import React, {useState} from 'react'
import { ActionBanner } from ".";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Dropdown , Option} from '../components/Dropdown';

const TeacherPage = () => {

    const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };

    return (

        <div className="teacher-page">
            <ActionBanner headerText="Please add new Challenges here" />
        <div class="col-sm">

       
      <Dropdown
        formLabel="Choose an instrument"
        buttonText="Send form"
        onChange={handleSelect}
        action="/"
      >
        <Option selected value="Click to see options" />
        <Option value="Piano" />
        
      </Dropdown>

             
        <label for="firstName" class="sr-only">
          First Name
        </label>
        <input
          type="text"
      
          class="form-control"
          placeholder="First Name"
          required=""
          autofocus=""
        />
        <label for="lastName" class="sr-only">
          Last Name
        </label>
        <input
          type="text"
         
          class="form-control"
          placeholder="Last Name"
          required=""
          autofocus=""
        />
        <label for="email" class="sr-only">
          Email address
        </label>
        <input
          type="email"
          
          class="form-control"
          placeholder="Email address"
          required=""
          autofocus=""
        />
        <label for="password" class="sr-only">
          Password
        </label>
        <input
          type="password"
          
          class="form-control"
          placeholder="Password"
          required=""
        />
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultValue={false} />}
            
            label="Are you a teacher?" />
        </FormGroup>
        
        <button
          class="btn btn-lg btn-primary btn-block"
        
        >
          Register
        </button>{" "}
       
      </div>
      </div>
    )
}

export default TeacherPage;