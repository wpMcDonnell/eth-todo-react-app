// import logo from './logo.svg';
import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.loadBlockchainData()
  }

 async loadBlockchainData() {
   const web3 = new Web3('http://localhost:8545')
   const network = await web3.eth.net.getNetworkType()
   const accounts = await web3.eth.getAccounts()
   console.log('account', accounts, 'network', network)
 }

 constructor(props) {
   super(props)
   this.state = {
     account: ''
   }
 }
  render() {
    return (
      <div className="container">
        <h1> Hello, World! </h1>
        <p>  Your account: [account from state]</p>
      </div>
    );
  }
}

export default App;
