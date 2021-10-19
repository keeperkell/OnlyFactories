//file: src/components/StatBox.js

import React from "react";
import * as MUI from '@mui/material'

function createData(name, email, quantity, color) {
    return { name, email, quantity, color };
  }
  
const rows = [
    createData('John', 'fake1@gmail.com', 2, 'red'),
    createData('Paul', 'fake2@gmail.com', 1, 'blue'),
    createData('John', 'fake1@gmail.com', 4, 'white'),
    createData('Sara', 'fake3@gmail.com', 3, 'red'),
    createData('Sara', 'fake3@gmail.com', 1, 'blue'),
];

function StatBox() {
    return(
        <MUI.TableContainer>
            <MUI.Table sx={{ maxWidth: 650 }} size="small" aria-label="a dense table">
                <MUI.TableHead>
                    <MUI.TableRow>
                        <MUI.TableCell>Name</MUI.TableCell>
                        <MUI.TableCell align="right">Email</MUI.TableCell>
                        <MUI.TableCell align="right">Quantity</MUI.TableCell>
                        <MUI.TableCell align="right">Color</MUI.TableCell>
                    </MUI.TableRow>
                </MUI.TableHead>

                <MUI.TableBody>
                    {rows.map((row) => (
                    <MUI.TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                        <MUI.TableCell component="th" scope="row">
                            {row.name}
                        </MUI.TableCell>
                        <MUI.TableCell align="right">{row.email}</MUI.TableCell>
                        <MUI.TableCell align="right">{row.quantity}</MUI.TableCell>
                        <MUI.TableCell align="right">{row.color}</MUI.TableCell>
                    </MUI.TableRow>
                    ))}
                </MUI.TableBody>
            </MUI.Table>
        </MUI.TableContainer>
    );
}

export default StatBox