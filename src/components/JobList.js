import { useEffect, useState } from 'react'
// import {fetchDataset} from './data'
export default function JobList(){
    const [data,setData] = useState(null);
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch('https://localhost:5001/ml?dataset=naukri_data_science_jobs_india&source=database');
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, [])

    // console.log(fetchDataset())
    return <>
        <ul>
        {/* {console.log(data)} */}
        {data.data.map((job) => (
            <li>
                {job.company}
            </li>
          ))}
        </ul>
    </>
}