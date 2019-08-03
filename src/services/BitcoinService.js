import axios from 'axios'
import StorageService from './StorageService'

export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate(coins) {
    const res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
    const rate = res.data
    return rate
}

async function getMarketPrice() {
    let res = StorageService.load('priceRate')
    if(res) return res;
    res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true');
    res = res.data.values.map(value => value.y);
    console.log(res)
    StorageService.save('priceRate', res);
    return res;
}

async function getConfirmedTransactions() {
    let res = StorageService.load('transactions')
    if(res) return res;
    res = await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=50days&format=json&cors=true`)
    res = res.data.values.map(value => value.y);
    StorageService.save('transactions', res);
    return res;
}





