import defaultConfig from '../config'
import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import axios from 'axios'
import DefaultLayout from '../layouts/defaultLayout'

export default class extends Component {

    //get the posts data
    static async getInitialProps () {
        const response = await axios.get(`${defaultConfig.siteUrl}/wp/v2/posts`)
        return {
            posts: response.data
        }
    }


    render() {
        return (
            <Fragment>
                <DefaultLayout>
                    <h1>Our Posts Page!</h1>
                    <ul>
                        {
                            this.props.posts.map( post => {
                                return (
                                    <li key={ post.id }>
                                        <Link href={ `/posts/${ post.slug }` }>
                                            <a href={ `/posts/${ post.slug }` }>
                                                { post.title.rendered }
                                            </a>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </DefaultLayout>
            </Fragment>
        )
    }
}