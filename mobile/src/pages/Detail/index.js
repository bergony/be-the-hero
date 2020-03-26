import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';


import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {

  const route = useRoute();
  const navigation = useNavigation();

  const incident = route.params.incident;
  const message = `Ola ${incident.name} voce é um programador muito foda gostaria de ${incident.title} pelo valor de ${Intl.NumberFormat('pt-Br',
  {
    style: 'currency',
    currency: 'BRL'
  }).format(incident.value)}!`

  function navigatBack(){
    navigation.goBack();
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: `Herio do caso: ${incident.title}`,
      recipiente: [incident.email],
      body: message,
    })
  }

  function sendWhatapps(){
      Linking.openURL(`whatsapp://send?phone=${incident.whatapp}&text=${message}`);
  }

  return (


    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigatBack} >
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
      <Text style={[styles.incidentProperty, { marginTop: 0}]}>ONG</Text>
  <Text style={styles.IncidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.IncidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR</Text>
            <Text style={styles.IncidentValue}>
              {Intl.NumberFormat('pt-Br',
                {
                  style: 'currency',
                  currency: 'BRL'
                }).format(incident.value)}
            </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o Dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói deesse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatapps}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-Mail</Text>
          </TouchableOpacity>

        </View>


      </View>

    </View>
  );
}