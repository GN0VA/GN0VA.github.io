import React from 'react'
import Logo from './img/logo_mario.png'
export default function Header(){
    return(
        <header>
            <div>
                <img src={Logo}/>
                <h1>MARIO</h1>
            </div>
        </header>
    )
}