import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import VideoIntro from '../assets/Intro.mp4';

const COLORS = {
    navy: '#000b3d',
    gold: '#f4d289',
    goldAccent: '#ffc954',
    white: '#ffffff',
    textGray: '#666666',
};

export function VideoSection({ isMobile }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const videoRef = useRef(null);

    return (
        <section
            ref={ref}
            style={{
                padding: isMobile ? '40px 16px' : '60px 24px',
                backgroundColor: COLORS.white,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorativo superior */}
            <div
                style={{
                    position: 'absolute',
                    top: isMobile ? '-50px' : '-100px',
                    left: isMobile ? '-100px' : '-150px',
                    width: isMobile ? '300px' : '500px',
                    height: isMobile ? '300px' : '500px',
                    backgroundColor: `${COLORS.gold}08`,
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    zIndex: 0,
                }}
            />

            <div
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                {/* Título y descripción */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        textAlign: 'center',
                        marginBottom: isMobile ? '40px' : '60px',
                    }}
                >
                    <p
                        style={{
                            fontSize: isMobile ? '12px' : '14px',
                            color: COLORS.gold,
                            fontFamily: "'Inria Serif', serif",
                            fontWeight: '600',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginBottom: '12px',
                        }}
                    >
                        Conoce nuestro trabajo
                    </p>

                    <h2
                        style={{
                            fontFamily: "'Great Vibes', cursive",
                            fontSize: isMobile ? '32px' : '56px',
                            fontWeight: '400',
                            marginBottom: '16px',
                            background: 'linear-gradient(90deg, #7a5a1a 0%, #c9a24d 20%, #f5e6a8 40%, #ffd86b 50%, #f5e6a8 60%, #c9a24d 80%, #7a5a1a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Nuestra Propuesta de Valor
                    </h2>

                    <p
                        style={{
                            fontSize: isMobile ? '13px' : '18px',
                            color: COLORS.textGray,
                            fontFamily: "'Inria Serif', serif",
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: '1.6',
                        }}
                    >
                        Un video que resume la esencia de Sello Perfecto y cómo transformamos la atención al cliente en excelencia empresarial.
                    </p>
                </motion.div>

                {/* Contenedor del video con efectos */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    style={{
                        position: 'relative',
                        borderRadius: isMobile ? '16px' : '24px',
                        overflow: 'hidden',
                        boxShadow: `0 40px 80px ${COLORS.navy}20`,
                        aspectRatio: '16/9',
                        minHeight: isMobile ? '200px' : '320px',
                    }}
                >
                    {/* Brillo de fondo detrás del video */}
                    <motion.div
                        animate={isInView ? { 
                            background: [
                                `0px 0px 80px ${COLORS.gold}40`,
                                `0px 0px 100px ${COLORS.gold}60`,
                                `0px 0px 80px ${COLORS.gold}40`,
                            ]
                        } : {}}
                        transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            filter: 'blur(40px)',
                            zIndex: -1,
                            pointerEvents: 'none',
                        }}
                    />

                    {/* Video */}
                    <video
                        ref={videoRef}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                        controls
                        playsInline
                    >
                        <source src={VideoIntro} type="video/mp4" />
                        Tu navegador no soporta videos HTML5.
                    </video>

                    {/* Overlay gradiente sutil */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(135deg, rgba(0, 11, 61, 0.1) 0%, rgba(244, 210, 137, 0.05) 100%)',
                            pointerEvents: 'none',
                        }}
                    />

                    {/* Borde decorativo */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            border: `2px solid ${COLORS.gold}33`,
                            borderRadius: isMobile ? '16px' : '24px',
                            pointerEvents: 'none',
                        }}
                    />
                </motion.div>

                {/* Línea decorativa inferior */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        height: '2px',
                        background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)`,
                        marginTop: isMobile ? '40px' : '60px',
                        transformOrigin: 'center',
                    }}
                />
            </div>
        </section>
    );
}