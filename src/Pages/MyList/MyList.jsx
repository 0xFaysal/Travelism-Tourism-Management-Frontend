import {useContext, useEffect, useState} from "react";
import Select from "react-select";
import Card from "../../components/Card/Card";
import {AuthContext} from "../../provider/AuthProvider";

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
    try {
        const response = await fetch(
            `http://localhost:3000/api/v1/get/data=${parameter}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
    // console.log(data);
}

function MyList() {
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(false);

    const {user} = useContext(AuthContext);
    console.log(user.uid);
    const [filerItems, setFilerItems] = useState(user.uid);

    useEffect(() => {
        // getData(filerItems);
        getData(filerItems).then((data) => {
            setData(data);
        });
        console.log(data);
    }, []);
    return (
        <section className='container mx-auto mt-28'>
            <div className='flex flex-col md:flex-row items-center justify-around gap-4 mt-8'>
                <button
                    className='btn btn-secondary w-3/4 md:w-32 font-bold text-xl leading-3'
                    onClick={() => setEdit(!edit)}
                >
                    Edit
                </button>
                <div className='flex gap-4 flex-col md:flex-row items-center'>
                    <div className='flex flex-wrap gap-2 justify-center items-center'>
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
            </div>
            <dir className='grid p-0 place-items-center w-full'>
                <div className='grid  place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-12  w-fit gap-8'>
                    {Array.isArray(data) &&
                        data.map((item) => (
                            <div key={item.id} className='w-fit'>
                                <Card key={item?._id} data={item} />
                                {edit ? (
                                    <div>
                                        <button className='btn btn-accent px-2 w-1/2 py-1 rounded-lg'>
                                            Update
                                        </button>
                                        <button className='btn btn-error w-1/2 mt-2 '>
                                            Remove
                                        </button>
                                    </div>
                                ) : null}
                            </div>
                        ))}
                </div>
            </dir>
        </section>
    );
}

export default MyList;
