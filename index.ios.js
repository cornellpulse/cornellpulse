/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';

var Fitness = require('./Fitness.js');
var Dining = require('./Dining.js');

var CornellPulse = React.createClass({
  getInitialState: function() {
    return {selectedTab: 'Fitness'};
  },

  render: function() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
          <TabBarIOS.Item
              selected={this.state.selectedTab === 'Fitness'}
              icon={{uri:'featured'}}
              onPress={() => {
                  this.setState({selectedTab: 'Fitness'});
              } }>
              <Fitness />
          </TabBarIOS.Item>
          <TabBarIOS.Item
              selected={this.state.selectedTab === 'Dining'}
              icon={{uri:'search'}}
              onPress={() => {
                  this.setState({selectedTab: 'Dining'})
              } }>
              <Dining />
          </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    /*alignItems: 'center',*/
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CornellPulse', () => CornellPulse);
