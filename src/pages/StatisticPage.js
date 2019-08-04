import React, { Component } from 'react';
import Chart from '../components/Chart/Chart'
import BitcoinService from '../services/BitcoinService'

class StatisticPage extends Component {
    state = { marketPrice: null, transactions: null }

    async componentDidMount() {
        const marketPrice = await BitcoinService.getMarketPrice();
        const transactions = await BitcoinService.getConfirmedTransactions();

        this.setState({ marketPrice, transactions });
    }

    render() {
        return (
            <div>
                <h1>Statistic Page</h1>
                <section className="statistic-page">
                    {this.state.transactions &&
                    <Chart data={this.state.transactions}></Chart>
                }
                {this.state.marketPrice &&
                    <Chart data={this.state.marketPrice}
                    className="confirmed-transactions"
                     title="Confirmed transactions in the past 24 hours"
                     color={"#49beb7"}></Chart>}
          
          </section>
            </div>
        )
    }
}

export default StatisticPage;