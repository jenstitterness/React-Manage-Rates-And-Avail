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
  View
} from 'react-native';

var Calendar = require('react-native-calendar-android'),
  moment = require('moment');

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

var today = moment().format("YYYY/MM/DD");

class ManageRoomsAndRates extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>Manage Rates And Availability</Text>
      <Calendar
        width={300}
        topbarVisible={true}
        arrowColor="#dadafc"
        showDate="all"
        currentDate={[ today ]}
        selectionMode="multiple"
        selectionColor="#dadafc"
        onDateChange={(data) => {
          console.log(data);
        }} />
      </View>
    );
  }
}

AppRegistry.registerComponent('ManageRoomsAndRates', () => ManageRoomsAndRates);
