import React, { Component } from 'react';
import UserService from '../services/UserService'
import BitcoinService from '../services/BitcoinService'

class HomePage extends Component {
    state = { user: [], btc: null }

    async  componentDidMount() {
        const user = UserService.getUser();
        this.setState({ user });
        const btc = await BitcoinService.getRate(user.coins)
        this.setState({ btc });
    }

    render() {
        const { user , btc} = this.state
        console.log(user)
        return (
            <div>
                {user && (
                    <section>
                        <h1>Hello {user.name}!</h1>
                        <div>Coins:{user.coins}</div>
                        <div>BTC: {btc}</div>
                    </section>
                )}
            </div>
        )
    }

}

export default HomePage;