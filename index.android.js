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

const DropDown = require('react-native-dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;

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

var RoomPicker = React.createClass({
  _getOptionList: function() {
    return this.refs['OPTIONLIST'];
  },

  render: function() {
    return (
        <View>
          <Select
            width={250}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select a Room">
              <Option>Standard Room</Option>
              <Option>Double Room</Option>
              <Option>Suite</Option>
            </Select>
            <OptionList ref="OPTIONLIST"/>
        </View>
    )
  }
});

class ManageRoomsAndRates extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>Manage Rates And Availability</Text>
      <RoomPicker />
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
        <Text>Availability:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 150}}
          value={"80"}
          />
      </View>
    );
  }
}

AppRegistry.registerComponent('ManageRoomsAndRates', () => ManageRoomsAndRates);
