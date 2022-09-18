import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../components/Background';
import { GameCard, GameCardProps } from '../components/GameCard';
import { Heading } from '../components/Heading';
import logoImg from '../assets/logo-nlw-esports.png';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 214,
        height: 120,
        marginTop: 24,
        marginBottom: 24,
    },
    contentList: {
        paddingLeft: 32,
        paddingRight: 64,
    },
});

export const Home = () => {
    const [games, setGames] = useState<GameCardProps[]>([]);
    const navigation = useNavigation();

    function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
        navigation.navigate('game', { id, title, bannerUrl });
    }

    useEffect(() => {
        fetch('http://192.168.1.104:8080/games')
            .then((response) => response.json())
            .then((data) => setGames(data));
    }, []);
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    source={logoImg}
                    style={styles.logo}
                />
                <Heading
                    title='Encontre seu duo!'
                    subtitle='Selecione o game que deseja jogar...'
                />
                <FlatList
                    data={games}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <GameCard
                            data={item}
                            onPress={() => handleOpenGame(item)}
                        />
                    }
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                />
            </SafeAreaView>
        </Background>
    );
};
