import React, {useState} from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer'
import SpotifyNowPlaying from '../components/nowPlaying/SpotifyNowPlaying'
import { useTheme } from '../context/ThemeContext';

import { Modal } from "flowbite-react";
import { BsArrowDownRight } from "react-icons/bs";

const playlists = {
  'Bible': 'https://open.spotify.com/embed/playlist/0WiWwazBe8TwM6cBUnR24y?utm_source=generator',
  "80's": 'https://open.spotify.com/embed/playlist/7x54BFwbbXcXYfHXYMo12l?utm_source=generator',
  'Techno': 'https://open.spotify.com/embed/playlist/7Axj2qwEQPklVn0gsVhnwC?utm_source=generator',
  'Reggaeton': 'https://open.spotify.com/embed/playlist/7o4mLd5W8KZEjgFF1JUFPo?utm_source=generator'
};


export default function Spotify() {
  const [openModal, setOpenModal] = useState(false);
  const { isDarkMode } = useTheme();
  const [currentPlaylist, setCurrentPlaylist] = useState('');

  const handleOpenModal = (playlist) => {
    setCurrentPlaylist(playlist);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentPlaylist('');
  };


  return (
    <div className={`flex flex-col min-h-screen py-24 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header />
      <main className={`flex-1 grid md:grid-cols-[300px_1fr] gap-4 pb-20 px-4 transition-colors duration-500 ease-in-out ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="flex justify-center items-start pt-3 pr-2">
          <SpotifyNowPlaying />
        </div>
        <div className="flex flex-col gap-4 pl-2">
          <div className={`shadow-lg rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-black'}`}>
            <div className={`p-4 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>
              <h2 className="text-lg font-semibold">Playlists</h2>
            </div>
            <div className="space-y-2 p-4">
              {Object.keys(playlists).map((playlist) => (
                <a
                  href="#"
                  onClick={() => handleOpenModal(playlist)}
                  className={`flex items-center justify-between px-4 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}
                  key={playlist}
                >
                  <div className="text-sm font-medium">{playlist}</div>
                  <BsArrowDownRight className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Modal show={openModal} onClose={handleCloseModal} size="md">
        <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
          <Modal.Header className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
            {currentPlaylist} Playlist
          </Modal.Header>
          <Modal.Body className={isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-black'}>
            <iframe
              className="rounded-md"
              src={playlists[currentPlaylist]}
              width="100%"
              height="650"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}
