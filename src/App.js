import React from "react";
import Card from "./component/Card";
function App() {
  let data = [
    {
      plan: "FREE",
      price: "0",
      user: "Single User",
      userEnable:true,
      storage: "5GB Storage",
      stroageEnable:true,
      project: "Unlimited Public Projects",
      projectEnable:true,
      access: "Community Access",
      accessEnable:true,
      private: "Unlimited Private Projects",
      privateEnable:false,
      support:"Dedicated Phone Support",
      supportEnable:false,
      subdomain:"Free Subdomain",
      subdomainEnable:false,
      reports:"Monthly Status Reports",
      statusReportEnable:false,
    },
    {
      plan: "PLUS",
      price: "9",
      user: "5 Users",
      userEnable:true,
      storage: "50GB Storage",
      stroageEnable:true,
      project: "Unlimited Public Projects",
      projectEnable:true,
      access: "Community Access",
      accessEnable:true,
      private: "Unlimited Private Projects",
      privateEnable:true,
      support:"Dedicated Phone Support",
      supportEnable:true,
      subdomain:"Free Subdomain",
      subdomainEnable:true,
      reports:"Monthly Status Reports",
      statusReportEnable:false,
    },
    {
      plan: "PRO",
      price: "49",
      user: "Unlimited User",
      userEnable:true,
      storage: "150GB Storage",
      stroageEnable:true,
      project: "Unlimited Public Projects",
      projectEnable:true,
      access: "Community Access",
      accessEnable:true,
      private: "Unlimited Private Projects",
      privateEnable:true,
      support:"Dedicated Phone Support",
      supportEnable:true,
      subdomain:"Free Subdomain",
      subdomainEnable:true,
      reports:"Monthly Status Reports",
      statusReportEnable:true,
    }
  ]
  return <>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            data.map((e, i) => {
              return <Card details={e} key= {i} />
            })
          }
        </div>
      </div>
    </section>
  </>
}

export default App;
