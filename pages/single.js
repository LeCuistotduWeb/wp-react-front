import DefaulLayout from '../layouts/defaultLayout'
import React, { Component } from 'react'
import { Fragment } from 'react'
import clientApi from '../api/clientApi'

export default class extends Component {

    //get the single post data
    static async getInitialProps( context ) {
        const slug = context.query.slug
        const response = await clientApi.getPost(slug)
        return {
            post: response.data[0]
        }
    }

    render() {
        return (
            <Fragment>
                <DefaulLayout>
                <h1>{ this.props.post.title.rendered }</h1>
                <div
                    dangerouslySetInnerHTML={ {
                    __html: this.props.post.content.rendered
                    } } 
                />
                </DefaulLayout>
            </Fragment>
        )
    }
}