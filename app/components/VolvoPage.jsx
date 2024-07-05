import Header from "./Header"
import MainContent from "./MainContent"
import EventSchedule from "./EventSchedule"
export default function VolvoPage(){
    return(
        <div className="w-full">
            <Header />
            <MainContent />
            <EventSchedule />
        </div>
    )
}