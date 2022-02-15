import { useSelector } from "react-redux";

function User() {
  const { loading, error, userInfo } = useSelector((state) => state.userLogin);
  const { register } = useSelector((state) => state.form);
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>error</h1>}
      <h6>Id: {userInfo?.id}</h6>
      <h6>Email: {userInfo?.email}</h6>

      <h2>This is from form</h2>
      <h6>First name: {register?.registeredFields.firstName?.name}</h6>
    </>
  );
}

export default User;
