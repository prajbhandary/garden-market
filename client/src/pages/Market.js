import React, { Component } from "react";
import API from "../utils/API";
import MarketContainer from "../components/MarketContainer";
// import ProductList from "../components/ProductList";
import JoinMessage from "../components/JoinMessage";
import AboutMarket from "../components/AboutMarket";
import Times from "../components/Times/index.js";

class Market extends Component {

    state = {
        markets: {}
    };

    componentDidMount() {
        this.loadOneMarket();
    }

    loadOneMarket = () => {
        API.getOneMarket(this.props.match.params.id)

            .then(res =>
                this.setState({
                    markets: res.data,
                    products: res.data.products
                }))
    }

    render() {

        console.log(this.state.products)

        return (
            <div className="container-fluid">
                <div className="row" key={this.state.markets._id}>
                    <div className="col-md-12 mx-auto">
                        <MarketContainer
                            marketName={this.state.markets.marketName}
                            organizer={this.state.markets.organizer}
                            address={this.state.markets.address}
                            city={this.state.markets.city}
                            state={this.state.markets.state}
                            zip={this.state.markets.zip}
                            about={this.state.markets.about}
                            img={this.state.markets.img}
                            products={this.state.markets.products}
                        />
                        <Times
                            startMonth={this.state.markets.startMonth}
                            endMonth={this.state.markets.endMonth}
                            days={this.state.markets.days}
                            startTime={this.state.markets.startTime}
                            endTime={this.state.markets.endTime}
                        />
                        <JoinMessage
                            marketName={this.state.markets.marketName}
                            organizer={this.state.markets.organizer}
                        />
                        <AboutMarket
                            about={this.state.markets.about}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Market;
