'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text, 
  View,
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  bar: {
    borderColor: 'black',
    borderWidth: 2,
    width: 100,
    height: 20,

  }
})



var UsageBar = React.createClass({
  propTypes : {
    percentage: React.PropTypes.number.isRequired // a number that represents how filled the bar is
  },

  getBarStyle() {
    var barStyle = {
      height: 16, // CAREFUL: this is hardcoded, so adjusting could mess up the view
    }

    if(this.props.percentage >= 70) {
      barStyle['backgroundColor'] = 'red';
    } else if(this.props.percentage >= 40) {
      barStyle['backgroundColor'] = 'yellow';
    } else {
      barStyle['backgroundColor'] = 'green';
    }
    barStyle['width'] = (100 * this.props.percentage) / 100; //  Formula for sizing color bar: <width of UBar> * <percenatage> / 100
    return barStyle;
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bar}>
          <View style={this.getBarStyle()}>
          </View>
        </View>
        <Text>{Math.round(this.props.percentage)}%</Text>
      </View>
    );
  }
})

module.exports = UsageBar;