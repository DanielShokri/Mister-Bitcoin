import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class Chart extends Component {


    render() { 
        return ( 
                    <section className={this.props.className}>
                        <h3>{this.props.title}</h3>
                        <Sparklines data={this.props.data}>
                            <SparklinesLine style={{ strokeWidth: 3, stroke: this.props.color, fill: "black" }} />
                        </Sparklines>
                    </section>
        )
    }
}

export default Chart;