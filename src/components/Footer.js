import React from 'react';

function Footer() {
    return (
        <div style={{bottom:"0", height: "6em"}}>
            <ul style={{listStyleType:"none", display: "flex", justifyContent: "row"}}>
                <li><a style={{textDecoration: "none", display: "block"}} href="https://www.linkedin.com/in/meghan-murphy-111445179/">LinkedIn</a></li>
                <li><a style={{textDecoration: "none", display: "block"}} href="https://github.com/MMURPHY222">GitHub</a></li>
                <li><a style={{textDecoration: "none", display: "block"}} href="https://twitter.com/BarackObama?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</a></li>
            </ul>
        </div>
    )
}

export default Footer;