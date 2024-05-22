import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <Link to='/create'>  
              <h6>Create Account</h6>
              </Link>
              <p>
              When you create a Google Account, we ask for some personal info. By providing accurate info, you can help keep your account secure and make our services more useful.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <Link to='/findjob'>  
              <h6>Find a Job/Post a Job</h6> 
              </Link>
              
               <p>
              finding a job takes time and effort, but with perseverance and the right approach, you can land a fulfilling role. Good luck! If you need help with any specific aspect of your job search, feel free to ask.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <Link to='/applyjob'>  
              <h6>Apply For Job/Recruit Suitable Candidates</h6>
              </Link>
              
              <p>
              Whether you're applying for a job or recruiting candidates, it's important to approach the process with professionalism and attention to detail. Good luck with your job search or recruitment efforts! If you have any specific questions or need further assistance, feel free to ask.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;