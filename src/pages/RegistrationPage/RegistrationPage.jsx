// src/pages/RegisterPage.jsx

const RegisterPage = () => {
  return (
    <div className="container">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterPage;