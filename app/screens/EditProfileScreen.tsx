
import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

const EditProfileScreen = ({ navigation }: any) => {

  const [name, setName] =
    useState('Dev Pratap Singh');

  const [bio, setBio] =
    useState('Food Lover 🍕');

  // IMAGE STATE

  const [profileImage, setProfileImage] =
    useState(
      require('../../assets/logo.png')
    );

  // PICK IMAGE

  const pickImage = async () => {

    const result =
      await ImagePicker.launchImageLibraryAsync({

        mediaTypes:
          ImagePicker.MediaTypeOptions.Images,

        allowsEditing: true,

        aspect: [1, 1],

        quality: 1,
      });

    if (!result.canceled) {

      setProfileImage({
        uri: result.assets[0].uri,
      });
    }
  };

  return (

    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* IMAGE */}

      <TouchableOpacity
        onPress={pickImage}
      >

        <Image
          source={profileImage}
          style={styles.profileImage}
        />

        <Text style={styles.changePhotoText}>
          Change Photo
        </Text>

      </TouchableOpacity>

      {/* TITLE */}

      <Text style={styles.heading}>
        Edit Profile
      </Text>

      {/* NAME */}

      <Text style={styles.label}>
        Full Name
      </Text>

      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Enter your name"
      />

      {/* BIO */}

      <Text style={styles.label}>
        Bio
      </Text>

      <TextInput
        value={bio}
        onChangeText={setBio}
        style={styles.bioInput}
        placeholder="Write something..."
        multiline
      />

      {/* SAVE BUTTON */}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            'Profile',
            {
              updatedName: name,
              updatedBio: bio,
              updatedImage: profileImage,
            }
          )
        }
      >

        <Text style={styles.buttonText}>
          Save Changes
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#d2b48c',
    alignItems: 'center',
    paddingTop: 70,
    paddingBottom: 140,
    paddingHorizontal: 20,
  },

  profileImage: {
    width: 170,
    height: 170,

    borderRadius: 100,

    borderWidth: 5,
    borderColor: '#fff',

    marginBottom: 10,
  },

  changePhotoText: {
    textAlign: 'center',
    marginBottom: 25,

    fontSize: 18,
    fontWeight: 'bold',

    color: '#7d6666',
  },

  heading: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#7d6666',
    marginBottom: 40,
  },

  label: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3d2d2d',
    marginBottom: 10,
    marginLeft: 10,
  },

  input: {
    width: '100%',
    height: 60,

    backgroundColor: '#fff',

    borderRadius: 20,

    paddingHorizontal: 20,

    fontSize: 18,

    marginBottom: 25,
  },

  bioInput: {
    width: '100%',
    height: 140,

    backgroundColor: '#fff',

    borderRadius: 20,

    paddingHorizontal: 20,
    paddingTop: 18,

    fontSize: 18,

    textAlignVertical: 'top',

    marginBottom: 40,
  },

  button: {
    width: '85%',
    height: 65,

    backgroundColor: '#7d6666',

    borderRadius: 35,

    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

});