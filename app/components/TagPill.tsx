import React from 'react';
import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';

interface TagPillProps {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  selected?: boolean;
}

const TagPill: React.FC<TagPillProps> = ({ label, onPress, selected = false }) => {
  return (
    <TouchableOpacity
      style={[styles.pill, selected && styles.selectedPill]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.pillText, selected && styles.selectedText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TagPill;

const styles = StyleSheet.create({
  pill: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F3E6F9',
    borderRadius: 25,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedPill: {
    backgroundColor: '#FF75B5',
  },
  pillText: {
    fontSize: 14,
    color: '#000',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export { default as TagPill } from './TagPill';
// This code defines a TagPill component that displays a pill-shaped tag with a label. It can be pressed to trigger an action, and it has a selected state that changes its appearance.