import Link from 'next/link'
import clientApi from '../api/clientApi'
import {useState, useEffect} from 'react'

const Navigation = (props) => {
    
    return (
        <nav>
            <div className="nav-wrapper">
                <Link href="/"><a>Accueil</a></Link>
                <ul id="nav-mobile">
                    <li><Link href="/posts"><a>Articles</a></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation