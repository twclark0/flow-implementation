// @flow

import { connect } from 'react-redux'
import App from '../components/App'
import * as Actions from '../actions'
import type { StoreState, ComponentsProps } from '../flow-types'
import type { Connector } from 'react-redux';

const mapStateToProps = (state: StoreState) => {
	return Object.keys(state).reduce((acc, cV) => ({...acc, [cV]: state[cV]}), {})
}

const connector: Connector<{}, ComponentsProps> = connect(mapStateToProps, Actions)

export default connector(App)