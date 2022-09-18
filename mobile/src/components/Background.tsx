import { ImageBackground, StyleSheet } from 'react-native';
import { THEME } from '../theme';
import backgroundImg from '../assets/background-galaxy.png';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.BACKGROUND_800,
    },
});

interface Props {
    children: React.ReactNode;
}

export const Background = ({ children }: Props) => (
    < ImageBackground
        source={backgroundImg}
        defaultSource={backgroundImg}
        style={styles.container}
    >
        {children}
    </ImageBackground >
);
