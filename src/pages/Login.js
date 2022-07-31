const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src={process.env.PUBLIC_URL + "/loginPic.png"} alt="" />
        </div>
        <div className="login-form">
            <form>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
