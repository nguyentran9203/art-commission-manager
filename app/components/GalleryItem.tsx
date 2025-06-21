import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

export interface GalleryItemProps {
  image: ImageSourcePropType;
  title: string;
  artistUsername: string;
  rating?: string; // e.g. "5★" or "4.8★"
  width?: number;
  height?: number;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  image,
  title,
  artistUsername,
  rating = '',
  width = 195,
  height = 171,
}) => {
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={image}
        style={[styles.image, { width, height }]}
        resizeMode="cover"
      />
      <Text style={styles.title}>
        {title} {rating && ` ${rating}`}
      </Text>
      <Text style={styles.username}>@{artistUsername}</Text>
    </View>
  );
};

export default GalleryItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    flexDirection: 'column',
  },
  image: {
    borderRadius: 10,
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    color: '#666',
  },
  username: {
    fontSize: 12,
    color: '#999',
  },
});
// This code defines a GalleryItem component that displays an image, title, artist username, and an optional rating.

export { default as GalleryItem } from './GalleryItem';