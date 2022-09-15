
interface GameBannerProps {
    ads: number;
    bannerUrl: string;
    title: string;
}

const GameBanner = (props: GameBannerProps) => (
    <a href='' className='relative rounded-lg overflow-hidden'>
        <img src={props.bannerUrl} alt='Game Logo' />
        <div className='
            w-full pt-16 pb-4 px-4 bg-game-gradient
            absolute bottom-0 left-0 right-0
        '>
            <strong className='font-bold text-white block'>
                {props.title}
            </strong>
            <span className='text-zinc-300 text-sm block'>
                {props.ads} anúncios
            </span>
        </div>
    </a>
);

export default GameBanner;
