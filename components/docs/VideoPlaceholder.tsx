'use client';

import { Video, Play } from 'lucide-react';
import { useState } from 'react';

interface VideoPlaceholderProps {
  title: string;
  description?: string;
  videoUrl?: string;
  thumbnail?: string;
}

export function VideoPlaceholder({
  title,
  description,
  videoUrl,
  thumbnail,
}: VideoPlaceholderProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extrair ID do YouTube se for URL do YouTube
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Extrair ID do Vimeo se for URL do Vimeo
  const getVimeoId = (url: string) => {
    const regExp = /vimeo\.com\/(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const renderVideo = () => {
    if (!videoUrl) return null;

    const youtubeId = getYouTubeId(videoUrl);
    const vimeoId = getVimeoId(videoUrl);

    if (youtubeId) {
      return (
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${isPlaying ? 1 : 0}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }

    if (vimeoId) {
      return (
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=${isPlaying ? 1 : 0}`}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }

    return null;
  };

  if (videoUrl) {
    return (
      <div className="my-6 border border-border rounded-lg overflow-hidden bg-card">
        <div className="bg-gradient-to-r from-[#DDB86A] to-[#c9a558] p-4">
          <div className="flex items-start gap-3">
            <Video className="w-5 h-5 text-[#06060a] flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-[#06060a] text-sm">
                {title}
              </h4>
              {description && (
                <p className="text-xs text-[#06060a]/80 mt-1">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="p-4">
          {renderVideo()}
        </div>
      </div>
    );
  }

  // Placeholder quando não há vídeo
  return (
    <div className="my-6 border-2 border-dashed border-[#DDB86A]/40 rounded-lg p-6 bg-[#DDB86A]/5">
      <div className="flex flex-col items-center text-center gap-3">
        {/* Skeleton do vídeo */}
        <div className="relative w-full max-w-md mx-auto">
          <div className="aspect-video bg-gradient-to-r from-[#DDB86A]/20 via-[#DDB86A]/30 to-[#DDB86A]/20 rounded-lg overflow-hidden">
            {/* Skeleton animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#DDB86A]/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-1">
            📹 {title}
          </h4>
          {description && (
            <p className="text-sm text-muted-foreground max-w-md">
              {description}
            </p>
          )}
        </div>
        <div className="mt-2 px-4 py-2 bg-muted rounded-md">
          <p className="text-xs text-muted-foreground">
            Vídeo será adicionado em breve
          </p>
        </div>
      </div>
    </div>
  );
}
