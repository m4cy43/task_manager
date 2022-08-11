import React from 'react'

function SignUp() {
    return (
        <div className="sign-up">

            <h4 className="sign-up_phrase">Sign Up</h4>
            <form className="sign-up_form">

                <input type="text" name="name" placeholder="Enter your name"></input>
                <input type="email" name="email" placeholder="Enter your email"></input>
                <input type="password" name="password" placeholder="Enter your password"></input>
                <input type="password" name="password2" placeholder="Confirm your password"></input>
                <button className="form-submit">Create Account</button>
        
            </form>
        </div>

        // <section className="main-info">
        //     <div className="main-info_workplace">
        //         <div className="signup">

        //             <p className="signup_button">Sign Up</p>
        //             <p className="log_in">Log In</p>

        //         </div>

        //         <form className="form">

        //             <input className="form-name" type="text" placeholder="Name"></input>
        //             <input className="form-lastname" type="text" placeholder="LastName"></input>
        //             <input className="form-email" type="email" placeholder="Email"></input>
        //             <input className="form-password" type="password" placeholder="Password"></input>
        //             <input className="form-password_confirm" type="password" placeholder="Confirm Password"></input>
        //             <input className="form-submit" type="submit" value="Create Account"></input>
                
        //         </form>
        //     </div>
        // </section>
    )
}

export default SignUp