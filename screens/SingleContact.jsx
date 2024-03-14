/* eslint-disable react-hooks/exhaustive-deps */
import {Pressable, StyleSheet, Text, View, Linking} from 'react-native';
import {useLayoutEffect} from 'react';

const SingleContact = ({route, navigation}) => {
    const {nom, prenom, telephone, email} = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({title: `${nom} ${prenom}`});
    }, []);

    return (
        <>
            <View style={styles.contactContainer}>
                <Text style={styles.text}>Nom : {nom}</Text>
                <Text style={styles.text}>Prénom : {prenom}</Text>
                <Text style={styles.text}>Téléphone : {telephone}</Text>
                <Text style={styles.text}>Email : {email}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => Linking.openURL(`tel:${telephone}`)}>
                    <Text style={styles.textItem}>Appeler</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => Linking.openURL(`mailto:${email}`)}>
                    <Text style={styles.textItem}>Envoyer un email</Text>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    contactContainer: {
        backgroundColor: '#F3F3F4',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    text: {
        fontSize: 20,
        margin: 10,
    },
    buttonsContainer: {
        height: '20%',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 20,
    },
    button: {
        width: '70%',
        borderRadius: 20,
        padding: 20,
        elevation: 2,
        backgroundColor: '#2A2D43',
        color: 'white',
    },
    textItem: {
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default SingleContact;
