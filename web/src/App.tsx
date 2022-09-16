import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import logoImage from './assets/logo-nlw-esports.svg';
import './styles/main.css';
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/CreateAdBanner';
import CreateAdModal, { Game } from './components/CreateAdModal';

interface ContentProps {
    games: Game[],
}

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
                <GameBanner
                    key={game.id}
                    ads={game._count.ads}
                    bannerUrl={game.bannerUrl}
                    title={game.title}
                />
            )}
        </div>
        <div className='mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg'>
            <Dialog.Root>
                <CreateAdBanner />
                <CreateAdModal games={props.games} />
            </Dialog.Root>
        </div>
    </div>
);

const App = () => {
    const [games, setGames] = useState<Game[]>([]);
    useEffect(() => {
        fetch('http://localhost:8080/games')
            .then(response => response.json())
            .then(data => setGames(data))
    }, []);
    return <Content games={games} />
}

export default App;
