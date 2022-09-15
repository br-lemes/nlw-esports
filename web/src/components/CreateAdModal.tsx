import { GameController } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Input, Label } from './form';

interface DayButtonProps {
    title: string;
    children: React.ReactNode;
}

const DayButton = (props: DayButtonProps) => (
    <button
        title={props.title}
        className='w-8 h-8 rounded bg-zinc-900'
    >
        {props.children}
    </button>
);

const CreateAdModal = () => (
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
                    <Input
                        id='game'
                        type='text'
                        placeholder='Selecione o game que deseja jogar'
                    />
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
                        <div className='grid grid-cols-4 gap-2'>
                            <DayButton title='Domingo'>D</DayButton>
                            <DayButton title='Segunda'>S</DayButton>
                            <DayButton title='Terça'>T</DayButton>
                            <DayButton title='Quarta'>Q</DayButton>
                            <DayButton title='Quinta'>Q</DayButton>
                            <DayButton title='Sexta'>S</DayButton>
                            <DayButton title='Sábado'>S</DayButton>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                        <Label htmlFor='hourStart'>
                            Qual horário do dia?
                        </Label>
                        <div className='grid grid-cols-2 gap-2'>
                            <input
                                id='hourStart'
                                type='time'
                                placeholder='De'
                            />
                            <input
                                id='hourEnd'
                                type='time'
                                placeholder='Até'
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-2 flex gap-2 text-sm'>
                    <input type='checkbox' />
                    Costumo me conectar ao chat de voz
                </div>
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
