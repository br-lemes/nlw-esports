import { useState } from 'react';
import { Check, GameController } from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Input, Label, Select } from './form';

interface Week { value: string; label: string; title: string; }

const week: Week[] = [
    { value: '0', label: 'D', title: 'Domingo' },
    { value: '1', label: 'S', title: 'Segunda' },
    { value: '2', label: 'T', title: 'Terça' },
    { value: '3', label: 'Q', title: 'Quarta' },
    { value: '4', label: 'Q', title: 'Quinta' },
    { value: '5', label: 'S', title: 'Sexta' },
];

const WeekButtons = () => {
    const [weekDays, setWeekDays] = useState<string[]>([]);
    return (
        <ToggleGroup.Root
            type='multiple'
            className='grid grid-cols-4 gap-2'
            value={weekDays}
            onValueChange={setWeekDays}
        >
            {week.map((day) => {
                const bgClass = weekDays.includes(day.value)
                    ? ' bg-violet-500'
                    : ' bg-zinc-900';
                return (
                    <ToggleGroup.Item
                        key={day.value}
                        value={day.value}
                        title={day.title}
                        className={`w-8 h-8 rounded ${bgClass}`}
                    >
                        {day.label}
                    </ToggleGroup.Item>
                );
            })}
        </ToggleGroup.Root>
    );
};

export interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: { ads: number; }
}

interface CreateAdModalProps {
    games: Game[];
}

const CreateAdModal = ({ games }: CreateAdModalProps) => (
    <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
        <Dialog.Content
            className='
                fixed bg-[#2A2634] py-8 px-10 text-white
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                rounded-lg w-[480px] shadow-lg shadow-black/25'
        >
            <Dialog.Title className='text-3xl font-black'>
                Publique um anúncio
            </Dialog.Title>
            <form className='mt-8'>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='game'>
                        Qual o game?
                    </Label>
                    <Select id='game'>
                        <option disabled value=''>
                            Selecione o game que deseja jogar
                        </option>
                        {games.map((game) =>
                            <option key={game.id} value={game.id}>
                                {game.title}
                            </option>
                        )}
                    </Select>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='name'>
                        Seu nome (ou nickname)
                    </Label>
                    <Input
                        id='name'
                        type='text'
                        placeholder='Como te chamam dentro do game?'
                    />
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='yearsPlaying'>
                            Joga há quantos anos?
                        </Label>
                        <Input
                            id='yearsPlaying'
                            type='number'
                            placeholder='Tudo bem ser ZERO'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='discord'>
                            Qual seu Discord?
                        </Label>
                        <Input
                            id='discord'
                            type='text'
                            placeholder='Usuário#0000'
                        />
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='weekDays'>
                            Quando costuma jogar?
                        </Label>
                        <WeekButtons />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                        <Label htmlFor='hourStart'>
                            Qual horário do dia?
                        </Label>
                        <div className='grid grid-cols-2 gap-2'>
                            <Input
                                id='hourStart'
                                type='time'
                                placeholder='De'
                            />
                            <Input
                                id='hourEnd'
                                type='time'
                                placeholder='Até'
                            />
                        </div>
                    </div>
                </div>
                <label className='mt-2 flex items-center gap-2 text-sm'>
                    <Checkbox.Root
                        className='w-6 h-6 p-1 rounded bg-zinc-900'
                    >
                        <Checkbox.Indicator>
                            <Check size={16} className='text-emerald-500' />
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                    Costumo me conectar ao chat de voz
                </label>
                <footer className='mt-4 flex justify-end gap-4'>
                    <Dialog.Close
                        className='
                            bg-zinc-500 px-5 h-12 rounded-md
                            font-semibold hover:bg-zinc-600'
                    >
                        Cancelar
                    </Dialog.Close>
                    <button
                        type='submit'
                        className='
                            bg-violet-500 px-5 h-12 rounded-md
                            font-semibold flex items-center gap-3
                            hover:bg-violet-600'
                    >
                        <GameController size={24} />
                        Encontrar duo
                    </button>
                </footer>
            </form>
        </Dialog.Content>
    </Dialog.Portal>
);

export default CreateAdModal;
