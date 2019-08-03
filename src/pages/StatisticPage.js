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
                {this.state.transactions && this.state.marketPrice &&
                    <Chart {...this.state}></Chart>
                }
            </div>
        )
    }
}

export default StatisticPage;