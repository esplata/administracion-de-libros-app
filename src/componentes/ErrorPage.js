import { Link, useSearchParams } from "react-router-dom";

function ErrorPage() {
  const [searchParams] = useSearchParams();
  return (
    <>
      <h1>Sorry,</h1>
      <h2>something is wrong...</h2>
      {searchParams.get("errMsg") && <h2>{searchParams.get("errMsg")}</h2>}
      <Link to="/">Home</Link>
    </>
  );
}

export default ErrorPage;
