import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';

const Result = ({ route }) => {
  const { res, metrics, option } = route.params;
  return (
    <ScrollView>
      <View style={{ display: 'flex', alignItems: 'center', backgroundColor: '#2151A0', height: '100%' }}>
        <View style={{ backgroundColor: '#2151A0', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../assets/result.png')} style={{ height: 300, width: 300 }} />
        </View>
        <View style={{ gap: 10 }}>
          {res === 'COVID-19' ? (
            <>
              <View style={{ backgroundColor: '#dedede', borderRadius: 10, padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 600 }}>Result :</Text>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: 400 }}>The Result for the Image is {res} Positive</Text>
                </View>
              </View>
              <View style={{ backgroundColor: '#dedede', borderRadius: 10, padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 600 }}>Symptoms:</Text>
                <View style={{ paddingHorizontal: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: 400 }}>Fever or chills</Text>
                  <Text style={{ fontSize: 15, fontWeight: 400 }}>Cough</Text>
                  <Text style={{ fontSize: 15, fontWeight: 400 }}>Shortness of breath or difficulty breathing</Text>
                  <Text style={{ fontSize: 15, fontWeight: 400 }}>Fatigue</Text>
                </View>
              </View>
              <View style={{ backgroundColor: '#dedede', borderRadius: 10, padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 600 }}>How to Cure it:</Text>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: 400 }}>Please Consult your Doctor</Text>
                </View>
              </View>
            </>
          ) : (
            <View style={{ gap: 10 }}>
              <View style={{ backgroundColor: '#dedede', borderRadius: 10, padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 600 }}>Result :</Text>
                <Text style={{ fontSize: 15, fontWeight: 400 }}>The Result for the Image is {res}</Text>
              </View>
              <View style={{ backgroundColor: '#dedede', borderRadius: 10, padding: 20 }}>
                <Text style={{ fontSize: 15, fontWeight: 400 }}>You are a normal Person</Text>
              </View>
            </View>
          )}
        </View>
        <View style={{ backgroundColor: '#dedede', borderRadius: 10, padding: 20, marginVertical: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>{option} Metrics :</Text>
          {Object.entries(metrics).map(([metric, value]) => (
            <View key={metric} style={{ backgroundColor: '#dedede', borderRadius: 10, padding: 20, marginVertical: 2 }}>
              <Text style={{ fontSize: 20, fontWeight: 600 }}>{metric}:<Text style={{ fontSize: 15, fontWeight: 400 }}></Text>
                {value}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Result;  