import MainPageContent from "./MainPageContent";
import SideNav from "./SideNav"

const MainPage = () => {
    return ( 
        <div className="w-100 flex flex-row border-2">
            <SideNav />
            <MainPageContent />
        </div>
     );
}
 
export default MainPage;