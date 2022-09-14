import { MagnifyingGlassPlus } from 'phosphor-react';
import logoImage from './assets/logo-nlw-esports.svg';
import './styles/main.css';

interface GameProps {
    image: string;
    name: string;
    ads: number;
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
        <button className='
            py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white
            rounded flex items-center gap-3
        '>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
        </button>
    </div>
);

const App = () => (
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
            <Game image='/game-1.png' name='League of Legends' ads={4} />
            <Game image='/game-2.png' name='Dota 2' ads={4} />
            <Game image='/game-3.png' name='Counter Strike' ads={4} />
            <Game image='/game-4.png' name='Apex Legends' ads={4} />
            <Game image='/game-5.png' name='Fortnite' ads={4} />
            <Game image='/game-6.png' name='World of Warcraft' ads={4} />
        </div>
        <div className='mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg'>
            <Banner />
        </div>
    </div>
);

export default App
