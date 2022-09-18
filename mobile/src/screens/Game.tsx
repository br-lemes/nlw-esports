import { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Background } from '../components/Background';
import { DuoCard, DuoCardProps } from '../components/DuoCard';
import { DuoMatch } from '../components/DuoMatch';
import { Heading } from '../components/Heading';
import { THEME } from '../theme';
import logoImg from '../assets/logo-nlw-esports.png';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 32,
        marginTop: 28,
        justifyContent: 'space-between',
    },
    logo: {
        width: 72,
        height: 40,
    },
    right: {
        width: 20,
        height: 20,
    },
    cover: {
        width: 311,
        height: 160,
        borderRadius: 8,
        marginTop: 32,
    },
    containerList: {
        width: '100%',
    },
    contentList: {
        paddingLeft: 32,
        paddingRight: 64,
        paddingBottom: 64,
        alignItems: 'flex-start',
    },
    scrollView: {
        width: '100%',
    },
    emptyListText: {
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
    },
    emptyListContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '30%',
        paddingBottom: '30%',
    }
});

export interface GameParams {
    id: string;
    title: string;
    bannerUrl: string;
}

export const Game = () => {
    const [duos, setDuos] = useState<DuoCardProps[]>([]);
    const [duoSelected, setDuoSelected] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
    const game = route.params as GameParams;

    function handleGoBack() {
        navigation.goBack();
    }

    async function getDiscordUser(adId: string) {
        fetch(`http://192.168.1.104:8080/ads/${adId}/discord`)
            .then((response) => response.json())
            .then((data) => setDuoSelected(data.discord));
    }

    useEffect(() => {
        fetch(`http://192.168.1.104:8080/games/${game.id}/ads`)
            .then((response) => response.json())
            .then((data) => setDuos(data));
    }, []);

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name='chevron-thin-left'
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>
                    <Image source={logoImg} style={styles.logo} />
                    <View style={styles.right} />
                </View>
                <Image
                    source={{ uri: game.bannerUrl }}
                    style={styles.cover}
                    resizeMode='cover'
                />
                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >
                    <Heading
                        title={game.title}
                        subtitle='Conecte-se e comece a jogar!'
                    />
                    <FlatList
                        data={duos}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <DuoCard
                                data={item}
                                onConnect={() => getDiscordUser(item.id)}
                            />
                        }
                        horizontal
                        style={styles.containerList}
                        contentContainerStyle={duos.length > 0
                            ? styles.contentList
                            : styles.emptyListContent
                        }
                        showsHorizontalScrollIndicator={false}
                        ListEmptyComponent={() =>
                            <Text style={styles.emptyListText}>
                                Não há anúncios publicados ainda.
                            </Text>
                        }
                    />
                </ScrollView>
                <DuoMatch
                    visible={duoSelected.length > 0}
                    onClose={() => setDuoSelected('')}
                    discord={duoSelected}
                />
            </SafeAreaView>
        </Background>
    );
};
