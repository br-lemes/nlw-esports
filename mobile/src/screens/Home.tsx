import { StyleSheet, View, Image, FlatList } from 'react-native';
import logoImg from '../assets/logo-nlw-esports.png';
import { GAMES } from '../utils/games';
import { Heading } from '../components/Heading';
import { GameCard } from '../components/GameCard';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 214,
        height: 120,
        marginTop: 74,
        marginBottom: 48,
    },
    contentList: {
        paddingLeft: 32,
        paddingRight: 32,
    },
});

export const Home = () => (
    <View style={styles.container}>
        <Image
            source={logoImg}
            style={styles.logo}
        />
        <Heading
            title='Encontre seu duo!'
            subtitle='Selecione o game que deseja jogar...'
        />
        <FlatList
            data={GAMES}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <GameCard data={item} />}
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
            horizontal
        />
    </View>
);
