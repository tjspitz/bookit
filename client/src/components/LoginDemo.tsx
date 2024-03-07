import ParentContainer from './sub_LoginDemo/PicsPane';
import '../styles/LoginDemo.css';
import ChildContainer from './sub_LoginDemo/LoginPane';
import Header from './sub_LoginDemo/Header';

const LoginDemo = () => {

  return (
    <div className="background">
      <Header />
      <div className=" border border-dark rounded px-1 py-5 parent-container">
        <ParentContainer />
        <div className=" border border-secondary rounded p-4 child-container">
          <ChildContainer />
        </div>
      </div>
    </div>
  );
};

export default LoginDemo;
