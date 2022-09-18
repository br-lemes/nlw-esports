import { StyleSheet, Text, View, ViewProps } from 'react-native';
import { THEME } from '../theme';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 32,
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.LG,
        fontFamily: THEME.FONT_FAMILY.BLACK,
    },
    subtitle: {
        color: THEME.COLORS.CAPTION_400,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
    },
});

interface Props extends ViewProps {
    title: string;
    subtitle: string;
}

export const Heading = ({ title, subtitle, ...rest }: Props) => (
    <View style={styles.container} {...rest}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
);
