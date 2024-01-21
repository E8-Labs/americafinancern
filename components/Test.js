import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { View, Button, Text, Alert, Modal, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';

const { height } = Dimensions.get('window')


const Test = () => {
  const [showJoiningCalendar, setShowJoiningCalendar] = useState(false);
  const [showResigningCalendar, setShowResigningCalendar] = useState(false);
  const [joiningDate, setJoiningDate] = useState(null);
  const [resigningDate, setResigningDate] = useState(null);
  const [maxSelectableDate, setMaxSelectableDate] = useState(moment().format("mm-dd-yyyy"))


  useEffect(() => {
    setMaxSelectableDate(moment().format('mm-dd-yyyy'))

  }, [])

  const handleJoiningCalendarPress = () => {
    setShowJoiningCalendar(!showJoiningCalendar);
  };

  const handleResigningCalendarPress = () => {
    setShowResigningCalendar(!showResigningCalendar);
  };

  const handleJoiningDateSelect = (day) => {
    setJoiningDate(day.dateString);
    setShowJoiningCalendar(false);
  };

  const handleResigningDateSelect = (day) => {
    const selectedResigningDate = day.dateString;

    // Check if resigning date is not less than joining date
    if (joiningDate && selectedResigningDate < joiningDate) {
      Alert.alert('Invalid Selection', 'Resigning date cannot be less than Joining date.');
    } else {
      setResigningDate(selectedResigningDate);
      setShowResigningCalendar(false);
    }
  };

  // Function to format the date in "mm/dd/yyyy" format
  const formatDate = (dateString) => {
    return moment(dateString).format("MM-DD-YYYY")
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
        <View style = {{height:height,backgroundColor:'#00000050',}}>
          <View style={styles.modalContainer}>
            <Calendar
              onDayPress={(day) => (showJoiningCalendar ? handleJoiningDateSelect(day) : handleResigningDateSelect(day))}
              markedDates={{ [showJoiningCalendar ? joiningDate : resigningDate]: { selected: true, selectedColor: 'blue' } }}
              maxDate={maxSelectableDate}
            />
          </View>
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
   // flex: 1,
    padding: 10,
    height:height,
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
    // flex: 1,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Test;
