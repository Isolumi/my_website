import MainPageContent from "./MainPageContent";
import SideNav from "./SideNav";

const MainPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1280px] min-w-[720px] flex flex-row">
        <div className="min-w-[200px] max-w-[200px]">
          <SideNav />
        </div>
        <div>
          <MainPageContent />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
