import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="parent-container">
                <div className="header">
                    <div id="header-menu" className="header-menu">
                        <span><i className="far fa-bars"></i></span>
                        <label id="headerLabel">MENU</label>
                    </div>
                    <div className="header-title">
                        <div>
                            <span><i class="far fa-search"></i></span>
                        </div>
                        <div className="header-awards">
                            <label>awwwards.</label>
                        </div>
                        <div id="header_register">
                            <label>REGISTER / LOG IN</label>
                        </div>
                    </div>
                    <div className="header-menu header-submit">
                        <label style={{ marginTop: "11%" }}
                            id="headerLabel">SUBMIT YOUR SITE!</label>
                    </div>
                </div>

                <div className="header filter-container">
                    <div className="header-menu filter">
                        <span style={{ fontWeight: "600", fontSize: "15px" }}>
                            <i className="far fa-filter"></i>
                        </span>
                    </div>
                    <div className="header-menu filter">
                        <label style={{ fontWeight: "600", fontSize: "15px" }}>Filter By</label>
                    </div>
                    <div className="header-menu filter">
                        <label>AWARDS</label>
                        <span><i className="fas fa-caret-down"></i></span>
                    </div>
                    <div className="header-menu filter">
                        <label>CATEGORIES</label>
                        <span><i className="fas fa-caret-down"></i></span>
                    </div>
                    <div className="header-menu filter">
                        <label>TAGS</label>
                        <span><i className="fas fa-caret-down"></i></span>
                    </div>
                    <div className="header-menu filter">
                        <label>TECHNOLOGIES</label>
                        <span><i className="fas fa-caret-down"></i></span>
                    </div>
                    <div className="header-menu filter">
                        <label>COLORS</label>
                        <span><i className="fas fa-caret-down"></i></span>
                    </div>
                    <div className="header-menu filter">
                        <label>COUNTRIES</label>
                        <span><i className="fas fa-caret-down"></i></span>
                    </div>
                </div>

                <div className="main-container">
                    <div className="cards">
                        <div id="imgs">
                            <img src="../images/discobrain.png" alt="" className="cardimg" />
                        </div>
                        <div className="card-content">
                            <label className="card-header">Blob Mixer</label>
                            <div className="card-details">
                                <label>From Sweden</label>
                                <label>March 10, 2020</label>
                            </div>
                            <div className='card-footer'>
                                <div className="footer-imgcontent">
                                    <img src="../images/cardimg1.jpeg" alt="" id="cardfooterImg" />
                                    <label style={{
                                        margin: "5px",
                                        marginTop: "3px",
                                        color: "#6c6969",
                                        fontSize: "14px"
                                    }}>BY <b>14ISLANDS</b></label>
                                </div>
                                <div>
                                    <button className="footer-btn btn1">HM</button>
                                    <button className="footer-btn btn2">DEV</button>
                                    <button className="footer-btn btn3">SOLD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div id="imgs">
                            <img src="../images/beautility.jpg" alt="" className="cardimg" />
                        </div>
                        <div className="card-content">
                            <label className="card-header">Bonjour Paris</label>
                            <div className="card-details">
                                <label>From France</label>
                                <label>March 10, 2021</label>
                            </div>
                            <div className='card-footer'>
                                <div className="footer-imgcontent">
                                    <img src="../images/cardimg2.jpg" alt="" id="cardfooterImg" />
                                    <label style={{
                                        margin: "5px",
                                        marginTop: "3px",
                                        color: "#6c6969",
                                        fontSize: "14px"
                                    }}>BY <b>Bonjour Paris</b></label>
                                </div>
                                <div>
                                    <button className="footer-btn btn1">HM</button>
                                    <button className="footer-btn btn3">SOLD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div id="imgs">
                            <img src="../images/emblem.jpg" alt="" className="cardimg" />
                        </div>
                        <div className="card-content">
                            <label className="card-header">Design Embraced</label>
                            <div className="card-details">
                                <label>From United Kingdom</label>
                                <label>March 10, 2022</label>
                            </div>
                            <div className='card-footer'>
                                <div className="footer-imgcontent">
                                    <img src="../images/cardimg3.jpg" alt="" id="cardfooterImg" />
                                    <label style={{
                                        margin: "5px",
                                        marginTop: "3px",
                                        color: "#6c6969",
                                        fontSize: "14px"
                                    }}>BY <b>Design Embraced</b></label>
                                </div>
                                <div>
                                    <button className="footer-btn btn1">HM</button>
                                    <button className="footer-btn btn2">DEV</button>
                                    <button className="footer-btn btn3">SOLD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-container">
                    <div className="cards">
                        <div id="imgs">
                            <img src="../images/discobrain.png" alt="" className="cardimg" />
                        </div>
                        <div className="card-content">
                            <label className="card-header">Blob Mixer</label>
                            <div className="card-details">
                                <label>From Sweden</label>
                                <label>March 10, 2020</label>
                            </div>
                            <div className='card-footer'>
                                <div className="footer-imgcontent">
                                    <img src="../images/cardimg1.jpeg" alt="" id="cardfooterImg" />
                                    <label style={{
                                        margin: "5px",
                                        marginTop: "3px",
                                        color: "#6c6969",
                                        fontSize: "14px"
                                    }}>BY <b>14ISLANDS</b></label>
                                </div>
                                <div>
                                    <button className="footer-btn btn1">HM</button>
                                    <button className="footer-btn btn2">DEV</button>
                                    <button className="footer-btn btn3">SOLD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div id="imgs">
                            <img src="../images/beautility.jpg" alt="" className="cardimg" />
                        </div>
                        <div className="card-content">
                            <label className="card-header">Bonjour Paris</label>
                            <div className="card-details">
                                <label>From France</label>
                                <label>March 10, 2021</label>
                            </div>
                            <div className='card-footer'>
                                <div className="footer-imgcontent">
                                    <img src="../images/cardimg2.jpg" alt="" id="cardfooterImg" />
                                    <label style={{
                                        margin: "5px",
                                        marginTop: "3px",
                                        color: "#6c6969",
                                        fontSize: "14px"
                                    }}>BY <b>Bonjour Paris</b></label>
                                </div>
                                <div>
                                    <button className="footer-btn btn1">HM</button>
                                    <button className="footer-btn btn3">SOLD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div id="imgs">
                            <img src="../images/emblem.jpg" alt="" className="cardimg" />
                        </div>
                        <div className="card-content">
                            <label className="card-header">Design Embraced</label>
                            <div className="card-details">
                                <label>From United Kingdom</label>
                                <label>March 10, 2022</label>
                            </div>
                            <div className='card-footer'>
                                <div className="footer-imgcontent">
                                    <img src="../images/cardimg3.jpg" alt="" id="cardfooterImg" />
                                    <label style={{
                                        margin: "5px",
                                        marginTop: "3px",
                                        color: "#6c6969",
                                        fontSize: "14px"
                                    }}>BY <b>Design Embraced</b></label>
                                </div>
                                <div>
                                    <button className="footer-btn btn1">HM</button>
                                    <button className="footer-btn btn2">DEV</button>
                                    <button className="footer-btn btn3">SOLD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
