import "./Main.css";
import CTA from "./CTA";
import {BsTwitter,BsGithub,BsLinkedIn} from "react-icons/bs"

function Main() {
  return (
    <>
      <header>
        <div className="header_container container">
          <h3>Hello I am</h3>
          <h1>Bayor-Black Abdul-Matin</h1>
          <h5 className="text-light" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id architecto, animi blanditiis, nobis quis esse consectetur eligendi doloribus dolorum laudantium soluta nihil dignissimos inventore voluptate fugiat minima amet beatae reprehenderit!</h5>
          <div className="header_social">
            <a href="google.com" target="_blank"><BsTwitter/></a>
            <a href="google.com" target="_blank"><BsGithub/></a>
            <a href="google.com" target="_blank"><BsLinkedIn/></a>
          </div>
          {/* <CTA/>
          <a href="#contact" className="scroll__down">Scroll Down</a> */}
        </div>
      </header>
    </>
  )
}

export default Main