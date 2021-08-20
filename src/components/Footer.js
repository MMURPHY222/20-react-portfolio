import React from 'react';

function Footer() {
    return (
        <footer style={{bottom:"0", height: "6em", background: "#E6E0B3"}}>
            <ul style={{listStyleType:"none", display: "flex", justifyContent: "space-around"}}>
                <li><a style={{textDecoration: "none", display: "block"}} href="https://www.linkedin.com/in/meghan-murphy-111445179/">LinkedIn</a></li>
                <li><a style={{textDecoration: "none", display: "block"}} href="https://github.com/MMURPHY222">GitHub</a></li>
                <li><a style={{textDecoration: "none", display: "block"}} href="https://twitter.com/BarackObama?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</a></li>
            </ul>
        </footer>
    )
}

export default Footer;