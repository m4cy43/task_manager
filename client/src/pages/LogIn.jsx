import React from 'react'

function LogIn() {
    return (

        <div className="login">

            <h4 className="login-phrase">Log In</h4>

            <form className="login-form">

                <input type="email" name="email" placeholder="Enter your email"></input>
                <input type="password" name="password" placeholder="Enter your password"></input>
                

            </form>
            <button className="login-submit">Enter to account</button>
        </div>

    )

}

export default LogIn