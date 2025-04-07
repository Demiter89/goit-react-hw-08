const LoginPage = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;