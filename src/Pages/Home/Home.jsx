import AllTouristPace from "../../components/AllTouristPlace/AllTouristPlace";
import ContactUs from "../../components/ContectUs/ContectUs";
import MostVisitedCountryList from "../../components/CountryList/MostVisitedCountryList";
import Hero from "../../components/Hero/Hero";
import WhyUS from "../../components/WhyUS/WhyUS";
import Header from "../../utility/Header";
function Home() {
    return (
        <div className='scroll-smooth'>
            <Header title='' />
            <Hero />
            <MostVisitedCountryList />
            <WhyUS />
            <AllTouristPace />
            <ContactUs />
        </div>
    );
}

export default Home;
