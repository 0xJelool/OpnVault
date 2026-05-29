 import { useState } from "react";
import "./App.css";

function App() {
  const [wallet, setWallet] = useState("")

const connectWallet = async () => {
  if (!window.ethereum) {
    alert("Install MetaMask or Rabby")
    return
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  })

  setWallet(accounts[0])
}
  return (
    <main className="page">
      <nav className="nav">
        <div className="logo">OPNVault</div>
        <div className="navLinks">
          <span>Vaults</span>
          <span>Yield</span>
          <span>Security</span>
          <a href="#roadmap">Roadmap</a>
        </div>
        <button className="navBtn" onClick={connectWallet}>
  {wallet
    ? `${wallet.slice(0,6)}...${wallet.slice(-4)}`
    : "Connect Wallet"}
</button>
      </nav>

      <section className="hero">
        <div className="heroText">
          <div className="chips">
            <span>STAKING</span>
            <span>VAULTS</span>
            <span>YIELD</span>
            <span>OPN CHAIN</span>
          </div>

          <p className="eyebrow">MAKE YIELD ON &gt;</p>

          <h1>
            The Vault Infrastructure <br />
            for OPN DeFi Assets
          </h1>

          <p className="subtitle">
            OPNVault is a simple decentralized vault concept for secure
            deposits, future staking, and yield access across the OPN ecosystem.
          </p>

          <div className="actions">
            <button>Launch Coming Soon</button>
            <a href="#roadmap" className="secondary">
              View Roadmap
              </a>
          </div>
        </div>

        <div className="dashboard">
          <div className="dashTop">
            <span>Vault Preview</span>
            <strong>OPN</strong>
          </div>

          <div className="balance">
            <p>Total Vault Value</p>
            <h2>$2,400,000</h2>
            <span>Projected protocol capacity</span>
          </div>

          <div className="rows">
            <div>
              <span>Projected APY</span>
              <b>12%</b>
            </div>
            <div>
              <span>Launch Phase</span>
              <b>Q3</b>
            </div>
            <div>
              <span>Status</span>
              <b>Coming Soon</b>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <h3>Secure Vaults</h3>
          <p>Deposit and withdrawal flow designed for future on-chain integration.</p>
        </div>
        <div>
          <h3>Yield Layer</h3>
          <p>Built as a foundation for staking, rewards, and OPN-native DeFi tools.</p>
        </div>
        <div>
          <h3>OPN Native</h3>
          <p>Smart contract deployed on OPN Chain for builder verification.</p>
        </div>
      </section>
      <section id="roadmap" className="roadmap">
  <h2>Roadmap</h2>

  <div className="roadmapCard">
    <h3>Q2 2026</h3>
    <p>Launch OPNVault Beta on OPN Testnet</p>
  </div>

  <div className="roadmapCard">
    <h3>Q3 2026</h3>
    <p>Introduce staking rewards and analytics dashboard</p>
  </div>

  <div className="roadmapCard">
    <h3>Q4 2026</h3>
    <p>Cross-chain vault integration and OPN mainnet support</p>
  </div>
</section>
    </main>
  );
}

export default App;