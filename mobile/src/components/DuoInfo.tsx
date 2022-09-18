import { ColorValue, StyleSheet, Text, View } from 'react-native';
import { THEME } from '../theme';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 16,
    },
    label: {
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        marginBottom: 4,
    },
    value: {
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.BOLD,
    }
});

interface Props {
    label: string;
    value: string;
    colorValue?: ColorValue;
}

export const DuoInfo = ({
    label,
    value,
    colorValue = THEME.COLORS.TEXT
}: Props) => (
    <View style={styles.container}>
        <Text style={styles.label}>
            {label}
        </Text>
        <Text
            style={[styles.value, { color: colorValue }]}
            numberOfLines={1}
        >
            {value}
        </Text>
    </View>
);
