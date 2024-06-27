import React from "react";
import "./Style.css";
import Header from "./Header";

function Home() {

  
  return (
    <>
      <Header />
      <div class="main-content">
        <div className="sec-con">
          <div class="cards">
            <div class="card">
              <h3>
                2478 <br />
                Total Invoices
              </h3>
            </div>
            <div class="card">
              <h3>
                983
                <br />
                Paid Invoices
              </h3>
            </div>
            <div class="card">
              <h3>
                1256
                <br />
                Unpaid Invoices
              </h3>
            </div>
          </div>
          <div class="cards">
            <div class="card">
              <h3>Total Invoices</h3>
              <div className="bar-chart">
                <div className="bar" style={{ height: "80%" }}>
                  80%
                </div>
                <div className="bar" style={{ height: "60%" }}>
                  60%
                </div>
                <div className="bar" style={{ height: "40%" }}>
                  40%
                </div>
                <div className="bar" style={{ height: "90%" }}>
                  90%
                </div>
              </div>
            </div>
            <div class="card">
              <h3>Paid Invoices</h3>
              <div class="line-chart">
                <svg viewBox="0 0 100 50" preserveAspectRatio="none">
                  <polyline
                    points="0,50 10,40 20,30 30,20 40,25 50,15 60,10 70,20 80,30 90,10 100,5"
                    fill="none"
                    stroke="#3498db"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
            <div class="card">
              <h3>Unpaid Invoices</h3>
              <div class="pie-chart">
                <div class="slice slice-1"></div>
                <div class="slice slice-2"></div>
                <div class="slice slice-3"></div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div class="card">
              <h3>Spending</h3>
              <div class="horizontal-bar-chart">
                <div class="bar-item">
                  <span class="label">Rent</span>
                  <div class="bar" style={{ width: "70%;" }}>
                    $700
                  </div>
                </div>
                <div class="bar-item">
                  <span class="label">Groceries</span>
                  <div class="bar" style={{ width: "50%;" }}>
                    $500
                  </div>
                </div>
                <div class="bar-item">
                  <span class="label">Transport</span>
                  <div class="bar" style={{ width: "30%;" }}>
                    $300
                  </div>
                </div>
                <div class="bar-item">
                  <span class="label">Entertainment</span>
                  <div class="bar" style={{ width: "20%;" }}>
                    $200
                  </div>
                </div>
                <div class="bar-item">
                  <span class="label">Utilities</span>
                  <div class="bar" style={{ width: "40%;" }}>
                    $400
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-1">
              <p>
                A visually engaging tool designed to help you track and analyze
                your spending across various categories. This page features bar
                charts, pie charts, and circle charts, offering a comprehensive
                view of your expenditures. Bar charts display spending levels
                side-by-side for easy comparison, pie charts show the
                proportional breakdown of your budget, and circle charts track
                progress towards spending goals. Use this dashboard to plan your
                budget effectively, monitor expenses in real-time, and make
                informed financial decisions. It's an essential tool for anyone
                looking to gain control over their finances and achieve
                budgeting success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
