import PurchaseHistory from "./history/PurchaseHistory";
import PurchaseStats from "./stats/PurchaseStats";
import './monthPage.css'
import React from "react";
import { useParams } from "react-router";

/*class MonthPage extends React.Component {
    constructor(props) {
        super(props);    
    }

    componentDidMount() {
        console.log(this.props.match);
    }

    render() {
        console.log(this.props.match);
    return (
        <div className="monthPage">
            <PurchaseStats />
            <PurchaseHistory />
        </div>
    )
    }
}*/

const MonthPage = () => {
    const params = useParams();
    console.log(params.id);

    return (
        <div className="monthPage">
            <PurchaseStats />
            <PurchaseHistory />
        </div>
    )
} 

export default MonthPage;