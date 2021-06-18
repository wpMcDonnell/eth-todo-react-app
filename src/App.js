// import logo from './logo.svg';
import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.loadBlockchainData()
  }

 async loadBlockchainData() {
   const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
   // set variable to show which network you are on
   const network = await web3.eth.net.getNetworkType()
   // gets account from eth network
   const accounts = await web3.eth.requestAccounts()
   // allows metamask to talk to react app... updated where u need permission to view account info
   // await window.ethereum.enable();
   this.setState({ account: accounts })
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
        <p>  Your account: {this.state.account}</p>
      </div>
    );
  }
}

export default App;
