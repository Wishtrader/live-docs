import React from 'react';
import {SignIn} from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className='auth-page flex items-center justify-center min-h-screen'>
      <SignIn />
    </main>
  );
};

export default SignInPage;