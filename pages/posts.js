import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import DefaultLayout from '../layouts/defaultLayout'
import clientApi from '../api/clientApi'

export default class extends Component {

    //get the posts data
    static async getInitialProps () {
        const posts = await clientApi.getPosts()
        return {
            posts: posts.data,
        }
    }

    render() {
        return (
            <Fragment>
                <DefaultLayout>
                    <h1>listes des articles</h1>
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