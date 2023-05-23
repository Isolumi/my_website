import { Link } from "react-router-dom";
import Button from "./Button";

const SideNav = () => {
  const btn1: string = 'About Me';
  const btn2: string = 'Skills';
  const btn3: string = 'Hobbies';
  const btn4: string = 'Resume';
  const btn5: string = 'Links';

  return (
    <div className="w-1/6 flex justify-center">
        <ul className="w-full">
            <li><Link to="/test"><Button text={ btn1 }/></Link></li>
            <li><Link to="/test"><Button text={ btn2 }/></Link></li>
            <li><Link to="/test"><Button text={ btn3 }/></Link></li>
            <li><Link to="/test"><Button text={ btn4 }/></Link></li>
            <li><Link to="/test"><Button text={ btn5 }/></Link></li>
        </ul>
    </div>
  );
};

export default SideNav;
