import Link from 'next/link'
import clientApi from '../api/clientApi'
import {useState, useEffect} from 'react'

const Navigation = (props) => {
    
    return (
        <nav>
            <div className="nav-wrapper">
                <Link href="/"><a>Accueil</a></Link>
                <ul id="nav-mobile">
                    <li><Link href="/categories"><a>Catégories</a></Link></li>
                    <ul>
                        <li><Link href="/categories"><a>Beauté</a></Link></li>
                        <li><Link href="/categories"><a>Lifestyle</a></Link></li>
                        <li><Link href="/categories"><a>Foode</a></Link></li>
                        <li><Link href="/categories"><a>Marques</a></Link></li>
                    </ul>
                    <li><Link href="/posts"><a>Articles</a></Link></li>
                    <li><Link href="/bons-plans"><a>Bons Plans</a></Link></li>
                    <li><Link href="/about"><a>Qui suis-je ?</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation