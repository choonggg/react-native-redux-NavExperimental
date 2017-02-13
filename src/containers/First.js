import React from 'react'
import { connect } from 'react-redux'
import { navigatePush } from '../reducers/navigationState'
import { Button } from 'nachos-ui'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class First extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
        <Button onPress={this.props.onButtonPress}>
          WEW
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2F9CB2',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
		color: '#ffffff',
		marginBottom: 30
	}
})

const mapStateToProps = (state) => {
	return {	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePush('Second'))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(First)
