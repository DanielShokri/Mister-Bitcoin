import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class Chart extends Component {


    render() {
        console.log(this.props.marketPrice)
        return (
            <div>
                <h1>Statistic Page</h1>
                <section className="statistic-page">
                    <section className="market-price-chart">
                        <div className="title"><h3>Average USD market price across major bitcoin exchanges</h3></div>
                        <Sparklines data={this.props.marketPrice}>
                            <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "black" }} />
                        </Sparklines>
                    </section>
                    <section className="confirmed-transactions">
                        <h3>Confirmed transactions in the past 24 hours</h3>
                        <Sparklines data={this.props.transactions}>
                            <SparklinesLine style={{ strokeWidth: 3, stroke: "#49beb7", fill: "black" }} />
                        </Sparklines>
                    </section>
                </section>
            </div>
        )
    }
}

export default Chart;