import React, { useState, useEffect } from "react";
import "./styles/Blog.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import phoenics from '../../image/phoenics.jpeg'
import blog1 from '../images/blog1'
import blog2 from '../images/blog2'
import blog3 from '../images/blog3'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Blog() {
  const [data, setdata] = useState(0);
  const request = async () => {
    await axios.get("http://localhost:8080/blog/getall").then((response) => {
      setdata(response.data.result[0]);
      console.log(response.data.result[0]);
    });
  };
  useEffect(() => {
    request();
  }, []);
  return (
    <div class="container">
      <div class="bloggrid-container" style={{ marginTop: "100px" }}>
        <div className="cards">
          <div className="card"  style={{marginRight:'20px'}}>
            <div className="row blogrow">
              <div className="col-lg-6">
                <img
                  className="card-img"
                  style={{ width: "100%", margin: "12px" }}
                  src={blog1}
                  alt="Suresh Dasari Card"
                />
              </div>
              <div className="col-lg-6">
                <div className="card-body">
                  <h2 className="card-title">{data.blog_title}</h2>
                  <p className="card-text">{data.blog_content}</p>
                  <a href="#" class="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{marginRight:'20px'}}>
            <div className="row blogrow">
              <div className="col-lg-6">
                <img
                  className="card-img"
                  style={{ width: "100%", margin: "12px" }}
                  src={blog2}
                  alt="Suresh Dasari Card"
                />
              </div>
              <div className="col-lg-6">
                <div className="card-body">
                  <h2 className="card-title">{data.blog_title}</h2>
                  <p className="card-text">{data.blog_content}</p>
                  <a href="#" class="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{marginRight:'20px'}}>
            <div className="row blogrow">
              <div className="col-lg-6">
                <img
                  className="card-img"
                  style={{ width: "100%", margin: "12px" }}
                  src={blog3}
                  alt="Suresh Dasari Card"
                />
              </div>
              <div className="col-lg-6">
                <div className="card-body">
                  <h2 className="card-title">What is Lorem Ipsum?</h2>
                  <p className="card-text">{data.blog_content}</p>
                  <a href="#" class="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="card card-body recent" style={{height:'29%',width:'150%'}}>
          <p>
            <h2 className=" card-title recents">Recent Blogs</h2>
            <a href="https://www.google.com" className="recent-post">
              blog title
            </a>
          </p>
          {/* <textarea className="recentTab"></textarea>
                        <textarea className="recentTab"></textarea>
                        <textarea className="recentTab"></textarea>
                        <textarea className="recentTab"></textarea>
                        <textarea className="recentTab"></textarea> */}
        </div>
      </div>

      <div className="main-footer">
        <center>
          <div class="social-container">
            <h3 className="socialFollow">Social Follow</h3>
            <a
              href="https://www.facebook.com/farah.haddar.3"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/farahhaddar/"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/farah-haddar/"
              className="linkedin social"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Blog;
