// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Dropdown from "react-bootstrap/Dropdown";
// import SplitButton from "react-bootstrap/SplitButton";
// import addrupeeText from "../../../../public/addrupeeText.png";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// const Sidebar = () => {
//   const [auth, setAuth] = useState(false);
//   const [message, setMessage] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const router = useRouter();

//   axios.defaults.withCredentials = false;
//   async function getData() {
//     const data = await fetch("https://api.addrupee.com/api/get_user_data");
//     const res = await data.json();
//     console.log(res);
//     console.log("the response is ", res.Status);
//   }

//   useEffect(() => {
//     // axios.get("https://api.addrupee.com/api/get_user_data").then((res) => {
//     //   console.log(res.data.Status);
//     //   console.log(res.data);
//     // });
//     getData();
//   }, []);

//   // useEffect(() => {
//   //   axios
//   //     .get("https://api.addrupee.com/api/get_user_data")
//   //     .then((res) => {
//   //       if (res.data.Status === "Success") {
//   //         setAuth(true);
//   //         setName(res.data.name);
//   //         setEmail(res.data.email);
//   //       } else {
//   //         setAuth(false);
//   //         setMessage(res.data.Error);
//   //         router.push("/pages/employeesignin");
//   //       }
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //       router.push("/pages/employeesignin");
//   //     });
//   // }, [router]);

//   const handleLogout = () => {
//     axios
//       .get("https://api.addrupee.com/api/emp_logout")
//       .then((res) => {
//         if (res.data.Status === "Success") {
//           localStorage.clear();
//           router.push("/pages/employeesignin");
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <div style={{ display: "flex" }}>
//         <div
//           className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark toglleSidebar"
//           style={{ width: "250px", height: "100vh" }}
//         >
//           <Link
//             href="#"
//             className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
//           >
//             <Image
//               style={{ height: 50, width: 150 }}
//               src={addrupeeText}
//               alt="Add Rupee Text"
//             />
//           </Link>

//           <hr />
//           <ul className="nav nav-pills flex-column mb-auto">
//             <li>
//               <Link href="/employeedashboard" className="nav-link text-white">
//                 Dashboard
//               </Link>
//             </li>
//             <li>
//               <Nav>
//                 <NavDropdown
//                   id="nav-dropdown-dark-example"
//                   title={<span style={{ color: "white" }}>Loan</span>}
//                   menuVariant="dark"
//                 >
//                   <NavDropdown.Item href="/employeedashboard/loan/addleadform">
//                     Add New Lead
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="/employeedashboard/loan/pendingdata">
//                     Pending Leads
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="/employeedashboard/loan/disburseddata">
//                     Disbursed Leads
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="/employeedashboard/loan/rejecteddata">
//                     Rejected Leads
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </Nav>
//             </li>
//             <li>
//               <Nav>
//                 <NavDropdown
//                   id="nav-dropdown-dark-example"
//                   title={<span style={{ color: "white" }}>Credit Card</span>}
//                   menuVariant="dark"
//                 >
//                   <NavDropdown.Item href="/employeedashboard/card/addleadform">
//                     Add New Lead
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="/employeedashboard/card/pendingdata">
//                     Pending Leads
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="/employeedashboard/card/disburseddata">
//                     Disbursed Leads
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="/employeedashboard/card/rejecteddata">
//                     Rejected Leads
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </Nav>
//             </li>
//             <li>
//               <Link
//                 href="/employeedashboard/loan/upload"
//                 className="nav-link text-white"
//               >
//                 Reports
//               </Link>
//             </li>
//           </ul>
//           <hr />
//           <SplitButton
//             key="up"
//             id={`dropdown-button-drop-up`}
//             drop="up"
//             variant="dark"
//             title={auth ? `${name}` : null}
//           >
//             <Dropdown.Item
//               eventKey="1"
//               style={{
//                 fontWeight: 600,
//                 color: "black",
//               }}
//             >
//               {auth ? `${email}` : null}
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="2">
//               <Link
//                 href="/employeedashboard/profile"
//                 style={{
//                   textDecoration: "none",
//                   fontWeight: 600,
//                   color: "black",
//                 }}
//               >
//                 Profile
//               </Link>
//             </Dropdown.Item>
//             <Dropdown.Item
//               eventKey="3"
//               style={{ color: "red", fontWeight: 600 }}
//               onClick={handleLogout}
//             >
//               Logout
//             </Dropdown.Item>
//           </SplitButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

"use client";
import Image from "next/image";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import addrupeeText from "../../../../public/addrupeeText.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "./styles.css";

function TlSidebar({ openSidebarToggle, OpenSidebar }) {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("https://api.addrupee.com/api/get_user_data")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
          setEmail(res.data.email);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
          // Redirect to login page if not authenticated
          // navigate("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
        // Redirect to login page if there's an error
        // router.push("/pages/employeesignin");
      });
  }, [router]);

  const handleLogout = () => {
    axios
      .get("https://api.addrupee.com/api/emp_logout")
      .then((res) => {
        // location.reload(true);
        if (res.data.Status === "Success") {
          // Clear local storage
          localStorage.clear();
          router.push("/pages/employeesignin");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
      style={{ width: "250px" }}
    >
      {/* <div style={{border:"2px solid red"}}
       className="sidebar-title">
        <div style={{border:"2px solid red"}}
       className="sidebar-brand">
          <Image style={{ height: "40px", width: "130px" }} src={Logo} onClick={OpenSidebar} />
        </div>
        <span style={{color:'white',fontSize:'50px',border:'2px solid red'}} className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div> */}

      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark "
        style={{ width: "250px", height: "100vh" }}
      >
        <Link
          href="#"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <Image
            style={{ height: 50, width: 150 }}
            src={addrupeeText}
            alt="Add Rupee Text"
          />
        </Link>

        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link href="/teamleaderdashboard" className="nav-link text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={<span style={{ color: "white" }}>Loan</span>}
                menuVariant="dark"
              >
                {/* <NavDropdown.Item href="/teamleaderdashboard/loan/addleadform">
                  Add New Lead
                </NavDropdown.Item> */}
                <NavDropdown.Item href="/teamleaderdashboard/loan/pendingdata">
                  Pending Leads
                </NavDropdown.Item>
                <NavDropdown.Item href="/teamleaderdashboard/loan/disburseddata">
                  Disbursed Leads
                </NavDropdown.Item>
                <NavDropdown.Item href="/teamleaderdashboard/loan/rejecteddata">
                  Rejected Leads
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </li>
          <li>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={<span style={{ color: "white" }}>Credit Card</span>}
                menuVariant="dark"
              >
                {/* <NavDropdown.Item href="/teamleaderdashboard/card/addleadform">
                  Add New Lead
                </NavDropdown.Item> */}
                <NavDropdown.Item href="/teamleaderdashboard/card/pendingdata">
                  Pending Leads
                </NavDropdown.Item>
                <NavDropdown.Item href="/teamleaderdashboard/card/disburseddata">
                  Disbursed Leads
                </NavDropdown.Item>
                <NavDropdown.Item href="/teamleaderdashboard/card/rejecteddata">
                  Rejected Leads
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </li>
          <li>
            <Link
              href="/teamleaderdashboard/loan/upload"
              className="nav-link text-white"
            >
              Reports
            </Link>
          </li>
        </ul>
        <hr />
        <SplitButton
          key="up"
          id={`dropdown-button-drop-up`}
          drop="up"
          variant="dark"
          title={auth ? `${name}` : null}
        >
          <Dropdown.Item
            eventKey="1"
            style={{
              fontWeight: 600,
              color: "black",
            }}
          >
            {auth ? `${email}` : null}
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            <Link
              href="/teamleaderdashboard/profile"
              style={{
                textDecoration: "none",
                fontWeight: 600,
                color: "black",
              }}
            >
              Profile
            </Link>
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="3"
            style={{ color: "red", fontWeight: 600 }}
            onClick={handleLogout}
          >
            Logout
          </Dropdown.Item>
        </SplitButton>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {auth ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ color: "#dad7cd" }}>Welcome</h4>
            <span style={{ color: "white" }}>{name}</span>
            <span style={{ color: "white", fontSize: "14px" }}>{email}</span>
          </div>
        ) : null}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {auth ? (
          <div>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </aside>
  );
}

export default TlSidebar;
