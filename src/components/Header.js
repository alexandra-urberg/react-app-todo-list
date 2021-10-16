import React from 'react';

function Header() {

    const header ={
        minHeight: '20vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 0 60px'
    }

    const header__title = {
        fontSize: '3.5rem',
        fontStyle: 'bold'
    }

    const header__subtitle = {
        fontSize: '1.2rem',
        marginTop: '1rem',
        fontStyle: 'normal'
    }

    return (
        <header style={header}>
            <h1 style={header__title}>To-Do List</h1>
            <p style={header__subtitle}>You better compleat it</p>
        </header>
    )
}

export default Header;