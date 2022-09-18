import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GameController } from 'phosphor-react-native';
import { DuoInfo } from './DuoInfo';
import { THEME } from '../theme';

const styles = StyleSheet.create({
    container: {
        width: 200,
        backgroundColor: THEME.COLORS.SHAPE,
        borderRadius: 8,
        padding: 20,
        marginRight: 16,
        alignItems: 'center',
    },
    button: {
        width: '100%',
        height: 36,
        borderRadius: 6,
        backgroundColor: THEME.COLORS.PRIMARY,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        marginLeft: 8,
    }
});

export interface DuoCardProps {
    hourEnd: string;
    hourStart: string;
    id: string;
    name: string;
    useVoiceChannel: boolean;
    weekDays: string[];
    yearsPlaying: 2;
}

interface Props {
    data: DuoCardProps;
    onConnect: () => void;
}

export const DuoCard = ({ data, onConnect }: Props) => (
    <View style={styles.container}>
        <DuoInfo
            label='Nome'
            value={data.name}
        />
        <DuoInfo
            label='Tempo de jogo'
            value={`${data.yearsPlaying} anos`}
        />
        <DuoInfo
            label='Disponibilidade'
            value={[
                data.weekDays.length,
                'dias',
                '\u2022',
                data.hourStart,
                '-',
                data.hourEnd,
            ].join(' ')}
        />
        <DuoInfo
            label='Chamada de áudio?'
            value={data.useVoiceChannel ? 'Sim' : 'Não'}
            colorValue={
                data.useVoiceChannel
                    ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
            }
        />
        <TouchableOpacity
            style={styles.button}
            onPress={onConnect}
        >
            <GameController
                color={THEME.COLORS.TEXT}
                size={20}
            />
            <Text style={styles.buttonTitle}>
                Conectar
            </Text>
        </TouchableOpacity>
    </View>
);
