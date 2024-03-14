import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import data from '../data/data.json';

const ListContacts = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mes contacts</Text>
            <FlatList
                style={styles.flatlist}
                data={data}
                renderItem={({item}) => (
                    <Pressable
                        style={styles.button}
                        onPress={() => navigation.navigate('SingleContact', {...item})}
                    >
                        <Text style={styles.textItem}>{item.nom}</Text>
                    </Pressable>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F4',
        alignItems: 'center',
    },
    flatlist: {
        width: '70%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    button: {
        borderRadius: 20,
        padding: 20,
        elevation: 2,
        backgroundColor: '#3A606E',
        color: 'white',
        marginTop: 20,
    },
    textItem: {
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ListContacts;
