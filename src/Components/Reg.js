import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CardActionArea from '@mui/material/CardActionArea';
import React from "react";
import Location_C from "./Location-Center";
import useForm from "./Hooks/useForm";
import { createAPIEndpoint, ENDPOINTS } from "../api";
import useStateContext from "./Hooks/useStateContext";
import { useNavigate } from "react-router-dom";

const getFreshModel = () =>
({
    name:'',
    password:'',
    reppassword:'',
    email:''
})

export default function Reg()
{
    const {context, setContext} = useStateContext();
    const navigate = useNavigate();
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    const reg = e=>
        {
            e.preventDefault();
            if(validate())
            {
                createAPIEndpoint(ENDPOINTS.Logins).post(values).then(res=>{
                    setContext({ participantId: res.data.participantId })
                    navigate('/')
                })
                .catch(err => console.log(err));
            }
        
        }

    const validate = ()=>{
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
        temp.password = values.password!=""?"":"This field is required"
        temp.reppass = values.reppass!=""?"":"This field is required"
        temp.name = values.name!=""?"":"This field is required"
        temp.password = values.password == values.reppassword?"":"Password and confirm password are not equal"
        temp.reppassword = values.password == values.reppassword?"":"Password and confirm password are not equal"
        //temp.password = temp.password.size > 3?"": "This password is not secure. The minimum password length is 4 characters"
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
    }

    return <Location_C>
        
        <Card variant = "outlined" sx={{width : 700
    }}>
        <CardActionArea> 
        <CardContent sx={{textAlign:'center'}}>
            <Typography variant="h1"  sx={{my:3}}>
                Sign On
            </Typography>
            <Box sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '90%'
                        }
                    }}>
    <form noValidate autoComplete="on" onSubmit={reg}>
    { <TextField color="secondary" 
        label = "Name"
        name = "name"
        variant="outlined"
        onChange = {handleInputChange}
        value = {values.name}
        {...(errors.name && {error: true, helperText: errors.name})}
        /> }
        <TextField color = "secondary" 
        label = "Email"
        name = "email"
        value = {values.email}
        onChange = {handleInputChange}
        variant="outlined"
        {...(errors.email && {error: true, helperText: errors.email})}
        />
        <TextField
          id="standard-password-input"
          color="secondary"
          label="Password"
          name="password"
        //   variant="outline"
          onChange = {handleInputChange}
          type="password"
          autoComplete="current-password"
          {...(errors.password && {error: true, helperText: errors.password})}
        /> 
        <TextField
          id="standard-password-input-rep"
          color="secondary"
          label="Repeat Password"
          name="reppassword"
        //   variant="outline"
          onChange = {handleInputChange}
          type="password"
          autoComplete="current-password"
          {...(errors.password && {error: true, helperText: errors.password})}
        /> 
        <Button sx={{width : '90%', height : 55}} variant="contained" color
        = "secondary" type = "submit" size="large">Open</Button>

        
    </form>
    </Box>
    </CardContent>
    </CardActionArea>
    </Card>
    </Location_C>
}
