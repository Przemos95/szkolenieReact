import PurchaseHistory from "./history/PurchaseHistory";
import PurchaseStats from "./stats/PurchaseStats";
import './monthPage.css'
import React from "react";

class MonthPage extends React.Component {
    render() {
        return (
            <div className="monthPage">
                <PurchaseStats />
                <PurchaseHistory />
            </div>
        )
    }
}

export default MonthPage;