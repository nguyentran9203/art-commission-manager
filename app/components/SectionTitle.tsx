import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, style, textStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
});

export { default as SectionTitle } from './SectionTitle';
// This code defines a SectionTitle component that displays a title and an optional subtitle, with customizable styles.