import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// ============================================
// VIDEO SPLASH SCREEN - OPTIMIZADO
// ============================================

export function VideoSplash({ videoUrl, duration = 47, onFinish }) {
    const [showSplash, setShowSplash] = useState(true);
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        // Intentar reproducción automática inmediatamente
        if (videoRef.current) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('Video reproduciéndose correctamente');
                    })
                    .catch((error) => {
                        console.log('Autoplay bloqueado. Error:', error);
                        // Algunos navegadores bloquean autoplay sin mute
                        if (videoRef.current) {
                            videoRef.current.muted = true;
                            videoRef.current.play().catch(err => {
                                console.log('Error incluso con mute:', err);
                            });
                        }
                    });
            }
        }

        // Timer como fallback - espera a que el video termine
        const timer = setTimeout(() => {
            setVideoEnded(true);
            setTimeout(() => {
                setShowSplash(false);
                onFinish?.();
            }, 500);
        }, (duration + 1) * 1000); // +1 segundo de buffer

        return () => clearTimeout(timer);
    }, [duration, onFinish]);

    const handleVideoEnd = () => {
        console.log('Video terminó');
        setVideoEnded(true);
        // Pequeño delay para que la animación se vea bien
        setTimeout(() => {
            setShowSplash(false);
            onFinish?.();
        }, 500);
    };

    const handleVideoPlay = () => {
        console.log('Video comenzó a reproducirse');
    };

    const handleVideoError = (e) => {
        console.error('Error al cargar video:', e);
    };

    if (!showSplash) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: videoEnded ? 0 : 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            onAnimationComplete={() => {
                if (videoEnded) {
                    setShowSplash(false);
                }
            }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: '#000b3d',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: videoEnded ? 'none' : 'auto',
                overflow: 'hidden',
            }}
        >
            {/* Contenedor del video - Optimizado para todos los dispositivos */}
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#000b3d',
                    padding: '20px',
                }}
            >
                <video
                    ref={videoRef}
                    onEnded={handleVideoEnd}
                    onPlay={handleVideoPlay}
                    onError={handleVideoError}
                    playsInline
                    controls={true}
                    style={{
                        maxWidth: '95vw',
                        maxHeight: '95vh',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                        borderRadius: '16px',
                        boxShadow: '0 20px 60px rgba(244, 210, 137, 0.2)',
                    }}
                >
                    <source src={videoUrl} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                </video>

                {/* Indicador de carga/progreso */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        textAlign: 'center',
                    }}
                >
                    <div
                        style={{
                            color: '#f4d289',
                            fontSize: '12px',
                            fontFamily: "'Inria Serif', serif",
                            opacity: 0.6,
                            marginBottom: '8px',
                        }}
                    >
                        {videoEnded ? 'Cargando contenido...' : 'Sello Perfecto'}
                    </div>
                    
                    {/* Barra de progreso elegante */}
                    <div
                        style={{
                            width: '200px',
                            height: '2px',
                            backgroundColor: 'rgba(244, 210, 137, 0.2)',
                            borderRadius: '1px',
                            overflow: 'hidden',
                        }}
                    >
                        <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: videoEnded ? '100%' : '0%' }}
                            transition={{ duration: duration, ease: 'linear' }}
                            style={{
                                height: '100%',
                                backgroundColor: '#f4d289',
                                borderRadius: '1px',
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Logo/Branding sutil en la esquina */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1 }}
                style={{
                    position: 'absolute',
                    top: '30px',
                    left: '30px',
                    fontSize: '12px',
                    color: '#f4d289',
                    fontFamily: "'Great Vibes', cursive",
                    zIndex: 10001,
                }}
            >
                SP
            </motion.div>
        </motion.div>
    );
}