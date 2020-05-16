import Navigation from '../components/Navigation'
import GlobalContext from '../store/globalContext'

const DefaultLayout = props => {

    const contextValue = {
        navigation: [],
        updateNavigation: () => {}
    }

    return (
        <GlobalContext.Provider value={contextValue}>
            <Navigation/>
            { props.children }
        </GlobalContext.Provider>
    )
}

export default DefaultLayout