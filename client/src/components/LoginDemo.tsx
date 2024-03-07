import { useState } from 'react';
import '../styles/LoginDemo.css';
import Header from './sub_LoginDemo/Header';
import LoginPane from './sub_LoginDemo/LoginPane';
import PicsPane from './sub_LoginDemo/PicsPane';

const autoplayTrue = {
  delay: 3000,
  disableOnInteraction: false,
};

const LoginDemo = () => {
  const [picScroll, setPicScroll] = useState<typeof autoplayTrue | boolean>(
    autoplayTrue
  );

  return (
    <div className="background">
      <Header />
      <div className=" border border-dark rounded px-1 py-5 parent-container">
        <PicsPane picScroll={picScroll} />
        <div className=" border border-secondary rounded p-4 child-container">
          <LoginPane
            autoplayTrue={autoplayTrue}
            setPicScroll={setPicScroll}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginDemo;

// when we enter information, the carousel stops
