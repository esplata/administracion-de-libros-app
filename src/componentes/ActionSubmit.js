import { useActionData, Link, useNavigate } from "react-router-dom";

export default function ActionSubmit() {
  const actionData = useActionData();
  const navigate = useNavigate();

  if (actionData === undefined) {
    setTimeout(() => {
      navigate("/add");
    }, 3000);
    return (
      <>
        <h2>You haven't submitted anything yet.</h2>
        <Link to="/">return</Link>
        <h3> return in 3 seconds </h3>
      </>
    );
  }
  return (
    <>
      {/*<h2>You have submitted {actionData.num}</h2>*/}
      <h3>{actionData.detail}</h3>
      <Link to="/">return</Link>
    </>
  );
}
