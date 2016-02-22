/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

var CalendarPicker = require('react-native-calendar-picker');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 24,
    fontWeight: "800"
  }
});


var InputContainerView = React.createClass({
  render: function() {
    const styles = StyleSheet.create({
      input: {
        width: 150
      }
    });
console.log(this);
    return (
      <View>
        <Text>Availability:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 150}}
          value={this.props.data.avail}
          />
        <Text>Rates:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 150}}
          value={this.props.data.rates}
          />
        <Text>Restriction:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 150}}
          value={this.props.data.restriction}
        />
      </View>
    );
  }
});

var ManageRoomsAndRates = React.createClass({
  getInitialState: function() {
     return {
       date: new Date(),
       data: {
         rates: Math.floor(Math.random() * (100 - 1) + 1) +"",
         avail: Math.floor(Math.random() * (100 - 1) + 1) +"",
         restriction: Math.floor(Math.random() * (100 - 1) + 1) +""
       }
     };
  },

   onDateChange: function(date) {
    this.setState({ date: date });

    this.setState({
      data: {
        rates: Math.floor(Math.random() * (100 - 1) + 1) +"",
        avail: Math.floor(Math.random() * (100 - 1) + 1) +"",
        restriction: Math.floor(Math.random() * (100 - 1) + 1)+""
      }
    });

  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Manage Rooms And Rates</Text>
        <CalendarPicker
                  selectedDate={new Date()}
                  onDateChange={this.onDateChange}
                   />

                 <InputContainerView data={this.state.data}></InputContainerView>
      </View>

    );
  }
});


AppRegistry.registerComponent('ManageRoomsAndRates', () => ManageRoomsAndRates);
