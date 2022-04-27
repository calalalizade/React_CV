import './UserCV.css';
import Contacts from './components/Contacts';
import PersonalInfo from './components/PersonalInfo';
import About from './components/About';
import Experience from './components/Experience';


function UserCV () {
  return (
    <div className="App">
      <div className = "Left_side">
        <PersonalInfo />
        <Contacts />
      </div>

      <div className="Right_side">
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default UserCV;
