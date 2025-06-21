// app/index.tsx
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionTitle from './components/SectionTitle';
import TagPill from './components/TagPill';
import GalleryItem from './components/GalleryItem';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Header subtitle="Custom art commissions made easy" />

      <View style={styles.tagSection}>
        <TagPill label="Design" />
        <TagPill label="Illustration" selected />
        <TagPill label="All Categories" onPress={() => console.log('Filter pressed')} />
      </View>

      <SectionTitle title="All Categories" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.galleryScroll}>
        <View style={styles.galleryRow}>
          <GalleryItem
            image={require('./assets/images/character_design_4.png')}
            title="Character Design"
            artistUsername="artist.username"
            rating="5★"
          />
         
      
        </View>
      </ScrollView>

      <SectionTitle title="Showcases" subtitle="Curated art collections" />
      <SectionTitle title="Browse Artists" style={{ marginTop: 40 }} />

      <Footer customText="© 2025 Pastelly. All rights reserved." />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tagSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  galleryScroll: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  galleryRow: {
    flexDirection: 'row',
  },
});
