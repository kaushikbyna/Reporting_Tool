import React from 'react'
import "../style/activity.css"
import task from "../Images/task-assign.png"

function Activities() {
    return (
        <div className="activity">
           <ul className="timeline" >
                <li>
                    <div className="li_main">
                        <div className="li_first">
                            <div className="pro_info">
                                <img src={task} alt="" />
                                <p>visp patel</p> 
                            </div>
                            <p>Project Status Changed :<span>Project-New 01</span></p>
                        </div>
                        <div className="li_second">
                            <button>
                                19 Hours Before
                            </button>
                            <p>30-05-2021 19:12</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="li_main">
                        <div className="li_first">
                            <div className="pro_info">
                                <img src={task} alt="" />
                                <p>visp patel</p> 
                            </div>
                            <p>Project Updated :<span>Project-New 01</span></p>
                        </div>
                        <div className="li_second">
                            <button>
                                19 Hours Before
                            </button>
                            <p>30-05-2021 19:12</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="li_main">
                        <div className="li_first">
                            <div className="pro_info">
                                <img src={task} alt="" />
                                <p>visp patel</p> 
                            </div>
                            <p>Project Added :<span>Project-New 01</span></p>
                        </div>
                        <div className="li_second">
                            <button>
                                19 Hours Before
                            </button>
                            <p>30-05-2021 19:12</p>
                        </div>
                    </div>
                </li>
            </ul>         
        </div>
    )
}

export default Activities;
