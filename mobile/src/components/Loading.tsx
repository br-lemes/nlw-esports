import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { THEME } from '../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export const Loading = () => (
    <View style={styles.container}>
        <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
);
