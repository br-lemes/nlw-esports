import {
    ImageBackground,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../theme';

const styles = StyleSheet.create({
    container: {
        marginRight: 24,
    },
    cover: {
        width: 240,
        height: 320,
        justifyContent: 'flex-end',
        borderRadius: 8,
        overflow: 'hidden',
    },
    footer: {
        width: '100%',
        height: 102,
        padding: 16,
        justifyContent: 'flex-end',
    },
    name: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
    },
    ads: {
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
    }
});

export interface GameCardProps {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps;
}

export const GameCard = ({ data, ...rest }: Props) => (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground style={styles.cover} source={data.cover}>
            <LinearGradient
                colors={THEME.COLORS.FOOTER}
                style={styles.footer}
            >
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.ads}>{data.ads} anúncios</Text>
            </LinearGradient>
            <Text style={styles.name}>***** CARD *****</Text>
        </ImageBackground>
    </TouchableOpacity>
);
