import './LoginForm.css'
import React from "react";
//html and css taken from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_login_form


function LoginForm(){
    return (
        <div>
            <form>
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                        
                    <button type="submit">Login</button>
                    <label>
                    <input type="checkbox" name="remember"/> Remember me
                    </label>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
