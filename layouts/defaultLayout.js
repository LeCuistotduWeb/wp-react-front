import LoginForm from '../components/login/LoginForm'
import Navigation from '../components/Navigation'
import GlobalContext from '../store/globalContext'

const DefaultLayout = props => {


    return (
        <GlobalContext.Provider value={GlobalContext}>
            <Navigation/>
            <LoginForm/>
            { props.children }
        </GlobalContext.Provider>
    )
}

export default DefaultLayout