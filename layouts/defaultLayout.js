import {Component, Fragment} from 'react'
import Navigation from '../components/Navigation'
import Head from 'next/head'

export default class DefaultPage extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <Fragment>
                <Head>
                    <title>wp-test</title>
                    <meta name="description" content="This is an example of a meta description. This will show up in search results." />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
                </Head>
                <Navigation/>
                { this.props.children }
            </Fragment>
        )
    }
}