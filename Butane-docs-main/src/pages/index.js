import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import Card from "../components/Card"

function Home() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Homepage" description="GasPad Docs">
      <main>
        <br />
        <h1 align="center" style={{ fontWeight: '650' }}>Introducing </h1>
        <div align="center">
          <img src="img/logo_effect.png" alt="Butane Logo" width="800" height="800" style={{ margin: '20px 20px' }} />
        </div> 
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">
              <Card
                to="./protocol/evmos-cli"
                header={{
                  label: "🚀 The Launchpad for Everyone",
                }}
                body={{
                  label:
                    "GasPad helps everyone to create their own token and launch their own project on Butane",
                }}
              />

              <Card
                to="./use"
                header={{
                  label: "☄️ Learn about GasPad",
                }}
                body={{
                  label:
                    "Learn about the GasPad protocol and how to use it to create your own Launch",
                }}
              />

              <Card
                to="./protocol/bugs"
                header={{
                  label: "🤑 AirDrop",
                }}
                body={{
                  label:
                    "Learn how to use the AirDrop feature to distribute your token to your community",
                }}
              />

              <Card
                to="./use/token"
                header={{
                  label: "💻 Tokenomics",
                }}
                body={{
                  label:
                    "GasPad Tokenomics is designed to reward holders while increasing in both liquidity and value",
                }}
              />

              <Card
                to="./use/services"
                header={{
                  label: "🛠️ Service Fees",
                }}
                body={{
                  label:
                    "GasPad Service Fees are designed to Boosoooost the value of $GASPAD",
                }}
              />

              <Card
                to="./develop/kyc"
                header={{
                  label: "🛡️ KYC & Audit",
                }}
                body={{
                  label:
                    "Learn how to use the KYC & Audit feature to make your project more secure",
                }}
              />

            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home