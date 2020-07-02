import React from 'react'

const Footer = (props) => {
    const { articleProps } = props;
    console.log(articleProps)
    return (
        <div id="footer">
            <div id="footerContent">

            </div>
            <div id="footerCopyright">
                <p>Darkwire, a property of Darkroom Laboratories</p>
                <ul>
                    <li><a href="#">Terms-Conditions</a></li>
                    <li><a href="#">Privacy-Policy</a></li>
                    <li><a href="#">GDPR - General Data Protection Regulation </a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Footer
