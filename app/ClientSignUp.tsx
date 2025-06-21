// app/screens/ClientSignUpScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ClientSignUpScreen: React.FC = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [email, setEmail] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const isContinueEnabled = username && birthDate && email;

  const handleDateChange = (event: any, date?: Date) => {
    setShowDatePicker(false);
    if (date) {
      const formatted = date.toLocaleDateString('en-US'); // mm/dd/yyyy
      setSelectedDate(date);
      setBirthDate(formatted);
    }
  };

  return (
    <View style={styles.container}>
      {step === 1 ? (
        <>
          {/* Social Sign Up */}
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#1DA1F2' }]}>
            <Text style={styles.socialText}>Sign up with Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#9146FF' }]}>
            <Text style={styles.socialText}>Sign up with Twitch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.emailButton} onPress={() => setStep(2)}>
            <Text style={styles.emailText}>Sign up with email</Text>
          </TouchableOpacity>

          {/* Login Redirect */}
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginLink}>Log in</Text>
          </Text>
        </>
      ) : (
        <>
          {/* Back and Page indicator */}
          <Text style={styles.stepIndicator}>1/2</Text>
          <Text style={styles.title}>Create account</Text>

          <TextInput
            style={styles.input}
            placeholder="@Username"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
          />

          <TouchableOpacity
  onPress={() => setShowDatePicker(true)}
  style={[styles.input, styles.dateInput]}
>
  <Text style={{ color: birthDate ? '#000' : '#999' }}>
    {birthDate || 'mm/dd/yyyy'}
  </Text>
  <Text style={styles.calendarIcon}>📅</Text>
</TouchableOpacity>

{showDatePicker && (
  <DateTimePicker
    value={selectedDate || new Date()}
    mode="date"
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    maximumDate={new Date()}
    onChange={handleDateChange}
/>
)}



          <Text style={styles.hint}>This will not be shown publicly.</Text>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDate || new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              maximumDate={new Date()}
              onChange={handleDateChange}
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="your@email.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TouchableOpacity
            style={[styles.continueButton, !isContinueEnabled && styles.continueDisabled]}
            disabled={!isContinueEnabled}
            onPress={async () => {
              try {
                const response = await fetch('http://10.0.2.2:3000/api/signup', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    email,
                    username,
                    birthDate,
                    role: 'client',
                  }),
                });

                const data = await response.json();

                if (response.ok) {
                  console.log('✅ Signup success:', data);
                  // TODO: Navigate to home screen or show success
                } else {
                  console.error('❌ Signup failed:', data.message);
                }
              } catch (err) {
                console.error('❌ Network error:', err);
              }
            }}
          >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default ClientSignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  socialButton: {
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  socialText: {
    color: '#fff',
    fontWeight: '600',
  },
  emailButton: {
    backgroundColor: '#F1F1F1',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  emailText: {
    color: '#000',
    fontWeight: '600',
  },
  loginText: {
    textAlign: 'center',
    color: '#333',
    fontSize: 14,
  },
  loginLink: {
    fontWeight: 'bold',
    color: '#000',
  },
  stepIndicator: {
    position: 'absolute',
    top: 16,
    right: 24,
    fontSize: 14,
    color: '#888',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#F1F1F1',
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 16,
  },
   dateInput: {
    backgroundColor: '#F1F1F1',
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  calendarIcon: {
    fontSize: 18,
    marginLeft: 8,
  },

  calendarOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  hint: {
    color: '#888',
    fontSize: 12,
    marginBottom: 12,
    marginTop: -8,
  },
  continueButton: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  continueDisabled: {
    backgroundColor: '#CCC',
  },
  continueText: {
    color: '#fff',
    fontWeight: '600',
  },
});
