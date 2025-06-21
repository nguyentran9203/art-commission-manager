// app/index.tsx
import React from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Footer from './components/Footer';
import SectionTitle from './components/SectionTitle';
import TagPill from './components/TagPill';
import GalleryItem from './components/GalleryItem';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// ✅ Move this type definition OUTSIDE the component
type RootStackParamList = {
  Home: { role?: 'artist' | 'client' }; // role is optional
  SignUp: undefined;
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const route = useRoute<HomeScreenRouteProp>();
  const navigation = useNavigation<HomeScreenNavProp>();
  const role = route.params?.role ?? null; 

  return (
    <ScrollView style={styles.container}>
      {/* Top Buttons */}
      {!role && (
        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.artistBtn} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.btnText}>I'm an artist+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}

      {role === 'artist' && (
        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.artistDashboardBtn}>
            <Text style={styles.btnText}>Artist Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.profilePlaceholder}>👤</Text>
          </TouchableOpacity>
        </View>
      )}

      {role === 'client' && (
        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.profilePlaceholder}>👤</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Logo and Subtitle */}
      <Text style={styles.logo}>Pastelly</Text>
      <Text style={styles.subtitle}>Custom art commissions made easy.</Text>
      <Text style={styles.subsubtitle}>On the go.</Text>

      {/* Search Bar */}
      <TextInput style={styles.search} placeholder="Search" />

      {/* Carousel */}
      <View style={styles.carousel}>
        <Image
          source={require('./assets/images/carousel_sample.png')}
          style={styles.carouselImage}
          resizeMode="cover"
        />
        <View style={styles.carouselDots}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
      </View>

      {/* Tag Filters */}
      <View style={styles.tagSection}>
        <TagPill label="design" />
        <TagPill label="illustration" selected />
        <TagPill label="All categories" onPress={() => console.log('Filter pressed')} />
      </View>

      {/* Gallery */}
      <View style={styles.galleryRow}>
        <GalleryItem
          image={require('./assets/images/character_design_4.png')}
          title="Colored Sketch"
          artistUsername="@artist.username"
          rating="5★"
        />
        <GalleryItem
          image={require('./assets/images/character_illustration.png')}
          title="Colored Sketch"
          artistUsername="@artist.username"
          rating="5★"
        />
      </View>

      {/* Showcase */}
      <SectionTitle title="Showcases" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.galleryScroll}>
        <Image source={require('./assets/images/showcase_1.png')} style={styles.showcaseItem} />
        <Image source={require('./assets/images/showcase_2.png')} style={styles.showcaseItem} />
      </ScrollView>

      {/* Footer */}
      <Footer customText="© 2025 Pastelly. All rights reserved." />
    </ScrollView>
  );
};



export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
    gap: 8,
  },
  artistBtn: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  signUpBtn: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  artistDashboardBtn: {
    backgroundColor: '#D1E7FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  btnText: {
    fontSize: 12,
    fontWeight: '500',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
  subsubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  search: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  carousel: {
    alignItems: 'center',
    marginBottom: 16,
  },
  carouselImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },
  carouselDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#CCC',
  },
  activeDot: {
    backgroundColor: '#333',
  },
  tagSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  galleryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  galleryScroll: {
    paddingVertical: 8,
  },
  showcaseItem: {
    width: 140,
    height: 100,
    marginRight: 12,
    borderRadius: 8,
  },
  profileIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  profilePlaceholder: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});
