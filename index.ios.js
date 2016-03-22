/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  ActivityIndicatorIOS,
  Text,
  TextInput,
  View
} from 'react-native';

var Button = require('react-native-button');


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
    fontSize: 18,
    fontWeight: "800"
  }
});


var InputContainerView = React.createClass({
  save: function() {
    console.log(this.props);
    this.props.isSaving();
  },

  render: function() {
    const styles = StyleSheet.create({
      input: {
        width: 150
      }
    });
    return (
      <View>
        <Text>Availability:</Text>
        <TextInput
          style={{height: 40, marginBottom: 10,borderColor: 'gray', borderWidth: 1, width: 325}}
          value={this.props.data.avail}
          />
        <Text>Rates:</Text>
        <TextInput
          style={{height: 40, marginBottom: 10,borderColor: 'gray', borderWidth: 1, width: 325}}
          value={this.props.data.rates}
          />
        <Text>Restriction:</Text>
        <TextInput
          style={{height: 40, marginBottom: 10,borderColor: 'gray', borderWidth: 1, width: 325}}
          value={this.props.data.restriction}
        />
        <Button
          style={{fontSize: 20, color: 'blue'}}
          styleDisabled={{color: 'red'}}
          onPress={this.save}
        >
          <Text>Save</Text>
        </Button>
      </View>
    );
  }
});


var ManageRoomsAndRates = React.createClass({
  getInitialState: function() {
     return {
       saving: false,
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

  save: function() {
    this.setState({saving: true});
    setTimeout(function() {
      this.setState({saving: false});
    }.bind(this), 2000);
  },

  render: function() {

    var saving,
        calendar,
        inputView;
    if (this.state.saving) {
      saving = <View><Text>Saving</Text><ActivityIndicatorIOS style={[styles.centering, styles.gray, {height: 40}]} color="black"/></View>;
    } else {
      calendar =         <CalendarPicker
                        selectedDate={new Date()}
                        onDateChange={this.onDateChange}
                         />;
                       inputView = <InputContainerView data={this.state.data} isSaving={this.save}></InputContainerView>;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Manage Rates And Availability</Text>
        {saving}

        {calendar}
        {inputView}


      </View>

    );
  }
});


AppRegistry.registerComponent('ManageRoomsAndRates', () => ManageRoomsAndRates);
