import React from "react";
import "./introguide.css";
import groupVec from "./images/Vector.svg";
import rupees from "./images/rupees.svg";
import wallet from "./images/wallet.svg";
import offer from "./images/offer.svg";
import discount from "./images/discount.svg";

// import Ellipse from "./images/Ellipse 132.png";

export default function HowDoesItWork() {
  return (
    <div className="how-does-it-work-1">
      <div className="group-494">
        <p className="how-does-it-work">How does it work ?</p>
        <div className="group-611">
          <div className="data">
            <div className="ellipse-132">
              <img src={groupVec} alt="Not Found" className="group-vec" />
            </div>
            <div className="content">
              <p className="invite-your-friends">Invite your Friends</p>
              <p className="share-the-link-tutedude">
                Share the link tutedude.com with your friends
              </p>
            </div>
          </div>
          <div className="data-1">
            <div className="ellipse-1321">
              <img src={discount} alt="Not Found" className="discount-vec" />
            </div>
            <div className="content-1">
              <p className="friend-purchases-any-co">
                Friend purchases any course
              </p>
              <p className="using-your-referral-cod">
                Using your REFERRAL CODE in the payments page
              </p>
            </div>
          </div>
        </div>
        <div className="group-2105">
          <div className="data-2">
            <div className="ellipse-1322">
              <img src={rupees} alt="Not Found" className="rupees-vec" />
            </div>
            <div className="content-2">
              <p className="you-get-200-as-referral-m">
                You get ₹ 200 as referral money
              </p>
              <p className="on-total-purchase-the-fr">
                On total purchase the friend makes, into your wallet
              </p>
            </div>
          </div>
          <div className="data-3">
            <div className="ellipse-1323">
              <img src={offer} alt="Not Found" className="offer-vec" />
            </div>
            <div className="content-3">
              <p className="your-friend-gets-200-off">
                Your Friend gets ₹ 200 Off{" "}
              </p>
              <p className="on-his-overall-fee-on-suc">
                On his overall fee on successful purchase using your referral
                code{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="data-4">
          <div className="ellipse-1324">
            <img src={wallet} alt="Not Found" className="wallet-vec" />
          </div>
          <div className="content-4">
            <p className="transfer-money-from-wal">
              Transfer money from wallet
            </p>
            <p className="when-the-wallet-balance">
              When the wallet balance reaches ₹200 or more, you can withdraw it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
