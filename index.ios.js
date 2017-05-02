/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import {
  SideMenu,
  List,
  ListItem,
  Button
} from 'react-native-elements'

const Carousel = require('react-native-carousel');
const { width, height } = Dimensions.get('window')

export default class ReactNativeSample extends Component {
  
  constructor() {
    super()
    this.state = {
      menuIsOpen: false
    }
    this.toggleSideMenu = this.toggleSideMenu.bind(this)
  }

  toggleSideMenu() {
    console.log('menu', !this.state.menuIsOpen)
    this.setState({ 
      menuIsOpen:  !this.state.menuIsOpen
    })
  }

  render() {
  
     const Menu = (
      <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 30}}>
        <Text>
            This is the menu.
        </Text>
      </View>
    )

    return (
      <SideMenu 
        isOpen={this.state.menuIsOpen} 
        menu={Menu}>
      	<App toggleSideMenu={this.toggleSideMenu} />
      </SideMenu>
    );
  }
}

const App = ({ toggleSideMenu }) => {

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableHighlight
          style={{marginTop: 20, marginLeft: 9}}
          onPress={toggleSideMenu}
          underlayColor='transparent'>
          <Icon
            name='menu'
            size={28}
          />
        </TouchableHighlight>
        <Text style={{marginTop: 25, marginLeft: 30}}>This is the header</Text>
      </View>

      <View style={styles.container}>
        <Text>
          Testing React Native!!!
        </Text>
      </View>
      <View style={{ flex: 2, backgroundColor: 'skyblue' }}>
        <Carousel width={width} animate={false} indicatorAtBottom={true} indicatorOffset={0}>
          <View style={styles.pageContainer}>
            <Text>Page 1</Text>
          </View>
          <View style={styles.pageContainer}>
            <Text>Page 2</Text>
          </View>
          <View style={styles.pageContainer}>
            <Text>Page 3</Text>
          </View>
        </Carousel>
      </View>
      <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
    </View>
	)
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pageContainer: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
