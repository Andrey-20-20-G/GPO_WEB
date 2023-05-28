import React, {Component, createRef} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import MyValue from '../../../api/graph'
//import CytoscapeComponent from 'react-cytoscapejs';
import CytoscapeComponent from './Graph/Cytoscape';
import Location_C from '../../Location-Center';
import Location_R from '../../Location-Right';
import GraphResponse from '../../../api/graph'
const MOCKED_DATA_URL = "http://localhost:5164/api/GraphML/100169424";
function Graph()
{
var  parser, xmlDoc;
var resp;
//var text3 = "C:\Users\user\Desktop\Работы для ГПО\VKAPIGraphml.txt"            <graphml><graph>
    const [responseData, setResponseData] = React.useState([]);
    // //React.useEffect(()=>{
      const response = axios.get(MOCKED_DATA_URL).then(data => 
            {
                resp = data.data.graphMLFile;              
                setResponseData(data.data.graphMLFile);
                
            })
    // }, []);
// var text2 = "<?xml version='1.0' encoding='utf-8'?>"+ 
// '<graphml xmlns="http://graphml.graphdrawing.org/xmlns" '+
// 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '+
// 'xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://graphml.graphdrawing.org/xmlns/1.0/graphml.xsd"><graph edgedefault="undirected">'+
// "<node id=\"1294339\"/>" + 
// "<node id=\"4071502\"/>" + 
// "<node id=\"5409752\"/>"+
// "<node id=\"5831956\"/>"+
// "<node id=\"7543486\"/>"+
// "<node id=\"14012569\"/> <node id=\"17720326\"/> <node id=\"18615216\"/>"+
// "<node id=\"28356043\"/> <node id=\"28777146\"/> <node id=\"31904339\"/> <node id=\"44595654\"/>"+
// "<node id=\"59378924\"/><node id=\"87819557\"/><node id=\"102166588\"/><node id=\"102752293\"/>"+
// "<node id=\"105976317\"/><node id=\"119193037\"/><node id=\"137316241\"/>"+
// "<node id=\"311359423\"/>"+
// "<edge source=\"4071502\" target=\"5409752\"/>"+
// "<edge source=\"4071502\" target=\"5831956\"/>"+
// "<edge source=\"4071502\" target=\"7543486\"/>"+
// "<edge source=\"4071502\" target=\"14012569\"/>"+
// "<edge source=\"4071502\" target=\"17720326\"/>"+
// "<edge source=\"4071502\" target=\"18615216\"/>"+
// "<edge source=\"4071502\" target=\"28356043\"/>"+
// "<edge source=\"4071502\" target=\"28777146\"/>" +
// "<edge source=\"4071502\" target=\"31904339\"/>"+
// '<edge source="4071502" target="44595654"/>'+
// '<edge source="4071502" target="87819557"/>'+
// '<edge source="4071502" target="102166588"/>'+
// '<edge source="4071502" target="102752293"/>'+
// '<edge source="4071502" target="105976317"/>'+
// '<edge source="4071502" target="119193037"/>'+
// '<edge source="4071502" target="137316241"/>'+
// '<edge source="5409752" target="4071502"/>'+
// '<edge source="5409752" target="14012569"/>'+
// '<edge source="5831956" target="4071502"/>'+
// '<edge source="5831956" target="7543486"/>'+
// '<edge source="5831956" target="14012569"/>'+
// '<edge source="5831956" target="31904339"/>'+
// '<edge source="5831956" target="102166588"/>'+
// '<edge source="5831956" target="102752293"/>'+
// '<edge source="7543486" target="4071502"/>'+
// '<edge source="7543486" target="5831956"/>'+
// '<edge source="7543486" target="14012569"/>'+
// '<edge source="7543486" target="28356043"/>'+
// '<edge source="7543486" target="102752293"/>'+
// '<edge source="7543486" target="119193037"/>'+
// '<edge source="14012569" target="1294339"/>'+
// '<edge source="14012569" target="4071502"/>'+
// '<edge source="14012569" target="5409752"/>'+
// '<edge source="14012569" target="5831956"/>'+
// '<edge source="14012569" target="7543486"/>'+
// '<edge source="14012569" target="17720326"/>'+
// '<edge source="14012569" target="18615216"/>'+
// '<edge source="14012569" target="28356043"/>'+
// '<edge source="14012569" target="28777146"/>'+
// '<edge source="14012569" target="31904339"/>'+
// '<edge source="14012569" target="44595654"/>'+
// '<edge source="14012569" target="59378924"/>'+
// '<edge source="14012569" target="87819557"/>'+
// '<edge source="14012569" target="102166588"/>'+
// '<edge source="14012569" target="102752293"/>'+
// '<edge source="14012569" target="105976317"/>'+
// '<edge source="14012569" target="119193037"/>'+
// '<edge source="14012569" target="137316241"/>'+
// '<edge source="17720326" target="4071502"/>'+
// '<edge source="17720326" target="14012569"/>'+
// '<edge source="17720326" target="28777146"/>'+
// "<edge source=\"17720326\" target=\"44595654\"/>"+
// "<edge source=\"17720326\" target=\"102752293\"/>"+
// "<edge source=\"17720326\" target=\"105976317\"/>"+
// "<edge source=\"17720326\" target=\"137316241\"/>"+
// "<edge source=\"18615216\" target=\"1294339\"/>"+
// "<edge source=\"18615216\" target=\"4071502\"/>"+
// "<edge source=\"18615216\" target=\"14012569\"/>"+
// "<edge source=\"18615216\" target=\"102752293\"/>"+
// "<edge source=\"28356043\" target=\"4071502\"/>"+
// "<edge source=\"28356043\" target=\"7543486\"/>"+
// "<edge source=\"28356043\" target=\"14012569\"/>"+
// "<edge source=\"28356043\" target=\"102752293\"/>"+
// "<edge source=\"31904339\" target=\"4071502\"/>"+
// "<edge source=\"31904339\" target=\"5831956\"/>"+
// "<edge source=\"31904339\" target=\"14012569\"/>"+
// "<edge source=\"31904339\" target=\"28777146\"/>"+
// "<edge source=\"31904339\" target=\"44595654\"/>"+
// "<edge source=\"31904339\" target=\"102166588\"/>"+
// "<edge source=\"31904339\" target=\"102752293\"/>"+
// "<edge source=\"59378924\" target=\"14012569\"/>"+
// "<edge source=\"87819557\" target=\"4071502\"/>"+
// "<edge source=\"87819557\" target=\"14012569\"/>"+
// "<edge source=\"87819557\" target=\"28777146\"/>"+
// "<edge source=\"87819557\" target=\"102752293\"/>"+
// "<edge source=\"102166588\" target=\"4071502\"/>"+
// "<edge source=\"102166588\" target=\"5831956\"/>"+
// "<edge source=\"102166588\" target=\"14012569\"/>"+
// "<edge source=\"102166588\" target=\"31904339\"/>"+
// "<edge source=\"102166588\" target=\"102752293\"/>"+
// "<edge source=\"137316241\" target=\"4071502\"/>"+
// "<edge source=\"137316241\" target=\"14012569\"/>"+
// "<edge source=\"137316241\" target=\"17720326\"/>"+
// "<edge source=\"137316241\" target=\"28777146\"/>"+
// "<edge source=\"137316241\" target=\"44595654\"/>"+
// "<edge source=\"137316241\" target=\"102752293\"/>"+
// '<edge source="137316241" target="105976317"/>'+
// "</graph></graphml>"

parser = new DOMParser();
xmlDoc = parser.parseFromString(response,"text/xml");//text2
 
let mass_id = new Array(xmlDoc.getElementsByTagName("node").length);
let mass_source = new Array(xmlDoc.getElementsByTagName("edge").length);
let mass_res = new Array(xmlDoc.getElementsByTagName("edge").length + xmlDoc.getElementsByTagName("node").length);
//var elements;

        var elements2
        for (let index = 0; index < xmlDoc.getElementsByTagName("node").length; index++) {
            elements2= [
            {data:{id: xmlDoc.getElementsByTagName("node")[index].id, label: xmlDoc.getElementsByTagName("node")[index].id}},
            ];
            //res = Object.entries(elements2);
            mass_id[index] = elements2[0];
        }
        for (let index = 0; index < xmlDoc.getElementsByTagName("edge").length; index++) {
            elements2= [
                { data: {source: xmlDoc.getElementsByTagName("edge")[index].attributes.source.value, target: xmlDoc.getElementsByTagName("edge")[index].attributes.target.value, label: 'Edge from Node1 to Node2'}},
            ];
            //res = Object.entries(elements2);
            mass_source[index] = elements2[0];

        }
        for (let index = 0; index < mass_id.length; index++) {
            mass_res[index] = mass_id[index];
        }
        for (let index = mass_id.length; index < mass_res.length; index++) {
             mass_res[index] = mass_source[index - mass_id.length];
        }
        
                const result = Object.assign(mass_res);
                // mass_res.forEach(element => {
                //     console.log(element)
                // });
//cose-bilkent

     return( 
        <Location_R>
          <div className='graph-location'>
            <CytoscapeComponent elements={result} layout={{name: "concentric", nodeDimensionsIncludeLabels: true}} style={ { width: '1200px', height: '1200px', backgroundColor: '#404040'} } cy={cy => (this.ref = cy)} 
            stylesheet={[
                {
                  selector: 'node',
                  style: {
                    'background-color': '#33ff99',
                    'shape': "round-rectangle",
                    'label': 'data(label)',
                    'color': '#3399FF'
                  }
                },
                {
                  selector: 'edge',
                  style: {
                    'width': 2,
                    'line-color': '#0080',
                    'target-arrow-color': '#8A7DB2',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier'
                  }
                }
              ]}
            />
            </div>
        </Location_R>
     
     );
}
export default Graph
  
