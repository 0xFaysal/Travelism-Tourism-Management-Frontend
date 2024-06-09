import Select from "react-select";
import "./AllTouristPlace.css";
import {useEffect, useState} from "react";
import Card from "../Card/Card";

const options = [
    {value: "views", label: "Total Viewed"},
    {value: "price", label: "Average Price"},
    {value: "time", label: "Travel Time"},
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "white",
        border: "2px solid #00000",
        borderRadius: "9999px",
        width: "250px",
        height: "100%",
        padding: "0.5rem 0.8rem",
        display: "flex",
        fontStyle: "bold",
        alignItems: "center",
        justifyContent: "space-between",
        color: "black",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? "black" : "white",
        color: state.isFocused ? "white" : "black",
    }),
    // other styles
};

async function getData(parameter) {
    const response = await fetch(
        `http://localhost:3000/api/v1/get/data=${parameter}`
    );
    const data = await response.json();
    console.log(data);
    return data;
}

function AllTouristPace() {
    const [filerItems, setFilerItems] = useState("all");
    const [data, setData] = useState([]);

    useEffect(() => {
        // getData(filerItems);
        getData(filerItems).then((data) => {
            const slicedData = data.slice(0, 6);
            setData(slicedData);
        });
        console.log(data);
    }, []);

    return (
        <section className='mt-16 container mx-auto'>
            <div>
                <h3 className='text-center font-medium text-accent uppercase md:text-lg text-base'>
                    Explore Popular Spots
                </h3>
                <h1 className='text-center font-bold text-3xl md:text-5xl mt-3'>
                    What we offer is an unforgettable <br /> journey and
                    experience.
                </h1>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4 mt-8'>
                    <div>
                        <div className='border-2 border-base-content px-3 py-2 rounded-full backdrop-blur-lg'>
                            <input
                                type='text'
                                className='bg-transparent outline-none border-none font-medium text-lg text-base-content placeholder:text-base-content ml-2 w-48 md:w-80 py-2'
                                placeholder='Search for a place...'
                            />
                            <button className='bg-base-content text-secondary  px-4 md:px-8 font-medium py-2 rounded-full'>
                                Search
                            </button>
                        </div>
                    </div>
                    <div>
                        <Select
                            className='basic-single'
                            classNamePrefix='Filter.'
                            isDisabled={false}
                            isLoading={false}
                            isClearable={true}
                            isRtl={false}
                            isSearchable={false}
                            name='color'
                            styles={customStyles}
                            options={options}
                        />
                    </div>
                </div>
                <div className='flex flex-wrap gap-2 justify-center items-center mt-6'>
                    <button
                        className={`${
                            filerItems == "all" ? "active-item" : ""
                        }  border-2 border-base-content px-3 py-2 rounded-3xl`}
                        onClick={() => {
                            setFilerItems("all");
                        }}
                    >
                        All
                    </button>
                    <button
                        className={`${
                            filerItems == "bangladesh" ? "active-item" : ""
                        }  border-2 border-base-content px-3 py-2 rounded-3xl`}
                        onClick={() => {
                            setFilerItems("bangladesh");
                        }}
                    >
                        Bangladesh
                    </button>
                    <button
                        className={`${
                            filerItems == "thailand" ? "active-item" : ""
                        }  border-2 border-base-content px-3 py-2 rounded-3xl`}
                        onClick={() => {
                            setFilerItems("thailand");
                        }}
                    >
                        Thailand
                    </button>
                    <button
                        className={`${
                            filerItems == "indonesia" ? "active-item" : ""
                        }  border-2 border-base-content px-3 py-2 rounded-3xl`}
                        onClick={() => {
                            setFilerItems("indonesia");
                        }}
                    >
                        Indonesia
                    </button>
                    <button
                        className={`${
                            filerItems == "malaysia" ? "active-item" : ""
                        }  border-2 border-base-content px-3 py-2 rounded-3xl`}
                        onClick={() => {
                            setFilerItems("malaysia");
                        }}
                    >
                        Malaysia
                    </button>
                    <button
                        className={`${
                            filerItems == "vietnam" ? "active-item" : ""
                        }  border-2 border-base-content px-3 py-2 rounded-3xl`}
                        onClick={() => {
                            setFilerItems("vietnam");
                        }}
                    >
                        Vietnam
                    </button>
                    <button
                        className={`${
                            filerItems == "cambodia" ? "active-item" : ""
                        }  border-2 border-base-content px-3 py-2 rounded-3xl`}
                        onClick={() => {
                            setFilerItems("cambodia");
                        }}
                    >
                        Cambodia
                    </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center justify-around mt-12 px-16 gap-y-8'>
                    {Array.isArray(data) &&
                        data.map((item) => (
                            <Card key={item?._id} data={item} />
                        ))}
                </div>
            </div>
        </section>
    );
}

export default AllTouristPace;
