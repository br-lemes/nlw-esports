import { useEffect, useState } from 'react';
import { GameController, MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import logoImage from './assets/logo-nlw-esports.svg';
import './styles/main.css';
import { Input, Label } from './components/form';

interface GameProps {
    image: string;
    name: string;
    ads: number;
}

interface ContentProps {
    games: Game[],
}

interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: { ads: number; }
}

interface DayButtonProps {
    title: string;
    children: React.ReactNode;
}

const Game = (props: GameProps) => (
    <a href='' className='relative rounded-lg overflow-hidden'>
        <img src={props.image} alt='Game Logo' />
        <div className='
            w-full pt-16 pb-4 px-4 bg-game-gradient
            absolute bottom-0 left-0 right-0
        '>
            <strong className='font-bold text-white block'>
                {props.name}
            </strong>
            <span className='text-zinc-300 text-sm block'>
                {props.ads} anúncios
            </span>
        </div>
    </a>
);

const Banner = () => (
    <div className='bg-[#2A2634] px-8 py-6 flex justify-between itens-center'>
        <div>
            <strong className='text-2xl text-white block'>
                Não encontrou seu duo?
            </strong>
            <span className='text-zinc-400'>
                Publique um anúncio para encontrar novos players!
            </span>
        </div>
        <Dialog.Trigger className='
            py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white
            rounded flex items-center gap-3
        '>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
        </Dialog.Trigger>
    </div>
);

const DayButton = (props: DayButtonProps) => (
    <button
        title={props.title}
        className='w-8 h-8 rounded bg-zinc-900'
    >
        {props.children}
    </button>
);

const Content = (props: ContentProps) => (
    <div className='max-w-7xl mx-auto my-20 px-2 flex flex-col items-center'>
        <img src={logoImage} alt='eSports Logo' />
        <h1 className='text-6xl text-white font-black mt-20'>
            Seu
            {' '}
            <span className='bg-nlw-gradient bg-clip-text text-transparent'>
                duo
            </span>
            {' '}
            está aqui
        </h1>
        <div className='grid grid-cols-6 gap-6 mt-16'>
            {props.games.map((game) =>
                <Game
                    key={game.id}
                    image={game.bannerUrl}
                    name={game.title}
                    ads={game._count.ads}
                />
            )}
        </div>
        <div className='mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg'>
            <Dialog.Root>
                <Banner />
                <Dialog.Portal>
                    <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
                    <Dialog.Content
                        className='
                            fixed bg-[#2A2634] py-8 px-10 text-white
                            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                            rounded-lg w-[480px] shadow-lg shadow-black/25
                        '
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
                                    placeholder='Selecione o game que deseja'
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
                                        font-semibold hover:bg-zinc-600
                                    '
                                >
                                    Cancelar
                                </Dialog.Close>
                                <button
                                    type='submit'
                                    className='
                                        bg-violet-500 px-5 h-12 rounded-md
                                        font-semibold flex items-center gap-3
                                        hover:bg-violet-600
                                    '
                                >
                                    <GameController size={24} />
                                    Encontrar duo
                                </button>
                            </footer>
                        </form>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    </div>
);

const App = () => {
    const [games, setGames] = useState<Game[]>([]);
    useEffect(() => {
        fetch('http://localhost:3333/games')
            .then(response => response.json())
            .then(data => setGames(data))
    }, []);
    return <Content games={games} />
}

export default App;
