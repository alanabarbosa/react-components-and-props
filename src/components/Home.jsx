import React from 'react';
import BannerHome from './BannerHome';

const Home = () => {
    return (
        <>
           <main>
            <BannerHome 
            titulo="Este é um titulo" 
            subtitulo="Este é um subtitulo">              
            </BannerHome>
           </main>

        </>
    )
}

export default Home;