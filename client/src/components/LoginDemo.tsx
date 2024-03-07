import { useState } from 'react';
import '../styles/LoginDemo.css';
import Header from './sub_LoginDemo/Header';
import LoginPane from './sub_LoginDemo/LoginPane';
import PicsPane from './sub_LoginDemo/PicsPane';

const LoginDemo = () => {
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  return (
    <div className="background">
      <Header />
      <div className=" border border-dark rounded px-1 py-5 parent-container">
        <PicsPane autoPlay={autoPlay} />
        <div
          className=" border border-secondary rounded p-4 child-container shadowed"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <LoginPane />
        </div>
      </div>
    </div>
  );
};

export default LoginDemo;
