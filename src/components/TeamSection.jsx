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
    const teamMembers = [
        {
            id: 1,
            name: 'Samuel Martínez',
            role: 'Co-Fundador & Director de Estrategia',
            description: 'Profesional con sólida experiencia en liderazgo colaborativo y gestión estratégica. Destaca por su capacidad para estructurar procesos, coordinar operaciones y orientar la toma de decisiones hacia resultados sostenibles.',
            image: SamuelM,
        },
        {
            id: 2,
            name: 'Alexandra Duque',
            role: 'Co-Fundadora & Directora de Imagen',
            description: 'Especialista en dirección visual con un enfoque claro y metódico. Su criterio estético y atención al detalle garantizan una identidad visual consistente y coherente.',
            image: AlexandraD,
        },
        {
            id: 3,
            name: 'Antonella Raimundo',
            role: 'Co-Fundadora & Directora de Medios',
            description: 'Profesional creativa con una visión estratégica en comunicación y medios. Aporta enfoques innovadores impulsando mensajes efectivos y alineados con los objetivos corporativos.',
            image: AntonellaR,
        },
        {
            id: 4,
            name: 'Carlos Colmenares',
            role: 'Co-Fundador & Director de Servicios',
            description: 'Perfil orientado a la gestión de servicios y desarrollo creativo. Se distingue por su capacidad para convertir ideas en soluciones concretas y asegurar una entrega consistente.',
            image: CarlosC,
        },
        {
            id: 5,
            name: 'Manuel Gutierrez',
            role: 'Co-Fundador & Director de Estrategia',
            description: 'Responsable de la planificación estratégica y definición de lineamientos clave. Aporta una visión analítica enfocada en elevar los estándares profesionales.',
            image: ManuelG,
        },
        {
            id: 6,
            name: 'María Moncada',
            role: 'Co-Fundadora & Directora de Estrategia',
            description: 'Profesional enfocada en la alineación entre visión, propósito y ejecución. Lidera procesos estratégicos con un enfoque integral y generación de valor.',
            image: MariaF,
        },
        {
            id: 7,
            name: 'Yhoseph Bonilla',
            role: 'Co-Fundador & Director de Finanzas',
            description: 'Encargado de la gestión financiera y análisis económico. Su enfoque meticuloso optimiza recursos y fortalece la sostenibilidad financiera del equipo.',
            image: YhosepB,
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

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

    useEffect(() => {
        if (!isAutoPlay) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlay, teamMembers.length]);

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

    return (
        <section
            ref={ref}
            style={{
                padding: isMobile ? '60px 16px' : isTablet ? '80px 24px' : '100px 24px',
                backgroundColor: COLORS.navy,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
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
                            fontSize: isMobile ? '12px' : isTablet ? '15px' : '17px',
                            color: '#bbb',
                            fontFamily: "'Inria Serif', serif",
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: '1.6',
                        }}
                    >
                        Profesionales dedicados a transformar la atención al cliente con ética, profesionalismo y verdadera calidad humana
                    </p>
                </motion.div>

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
                            borderRadius: isMobile ? '16px' : '24px',
                            boxShadow: `0 20px 60px ${COLORS.navy}4d`,
                            backdropFilter: 'blur(10px)',
                        }}
                    >
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
                                minHeight: isMobile ? 'auto' : isTablet ? '420px' : '460px',
                                gap: isMobile ? '20px' : isTablet ? '28px' : '40px',
                                padding: isMobile ? '28px 18px' : isTablet ? '36px 32px' : '44px 52px',
                                alignItems: isMobile ? 'stretch' : 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {/* Imagen */}
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    order: isMobile ? -1 : 0,
                                }}
                            >
                                <div
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        maxWidth: isMobile ? '220px' : isTablet ? '260px' : '300px',
                                        aspectRatio: '1',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img
                                        src={teamMembers[currentIndex].image}
                                        alt={teamMembers[currentIndex].name}
                                        style={{
                                            width: '110%',
                                            height: '110%',
                                            objectFit: 'contain',
                                            objectPosition: 'center',
                                            borderRadius: '12px',
                                            boxShadow: `0 16px 40px ${COLORS.navy}40`,
                                            border: `1.5px solid ${COLORS.gold}33`,
                                            padding: '4px',
                                            backgroundColor: `${COLORS.gold}03`,
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            borderRadius: '12px',
                                            background: `radial-gradient(circle at 50% 50%, ${COLORS.gold}00 0%, ${COLORS.navy}10 100%)`,
                                            pointerEvents: 'none',
                                        }}
                                    />
                                </div>
                            </motion.div>

                            {/* Información */}
                            <motion.div
                                key={`info-${currentIndex}`}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4 }}
                            >
                                {!isMobile && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: '-24px',
                                            top: '10%',
                                            bottom: '10%',
                                            width: '1px',
                                            background: `linear-gradient(to bottom, ${COLORS.gold}00, ${COLORS.gold}40, ${COLORS.gold}00)`,
                                        }}
                                    />
                                )}

                                <div style={{ paddingLeft: isMobile ? '0' : isTablet ? '16px' : '28px' }}>
                                    <h3
                                        style={{
                                            fontSize: isMobile ? '22px' : isTablet ? '28px' : '36px',
                                            fontFamily: "'Great Vibes', cursive",
                                            fontWeight: '400',
                                            color: COLORS.gold,
                                            marginBottom: '4px',
                                            margin: 0,
                                            padding: 0,
                                            lineHeight: '1.2',
                                        }}
                                    >
                                        {teamMembers[currentIndex].name}
                                    </h3>

                                    <p
                                        style={{
                                            fontSize: isMobile ? '11px' : isTablet ? '12px' : '13px',
                                            fontFamily: "'Inria Serif', serif",
                                            fontWeight: '700',
                                            color: `${COLORS.gold}cc`,
                                            marginBottom: isMobile ? '12px' : isTablet ? '14px' : '16px',
                                            margin: '4px 0 12px 0',
                                            padding: 0,
                                            lineHeight: '1.3',
                                        }}
                                    >
                                        {teamMembers[currentIndex].role}
                                    </p>

                                    <p
                                        style={{
                                            fontSize: isMobile ? '11.5px' : isTablet ? '12.5px' : '13.5px',
                                            fontFamily: "'Inria Serif', serif",
                                            color: '#999',
                                            lineHeight: '1.5',
                                            marginBottom: isMobile ? '12px' : isTablet ? '14px' : '16px',
                                            margin: '0 0 12px 0',
                                            padding: 0,
                                        }}
                                    >
                                        {teamMembers[currentIndex].description}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Controles */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: isMobile ? '12px' : '20px',
                            marginTop: isMobile ? '24px' : '32px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <button
                            onClick={handlePrev}
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                backgroundColor: `${COLORS.gold}15`,
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
                                e.currentTarget.style.backgroundColor = `${COLORS.gold}15`;
                                e.currentTarget.style.color = COLORS.gold;
                            }}
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                            {teamMembers.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    style={{
                                        width: index === currentIndex ? '10px' : '2px',
                                        height: '4px',
                                        borderRadius: '3px',
                                        backgroundColor: index === currentIndex ? COLORS.gold : `${COLORS.gold}40`,
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                backgroundColor: `${COLORS.gold}15`,
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
                                e.currentTarget.style.backgroundColor = `${COLORS.gold}15`;
                                e.currentTarget.style.color = COLORS.gold;
                            }}
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>

                    <button
                        onClick={() => setIsAutoPlay(!isAutoPlay)}
                        style={{
                            position: 'absolute',
                            top: isMobile ? '12px' : '20px',
                            right: isMobile ? '12px' : '20px',
                            padding: '6px 12px',
                            borderRadius: '16px',
                            backgroundColor: `${COLORS.gold}20`,
                            border: `1px solid ${COLORS.gold}4d`,
                            color: COLORS.gold,
                            fontFamily: "'Inria Serif', serif",
                            fontSize: '10px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = `${COLORS.gold}40`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = `${COLORS.gold}20`;
                        }}
                    >
                        {isAutoPlay ? '▶ Auto' : '⏸ Pausa'}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

export default TeamsSection;