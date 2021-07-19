import "./App.css";
import React, { useState } from "react";
import { CCard, CCol, CRow } from "@coreui/react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import TvIcon from "@material-ui/icons/Tv";
import HdIcon from "@material-ui/icons/Hd";
import DescriptionIcon from "@material-ui/icons/Description";
import { MultiSelect } from 'primereact/multiselect';

import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Chip,
  Button,
  Select,
  Form
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
function App() {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [results, setResults] = useState(null);
  const compData = [
    {
      compId: "1001",
      name: "comp1",
      price: "79.99",
      downspeed: "200",
      upspeed: "100",
      zipcode: "11111",
      noOfChannels:"120",
      hdChannels:"45",
      agreement:"-",  
      region: "Texas",
    },
    {
      compId: "1002",
      name: "comp2",
      price: "69.99",
      downspeed: "100",
      upspeed: "50",
      zipcode: "44444",
      noOfChannels:"220",
      hdChannels:"75",
      agreement:"1 year agreement", 
      region: "Newyork",
    },
    {
      compId: "1001",
      name: "comp1",
      price: "79.99",
      downspeed: "200",
      upspeed: "100",
      zipcode: "55555",
      noOfChannels:"170",
      hdChannels:"80",
      agreement:"2 years agreement",
      region: "Chicago",
    },
    {
      compId: "1002",
      name: "comp2",
      price: "69.99",
      downspeed: "100",
      upspeed: "50",
      zipcode: "66666",
      noOfChannels:"200",
      hdChannels:"25",
      agreement:"1 year agreement",
      region: "SAN",
    },
    {
      compId: "1001",
      name: "comp1",
      price: "79.99",
      downspeed: "150",
      upspeed: "75",
      zipcode: "66666",
      noOfChannels:"220",
      hdChannels:"75",
      agreement:"1 year agreement",
      region: "SAN",
    },
    {
      compId: "1003",
      name: "comp3",
      price: "89.99",
      downspeed: "200",
      upspeed: "100",
      noOfChannels:"140",
      hdChannels:"50",
      agreement:"3 years agreement",
      zipcode: "66666",
      region: "SAN",
    },
    {
      compId: "1001",
      name: "comp1",
      price: "67.99",
      downspeed: "75",
      upspeed: "50",
      zipcode: "44444",
      noOfChannels:"120",
      hdChannels:"43",
      agreement:"-",
      region: "Newyork",
    },
    {
      compId: "1003",
      name: "comp3",
      price: "69.99",
      downspeed: "100",
      upspeed: "50",
      noOfChannels:"120",
      hdChannels:"85",
      agreement:"2 years agreement",
      zipcode: "44444",
      region: "Newyork",
    },
    ];
  const handleSubmit = async (event) =>{
    event.preventDefault()
    setResults(null)
    let filterArray =[]
    compData.map((data)=>{
     if( data.region===selectedCities ){
       filterArray.push(data)
       console.log(data)
     }
    })
    setResults(filterArray)
  }
  const cities = [
    {
      value: "SAN",
      label: "SAN",
    },
    {
      value: "Chicago",
      label: "Chicago",
    },
    {
      value: "Newyork",
      label: "Newyork",
    },
    {
      value: "Texas",
      label: "Texas",
    },
  ];
  const companies = [
    {
      value: "comp1",
      label: "comp1",
    },
    {
      value: "comp2",
      label: "comp2",
      
    },
    {
      value: "comp3",
      label: "comp3",
      
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col" style={{ marginTop: "3%" }}>
            <CRow>
            <p>Select competitors</p>
            <form  style={{ display: "flex", flexDirection: "row" }}  onSubmit={handleSubmit  }>
              <CCol xs="6" md="2" style={{marginRight:"20px"}}>
                <TextField id="country" select label="Select your city" fullWidth={true}
                onChange={(event)=>setSelectedCities(event.target.value)}
                 required>
                  {cities.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </CCol>
              {/*<CCol xs="6" md="2" style={{marginRight:"20px"}}>
               <MultiSelect display="chip" optionLabel="name" 
                  value={selectedCities} options={companies} 
                  onChange={(e) => setSelectedCities(e.value)} />
                
              </CCol> */}
              <CCol>
                <Button variant="contained" type="submit" color="primary" style={{margin:"10px 0 0 10px"}}>
                  search
                </Button>
              </CCol>
            </form>
            </CRow>
            <br />
            <CRow>
              <p>What products would you like to compare?</p>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label="Internet"
                  labelPlacement="end"
                />  
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label="TV"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label="Phone"
                  labelPlacement="end"
                />
              </div>
            </CRow>
            <br />
            <CRow>
              {results && <CCol xs="3">
                <CCard>
                  <CRow>
                    <div>
                      <div style={{ height: "20vh" }}></div>
                      <CCard
                        className="leftCard"
                        style={{ flexDirection: "row" }}
                      >
                        {" "}
                        <ArrowDownwardIcon /> &nbsp; Download Speed
                      </CCard>
                      <CCard
                        className="leftCard"
                        style={{ flexDirection: "row" }}
                      >
                        {" "}
                        <ArrowUpwardIcon /> &nbsp; Upload Speed
                      </CCard>
                      <CCard
                        className="leftCard"
                        style={{ flexDirection: "row" }}
                      >
                        <TvIcon /> &nbsp; No. of Channels
                      </CCard>
                      <CCard
                        className="leftCard"
                        style={{ flexDirection: "row" }}
                      >
                        <HdIcon /> &nbsp; HD Channels
                      </CCard>
                      <CCard
                        className="leftCard"
                        style={{ flexDirection: "row" }}
                      >
                        <DescriptionIcon /> &nbsp; Contract Terms
                      </CCard>
                    </div>
                  </CRow>
                </CCard>
              </CCol>}
              {results && results.map((result)=>{
                return(
                  <CCol xs="3">
                <CCard>
                  <div>
                    <div className={result.name}>
                      <h2 >{result.name}</h2>
                      <p >${result.price}/month</p>
                    </div>
                    <CCard className="leftCard"> {result.downspeed}Mbps</CCard>
                    <CCard className="leftCard"> {result.downspeed} Mbps</CCard>
                    <CCard className="leftCard">{result.noOfChannels}+</CCard>
                    <CCard className="leftCard"> {result.hdChannels}+</CCard>
                    <CCard className="leftCard">{result.agreement}</CCard>
                  </div>
                </CCard>
              </CCol>
                )
              })
              }
             
            </CRow>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
