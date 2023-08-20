import React, { useContext } from "react";
import { MyContaxt } from "../../../App";

export const UserProfile = () => {
  const context = useContext(MyContaxt);

  return (
    <div>
      <h5>
        {" "}
        <span className=" text-primary ">Name: </span>
        {context.currUser.name}
      </h5>
      <h5>
        {" "}
        <span className=" text-primary ">Email Address: </span>
        {context.currUser.email}
      </h5>
    </div>
  );
};
// let demoLogout = () => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       props.onIsLogedin();
//       Swal.fire("Deleted!", "Your file has been deleted.", "success");
//     }
//   });
// };
//  <button className="btn btn-sm btn-primary " onClick={() => demoLogout()}>
//   LogOut
// </button>
