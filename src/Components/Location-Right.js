import {Grid} from '@mui/material'
import React from 'react'

export default function Location_R(props)
{
    return ( 
    <Grid container 
        direction = "column"
        alignItems = "end"
        justifyContent = "space-around"
        sx={{minHeight: '100vh', marginTop:'150px'}}
        >
            <Grid item xs={1}>
                {props.children}
            </Grid>
        </Grid>
    )
}