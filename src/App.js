import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import {
  Routes,
  Route,
} from "react-router-dom";
import PageNotFound from './Pages/PageNotFound';
import Dashboard from './Pages/Dashboard';
import Profile from './Components/Dashboard/Profile';
import Chat from './Components/Dashboard/Chat';
import Notification from './Components/Dashboard/Notification';
 
function App(props) {
// const [count, setCount] = useState(10)
// const [show, setshow] = useState(true)
// const [user, setuser] = useState({
//   name:"ankush",
//   sname:"saxena",
//   age:20
// })
// const [products, setProducts]  = useState([])

// useEffect(()=>{
//   apiCall()

// },[])


// // let count = 10
// const incremant = ()=>{
//     setCount(count + 1)
//     setuser({...user,name:"ankit"})
// }
// const updateAge = ()=>{
//   setuser({...user,age:user.age+1})
// }
// const apiCall = ()=>{
//   axios.get("https://dummyjson.com/products").then((res)=>{
//     setProducts(res.data.products)
//    })
// }
  return (
    // <div classNameName="App">
//     <main className="main">
        
//     <section className="card-area">

      
//         <section className="card-section">
//             <div className="card">
//                 <div className="flip-card">
//                     <div className="flip-card__container">
//                         <div className="card-front">
//                             <div className="card-front__tp card-front__tp--city">
//                             //  svg

//                            <h2 className="card-front__heading">
//                             City break
//                         </h2>
//                         <p className="card-front__text-price">
//                             From £29
//                         </p>
//                             </div>

//                             <div className="card-front__bt">
//                                 <p className="card-front__text-view card-front__text-view--city">
//                                     View me
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="card-back">
//                             <video className="video__container" autoPlay muted loop>
//                                 <source className="video__media" src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4"/>
//                             </video>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="inside-page">
//                     <div className="inside-page__container">
//                         <h3 className="inside-page__heading inside-page__heading--city">
//                             For urban lovers
//                         </h3>
//                         <p className="inside-page__text">
//                            As cities never sleep, there are always something going on, no matter what time!
//                         </p>
//                         <a href="#" className="inside-page__btn inside-page__btn--city">View deals</a>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         <section className="card-section">
//             <div className="card">
//                 <div className="flip-card">
//                     <div className="flip-card__container">
//                         <div className="card-front">
//                             <div className="card-front__tp card-front__tp--ski">
//                               //  svg
//                                            <h2 className="card-front__heading">
//                                                Ski trip
//                                            </h2>
//                                            <p className="card-front__text-price">
//                                                From £199
//                                            </p>
//                             </div>

//                             <div className="card-front__bt">
//                                 <p className="card-front__text-view card-front__text-view--ski">
//                                     View me
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="card-back">
//                             <video className="video__container" autoPlay muted loop>
//                                 <source className="video__media" src="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611" type="video/mp4"/>
//                             </video>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="inside-page">
//                     <div className="inside-page__container">
//                         <h3 className="inside-page__heading inside-page__heading--ski">
//                             For snow lovers
//                         </h3>
//                         <p className="inside-page__text">
//                            Love snow? Why not take up exciting ski-in sessions and hit the slope? 
//                         </p>
//                         <a href="#" className="inside-page__btn inside-page__btn--ski">View deals</a>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         <section className="card-section">
//             <div className="card">
//                 <div className="flip-card">
//                     <div className="flip-card__container">
//                         <div className="card-front">
//                             <div className="card-front__tp card-front__tp--beach">
//                           //       svg
                           
//                                            <h2 className="card-front__heading">
//                                                Beach time
//                                            </h2>
//                                            <p className="card-front__text-price">
//                                                From £229
//                                            </p>
//                             </div>

//                             <div className="card-front__bt">
//                                 <p className="card-front__text-view card-front__text-view--beach">
//                                     View me
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="card-back">
//                             <video className="video__container" autoPlay muted loop>
//                                 <source className="video__media" src="https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761" type="video/mp4"/>
//                             </video>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="inside-page">
//                     <div className="inside-page__container">
//                         <h3 className="inside-page__heading inside-page__heading--beach">
//                             For sun lovers
//                         </h3>
//                         <p className="inside-page__text">
//                            Relax and get sun-kissed tan in the sea or take up surfting for an adventure!
//                         </p>
//                         <a href="#" className="inside-page__btn inside-page__btn--beach">View deals</a>
//                     </div>
//                 </div>
//             </div>
//         </section>

    
//         <section className="card-section">
//             <div className="card">
//                 <div className="flip-card">
//                     <div className="flip-card__container">
//                         <div className="card-front">
//                             <div className="card-front__tp card-front__tp--camping">
//                               // svg
//                                            <h2 className="card-front__heading">
//                                                Camping trek
//                                            </h2>
//                                            <p className="card-front__text-price">
//                                                From £129
//                                            </p>
//                             </div>

//                             <div className="card-front__bt">
//                                 <p className="card-front__text-view card-front__text-view--camping">
//                                     View me
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="card-back">
//                             <video className="video__container" autoPlay muted loop>
//                                 <source className="video__media" src="https://player.vimeo.com/external/180185916.sd.mp4?s=c893e4770f87b00e0d6b5a1de138b01b02aaa085&profile_id=164&oauth2_token_id=57447761" type="video/mp4"/>
//                             </video>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="inside-page">
//                     <div className="inside-page__container">
//                         <h3 className="inside-page__heading inside-page__heading--camping">
//                             For nature lovers
//                         </h3>
//                         <p className="inside-page__text">
//                            Get your boots on for some hiking and explore all the beautiful scenery of nature!
//                         </p>
//                         <a href="#" className="inside-page__btn inside-page__btn--camping">View deals</a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </section>
//     <footer className="footer">
//         <p className="footer-text">&copy; 2021 Created by Maza designDev</p>
//       </footer>
// </main>
    // </div>
  
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="profile" element={<Profile/>}/>
            <Route path="chat" element={<Chat/>}/>
            <Route path="notification" element={<Notification/>}/>




        </Route>



      
    </Routes>
      
  
  );
}

export default App;
