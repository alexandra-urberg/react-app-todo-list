import React from 'react';

function Footer() {

    const footer = {
       width: '80%',
       flexShrink: 0,
       margin: '0 auto',
       paddingBottom: 60
    }

    const footerName = {
        width: '100',
        textAlign: 'center',
          
        fontSize: 18,
        lineHeight: 20.5,
        fontStyle: 'normal',
        fontWeight: 400
    }


    return (
        <footer style={footer}> 
            <p style={footerName}>&#169; 2021. Alexandra. All rights reserved.</p>
        </footer>
    )
}

export default Footer;