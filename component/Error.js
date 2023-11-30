// import React from "react";
// import {useRouteError} from "react-router-dom"
// const Error = ()=>{
//     const err = useRouteError();
//     console.log(err)
//     return(
//         <div>
//             <h1>oops</h1>
//             <h3>Somthing went to wrong </h3>
//             <h3>{err.status + ":"+" "+  err.statusText}</h3>
//         </div>
//     )
// }
// export default Error;
import ErrorImage from "../Images/404 Error.jpg";
import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

const Error = () => {
  // call useRouteError so we can access error data while routing
  const err = useRouteError();
  return (
    <div className="error-page">
      <img src={ErrorImage} alt="Error Image" />
      <h1>Oops! The restaurant you're looking for can't be found.</h1>
      <h3 className="error-data">{err.data}</h3>
      <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};

export default Error;