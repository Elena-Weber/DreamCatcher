import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

const onClickOne = () => {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1576869066761-d16044dfe72f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')";
}

const onClickTwo = () => {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1550953191-e51d7414b236?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')";
}

const onClickThree = () => {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1500874838097-449a123660fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')";
}

const onClickFour = () => {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1597328928630-8640bccd0351?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')";
}

const onClickFive = () => {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1603037230301-51848967f152?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')";
}

    return (
        <div className="navi">
            <NavLink to="/">All your dreams </NavLink>|
            <NavLink to="/dreams/new"> Create a new dream </NavLink>
            <p> Change background image: <button onClick={onClickOne}>1</button><button onClick={onClickTwo}>2</button><button onClick={onClickThree}>3</button><button onClick={onClickFour}>4</button><button onClick={onClickFive}>5</button></p>
        </div>
    )
}
export default Navbar