//file: src/components/Button.js

import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import * as MUI from '@mui/material'

const ButtonS = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 500px) {
        flex-basis: calc(100% / 3);
        scale: 85%;
    }
    @media screen and (max-width: 400px) {
        flex-basis: calc(100% / 3);
        scale: 75%;
    }
`

const Button = () =>(
    <ButtonS>
        <div>
            <MUI.FormControl sx={{m: 2, minWidth: 195}}>
            <MUI.Button component={Link}
                to="/ordering"
                variant="contained">
                    Order
            </MUI.Button>
            </MUI.FormControl>

            <MUI.FormControl sx={{m: 2, minWidth: 195}}>
            <MUI.Button component={Link}
                to="/tracking"
                variant="contained">
                    Track
            </MUI.Button>
            </MUI.FormControl>
        </div>
    </ButtonS>
)

export default Button