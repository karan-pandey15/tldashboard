"use client";
import React, { useEffect, useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import Link from "next/link";
import "../styles.css";
import Sidebar from "./tlsidebar/page";
import Header from "./tlheader/page";

const teamleaderdashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("from1to31");
  const [selectedBankFilter, setSelectedBankFilter] = useState("all");

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  // Loan States
  const [allData, setData] = useState([]);
  const [pendingData, setPendingData] = useState([]);
  const [approvedData, setApprovedData] = useState([]);
  const [rejectData, setRejectedData] = useState([]);

  // Card States
  const [cardAllData, setCardAllData] = useState([]);
  const [cardPendingData, setCardPendingData] = useState([]);
  const [cardApprovedData, setCardApprovedData] = useState([]);
  const [cardRejectData, setCardRejectedData] = useState([]);

  let Tl_Name = localStorage.getItem("TL_Name");
  console.log("TL_Name from localStorage:", Tl_Name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch(
          `https://api.addrupee.com/api/fetchAlldata/${Tl_Name}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

        let result = await data.json();
        setData((prevData) => {
          console.log("this is state", prevData);
          return result;
        });
        console.log("the result is ", result);
        console.log("this is state data", allData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [Tl_Name, selectedFilter, selectedBankFilter]);

  const fetchPendingData = async () => {
    const Status = "Pending";
    let data = await fetch(
      `https://api.addrupee.com/api/getpendingtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setPendingData(result);
  };

  const fetchApprovedData = async () => {
    const Status = "Disbursed";
    let data = await fetch(
      `https://api.addrupee.com/api/getdisbursedtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setApprovedData(result);
    console.log(result);
  };

  const fetchRejectedData = async () => {
    const Status = "Rejected";
    let data = await fetch(
      `https://api.addrupee.com/api/getrejectedtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setRejectedData(result);
    console.log(result);
  };

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        let data = await fetch(
          `https://api.addrupee.com/api/card_fetchAlldata/${Tl_Name}?filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

        let result = await data.json();
        setCardAllData((prevData) => {
          console.log("this is state", prevData);
          return result;
        });
        console.log("the result is ", result);
        console.log("this is state data", cardAllData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCardData();
  }, [Tl_Name, selectedFilter, selectedBankFilter]);

  const fetchCardPendingData = async () => {
    const Status = "Pending";
    let data = await fetch(
      `https://api.addrupee.com/api/card_getpendingtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setCardPendingData(result);
  };

  const fetchCardApprovedData = async () => {
    const Status = "Disbursed";
    let data = await fetch(
      `https://api.addrupee.com/api/card_getdisbursedtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setCardApprovedData(result);
    console.log(result);
  };

  const fetchCardRejectedData = async () => {
    const Status = "Rejected";
    let data = await fetch(
      `https://api.addrupee.com/api/card_getrejectedtldatas/${Tl_Name}?Status=${Status}&filter=${selectedFilter}&bankFilter=${selectedBankFilter}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await data.json();
    setCardRejectedData(result);
    console.log(result);
  };

  useEffect(() => {
    fetchPendingData();
    fetchApprovedData();
    fetchRejectedData();
    fetchCardPendingData();
    fetchCardApprovedData();
    fetchCardRejectedData();
  }, [selectedFilter, selectedBankFilter]);
  return (
    <>
      <div style={{ width: "100%", height: "100vh", display: "flex" }}>
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <section
          style={{
            backgroundColor: "#E7E5E5",
            overflowY: "scroll",
          }}
        >
          <Header OpenSidebar={OpenSidebar} />
          <div className="container" style={{ padding: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <h1 style={{ fontWeight: 600 }}>Dashboard</h1>
              <div>
                <select
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  value={selectedFilter}
                  className="form-select"
                >
                  <option value="from1to31" selected>
                    Select Date Filter
                  </option>
                  <option value="lastday">From Last Day</option>
                  <option value="last7days">From Last 7 Days</option>
                  <option value="last30days">From Last 30 Days</option>
                  <option value="all">All Data</option>
                </select>
              </div>
            </div>
            <div className="row">
              <h2 style={{ fontWeight: 600 }}>Loan</h2>
              <div className="col-12 col-md-6 col-lg-3 my-2 m-md-3 dashboard_card dashboard_card-1">
                <div className="card-inner">
                  <h3 className="fs-5 fs-bold text-white">LOGIN LEADS</h3>
                  <BsFillArchiveFill
                    className="card_icon"
                    style={{ color: "white" }}
                  />
                </div>
                <h3 className="text-white fs-3">{allData.length}</h3>
              </div>
              <div className="col-12 col-md-6 col-lg-3 my-2 m-md-3 dashboard_card dashboard_card-2">
                <Link
                  style={{ textDecoration: "none" }}
                  href="/teamleaderdashboard/loan/pendingdata"
                >
                  <div className="card-inner">
                    <h3 className="fs-5 fs-bold text-white">PENDING</h3>
                    <BsFillGrid3X3GapFill
                      className="card_icon"
                      style={{ color: "white" }}
                    />
                  </div>
                  <h1 className="text-white fs-3">{pendingData.length}</h1>
                </Link>
              </div>
              <div className="col-12 col-md-6 col-lg-3 my-2 m-md-3 dashboard_card dashboard_card-3">
                <Link
                  style={{ textDecoration: "none" }}
                  href="/teamleaderdashboard/loan/disburseddata"
                >
                  <div className="card-inner">
                    <h3 className="fs-5 fs-bold text-white">DISBURSED</h3>
                    <BsPeopleFill
                      className="card_icon"
                      style={{ color: "white" }}
                    />
                  </div>
                  <h1 className="text-white fs-3">{approvedData.length}</h1>
                </Link>
              </div>
              <div className="col-12 col-md-6 col-lg-3 my-2 m-md-3 dashboard_card dashboard_card-4">
                <Link
                  style={{ textDecoration: "none" }}
                  href="/teamleaderdashboard/loan/rejecteddata"
                >
                  <div className="card-inner">
                    <h3 className="fs-5 fs-bold text-white">REJECTED</h3>
                    <BsFillBellFill
                      className="card_icon"
                      style={{ color: "white" }}
                    />
                  </div>
                  <h1 className="text-white fs-3">{rejectData.length}</h1>
                </Link>
              </div>
            </div>
            <div className="row">
              <h2 style={{ fontWeight: 600 }}>Credit Card</h2>
              <div className="col-12 col-md-6 col-lg-3 my-2 m-md-3 dashboard_card dashboard_card-1">
                <div className="card-inner">
                  <h3 className="fs-5 fs-bold text-white">LOGIN LEADS</h3>
                  <BsFillArchiveFill
                    className="card_icon"
                    style={{ color: "white" }}
                  />
                </div>
                <h3 className="text-white fs-3">{cardAllData.length}</h3>
              </div>
              <div className="col-12 col-md-6 col-lg-3 my-2 m-md-3 dashboard_card dashboard_card-2">
                <Link
                  style={{ textDecoration: "none" }}
                  href="/teamleaderdashboard/card/pendingdata"
                >
                  <div className="card-inner">
                    <h3 className="fs-5 fs-bold text-white">PENDING</h3>
                    <BsFillGrid3X3GapFill
                      className="card_icon"
                      style={{ color: "white" }}
                    />
                  </div>
                  <h1 className="text-white fs-3">{cardPendingData.length}</h1>
                </Link>
              </div>
              <div className="col-12 col-md-6 col-lg-3 my-2 m-md-3 dashboard_card dashboard_card-3">
                <Link
                  style={{ textDecoration: "none" }}
                  href="/teamleaderdashboard/card/disburseddata"
                >
                  <div className="card-inner">
                    <h3 className="fs-5 fs-bold text-white">DISBURSED</h3>
                    <BsPeopleFill
                      className="card_icon"
                      style={{ color: "white" }}
                    />
                  </div>
                  <h1 className="text-white fs-3">{cardApprovedData.length}</h1>
                </Link>
              </div>
              <div className="col-12 col-md-6 col-lg-3 my-2 m-md-3 dashboard_card dashboard_card-4">
                <Link
                  style={{ textDecoration: "none" }}
                  href="/teamleaderdashboard/card/rejecteddata"
                >
                  <div className="card-inner">
                    <h3 className="fs-5 fs-bold text-white">REJECTED</h3>
                    <BsFillBellFill
                      className="card_icon"
                      style={{ color: "white" }}
                    />
                  </div>
                  <h1 className="text-white fs-3">{cardRejectData.length}</h1>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default teamleaderdashboard;
