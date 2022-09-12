import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
    title: string;
}

const Button = (props: ButtonProps) => (
    <TouchableOpacity>
        <Text style={styles.button}>{props.title}</Text>
    </TouchableOpacity>
)

const App = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Hello World!</Text>
        <Button title='Cancelar' />
        <Button title='Salvar' />
        <StatusBar style='light' backgroundColor='black' />
    </View>
);

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        borderWidth: 1,
        margin: 5,
        padding: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export default App;
