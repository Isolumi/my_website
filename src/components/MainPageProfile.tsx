import pfp from "../assets/default-pfp.png";

const MainPageProfile = () => {
  return (
    <div className="border-2 border-blue3 rounded-md flex flex-col items-center w-[300px]">
      <span className="display flex h-[200px] mb-5">
        <img src={pfp} alt="pfp" className="object-contain" />
      </span>
      <div className="bg-blue2 w-11/12 text-center text-white rounded border-4 border-blue3 font-bold">
        Education
      </div>
      <div className="w-11/12 flex flex-row">
        <div className="w-2/5 font-bold">University</div>
        <div>
          <a href="https://en.wikipedia.org/wiki/University_of_Toronto">
            <span className="text-blue-600 hover:underline">
              University of Toronto
            </span>
            <br />
            (2022 - present)
          </a>
        </div>
      </div>

      <div className="bg-blue2 w-11/12 text-center text-white rounded border-4 border-blue3 font-bold">
        Experience
      </div>
      <div className="w-11/12 flex flex-row">
        <div className="w-2/5 font-bold">Loobo Inc.</div>
        <div>
          Developer
          <br />
          (Apr '23 - present)
        </div>
      </div>

      <div className="bg-blue2 w-11/12 text-center text-white rounded border-4 border-blue3 font-bold">
        Projects
      </div>
      <div className="w-11/12 flex flex-row">
        <div className="w-2/5 font-bold">
            Pathway Conductor<br/><br/>
            Checkers-AI<br/>
        </div>
        <div className="w-3/5">
            University pathway planner.<br/><br/>
            Interactive checkers game with tree based AI.<br/>
        </div>
      </div>
    </div>
  );
};

export default MainPageProfile;
