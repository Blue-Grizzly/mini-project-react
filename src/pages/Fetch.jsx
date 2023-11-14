import { useEffect, useState } from 'react'
import Table from '../components/Table.jsx';

export default function FetchUsers(){
    const [data, setData] = useState([]);

    useEffect(()=>{
      fetch('http://localhost:4000/users')
      .then(response=> response.json())
      .then(data => setData(data));
    }, []);

    
    return ( <Table data={data}/>);
}