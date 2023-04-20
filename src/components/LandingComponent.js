import React from 'react';
import { SignUpComponent } from './SignUpComponent';

export const LandingComponent = () => {
  
    const handleSignUpClick = ()=> {
        return (
            console.log("clicked")
        )
    }
  
    return (
    <div><SignUpComponent /></div>
  )
};


