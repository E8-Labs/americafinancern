import React, { useState, useEffect } from 'react';
import { View, Button, Text, Alert, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

const Dropdown = () => {
  const [showJoiningCalendar, setShowJoiningCalendar] = useState(false);
  const [showResigningCalendar, setShowResigningCalendar] = useState(false);
  const [joiningDate, setJoiningDate] = useState(null);
  const [resigningDate, setResigningDate] = useState(null);
  const [maxSelectableDate, setMaxSelectableDate] = useState(moment().format('YYYY-MM-DD'));

  
  useEffect(() => {
    // Update maxSelectableDate when needed
    setMaxSelectableDate(moment().format('YYYY-MM-DD'));
  }, [/* add dependencies that trigger the update */]);

  const handleJoiningCalendarPress = () => {
    setShowJoiningCalendar(!showJoiningCalendar);
  };

  const handleResigningCalendarPress = () => {
    setShowResigningCalendar(!showResigningCalendar);
  };

  const handleJoiningDateSelect = (day) => {
    const selectedDate = moment(day.dateString);

    // Check if the selected date is not after the current date
    if (selectedDate.isSameOrBefore(moment(), 'day')) {
      setJoiningDate(day.dateString);
      setShowJoiningCalendar(false);
    } else {
      Alert.alert('Invalid Selection', 'Please select a date up to the current date.');
    }
  };

  const handleResigningDateSelect = (day) => {
    const selectedDate = moment(day.dateString);

    // Check if the selected date is not after the current date
    if (selectedDate.isSameOrBefore(moment(), 'day')) {
      // Check if resigning date is not less than joining date
      if (joiningDate && selectedDate.isSameOrAfter(moment(joiningDate), 'day')) {
        setResigningDate(day.dateString);
        setShowResigningCalendar(false);
      } else {
        Alert.alert('Invalid Selection', 'Resigning date cannot be less than Joining date.');
      }
    } else {
      Alert.alert('Invalid Selection', 'Please select a date up to the current date.');
    }
  };

  // Function to format the date in "mm/dd/yyyy" format
  const formatDate = (dateString) => {
   // const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return moment(dateString).format('MM/DD/YYYY');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleJoiningCalendarPress}>
          <Text style={styles.buttonText}>Select Joining Date</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleResigningCalendarPress}>
          <Text style={styles.buttonText}>Select Resigning Date</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showJoiningCalendar || showResigningCalendar}
        onRequestClose={() => {
          setShowJoiningCalendar(false);
          setShowResigningCalendar(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Calendar
            onDayPress={(day) => (showJoiningCalendar ? handleJoiningDateSelect(day) : handleResigningDateSelect(day))}
            markedDates={{ [showJoiningCalendar ? joiningDate : resigningDate]: { selected: true, selectedColor: 'blue' } }}
            maxDate={maxSelectableDate} // Set the maximum selectable date to the current date
          />
        </View>
      </Modal>

      {joiningDate && (
        <View>
          <Text>Joining Date: {formatDate(joiningDate)}</Text>
        </View>
      )}

      {resigningDate && (
        <View>
          <Text>Resigning Date: {formatDate(resigningDate)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dropdown;
