import {useEffect, useRef, useState} from "react";
import Select from "react-select";
import Card from "../../components/Card/Card";

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

function TouristSpots() {
    const [filerItems, setFilerItems] = useState("all");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(null);
    const searchData = useRef(null);

    async function getData(parameter) {
        setLoading(true);
        const response = await fetch(
            `https://travelism-xi.vercel.app/api/v1/get/data=${parameter}`
        );
        const data = await response.json();
        setLoading(false);
        return data;
    }

    async function search(perameter) {
        setLoading(true);
        const response = await fetch(
            `https://travelism-xi.vercel.app/api/v1/get/search=${perameter}`
        );
        const data = await response.json();
        setLoading(false);
        return data;
    }

    const handleInput = (e) => {
        if (e.target.value) {
            search(e.target.value).then((data) => {
                setData(data);
            });
        }
    };

    const handleSearch = () => {
        const searchValue = searchData.current.value;
        if (searchValue) {
            search(searchValue).then((data) => {
                setData(data);
            });
        }
    };

    const handleChange = (selectedOption) => {
        if (selectedOption?.value === "views") {
            const sortedData = [...data].sort(
                (a, b) => b.total_visitors_per_year - a.total_visitors_per_year
            );
            setData(sortedData);
        }
        if (selectedOption?.value === "price") {
            const sortedData = [...data].sort(
                (a, b) => a.average_cost - b.average_cost
            );
            setData(sortedData);
        }
        if (selectedOption?.value === "time") {
            const sortedData = [...data].sort(
                (a, b) => a.travel_time - b.travel_time
            );
            setData(sortedData);
        }
    };

    useEffect(() => {
        getData(filerItems).then((data) => {
            setData(data);
        });
    }, [filerItems]);
    return (
        <section className='container mx-auto mt-28'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 mt-8'>
                <div>
                    <div className='border-2 border-base-content px-3 py-2 rounded-full backdrop-blur-lg'>
                        <input
                            type='text'
                            className='bg-transparent outline-none border-none font-medium text-lg text-base-content placeholder:text-base-content ml-2 w-48 md:w-80 py-2'
                            placeholder='Search for a place...'
                            onChange={handleInput}
                            ref={searchData}
                        />
                        <button
                            onClick={handleSearch}
                            className='bg-base-content text-secondary  px-4 md:px-8 font-medium py-2 rounded-full'
                        >
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
                        onChange={handleChange}
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
            <dir className='grid p-0 place-items-center w-full'>
                {loading ? (
                    <div className='mt-15 h-screen w-full grid place-items-center'>
                        <span className='loading loading-bars loading-lg'></span>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 lg:flex-nowrap flex-wrap md:grid-cols-2 lg:grid-cols-3 w-fit gap-8'>
                        {Array.isArray(data) &&
                            data.map((item) => (
                                <Card key={item?._id} data={item} />
                            ))}
                    </div>
                )}
            </dir>
        </section>
    );
}

export default TouristSpots;
