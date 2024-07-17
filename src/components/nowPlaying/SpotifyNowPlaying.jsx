import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';


export default function SpotifyNowPlaying() {
  const { isDarkMode } = useTheme();

  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    const updateIframeSrc = () => {
      setIframeSrc(`https://spotify-github-profile.kittinanx.com/api/view?uid=isaacrr26&cover_image=true&theme=novatorem&show_offline=true&background_color=000000&interchange=true&bar_color=${isDarkMode ? 'ffffff' : '000000'}&bar_color_cover=false`);
    };

    updateIframeSrc();
    const intervalId = setInterval(updateIframeSrc, 30000); // 30000ms = 30 seconds

    return () => clearInterval(intervalId);
  }, [isDarkMode]);

  return (
    <div className="bg-card text-card-foreground rounded-lg overflow-hidden p-0">
      <iframe 
        src={iframeSrc}
        width="300"
        height="380"
        allowtransparency="true"
        allow="encrypted-media"
        className="rounded-md"
      ></iframe>
    </div>
  );
}
