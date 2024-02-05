"use client";
import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import TlSidebar from "../../tlsidebar/page"; 
import TlHeader from "../../tlheader/page";

const DisbursedData = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState("from1to31");
  const [selectedBankFilter, setSelectedBankFilter] = useState("all");

  const [allData, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const pageSize = 10;

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  let Tl_Name = localStorage.getItem("TL_Name");

  const fetchAlldata = async () => {
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
    setData(result);
  };

  const handleTlDelete = async (_id) => {
    // Prompt the user for confirmation
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this data?"
    );

    if (!userConfirmed) {
      // If the user cancels the confirmation, do nothing
      return;
    }

    try {
      // Send a DELETE request to the backend to delete the disbursed data
      const response = await fetch(
        `https://api.addrupee.com/api/deletetldisbursedData/${_id}`,
        {
          method: "DELETE",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );

      const result = await response.json();

      // Check if the deletion was successful
      if (response.status === 200) {
        console.log(result.message);
        // Refresh the data in the table after deletion
        fetchAlldata();
      } else {
        // Handle any errors or display an error message
        console.error("Error deleting data:", result.error);
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    fetchAlldata();
  }, [Tl_Name, selectedFilter, selectedBankFilter]);

  useEffect(() => {
    // Apply sorting to the data based on Upload_Date initially
    const sorted = [...allData].sort((a, b) => {
      const dateA = new Date(a.Upload_Date);
      const dateB = new Date(b.Upload_Date);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setSortedData(sorted);
  }, [allData, sortOrder]);

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handlePageChange = (newPageIndex) => {
    setPageIndex(newPageIndex);
  };

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
  };

  const filteredData = sortedData.filter((data) => {
    const searchString = searchItem.toLowerCase();

    const lowercaseData = {
      customerName: data.Customer_Name ? data.Customer_Name.toLowerCase() : "",
      companyName: data.Company_Name ? data.Company_Name.toLowerCase() : "",
      panCard: data.Pan_Card ? data.Pan_Card.toLowerCase() : "",
      location: data.Customer_Location
        ? data.Customer_Location.toLowerCase()
        : "",
      callerName: data.Caller_Name ? data.Caller_Name.toLowerCase() : "",
      disbursalBankName: data.Disbursal_BankName
        ? data.Disbursal_BankName.toLowerCase()
        : "",
      disbursalDate: data.Disbursal_Date
        ? data.Disbursal_Date.toLowerCase()
        : "",
      uploadDate: data.Upload_Date ? data.Upload_Date.toLowerCase() : "",
    };

    return (
      lowercaseData.customerName.includes(searchString) ||
      lowercaseData.companyName.includes(searchString) ||
      lowercaseData.panCard.includes(searchString) ||
      lowercaseData.location.includes(searchString) ||
      lowercaseData.callerName.includes(searchString) ||
      lowercaseData.disbursalBankName.includes(searchString) ||
      lowercaseData.disbursalDate.includes(searchString) ||
      lowercaseData.uploadDate.includes(searchString)
    );
  });

  // Paginate the filtered data
  const startIndex = pageIndex * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = filteredData.slice(startIndex, endIndex);


  return (
    <>
        <div style={{ width: "100%", height: "100vh", display: "flex" }}>
        <TlSidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <section
          style={{
            backgroundColor: "#E7E5E5",
            overflowY: "scroll",
            width: "100%", height: "100vh",
          }}
        >
          <TlHeader OpenSidebar={OpenSidebar} />
        <div className="container" style={{marginTop:30}}>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-2">
              <input
                className="form-control"
                type="search"
                placeholder="Search..."
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-2">
              <select
                className="form-select"
                onChange={(e) => setSelectedFilter(e.target.value)}
                value={selectedFilter}
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
            <div className="col-lg-4 col-md-6 col-12 mb-2">
              <select
                onChange={(e) => setSelectedBankFilter(e.target.value)}
                value={selectedBankFilter}
                className="form-select"
              >
                <option value="all">All Banks</option>
                <option value="HDFC Bank">HDFC Bank</option>
                <option value="AXIS Bank">AXIS Bank</option>
                <option value="AXIS Finacnce">AXIS Finacnce</option>
                <option value="AU Small Finance Bank">
                  AU Small Finance Bank
                </option>
                <option value="Yes Bank">Yes Bank</option>
                <option value="IndusInd Bank">IndusInd Bank</option>
                <option value="ICICI Bank">ICICI Bank</option>
                <option value="Standard Chartered Bank">
                  Standard Chartered Bank
                </option>
                <option value="Bajaj">Bajaj</option>
                <option value="Cholamandalam Investment and Finance Company">
                  Cholamandalam Investment and Finance Company
                </option>
                <option value="Incred Financial Services ">
                  Incred Financial Services
                </option>
                <option value="Finnable Credit Pvt Ltd">
                  Finnable Credit Pvt Ltd
                </option>
                <option value="Paysense Services">Paysense Services</option>

                <option value="IDFC first Bank">IDFC First Bank</option>
                <option value="Tata Capital Finance Services Pvt Ltd">
                  Tata Capital Finance Services Pvt Ltd
                </option>

                <option value="Aditya Birla">Aditya Birla</option>
                <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>

                <option value="Standard Chartered Bank">
                  Standard Chartered Bank
                </option>
                <option value="Piramal Capital">Piramal Capital</option>
                <option value="RBL Bank">RBL Bank</option>

                <option value="Muthoot Finance Ltd">Muthoot Finance Ltd</option>
                <option value="IndusInd Bank Limited">
                  IndusInd Bank Limited
                </option>
                <option value="L&T Finance Ltd">L&T Finance Limited</option>
                <option value="Hero Finance Ltd">Hero Finance Limited</option>
                <option value="Bajaj Finance">Bajaj Finance</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div class="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th style={{ fontSize: "14px" }} scope="col">
                    S. No.
                  </th>
                  <th style={{ fontSize: "14px" }} scope="col">
                    Customer Name
                  </th>
                  <th style={{ fontSize: "14px" }} scope="col">
                    Company Name
                  </th>
                  <th style={{ fontSize: "14px" }} scope="col">
                    Pan No.
                  </th>
                  <th style={{ fontSize: "14px" }} scope="col">
                    Disbursed Bank
                  </th>
                  <th style={{ fontSize: "14px" }} scope="col">
                    Location
                  </th>
                  <th style={{ fontSize: "14px" }} scope="col">
                    AQM Name
                  </th>
                  <th style={{ fontSize: "14px" }} scope="col">
                    Disbursal Amount
                  </th>
                  <th style={{ fontSize: "14px" }} scope="col">
                    Upload Date
                    <span style={{ cursor: "pointer" }} onClick={handleSort}>
                      {sortOrder === "asc" ? " ⬆" : " ⬇"}
                    </span>
                  </th>
                  <th style={{ fontSize: "14px" }} scope="col">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((data, index) => (
                  <tr key={index} onClick={() => handleRowClick(data)}>
                    <td style={{ fontSize: "14px" }}>
                      {startIndex + index + 1}
                    </td>
                    <td style={{ fontSize: "14px" }}>{data.Customer_Name}</td>
                    <td style={{ fontSize: "14px" }}>{data.Company_Name}</td>
                    <td style={{ fontSize: "14px" }}>{data.Pan_Card}</td>
                    <td style={{ fontSize: "14px" }}>
                      {data.Disbursal_BankName}
                    </td>
                    <td style={{ fontSize: "14px" }}>
                      {data.Customer_Location}
                    </td>
                    <td style={{ fontSize: "14px" }}>{data.Caller_Name}</td>
                    <td style={{ fontSize: "14px" }}>
                      {data.Disbursal_Loan_Amount}
                    </td>
                    <td style={{ fontSize: "14px" }}>
                      {new Date(data.Upload_Date).toLocaleDateString()}
                    </td>
                    <td style={{ fontSize: "14px" }}>
                      <button
                        type="button"
                        className="btn btn-light"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        {/* <FaEye /> */}
                        {data.Status}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Disbursed Data
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  {selectedRowData && (
                    <div>
                      <p>Customer Name: {selectedRowData.Customer_Name}</p>
                      <p>Company Name: {selectedRowData.Company_Name}</p>
                      <p>Pan No: {selectedRowData.Pan_Card}</p>
                      <p>Location: {selectedRowData.Customer_Location}</p>
                      <p>AQM Name: {selectedRowData.Caller_Name}</p>
                      <p>
                        Disbursal BankName: {selectedRowData.Disbursal_BankName}
                      </p>
                      <p>Scheme: {selectedRowData.Scheme}</p>
                      <p>
                        Application Number:{" "}
                        {selectedRowData.Loan_Application_No}
                      </p>
                      <p>Approved Amount: {selectedRowData.Approved_Amount}</p>
                      <p>
                        Disbursed Loan Amount:{" "}
                        {selectedRowData.Disbursal_Loan_Amount}
                      </p>
                      <p>
                        Inhand Disbursed Amount:{" "}
                        {selectedRowData.Inhand_Disb_Account}
                      </p>
                      <p>
                        BT Disbursed Amount: {selectedRowData.Bt_Disb_Amount}
                      </p>
                      <p>Top-Up: {selectedRowData.Top_Up}</p>
                      <p>CIBIL: {selectedRowData.Cibil}</p>
                      <p>
                        Tenure Disbursal: {selectedRowData.Tenure_Disbursal}
                      </p>
                      <p>ROI: {selectedRowData.Roi}</p>
                      <p>PF: {selectedRowData.Pf}</p>
                      <p>Insurance: {selectedRowData.Insurance}</p>
                      <p>EMI: {selectedRowData.Emi}</p>
                      <p>First EMI Date: {selectedRowData.First_Emi_Date}</p>
                      <p>Disbursal Date: {selectedRowData.Disbursal_Date}</p>
                      <p>
                        DSA Channel Name: {selectedRowData.Dsa_Channel_Name}
                      </p>
                      <p>Upload Date: {selectedRowData.Upload_Date}</p>
                    </div>
                  )}
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                cursor: pageIndex === 0 ? "not-allowed" : "pointer",
                border: "none",
                color: pageIndex === 0 ? "black" : "white",
                backgroundColor: pageIndex === 0 ? "lightgray" : "black",
                borderRadius: "6px",
                marginRight: "4px",
              }}
              onClick={() => handlePageChange(pageIndex - 1)}
              disabled={pageIndex === 0}
            >
              Prev
            </button>
            <span>
              <strong>{pageIndex + 1}</strong> of{" "}
              {Math.ceil(filteredData.length / pageSize)}
            </span>
            <button
              style={{
                cursor:
                  endIndex >= filteredData.length ? "not-allowed" : "pointer",
                border: "none",
                color: endIndex >= filteredData.length ? "black" : "white",
                backgroundColor:
                  endIndex >= filteredData.length ? "lightgray" : "black",
                borderRadius: "6px",
                marginLeft: "4px",
              }}
              onClick={() => handlePageChange(pageIndex + 1)}
              disabled={endIndex >= filteredData.length}
            >
              Next
            </button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default DisbursedData;
