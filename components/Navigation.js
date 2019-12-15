import React, { Component } from 'react'
import Link from 'next/link'
import clientApi from '../api/clientApi'

export default class Navigation extends Component {

    //get the menu data
    static async getInitialProps () {
        const menu = await clientApi.getMenu('menu-principal')
        return {
            menu: menu.data,
        }
    }

    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link href="/"><a href="#" className="brand-logo">Logo</a></Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link href="/posts"><a href="/posts">Articles</a></Link></li>
                        <li><Link href="/about"><a href="/about">A propos</a></Link></li>
                        {/* {
                            this.props.menu.items.map( item => {
                                return (
                                    <li key={ item.term_id }>
                                        <Link href={ `/posts/${ item.url }` }>
                                            <a href={ `/posts/${ item.url }` }>
                                                { item.name }
                                            </a>
                                        </Link>
                                    </li>
                                )
                            })
                        } */}
                    </ul>
                </div>
            </nav>
        )
    }
}