import React from 'react'
import { connect } from 'react-redux'
import { navigatePush, navigatePop } from '../reducers/navigationState'

import {
  NavigationExperimental,
  View,
  Text,
  StyleSheet
} from 'react-native'

const {
  Header: NavigationHeader
} = NavigationExperimental

import { Button } from 'nachos-ui'

class Second extends React.Component {
  render() {
    let { navigateBack } = this.props
    return(
      <View>
        <Text>Hello World</Text>
        <Button onPress={navigateBack}>
          Hello
        </Button>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
	return {	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
    navigateBack: () => {
      dispatch(navigatePop())
    },
		onButtonPress: () => {
			dispatch(navigatePush('Second'))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Second)
