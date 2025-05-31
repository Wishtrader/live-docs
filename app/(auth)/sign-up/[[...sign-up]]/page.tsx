import React from 'react';
import {SignUp} from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className='auth-page flex items-center justify-center min-h-screen'>
      <SignUp />
    </main>
  );
};

export default SignUpPage;