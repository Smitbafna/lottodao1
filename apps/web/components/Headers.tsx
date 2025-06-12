import React from 'react';

import { Avatar } from '@coinbase/onchainkit/identity';
import { CivicAuthProvider } from "@civic/auth/nextjs";
import { UserButton } from "@civic/auth-web3/react";
const Header = ({ 
 
 
}) => {
    


  return (
    <header className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        {/* Title */}
        <div className="flex items-center space-x-4">
        <h1 className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
        LottoDAO
          </h1>
        
         
         
        </div>
        <div> <CivicAuthProvider>
          <UserButton />
          </CivicAuthProvider></div>
       
      </div>
    </header>
  );
};

export default Header;