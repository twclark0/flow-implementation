import { connect } from 'react-redux'
import App from '../components/App'
import * as Actions from '../actions'

const mapStateToProps = (state) => {
	return Object.keys(state).reduce((acc, cV) => ({...acc, [cV]: state[cV]}), {})
}

const AppContainer = connect(mapStateToProps, Actions)(App)

export default AppContainer