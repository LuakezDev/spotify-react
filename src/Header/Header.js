import React from "react";
import './Header.css';
import arrowLeft from "../assets/icons/small-left.png";
import arrowRight from "../assets/icons/small-right.png";
import searchB from "../assets/icons/search.png";

const Header = () =>{
    return(
        <nav className="header__navigation">
            <div className="navigation">
               <button className="arrow-left">
                  <img src={arrowLeft} alt="Seta esquerda"/>
               </button>
               <button className="arrow-right">
                  <img src={arrowRight} alt="Seta direita"/>
               </button>
            </div> 
            <div className="header__search">
               <img src={searchB} alt=""/>
               <input id="search-input" type="text" maxLength="800" placeholder="O que você quer ouvir?" />
            </div>
            <div className="header__login">
               <a href="https://www.spotify.com/br-pt/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2Fintl-pt"><button className="subscribe">Inscreva-se</button></a>
               <button className="login">Entrar</button>
            </div>
         </nav>

    )
};

export default Header;