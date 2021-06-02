import React, { useState, useEffect } from "react";
import "./styles/About.css";
import farah from "../images/farah.png";
import axios from "axios";

function About() {
    const [data, setdata] = useState({});
    const request = async () => {
        await axios
            .get("http://localhost:8080/about/getall")
            .then((response) => {
                setdata(response.data.result[0]);
            });
    };
    useEffect(() => {
            request();
    }, []);

    return (
        
            <div className="container" style={{ marginBottom: "150px" }} id="home">
                <div
                    className="grid-container"
                    style={{ color: "black", marginTop: "120px" }}
                >
                    <div className="item1 ">
                        <div className="item1-1">
                            <div className="box arrow-bottom w3-animate-top">
                                Hello I Am
              </div>
                        </div>
                        <div className="item1-2 name w3-animate-left">
                            {data.first_name} {data.last_name}
                        </div>
                        <div className="item1-3 bio w3-animate-right">
                            {data.bio}
                        </div>
                        <div className="item1-4 row-btn w3-animate-left">
                            <input
                                type="button"
                                className="btn btn-download"
                                value="Download CV"
                            />
                            <input type="button" className="btn btn-work" value="My Work" />
                        </div>
                        <div className="item1-5 quote w3-animate-bottom">
                            <p>
                                ``{data.favorite_quote}”
                <span className="float">John Johnson</span>
                            </p>
                        </div>
                    </div>
                    <div className="item2 w3-animate-zoom">
                        <div className="bg">
                            <img src={farah} alt="farah's pic " />
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default About;
