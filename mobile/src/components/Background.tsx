import { StyleSheet, ImageBackground } from 'react-native';
import backgroundImg from '../assets/background-galaxy.png';
import { THEME } from '../theme';

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
