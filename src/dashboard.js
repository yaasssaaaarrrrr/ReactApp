import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard clip-contents">
      <div className="group-723">
        <div className="group-1064">
          <div className="frame-278">
            <p className="referral-earning">Referral Earning</p>
            <p className="_-2500">₹ 2,500</p>
          </div>
          <div className="frame-279">
            <p className="total-referrals">Total Referrals</p>
            <p className="_-7">7</p>
          </div>
          <div className="frame-280">
            <p className="wallet-balance">Wallet Balance</p>
            <p className="_-500">₹ 500</p>
          </div>
        </div>
        <div className="withdraw-balance-1">
          <p className="withdraw-balance">Withdraw Balance</p>
        </div>
      </div>
    </div>
  );
}
