import MainPageContent from "./MainPageContent";
import SideNav from "./SideNav"

const MainPage = () => {
    return ( 
        <div className="w-100 flex flex-row">
            <div className="min-w-[200px] max-w-[200px]">
                <SideNav />
            </div>
            <div>
                <MainPageContent />
            </div>
        </div>
     );
}
 
export default MainPage;