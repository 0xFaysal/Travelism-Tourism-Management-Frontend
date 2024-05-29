import AllTouristPace from "../../components/AllTouristPlace/AllTouristPlace";
import MostVisitedCountryList from "../../components/CountryList/MostVisitedCountryList";
import Hero from "./Hero";
function Home() {
    return (
        <div className='scroll-smooth'>
            <Hero />
            <MostVisitedCountryList />
            <AllTouristPace />
        </div>
    );
}

export default Home;
