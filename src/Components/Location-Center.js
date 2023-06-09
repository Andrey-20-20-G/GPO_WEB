import {Grid} from '@mui/material'
import React from 'react'

export default function Location_C(props)
{
    return ( 
    <Grid container 
        direction = "column"
        alignItems = "center"
        justifyContent = "center"
        sx={{minHeight: '100vh'}}
        >
            <Grid item xs={1}>
                {props.children}
            </Grid>
        </Grid>
    )
}