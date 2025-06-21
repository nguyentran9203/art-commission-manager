// app/screens/SignUpScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation/AppNavigator'; // Adjust path as needed

type SignUpScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpScreenNavProp>();
  const [selectedRole, setSelectedRole] = useState<'artist' | 'client' | null>(null);
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    if (selectedRole === 'client') {
      navigation.navigate('ClientSignUp');
    }
  };

  const handleJoinDiscord = () => {
    Linking.openURL('https://discord.gg/yourserver'); // Replace with your actual invite
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Choose your role to get started</Text>

      <TouchableOpacity
        style={[styles.roleButton, selectedRole === 'artist' && styles.selectedRole]}
        onPress={() => setSelectedRole('artist')}
      >
        <Text style={styles.roleText}>I’m an Artist</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.roleButton, selectedRole === 'client' && styles.selectedRole]}
        onPress={() => setSelectedRole('client')}
      >
        <Text style={styles.roleText}>I’m a Client</Text>
      </TouchableOpacity>

      {selectedRole === 'client' && (
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      )}

      {selectedRole === 'artist' && (
        <View style={styles.artistForm}>
          <Text style={styles.artistNote}>We'll reach out to you via email!</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TouchableOpacity style={styles.discordButton} onPress={handleJoinDiscord}>
            <Text style={styles.discordText}>Or Join our Discord</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
  },
  roleButton: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 16,
    alignItems: 'center',
  },
  selectedRole: {
    borderColor: '#3399FF',
    backgroundColor: '#E5F0FF',
  },
  roleText: {
    fontSize: 16,
  },
  continueButton: {
    marginTop: 24,
    backgroundColor: '#3399FF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistForm: {
    marginTop: 24,
    alignItems: 'center',
  },
  artistNote: {
    fontSize: 14,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    width: '100%',
    marginBottom: 16,
  },
  discordButton: {
    paddingVertical: 12,
  },
  discordText: {
    color: '#5865F2',
    fontWeight: '600',
  },
});
