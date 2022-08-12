function SignUp() {
    function onClick(e){
        e.preventDefault();
    }
    return (        
        <div className="sign-up">
            <h4 className="sign-up_phrase">Sign Up</h4>
            <form className="sign-up_form">
                <input type="text" name="name" placeholder="Enter your name"></input>
                <input type="email" name="email" placeholder="Enter your email"></input>
                <input type="password" name="password" placeholder="Enter your password"></input>
                <input type="password" name="password2" placeholder="Confirm your password"></input>
                <button onClick={onClick} className="form-submit">Create Account</button>
            </form>
        </div>
    )
}

export default SignUp;