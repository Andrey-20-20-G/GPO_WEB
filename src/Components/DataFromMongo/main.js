/* eslint-disable no-lone-blocks */
import React from "react";
// import useStateContext from "./Hooks/useStateContext";
// import Location_C from "./Location-Center";
import { useEffect, useState } from 'react';
import axios from 'axios'
import UserData from './TableWithResult'
import OnLoadingUserData from './LoadingDataAboutGroups'
import { Button, Card, TextField } from "@mui/material";
import useForm from "../Hooks/useForm";
//import { createAPIEndpoint, ENDPOINTS } from "../../api";
import getGraphData from '../../api/graph'
import useStateContext from "../Hooks/useStateContext";
import Graph from "./Cytoscape/GraphQLPage";
import Location_C from "../Location-Center";
// const base_URL = 'http://localhost:5164/api/Groups-haha/';
const getFreshModel = () =>
({
    id:''
})

export default function MainMenu()
{
  const DataLoading =  OnLoadingUserData(UserData);
  const [appState, setAppState] = useState(
    {
      loading: false,
      persons: null,
    }
  )

  
    const [open, setOpen] = React.useState(false);
//  useEffect(() => {
//     setAppState({loading: true})
//     const apiUrl = base_URL;
//     axios.get(apiUrl).then((resp) => {
//       const allPersons = resp.data;
//       setAppState({
//       loading: false,
//       persons: allPersons
//        });
//     });
//   }, [setAppState]);
  const {context, setContext} = useStateContext();
  const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    // const vk_data = e=>
    //     {
    //         e.preventDefault();
    //             createAPIEndpoint(ENDPOINTS.Tables + '/' + values.id).get(values).then(res=>{
    //                 setContext({ participantId: res.data.participantId })
                    
    //             })
    //             .catch(err => console.log(err));
            
        
    //     }
  return (
    //<>
    <div className="search-area">
    {/* <Card sx={{m:10}}> */}
    
    <TextField color = "secondary" 
        label = "Id"
        name = "id"
        value = {values.id}
        onChange = {handleInputChange}
        variant="outlined"
        />
    <Button sx={{width : 200, height : 55}} variant="contained" color
        = "secondary" type = "submit" size="large" onClick={()=>setOpen(true)}>
      Get Info
    {/* </Button></Card></div> */}
    
    </Button><Location_C>{open && <Graph> Graph </Graph>}</Location_C></div>
    );

}

{/* <div className="app">
        <DataLoading isLoading={appState.loading} persons={appState.persons} />
      </div></> */}

// import React from 'react';
// import axios from 'axios';

// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`http://localhost:5164/api/GraphML`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         {
//           this.state.persons
//             .map(person =>
//               <li key={person.id}>{person.name}</li>
//             )
//         }
//       </ul>
//     )
//   }
// }