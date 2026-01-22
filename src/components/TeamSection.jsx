import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import AlexandraD from '../assets/AlexandraD.jpeg';
import AntonellaR from '../assets/AntonellaR.jpeg';
import CarlosC from '../assets/CarlosC.jpg';
import ManuelG from '../assets/ManuelG.jpeg';
import MariaF from '../assets/MariaF.jpeg';
import SamuelM from '../assets/SamuelM.jpg';
import YhosepB from '../assets/YhosepB.jpeg';

// ============================================
// TEAMSSECTION - ADAPTADO A SELLO PERFECTO
// ============================================

/**
 * TeamsSection adaptada al diseño de Sello Perfecto
 * - Carrusel principal SIN grid de cards
 * - Imágenes optimizadas y centradas
 * - Responsive: Mobile, Tablet, Desktop
 */

const COLORS = {
    navy: '#000b3d',
    gold: '#f4d289',
    goldDark: '#3b2800',
    goldAccent: '#ffc954',
    white: '#ffffff',
    lightGray: '#f8f8f8',
    darkGray: '#333333',
    textGray: '#666666',
};

export function TeamsSection() {
    // ============================================
    // DATOS DEL EQUIPO
    // ============================================
    const teamMembers = [
        {
            id: 1,
            name: 'Samuel Martínez',
            role: 'Co-Fundador & Director de Estrategia y operaciones',
            description: 'Líder apasionado por transformar la atención al cliente. Con más de 15 años de experiencia en desarrollo organizacional, diseña estrategias personalizadas que elevan los estándares de profesionalismo en cada empresa.',
            image: SamuelM,
            social: {
                linkedin: '#',
                email: 'samuel@selloperfecto.com'
            }
        },
        {
            id: 2,
            name: 'Alexandra Duque',
            role: 'Co-Fundadora & Directora de Imgen',
            description: 'Organizadora nata, convierte el caos en orden. Con más de una década liderando proyectos exitosos, su enfoque metódico y su pasión por la excelencia aseguran resultados sobresalientes.',
            image: AlexandraD,
            social: {
                linkedin: '#',
                email: 'alexandra@selloperfecto.com'
            }
        },
        {
            id: 3,
            name: 'Antonella Raimundo',
            role: 'Co-Fundadora & Directora de Medios',
            description: 'Creativa y detallista, construye sitios web que son verdaderas obras de arte. Su dominio técnico y su sentido estético garantizan plataformas digitales impactantes y funcionales.',
            image: AntonellaR,
            social: {
                linkedin: '#',
                email: 'antonella@selloperfecto.com'
            }
        },
        {
            id: 4,
            name: 'Carlos Colmenares',
            role: 'Co-Fundador & Director de Servicios',
            description: 'Apasionado por el mundo digital, crea estrategias de marketing que conectan y convierten. Su enfoque analítico y creativo asegura campañas efectivas y medibles.',
            image: CarlosC,
            social: {
                linkedin: '#',
                email: 'carlos@selloperfecto.com'
            }
        },
        {
            id: 5,
            name: 'Manuel Gutierrez',
            role: 'Co-Fundador & Director de Estrategia',
            description: 'Con un enfoque en resultados, ayuda a las empresas a alcanzar su máximo potencial. Su experiencia en diversas industrias le permite ofrecer soluciones prácticas y efectivas.',
            image: ManuelG,
            social: {
                linkedin: '#',
                email: 'manuel@selloperfecto.com'
            }
        },
        {
            id: 6,
            name: 'María Moncada',
            role: 'Co-Fundadora & Directora de Estrategia',
            description: 'Los números son su pasión. Convierte datos complejos en insights accionables que impulsan el crecimiento y la eficiencia en los negocios.',
            image: MariaF,
            social: {
                linkedin: '#',
                email: 'maria@selloperfecto.com'
            }
        },
        {
            id: 7,
            name: 'Yhoseph Bonilla',
            role: 'Co-Fundador & Director de Finanzas',
            description: 'Con un enfoque humano y auténtico, gestiona comunidades digitales que aman y defienden las marcas. Su habilidad para contar historias y su empatía son clave en su estrategia.',
            image: YhosepB,
            social: {
                linkedin: '#',
                email: 'yhosep@selloperfecto.com'
            }
        }
    ];

    // ============================================
    // ESTADOS Y EFECTOS
    // ============================================
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    // Detectar tamaño de pantalla
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-play del carrusel
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlay, teamMembers.length]);

    // ============================================
    // MANEJADORES
    // ============================================
    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
        setIsAutoPlay(false);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
        setIsAutoPlay(false);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
        setIsAutoPlay(false);
    };

    // ============================================
    // RENDER
    // ============================================
    return (
        <section
            ref={ref}
            style={{
                padding: isMobile ? '60px 24px' : isTablet ? '80px 24px' : '100px 24px',
                backgroundColor: COLORS.navy,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorativos de fondo */}
            <div
                style={{
                    position: 'absolute',
                    top: '-150px',
                    left: '-150px',
                    width: '500px',
                    height: '500px',
                    backgroundColor: `${COLORS.gold}06`,
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '-150px',
                    right: '-150px',
                    width: '500px',
                    height: '500px',
                    backgroundColor: `${COLORS.gold}06`,
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                }}
            />

            <div style={{ width: '100%', position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto' }}>
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        textAlign: 'center',
                        marginBottom: isMobile ? '40px' : '60px',
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "'Great Vibes', cursive",
                            fontSize: isMobile ? '32px' : isTablet ? '44px' : '56px',
                            fontWeight: '400',
                            marginBottom: '16px',
                            color: COLORS.gold,
                            letterSpacing: '0.5px',
                        }}
                    >
                        Conoce a nuestro equipo
                    </h2>
                    <p
                        style={{
                            fontSize: isMobile ? '13px' : isTablet ? '16px' : '18px',
                            color: '#bbb',
                            fontFamily: "'Inria Serif', serif",
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: '1.7',
                        }}
                    >
                        Profesionales dedicados a transformar la atención al cliente en tu marca con ética, profesionalismo y verdadera calidad humana
                    </p>
                </motion.div>

                {/* CARRUSEL PRINCIPAL - SOLO CARRUSEL, SIN GRID */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    style={{
                        marginBottom: isMobile ? '40px' : '0px',
                        position: 'relative',
                    }}
                >
                    {/* Contenedor del carrusel */}
                    <div
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            backgroundColor: `${COLORS.navy}cc`,
                            border: `1px solid ${COLORS.gold}33`,
                            borderRadius: isMobile ? '16px' : '28px',
                            boxShadow: `0 20px 60px ${COLORS.navy}4d`,
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        {/* Decorativo de fondo en carrusel */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: `linear-gradient(135deg, ${COLORS.navy}00 0%, ${COLORS.gold}08 100%)`,
                            }}
                        />

                        {/* Contenido del carrusel */}
                        <div
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                display: 'grid',
                                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                                minHeight: isMobile ? '550px' : isTablet ? '480px' : '520px',
                                gap: isMobile ? '20px' : isTablet ? '32px' : '48px',
                                padding: isMobile ? '28px 20px' : isTablet ? '36px 40px' : '48px 60px',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {/* Lado izquierdo - Imagen */}
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.92 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    width: '100%',
                                    height: isMobile ? '320px' : isTablet ? '340px' : '380px',
                                }}
                            >
                                {/* Contenedor de imagen */}
                                <div
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '100%',
                                        maxWidth: isMobile ? '260px' : isTablet ? '280px' : '320px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {/* Imagen con contain para no cortarse */}
                                    <img
                                        src={teamMembers[currentIndex].image}
                                        alt={teamMembers[currentIndex].name}
                                        style={{
                                            width: '115%',
                                            height: '115%',
                                            objectFit: 'contain',
                                            objectPosition: 'center',
                                            borderRadius: '20px',
                                            boxShadow: `0 20px 50px ${COLORS.navy}4d`,
                                            border: `2px solid ${COLORS.gold}33`,
                                            padding: '8px',
                                            backgroundColor: `${COLORS.gold}05`,
                                        }}
                                    />
                                    {/* Overlay decorativo sutil */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            borderRadius: '12px',
                                            background: `radial-gradient(ellipse at 50% 50%, ${COLORS.gold}00 0%, ${COLORS.navy}15 100%)`,
                                            pointerEvents: 'none',
                                        }}
                                    />
                                </div>
                            </motion.div>

                            {/* Lado derecho - Información */}
                            <motion.div
                                key={`info-${currentIndex}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    position: 'relative',
                                }}
                            >
                                {/* Separador vertical (solo desktop) */}
                                {!isMobile && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: isMobile ? '0' : '-24px',
                                            top: 0,
                                            bottom: 0,
                                            width: '1px',
                                            background: `linear-gradient(to bottom, ${COLORS.gold}00, ${COLORS.gold}4d, ${COLORS.gold}00)`,
                                        }}
                                    />
                                )}

                                <div style={{ paddingLeft: isMobile ? '0' : isTablet ? '12px' : '24px' }}>
                                    {/* Nombre */}
                                    <h3
                                        style={{
                                            fontSize: isMobile ? '26px' : isTablet ? '32px' : '40px',
                                            fontFamily: "'Great Vibes', cursive",
                                            fontWeight: '400',
                                            color: COLORS.gold,
                                            marginBottom: '8px',
                                            letterSpacing: '0.3px',
                                        }}
                                    >
                                        {teamMembers[currentIndex].name}
                                    </h3>

                                    {/* Cargo */}
                                    <p
                                        style={{
                                            fontSize: isMobile ? '13px' : isTablet ? '14px' : '15px',
                                            fontFamily: "'Inria Serif', serif",
                                            fontWeight: '700',
                                            color: `${COLORS.gold}dd`,
                                            marginBottom: isMobile ? '16px' : '20px',
                                            letterSpacing: '0.2px',
                                        }}
                                    >
                                        {teamMembers[currentIndex].role}
                                    </p>

                                    {/* Descripción */}
                                    <p
                                        style={{
                                            fontSize: isMobile ? '13px' : isTablet ? '14px' : '15px',
                                            fontFamily: "'Inria Serif', serif",
                                            color: '#aaa',
                                            lineHeight: '1.7',
                                            marginBottom: isMobile ? '16px' : '20px',
                                        }}
                                    >
                                        {teamMembers[currentIndex].description}
                                    </p>

                                    {/* Links sociales */}
                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        <a
                                            href={teamMembers[currentIndex].social.linkedin}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '50%',
                                                backgroundColor: `${COLORS.gold}19`,
                                                border: `1px solid ${COLORS.gold}33`,
                                                color: COLORS.gold,
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = COLORS.gold;
                                                e.currentTarget.style.color = COLORS.navy;
                                                e.currentTarget.style.transform = 'scale(1.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = `${COLORS.gold}19`;
                                                e.currentTarget.style.color = COLORS.gold;
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a
                                            href={`mailto:${teamMembers[currentIndex].social.email}`}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '50%',
                                                backgroundColor: `${COLORS.gold}19`,
                                                border: `1px solid ${COLORS.gold}33`,
                                                color: COLORS.gold,
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = COLORS.gold;
                                                e.currentTarget.style.color = COLORS.navy;
                                                e.currentTarget.style.transform = 'scale(1.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = `${COLORS.gold}19`;
                                                e.currentTarget.style.color = COLORS.gold;
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Controles del carrusel */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: isMobile ? '16px' : '24px',
                            marginTop: isMobile ? '24px' : '32px',
                            flexWrap: 'wrap',
                        }}
                    >
                        {/* Botón anterior */}
                        <button
                            onClick={handlePrev}
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: `${COLORS.gold}19`,
                                border: `1px solid ${COLORS.gold}33`,
                                color: COLORS.gold,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = COLORS.gold;
                                e.currentTarget.style.color = COLORS.navy;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = `${COLORS.gold}19`;
                                e.currentTarget.style.color = COLORS.gold;
                            }}
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Dots indicadores */}
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {teamMembers.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    style={{
                                        width: index === currentIndex ? '24px' : '8px',
                                        height: '8px',
                                        borderRadius: '4px',
                                        backgroundColor:
                                            index === currentIndex
                                                ? COLORS.gold
                                                : `${COLORS.gold}4d`,
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            ))}
                        </div>

                        {/* Botón siguiente */}
                        <button
                            onClick={handleNext}
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: `${COLORS.gold}19`,
                                border: `1px solid ${COLORS.gold}33`,
                                color: COLORS.gold,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = COLORS.gold;
                                e.currentTarget.style.color = COLORS.navy;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = `${COLORS.gold}19`;
                                e.currentTarget.style.color = COLORS.gold;
                            }}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Botón Auto/Pausa */}
                    <button
                        onClick={() => setIsAutoPlay(!isAutoPlay)}
                        style={{
                            position: 'absolute',
                            top: isMobile ? '16px' : '24px',
                            right: isMobile ? '16px' : '24px',
                            padding: '8px 14px',
                            borderRadius: '20px',
                            backgroundColor: `${COLORS.gold}26`,
                            border: `1px solid ${COLORS.gold}4d`,
                            color: COLORS.gold,
                            fontFamily: "'Inria Serif', serif",
                            fontSize: '11px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = `${COLORS.gold}4d`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = `${COLORS.gold}26`;
                        }}
                    >
                        {isAutoPlay ? '▶ Auto' : '⏸ Pausa'}
                    </button>

                    {/* Indicador de progreso */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            height: '2px',
                            background: `linear-gradient(to right, ${COLORS.gold}, ${COLORS.gold}80, transparent)`,
                            width: `${((currentIndex + 1) / teamMembers.length) * 100}%`,
                            transition: 'width 0.3s ease',
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default TeamsSection;