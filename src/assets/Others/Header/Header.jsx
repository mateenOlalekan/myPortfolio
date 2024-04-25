// // import "./Header.css"
// // import  { useState, useEffect } from 'react';
// // import {FaBars,FaTimes} from 'react-icons/fa';

// // function Header() {
// //     const [isSticky,setIsSticky]=useState(false)
// //     const [toggle,setToggle] = useState(true);
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsSticky(window.scrollY > 0);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     // Clean up the event listener on component unmount
// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);
// //     };
// //   }, []);
// //   const ChangeToggle = ()=>{
// //     setToggle(!toggle);
// //   }
// //   return (
// //     <>
// //     <nav className={isSticky?'sticky':""}>
// //         <div className="navLogo">
// //             <p>Blac</p>
// //         </div>
       
// //        <ul className="navList">
// //          <li><a href="#home">Home</a></li>
// //          <li><a href="#about">About</a></li>
// //          <li><a href="#skills">My Skill</a></li>
// //          <li><a href="#service">Services</a></li>
// //          <li><a href="#project">Project</a></li>
// //          <li><a href="#contact">Contact</a></li>
// //        </ul>

         
// //      </nav>
// //     </>
// //   )
// // }

// // export default Header;

// import  { useState, useEffect } from 'react';
// import {FaBars,FaTimes} from 'react-icons/fa';
// import './Header.css';

// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);
//    const [toggle,setToggle] = useState(true);
//     const ChangeToggle = ()=>{
//      setToggle(!toggle);
//    }
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header className={isSticky ? 'sticky' : ''}>
//       <div className="navLogo">
//         <p>Blac</p>
//       </div>

//       <ul className="navList">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">My Skill</a></li>
//         <li><a href="#service">Services</a></li>
//         <li><a href="#project">Project</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>

//       <div className="navToggle" onClick={ChangeToggle}>
//            {
//             toggle ? 
//             <FaBars/> : <FaTimes/>
//             }

//            {
//             toggle ?
//               <div className="active">
//               </div>
//                 : 
//               <div className="navToggleBar">
//                      <li><a href="#home">Home</a></li>
//                      <li><a href="#about">About</a></li>
//                      <li><a href="#skills">My Skill</a></li>
//                      <li><a href="#service">Services</a></li>
//                      <li><a href="#project">Project</a></li>
//                      <li><a href="#contact">Contact</a></li>
//               </div> 
//            }
//       </div>
      
//     </header>
//   );
// };

// export default Header;  