import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Team 7 Sports Management',
    short_name: 'Team 7 Sports',
    description: 'Premier Sports Management & League Operations in India',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a1128',
    theme_color: '#D8232A',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/magnific_a-logo-with-the-text-team_jUgr4WPLD0.webp',
        sizes: 'any',
        type: 'image/webp',
      },
    ],
  };
}
