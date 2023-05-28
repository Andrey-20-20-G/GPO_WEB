import axios from "axios";
import {useState, useEffect} from 'react';

//import mockedData from "../mock/graph";
export class MyValue{
    result = this.result;
}

const MOCKED_DATA_URL = "http://localhost:5164/api/GraphML/100169424";

function GetGraphData()
{
    const [responseData, setResponseData] = useState([]);
    useEffect(()=>{
        axios.get(MOCKED_DATA_URL).then(data => 
            {
                
                setResponseData(data.data.graphMLFile);
                
            })
    }, []);
        this.result = responseData
    return(
        <div>Hello
        
            
                <p>
            {responseData}        
        </p>
            
        
        </div>
    )
    
}
export default GetGraphData
//   try {
//     const ID = {
//         "graph_id" : id
//     }
    //let url = BASE_URL + 'api/' + endpoint + '/';
    //const data = await axios.get(MOCKED_DATA_URL, ID);
     
//   } catch (err) {
//     console.log(err.message);
//   }
