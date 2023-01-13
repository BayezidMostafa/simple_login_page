import { Button } from '@mui/material';
import React from 'react';
import { formLogo } from '../../Assets/assets';
import { FormBodyText, FormHeaderText, FormSection, InputContainer, ToggleButtonContainer } from './FormStyle';
import Toggle from './Toggle';

const Form = () => {
    return (
        <FormSection>
            <img src={formLogo} alt="" />
            <FormHeaderText>
                It's delight to have you onboard
            </FormHeaderText>
            <FormBodyText>
                Help us to know you better. <br />
                (This is how we optimize Wobot as your business needs)
            </FormBodyText>
            <InputContainer>
                <label htmlFor="company_name">Company Name</label>
                <input id='company_name' type="text" placeholder='e.g. Example Inc' />
            </InputContainer>
            <InputContainer>
                <label htmlFor="industry">Industry</label>
                <select name="" id="industry">
                    <option disabled value="">Select</option>
                    <option value="Option One">Option One</option>
                    <option value="Option Two">Option Two</option>
                    <option value="Option Three">Option Three</option>
                </select>
            </InputContainer>
            <InputContainer>
                <label htmlFor="company_name">Company Name</label>
                <ToggleButtonContainer><Toggle /></ToggleButtonContainer>
            </InputContainer>
            <Button
                sx={{ width: '368px', marginTop: '50px' }}
                fullWidth
                variant='contained'
            >Get Started</Button>
        </FormSection>
    );
};

export default Form;