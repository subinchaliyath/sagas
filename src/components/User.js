import { useSelector } from "react-redux";

function User() {
  const { loading, error, userInfo } = useSelector((state) => state);
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>error</h1>}
      <h6>Id: {userInfo?.id}</h6>
      <h6>Email: {userInfo?.email}</h6>
    </>
  );
}

export default User;
