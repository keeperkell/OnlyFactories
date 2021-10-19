//file: src/components/Button.js

import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import * as MUI from '@mui/material'

const ButtonS = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = () =>(
    <ButtonS>
        <div>
            <MUI.FormControl sx={{m: 2, minWidth: 210}}>
            <MUI.Button component={Link}
                to="/ordering"
                variant="contained">
                    Ordering
            </MUI.Button>
            </MUI.FormControl>

            <MUI.FormControl sx={{m: 2, minWidth: 210}}>
            <MUI.Button component={Link}
                to="/tracking"
                variant="contained">
                    Tracking
            </MUI.Button>
            </MUI.FormControl>
        </div>
    </ButtonS>
)

export default Button