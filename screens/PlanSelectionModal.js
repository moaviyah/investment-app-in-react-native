import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal, ActivityIndicator, Dimensions, StyleSheet, Alert  } from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PlanSelectionModal = ({ isVisible, selectedPlan, onClose, onConfirm, balance, interest }) => {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = () => {
    if(balance>selectedPlan){
    setIsConfirming(true);
    onConfirm(selectedPlan, interest);
    }  // Pass selected plan back to parent component
    else{
        Alert.alert('Insufficient Balance')
        console.log('insufficient balance')
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true} style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin:windowWidth*0.01}}>
        <View style={{ backgroundColor: '#FFF', padding: 20, borderRadius: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Confirm Selection</Text>
          <Text style={{ marginBottom: 20 }}>You have selected the {selectedPlan}$ plan. Are you sure you want to proceed?</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close-circle-outline" size={30} color="#C7C7CC" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleConfirm}>
              {isConfirming ? (
                <ActivityIndicator color="#007AFF" />
              ) : (
                <Text style={{ color: '#007AFF', fontWeight: 'bold' }}>Confirm</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PlanSelectionModal;

const styles = StyleSheet.create({
    container:{
        margin: windowWidth*0.001,
        padding:windowHeight*0.01
    }
})