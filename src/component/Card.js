import React from 'react'

function Card({details}) {
    return <>
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{details.plan}</h5>
                    <h6 className="card-price text-center">${details.price}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        <li className={details.userEnable?"":"text-muted"}><span className="fa-li"><i className={details.userEnable?"fas fa-check":"fas fa-times"}></i></span>{details.plan==="PLUS" || details.plan==="PRO" ? <b>{details.user}</b>:details.user}</li>
                        <li className={details.stroageEnable?"":"text-muted"}><span className="fa-li"><i className={details.stroageEnable?"fas fa-check":"fas fa-times"}></i></span>{details.storage}</li>
                        <li className={details.projectEnable?"":"text-muted"}><span className="fa-li"><i className={details.projectEnable?"fas fa-check":"fas fa-times"}></i></span>{details.project}</li>
                        <li className={details.accessEnable?"":"text-muted"}><span className="fa-li"><i className={details.accessEnable?"fas fa-check":"fas fa-times"}></i></span>{details.access}</li>
                        <li className={details.privateEnable?"":"text-muted"}><span className="fa-li"><i className={details.privateEnable?"fas fa-check":"fas fa-times"}></i></span>{details.private}</li>
                        <li className={details.supportEnable?"":"text-muted"}><span className="fa-li"><i className={details.supportEnable?"fas fa-check":"fas fa-times"}></i></span>{details.support}</li>
                        <li className={details.subdomainEnable?"":"text-muted"}><span className="fa-li"><i className={details.subdomainEnable?"fas fa-check":"fas fa-times"}></i></span>{details.plan==="PRO"?<><b>Unlimited </b>{details.subdomain}</>:details.subdomain}</li>
                        <li className={details.statusReportEnable?"":"text-muted"}><span className="fa-li"><i className={details.statusReportEnable?"fas fa-check":"fas fa-times"}></i></span>{details.reports}</li>
                    </ul>
                    <div className="d-grid">
                        <a href= "javascript" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Card