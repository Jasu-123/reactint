import React from 'react'
import { Login } from './Login'
import music from "../assets/spotify.png"
import "./Home.css"

export const Home = () => {
    return (
        <>
            <div className="nav">
                <div className='image'>
                    <img src={music} />
                </div>
                <div className="s">Spotify</div>
                <div className="P">Premium</div>
                <div className="H">Help</div>
                <div className="D">Download</div>
                <link to={"/registration"}>
                    <div className="s">sign up</div>
                </link>
                <link to={"/login"}>
                    <div className="l">login</div>
                </link>

            </div >
        </>
    )
}

