import defaultConfig from '../config'
import DefaulLayout from '../layouts/defaultLayout'
import React, { Component } from 'react'
import axios from 'axios';
import { Fragment } from 'react'

export default class extends Component {

  
    //get the single post data
    static async getInitialProps( context ) {
        const slug = context.query.slug
        const response = await axios.get( `${defaultConfig.siteUrl}/wp/v2/posts?slug=${ slug }` )
        return {
            post: response.data[0]
        }
    }

    render() {
        return (
            <Fragment>
                <DefaulLayout>
                <h1>{ this.props.post.title.rendered }</h1>
                <article
                    dangerouslySetInnerHTML={ {
                    __html: this.props.post.content.rendered
                    } } 
                />
                </DefaulLayout>
            </Fragment>
        )
    }
}