import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FooterProps {
  showCopyright?: boolean;
  customText?: string;
}

const Footer: React.FC<FooterProps> = ({
  showCopyright = true,
  customText,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {customText
          ? customText
          : `© ${currentYear} Pastelly. All rights reserved.`}
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    marginTop: 24,
  },
  text: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
});

export { default as Footer } from './Footer';