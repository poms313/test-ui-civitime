import React from 'react'
import './App.css';
import man from './assets/man.svg';
import woman from './assets/woman.svg';
import skin from './assets/skin.svg';
import tshirt from './assets/t-shirt.svg';
import light from './assets/color-FCD7B8.svg';
import pink from './assets/color-E0A39A.svg';
import yellow from './assets/color-FCCC84.svg';
import darkBrown from './assets/color-533724.svg';
import lightBlue from './assets/color-B2C7C7.svg';
import green from './assets/color-88C10F.svg';
import red from './assets/color-FF1414.svg';
import striped from './assets/color-striped.svg';

class UserAvatarChoice extends React.Component {
    render() {
        return (
            <form id="UserAvatarChoice">
                <div id='avatars'>
                    <img id='man' src={man} alt='man avatar'></img>
                    <img id='woman' src={woman} alt='woman avatar'></img>
                </div>
                <hr />
                <div id='skinColorChoice'>
                    <img id='skin' src={skin} alt='skin choice'></img>
                    <img id='light' src={light} alt='light skin'></img>
                    <img id='pink' src={pink} alt='pink skin'></img>
                    <img id='yellow' src={yellow} alt='yellow skin'></img>
                    <img id='darkBrown' src={darkBrown} alt='dark brown skin'></img>
                </div>
                <div id='shirtColorChoice'>
                    <img id='tshirt' src={tshirt} alt='t-shirt choice'></img>
                    <img id='lightBlue' src={lightBlue} alt='light blue t-shirt'></img>
                    <img id='green' src={green} alt='green t-shirt'></img>
                    <img id='red' src={red} alt='red t-shirt'></img>
                    <img id='striped' src={striped} alt='striped t-shirt'></img>
                </div>
                <button>Valider</button>
            </form>
        )
    }
}


const App = () => {
    return <div id='temp-style'>
        <div id="container">
            <div id="header">
                <h1>Profil</h1>
            </div>
            <p>Lequel de ces deux avatars préférez-vous?</p>
            <UserAvatarChoice />
        </div>
    </div>
}

export default App;
