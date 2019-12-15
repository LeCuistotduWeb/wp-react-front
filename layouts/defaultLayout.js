import {Component, Fragment} from 'react'
import Navigation from '../components/Navigation'

export default class DefaultPage extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <Fragment>
                {/* <Navigation/> */}
                { this.props.children }
            </Fragment>
        )
    }
}