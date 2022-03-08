//file: src/components/SignIn.js

import React, {useState} from "react";
import * as mui from '@mui/material';

const SignIn = () => {
    const [user, setUserName] = useState("")
    const [pass, setPass] = useState("")
    const [jData, setData] = useState([])
    var showFail = false
    var accept = 2;

    //query for login
    const check = async () => {
        //local
        //const response = await fetch(`http://localhost:3306/api/checkLogin/` + user + ':' + pass);
        //server
        const response = await fetch(`https://onlyfactories.duckdns.org:3306/api/checkLogin/` + user + ':' + pass);

        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
        //alert(JSON.stringify(jsonData))
    }

    //mapping JSON data
    jData.map((jData, index) => (
        <l key={index}>{ accept = jData.checkLogIn }</l>
    ))

    if(accept == 1){
        showFail = false
        window.location.href = "../management"
    }
    else if(accept == 0) {
        showFail = true
    }
    
    return(
    <mui.Box>
        <mui.Box sx={{p:1, m:1, boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.25)"}}>
            <div style={{textAlign: "center"}}>
                <h1>Sign In</h1>
            </div>
        
            <mui.TextField style={{width:300, margin:10}}
                    id="username"
                    label="Enter your username"
                    type="username"
                    value={user}
                    autoFocus={true}
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.keyCode == 13){
                            check();
                        }
                    }}
            />

            <mui.TextField style={{width:300, margin:10}}
                    id="password"
                    label="Enter your password"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.keyCode == 13){
                            check();
                        }
                    }}
            />
        
            <mui.Grid style={{margin:10, marginLeft:546}}>
                <mui.Button type="submit" variant="contained"
                    onClick={() => {
                        check();
                    }}
                >
                    Sign in
                </mui.Button>
            </mui.Grid>
        </mui.Box>

            {showFail &&
                <mui.Box sx={{border:2, p:1, marginLeft:20, marginRight:20, backgroundColor:"#ffc9c9"}}>
                    <h1 style={{textAlign:"center", color:"black"}}>Login Failed</h1>
                </mui.Box>
            }
            
    </mui.Box>
    );
}

export default SignIn;