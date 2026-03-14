import { useEffect } from "react";
import { useState } from "react";

const Part01 = () => {

    const [data, setData] = useState([]);

    var url = "https://jsonplaceholder.typicode.com/users"; 

    // useEffect(() => {
    //     var fetchData = fetch(url);

    //     fetchData.then((res) => {
    //         return res.json();
    //     }).then((data) => {
    //         console.log(data);
    //         setData(data);
    //         return data;
    //     })
    // }, []);

    useEffect(() => {
        async function fetchData() {
            var res = await fetch(url);
            var data = await res.json();
            console.log(data);
            setData(data);
        }
        fetchData();
    }, []);
        



    return (
        <>
           {
            data.map((item) => {
                return <div key={item.id}>
                    <h2>{item.name}</h2>
                    <h2>{item.email}</h2>
                </div>
            })
           }
        </>
    );
}
 
export default Part01;