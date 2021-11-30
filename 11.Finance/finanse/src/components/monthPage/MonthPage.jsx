import PurchaseHistory from "./history/PurchaseHistory";
import PurchaseStats from "./stats/PurchaseStats";
import './monthPage.css'

const MonthPage = () => {
    return (
        <div className="monthPage">
            <PurchaseStats />
            <PurchaseHistory />
        </div>
    )
}

export default MonthPage;