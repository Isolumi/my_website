import Button from "./Button";

const SideNav = () => {
  const btn1: string = "About Me";

  return (
    <div className=" border-2 border-black w-1/6 flex justify-center">
        <ul>
            <li><Button text={ btn1 }/></li>
            <li>ddd</li>
            <li>bbb</li>
        </ul>
    </div>
  );
};

export default SideNav;
