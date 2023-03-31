import { Link } from "react-router-dom"
import background from "../images/main.jpeg"
const Login=()=>{
return(
    <>
     <main>
      <div className="login-wrapper" style={{ backgroundImage: `url(${background})` }}>
        <div className="login">
          <div className="login-triangle"></div>

          <h2 className="login-header">Log in</h2>

          <form className="login-container">
            <p><input type="email" placeholder="Email" name="login" /></p>
            <p><input type="password" placeholder="Password" name="password" /></p>
            <p><input type="submit" value="Log in" /></p>
            <Link to="/register">
            <input className="register" type="button" value="Register" />
            </Link>
           
          </form>
        </div>
      </div>
     

         
    </main>
    </>
)
}
export default Login