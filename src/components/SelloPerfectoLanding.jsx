import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";
import { useRef } from 'react';
import LogoSP from '../assets/LogoSP.png';
import { VideoSplash } from './VideoSplash';
import TeamsSection from './TeamSection';
import { PartnersSection } from './PartnersSection';
import VideoIntro from '../assets/Intro.mp4';

// ============================================
// COLORES Y VARIABLES
// ============================================

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

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

export default function SelloPerfectoLanding() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [videoFinished, setVideoFinished] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/* VIDEO SPLASH SCREEN */}
            {!videoFinished && (
                <VideoSplash
                    videoUrl={VideoIntro}
                    duration={47}
                    onFinish={() => setVideoFinished(true)}
                />
            )}

            {/* CONTENIDO PRINCIPAL */}
            <div style={{ background: 'white' }}>
                <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} isMobile={isMobile} />
                <Hero isMobile={isMobile} isTablet={isTablet} />
                <ValueProposition isMobile={isMobile} />
                <Problem isMobile={isMobile} />
                <Services isMobile={isMobile} />
                <HowItWorks isMobile={isMobile} isTablet={isTablet} />
                <Benefits isMobile={isMobile} />
                <TeamsSection />
                <PartnersSection isMobile={isMobile} />
                <FAQ isMobile={isMobile} />
                <CTAFinal isMobile={isMobile} />
                <Footer isMobile={isMobile} />
            </div>
        </>
    );
}

// ============================================
// NAVBAR
// ============================================

function Navbar({ mobileMenuOpen, setMobileMenuOpen, isMobile }) {
    return (
        <nav
            style={{
                position: 'fixed',
                width: '100%',
                top: 0,
                backgroundColor: `${COLORS.navy}cc`,
                backdropFilter: 'blur(10px)',
                zIndex: 50,
                borderBottom: `1px solid ${COLORS.gold}33`,
            }}
        >
            <div
                style={{
                    width: '100%',
                    padding: isMobile ? '0 16px' : '0 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: isMobile ? '56px' : '64px',
                }}
            >
                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img src={LogoSP} alt="LOGO de Sello Perfecto" style={{ width: isMobile ? '40px' : '50px', height: 'auto' }} />
                </div>

                {/* Desktop Menu */}
                {!isMobile && (
                    <div style={{ display: 'flex', gap: '32px' }}>
                        <NavLink href="#problema">Problema</NavLink>
                        <NavLink href="#servicios">Servicios</NavLink>
                        <NavLink href="#proceso">Proceso</NavLink>
                        <NavLink href="#contacto">Contacto</NavLink>
                    </div>
                )}

                {/* Mobile Menu Button */}
                {isMobile && (
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: COLORS.gold,
                            cursor: 'pointer',
                            fontSize: isMobile ? '20px' : '24px',
                        }}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                )}
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && isMobile && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        padding: '12px 16px',
                        borderTop: `1px solid ${COLORS.gold}33`,
                    }}
                >
                    <NavLink href="#problema">Problema</NavLink>
                    <NavLink href="#servicios">Servicios</NavLink>
                    <NavLink href="#proceso">Proceso</NavLink>
                    <NavLink href="#contacto">Contacto</NavLink>
                </motion.div>
            )}
        </nav>
    );
}

function NavLink({ href, children }) {
    return (
        <a
            href={href}
            style={{
                color: COLORS.gold,
                textDecoration: 'none',
                fontFamily: "'Inria Serif', serif",
                transition: 'color 0.3s ease',
                fontSize: '16px',
            }}
            onMouseEnter={(e) => (e.target.style.color = COLORS.goldAccent)}
            onMouseLeave={(e) => (e.target.style.color = COLORS.gold)}
        >
            {children}
        </a>
    );
}

// ============================================
// HERO SECTION
// ============================================

function Hero({ isMobile, isTablet }) {
    return (
        <section
            style={{
                paddingTop: isMobile ? '80px' : '120px',
                paddingBottom: isMobile ? '60px' : '80px',
                paddingLeft: isMobile ? '16px' : '24px',
                paddingRight: isMobile ? '16px' : '24px',
                background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navy} 100%)`,
                color: COLORS.white,
                position: 'relative',
                overflow: 'hidden',
                minHeight: isMobile ? '70vh' : '100vh',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* Decorativos */}
            <div
                style={{
                    position: 'absolute',
                    top: isMobile ? '20px' : '80px',
                    right: isMobile ? '-50px' : '40px',
                    width: isMobile ? '200px' : '288px',
                    height: isMobile ? '200px' : '288px',
                    backgroundColor: `${COLORS.gold}0d`,
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                }}
            />

            <div
                style={{
                    width: '100%',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
                        gap: isMobile ? '24px' : '48px',
                        alignItems: 'center',
                    }}
                >
                    {/* Contenido */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                color: COLORS.gold,
                                fontFamily: "'Inria Serif', serif",
                                fontSize: isMobile ? '12px' : '18px',
                                marginBottom: isMobile ? '8px' : '16px',
                            }}
                        >
                            Transformación empresarial
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            style={{
                                fontSize: isMobile ? '40px' : '72px',
                                fontFamily: "'Great Vibes', cursive",
                                marginBottom: isMobile ? '16px' : '24px',
                                background: 'linear-gradient(90deg, #7a5a1a 0%, #c9a24d 20%, #f5e6a8 40%, #ffd86b 50%, #f5e6a8 60%, #c9a24d 80%, #7a5a1a 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Sello Perfecto
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            style={{
                                fontSize: isMobile ? '20px' : '32px',
                                fontFamily: "'Inria Serif', serif",
                                marginBottom: isMobile ? '16px' : '24px',
                                lineHeight: '1.3',
                            }}
                        >
                            Tu equipo merece ser excepcional.{' '}
                            <span style={{ color: COLORS.gold }}>Te ayudamos a lograrlo.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            style={{
                                color: '#ccc',
                                fontFamily: "'Inria Serif', serif",
                                fontSize: isMobile ? '13px' : '18px',
                                marginBottom: isMobile ? '24px' : '32px',
                                lineHeight: '1.6',
                            }}
                        >
                            Evaluamos, asesoramos y capacitamos a tu personal para garantizar una atención al cliente ética, profesional y verdaderamente humana en cada interacción.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            style={{
                                display: 'flex',
                                gap: isMobile ? '12px' : '16px',
                                flexWrap: 'wrap',
                            }}
                        >
                            <button
                                style={{
                                    padding: isMobile ? '12px 20px' : '16px 32px',
                                    backgroundColor: COLORS.gold,
                                    color: COLORS.navy,
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontFamily: "'Inria Serif', serif",
                                    fontWeight: 'bold',
                                    fontSize: isMobile ? '13px' : '16px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    whiteSpace: 'nowrap',
                                }}
                                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                            >
                                Solicitar Diagnóstico
                            </button>
                            <button
                                style={{
                                    padding: isMobile ? '12px 20px' : '16px 32px',
                                    backgroundColor: 'transparent',
                                    color: COLORS.gold,
                                    border: `2px solid ${COLORS.gold}`,
                                    borderRadius: '8px',
                                    fontFamily: "'Inria Serif', serif",
                                    fontWeight: 'bold',
                                    fontSize: isMobile ? '13px' : '16px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    whiteSpace: 'nowrap',
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = `${COLORS.gold}10`)}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                            >
                                Conocer más
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Visual - Logo animado */}
                    {!isMobile && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <div style={{ position: 'relative', width: '320px', height: '320px' }}>
                                {/* Círculos decorativos */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        border: `4px solid ${COLORS.gold}4d`,
                                        borderRadius: '50%',
                                    }}
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                    style={{
                                        position: 'absolute',
                                        inset: '24px',
                                        border: `3px solid ${COLORS.gold}33`,
                                        borderRadius: '50%',
                                    }}
                                />

                                {/* Logo central */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                    }}
                                >
                                    <div>
                                        <img src={LogoSP} alt="LOGO de Sello Perfecto" style={{ width: '264px', height: 'auto' }} />
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    )}
                </div>

                {/* CTA secundaria */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    style={{
                        textAlign: 'center',
                        marginTop: isMobile ? '40px' : '80px',
                    }}
                >
                    <p style={{ color: `${COLORS.gold}b3`, fontFamily: "'Inria Serif', serif", fontSize: isMobile ? '12px' : '14px', marginBottom: isMobile ? '12px' : '16px' }}>
                        Descubre cómo elevar tu atención al cliente
                    </p>
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                        <ChevronDown color={`${COLORS.gold}80`} size={isMobile ? 30 : 44} style={{ margin: '0 auto' }} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// ============================================
// VALUE PROPOSITION
// ============================================

function ValueProposition({ isMobile }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const props = [
        {
            title: 'Investigación Profunda',
            desc: 'Análisis integral de tu empresa para identificar oportunidades reales de mejora',
        },
        {
            title: 'Capacitación Integral',
            desc: 'Entrenamiento práctico para tu equipo basado en valores éticos y profesionalismo',
        },
        {
            title: 'Acompañamiento Real',
            desc: 'Asesoría continua y herramientas técnicas para implementar los cambios',
        },
    ];

    return (
        <section ref={ref} style={{ padding: isMobile ? '60px 16px' : '80px 24px', backgroundColor: COLORS.white }}>
            <div
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        style={{
                            fontFamily: "'Great Vibes', cursive",
                            fontSize: isMobile ? '32px' : '56px',
                            fontWeight: '400',
                            marginBottom: '16px',
                            textAlign: 'center',
                            background: 'linear-gradient(90deg, #7a5a1a 0%, #c9a24d 20%, #f5e6a8 40%, #ffd86b 50%, #f5e6a8 60%, #c9a24d 80%, #7a5a1a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Nuestro Enfoque
                    </h2>
                    <p
                        style={{
                            fontSize: isMobile ? '13px' : '20px',
                            color: COLORS.textGray,
                            textAlign: 'center',
                            fontFamily: "'Inria Serif', serif",
                            marginBottom: '40px',
                        }}
                    >
                        Tres pilares que transforman la atención al cliente en tu marca
                    </p>
                </motion.div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gap: isMobile ? '16px' : '32px',
                    }}
                >
                    {props.map((prop, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            style={{
                                padding: isMobile ? '20px' : '32px',
                                backgroundColor: `${COLORS.navy}08`,
                                borderRadius: '12px',
                                border: `1px solid ${COLORS.gold}33`,
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `${COLORS.gold}80`;
                                e.currentTarget.style.boxShadow = `0 10px 30px ${COLORS.navy}15`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = `${COLORS.gold}33`;
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <h3 style={{ fontSize: isMobile ? '16px' : '20px', fontFamily: "'Inria Serif', serif", fontWeight: 'bold', color: COLORS.navy, marginBottom: '12px' }}>
                                {prop.title}
                            </h3>
                            <p style={{ color: COLORS.textGray, fontFamily: "'Inria Serif', serif", lineHeight: '1.6', fontSize: isMobile ? '13px' : '14px' }}>{prop.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================
// PROBLEMA
// ============================================

function Problem({ isMobile }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const symptoms = [
        'Personal sin estándares claros de atención',
        'Comunicación inconsistente que confunde a tus clientes',
        'Pérdida de reputación por falta de profesionalismo',
        'Perder reputación por el mal trato al consumidor final',
        'Clientes que se van porque no se sienten valorados',
        'Falta de personal capacitado en habilidades blandas/duras'
    ];

    return (
        <section
            id="problema"
            ref={ref}
            style={{
                padding: 'clamp(60px, 8vw, 100px) clamp(16px, 4vw, 32px)',
                backgroundColor: COLORS.navy
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        style={{
                            fontFamily: "'Great Vibes', cursive",
                            fontSize: 'clamp(32px, 6vw, 56px)',
                            fontWeight: '400',
                            marginBottom: '16px',
                            textAlign: 'center',
                            color: COLORS.gold
                        }}
                    >
                        El Problema Real
                    </h2>

                    <p
                        style={{
                            fontSize: 'clamp(13px, 2.5vw, 20px)',
                            color: '#bbb',
                            textAlign: 'center',
                            fontFamily: "'Inria Serif', serif",
                            marginBottom: 'clamp(32px, 6vw, 48px)',
                            maxWidth: '900px',
                            marginInline: 'auto'
                        }}
                    >
                        Sabemos que tu marca se esfuerza, pero sin los estándares correctos, cada interacción es una oportunidad perdida.
                    </p>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                            gap: 'clamp(12px, 3vw, 24px)'
                        }}
                    >
                        {symptoms.map((symptom, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                style={{
                                    display: 'flex',
                                    gap: 'clamp(10px, 2vw, 16px)',
                                    alignItems: 'flex-start',
                                    padding: 'clamp(12px, 2.5vw, 16px)',
                                    backgroundColor: `${COLORS.gold}19`,
                                    borderRadius: '8px',
                                    borderLeft: `4px solid ${COLORS.gold}80`
                                }}
                            >
                                <div
                                    style={{
                                        color: `${COLORS.gold}b3`,
                                        flexShrink: 0,
                                        fontSize: '16px'
                                    }}
                                >
                                    ⚠️
                                </div>

                                <p
                                    style={{
                                        color: COLORS.white,
                                        fontFamily: "'Inria Serif', serif",
                                        fontSize: 'clamp(12px, 2vw, 14px)',
                                        lineHeight: '1.5'
                                    }}
                                >
                                    {symptom}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}


// ============================================
// SERVICIOS
// ============================================

function Services({ isMobile }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const services = [
        { num: '01', title: 'Investigación & Análisis', desc: 'Evaluación profunda de tu empresa para identificar oportunidades reales de mejora' },
        { num: '02', title: 'Capacitación Técnica', desc: 'Entrenamiento práctico para tu equipo en atención al cliente, ética profesional y valores' },
        { num: '03', title: 'Capacitación Directiva', desc: 'Asesorías para la junta directiva. Manual personalizado con estándares de calidad' },
        { num: '04', title: 'Herramientas Técnicas', desc: 'Implementación de Manychat, WhatsApp Business, bases de datos y sistemas de atención' },
        { num: '05', title: 'Asesoría Continua', desc: 'Acompañamiento real en la implementación de cambios y mejora continua' },
        { num: '06', title: 'Charla Personalizada', desc: 'Presentación de resultados y recomendaciones posteriores al diagnóstico inicial' },
    ];

    return (
        <section id="servicios" ref={ref} style={{ padding: isMobile ? '60px 16px' : '80px 24px', backgroundColor: COLORS.white }}>
            <div
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        style={{
                            fontFamily: "'Great Vibes', cursive",
                            fontSize: isMobile ? '32px' : '56px',
                            fontWeight: '400',
                            marginBottom: '16px',
                            textAlign: 'center',
                            background: 'linear-gradient(90deg, #7a5a1a 0%, #c9a24d 20%, #f5e6a8 40%, #ffd86b 50%, #f5e6a8 60%, #c9a24d 80%, #7a5a1a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Nuestros Servicios
                    </h2>
                    <p
                        style={{
                            fontSize: isMobile ? '13px' : '20px',
                            color: COLORS.textGray,
                            textAlign: 'center',
                            fontFamily: "'Inria Serif', serif",
                            marginBottom: '40px',
                        }}
                    >
                        Una propuesta integral diseñada para transformar tu atención al cliente
                    </p>
                </motion.div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gap: isMobile ? '16px' : '32px',
                    }}
                >
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            style={{
                                padding: isMobile ? '20px' : '32px',
                                background: `linear-gradient(135deg, ${COLORS.navy}08 0%, ${COLORS.gold}08 100%)`,
                                borderRadius: '12px',
                                border: `1px solid ${COLORS.gold}33`,
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `${COLORS.gold}80`;
                                e.currentTarget.style.boxShadow = `0 20px 40px ${COLORS.navy}1a`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = `${COLORS.gold}33`;
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                <div style={{ fontSize: isMobile ? '32px' : '40px', fontFamily: "'Great Vibes', cursive", color: `${COLORS.gold}` }}>{service.num}</div>
                            </div>
                            <h3 style={{ fontSize: isMobile ? '16px' : '20px', fontFamily: "'Inria Serif', serif", fontWeight: 'bold', color: COLORS.navy, marginBottom: '12px' }}>
                                {service.title}
                            </h3>
                            <p style={{ color: COLORS.textGray, fontFamily: "'Inria Serif', serif", lineHeight: '1.6', fontSize: isMobile ? '12px' : '14px' }}>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================
// CÓMO FUNCIONA
// ============================================

function HowItWorks({ isMobile, isTablet }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const phases = [
        {
            phase: 1,
            title: 'Diagnóstico Profundo',
            desc: 'Investigación integral de tu empresa, equipo y procesos de atención al cliente.',
            items: ['Análisis detallado', 'Informe ejecutivo', 'Identificación de oportunidades'],
        },
        {
            phase: 2,
            title: 'Diseño de Solución',
            desc: 'Creamos un plan personalizado adaptado a tus necesidades y realidad empresarial.',
            items: ['Plan de acción', 'Metodología clara', 'Timing realista'],
        },
        {
            phase: 3,
            title: 'Implementación',
            desc: 'Capacitación intensiva, instalación de herramientas y establecimiento de nuevos estándares.',
            items: ['Entrenamientos', 'Herramientas técnicas', 'Manuales personalizados'],
        },
        {
            phase: 4,
            title: 'Acompañamiento',
            desc: 'Soporte continuo para asegurar que los cambios se mantienen y evolucionan.',
            items: ['Asecoría continua', 'Ajustes necesarios', 'Mejora constante'],
        },
        {
            phase: 5,
            title: 'Sello Perfecto',
            desc: 'Certificación de calidad que acredita ante el público la excelencia de tu atención al cliente.',
            items: ['Certificación oficial', 'Fortalecimiento de marca', 'Vínculo continuo'],
        },
    ];

    return (
        <section id="proceso" ref={ref} style={{ padding: isMobile ? '60px 16px' : '120px 24px', backgroundColor: COLORS.navy }}>
            <div
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        style={{
                            fontFamily: "'Great Vibes', cursive",
                            fontSize: isMobile ? '32px' : '56px',
                            fontWeight: '400',
                            marginBottom: '16px',
                            textAlign: 'center',
                            color: COLORS.gold,
                        }}
                    >
                        Cómo Funciona
                    </h2>
                    <p
                        style={{
                            fontSize: isMobile ? '13px' : '20px',
                            color: '#bbb',
                            textAlign: 'center',
                            fontFamily: "'Inria Serif', serif",
                            marginBottom: '40px',
                        }}
                    >
                        Un proceso claro, transparente y diseñado para resultados reales
                    </p>
                </motion.div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile
                            ? '1fr'
                            : isTablet
                                ? 'repeat(2, 1fr)'
                                : 'repeat(5, 1fr)',
                        gap: '16px',
                        position: 'relative',
                    }}
                >
                    {/* Línea conectora - Solo en desktop */}
                    {!isMobile && !isTablet && (
                        <div
                            style={{
                                position: 'absolute',
                                top: '96px',
                                left: 0,
                                right: 0,
                                height: '4px',
                                borderRadius: '10px',
                                background: `${COLORS.gold}`,
                                zIndex: 0,
                            }}
                        />
                    )}

                    {phases.map((phase, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            style={{
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            {/* Círculo número */}
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
                                <div
                                    style={{
                                        width: isMobile ? '48px' : '64px',
                                        height: isMobile ? '48px' : '64px',
                                        backgroundColor: COLORS.gold,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: COLORS.navy,
                                        fontWeight: 'bold',
                                        fontSize: isMobile ? '18px' : '24px',
                                        fontFamily: "'Great Vibes', cursive",
                                        boxShadow: `0 10px 30px ${COLORS.gold}4d`,
                                    }}
                                >
                                    {phase.phase}
                                </div>
                            </div>

                            {/* Contenido */}
                            <div
                                style={{
                                    backgroundColor: `${COLORS.gold}19`,
                                    borderRadius: '6px',
                                    padding: isMobile ? '16px' : '24px',
                                    border: `1px solid ${COLORS.gold}4d`,
                                    height: '100%',
                                }}
                            >
                                <h3 style={{ fontSize: isMobile ? '14px' : '18px', fontFamily: "'Inria Serif', serif", fontWeight: 'bold', color: COLORS.gold, marginBottom: '12px', textAlign: 'center' }}>
                                    {phase.title}
                                </h3>
                                <p style={{ color: '#ccc', fontFamily: "'Inria Serif', serif", fontSize: isMobile ? '12px' : '14px', marginBottom: '16px', textAlign: 'center' }}>
                                    {phase.desc}
                                </p>
                                <ul style={{ listStyle: 'none' }}>
                                    {phase.items.map((item, i) => (
                                        <li
                                            key={i}
                                            style={{
                                                display: 'flex',
                                                gap: '8px',
                                                alignItems: 'center',
                                                color: '#ccc',
                                                fontSize: isMobile ? '11px' : '12px',
                                                fontFamily: "'Inria Serif', serif",
                                                marginBottom: '8px',
                                            }}
                                        >
                                            <div style={{ width: '6px', height: '6px', backgroundColor: COLORS.gold, borderRadius: '50%', flexShrink: 0 }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================
// BENEFICIOS
// ============================================

function Benefits({ isMobile }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const benefits = [
        { icon: '📈', title: 'Clientes más satisfechos', desc: 'Verás cómo tus clientes regresarán y recomendarán tu negocio por una experiencia consistentemente excelente' },
        { icon: '👥', title: 'Equipo Más Comprometido', desc: 'Tu personal estará motivado y se sentirá orgulloso de representar tu marca' },
        { icon: '⭐', title: 'Reputación Fortalecida', desc: 'Tu marca será reconocida en el mercado por su profesionalismo y ética en cada interacción' },
        { icon: '📊', title: 'Métricas Claras', desc: 'Tendrás estándares medibles que te permitirán monitorear la calidad de atención en tiempo real' },
        { icon: '🔄', title: 'Personal mejor capacitado', desc: 'Tu equipo dominará las herramientas y técnicas necesarias para brindar un servicio de excelencia' },
        { icon: '💡', title: 'Diferenciación Real', desc: 'Tu marca se destacará en el mercado por la calidad humana y genuina de su atención' },
    ];

    return (
        <section ref={ref} style={{ padding: isMobile ? '60px 16px' : '80px 24px', backgroundColor: COLORS.white }}>
            <div
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        style={{
                            fontFamily: "'Great Vibes', cursive",
                            fontSize: isMobile ? '32px' : '56px',
                            fontWeight: '400',
                            marginBottom: '16px',
                            textAlign: 'center',
                            background: 'linear-gradient(90deg, #7a5a1a 0%, #c9a24d 20%, #f5e6a8 40%, #ffd86b 50%, #f5e6a8 60%, #c9a24d 80%, #7a5a1a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Lo que lograrás
                    </h2>
                    <p
                        style={{
                            fontSize: isMobile ? '13px' : '20px',
                            color: COLORS.textGray,
                            textAlign: 'center',
                            fontFamily: "'Inria Serif', serif",
                            marginBottom: '40px',
                        }}
                    >
                        Resultados tangibles que transforman tu empresa desde adentro
                    </p>
                </motion.div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gap: isMobile ? '16px' : '32px',
                    }}
                >
                    {benefits.map((benefit, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            style={{
                                padding: isMobile ? '20px' : '32px',
                                backgroundColor: `${COLORS.navy}08`,
                                borderRadius: '12px',
                                border: `1px solid ${COLORS.gold}33`,
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `${COLORS.gold}80`;
                                e.currentTarget.style.boxShadow = `0 10px 30px ${COLORS.navy}15`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = `${COLORS.gold}33`;
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{ fontSize: isMobile ? '40px' : '56px', marginBottom: '16px', display: 'inline-block' }}>{benefit.icon}</div>
                            <h3 style={{ fontSize: isMobile ? '14px' : '18px', fontFamily: "'Inria Serif', serif", fontWeight: 'bold', color: COLORS.navy, marginBottom: '12px' }}>
                                {benefit.title}
                            </h3>
                            <p style={{ color: COLORS.textGray, fontFamily: "'Inria Serif', serif", fontSize: isMobile ? '12px' : '14px' }}>{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================
// FAQ
// ============================================

function FAQ({ isMobile }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [openFAQ, setOpenFAQ] = useState(0);

    const faqs = [
        {
            q: '¿Cuánto tiempo tarda el proceso completo?',
            a: 'Depende del tamaño y complejidad de tu empresa. Aunque se garantiza un acompañamiento continuo después.',
        },
        {
            q: '¿Qué pasa si mi equipo no quiere cambiar?',
            a: 'La resistencia al cambio es normal. Nuestro enfoque es empático y participativo. Trabajamos con el equipo para que entiendan el valor y sean parte de la solución.',
        },
        {
            q: '¿Necesito herramientas tecnológicas complejas?',
            a: 'No necesariamente. Comenzamos con lo que ya tienes y añadimos herramientas realistas como Manychat, WhatsApp Business y bases de datos simples pero efectivas.',
        },
        {
            q: '¿Cómo medimos el éxito?',
            a: 'Establecemos métricas claras desde el inicio: retención de clientes, satisfacción del equipo, consistencia de atención y reputación de marca.',
        },
        {
            q: '¿Es adaptable a cualquier sector?',
            a: 'Sí. Nuestro enfoque es flexible y personalizado. Trabajamos con hoteles, tiendas, clinicas y cualquier sector que tenga contacto directo con el consumidor',
        },
    ];

    return (
        <section ref={ref} style={{ padding: isMobile ? '60px 16px' : '80px 24px', backgroundColor: COLORS.navy }}>
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '48px' }}
                >
                    <h2
                        style={{
                            fontFamily: "'Great Vibes', cursive",
                            fontSize: isMobile ? '32px' : '56px',
                            fontWeight: '400',
                            marginBottom: '16px',
                            color: COLORS.gold,
                        }}
                    >
                        Preguntas Frecuentes
                    </h2>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '12px' : '16px' }}>
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ delay: idx * 0.1 }}
                            style={{
                                backgroundColor: `${COLORS.gold}19`,
                                borderRadius: '12px',
                                border: `1px solid ${COLORS.gold}4d`,
                                overflow: 'hidden',
                            }}
                        >
                            <button
                                onClick={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
                                style={{
                                    width: '100%',
                                    padding: isMobile ? '16px' : '24px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    transition: 'background-color 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${COLORS.gold}26`)}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                            >
                                <h3 style={{ fontFamily: "'Inria Serif', serif", fontWeight: 'bold', color: COLORS.white, fontSize: isMobile ? '13px' : '18px' }}>
                                    {faq.q}
                                </h3>
                                <div
                                    style={{
                                        color: COLORS.gold,
                                        transition: 'transform 0.3s ease',
                                        transform: openFAQ === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                                        flexShrink: 0,
                                        marginLeft: isMobile ? '12px' : '16px',
                                        fontSize: isMobile ? '12px' : '16px',
                                    }}
                                >
                                    ▼
                                </div>
                            </button>

                            {openFAQ === idx && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    style={{
                                        padding: isMobile ? '12px 16px 16px' : '0 24px 24px 24px',
                                        color: '#ccc',
                                        fontFamily: "'Inria Serif', serif",
                                        borderTop: `1px solid ${COLORS.gold}33`,
                                        fontSize: isMobile ? '12px' : '14px',
                                    }}
                                >
                                    {faq.a}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ============================================
// CTA FINAL
// ============================================

function CTAFinal({ isMobile }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="contacto" ref={ref} style={{ padding: isMobile ? '60px 16px' : '80px 24px', backgroundColor: COLORS.white }}>
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        style={{
                            fontFamily: "'Great Vibes', cursive",
                            fontSize: isMobile ? '32px' : '56px',
                            fontWeight: '400',
                            marginBottom: isMobile ? '16px' : '24px',
                            background: 'linear-gradient(90deg, #7a5a1a 0%, #c9a24d 20%, #f5e6a8 40%, #ffd86b 50%, #f5e6a8 60%, #c9a24d 80%, #7a5a1a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        El primer paso es en grande
                    </h2>

                    <p style={{ color: COLORS.textGray, fontFamily: "'Inria Serif', serif", fontSize: isMobile ? '13px' : '18px', marginBottom: isMobile ? '32px' : '48px' }}>
                        Agendar una charla inicial donde exploramos tu situación y diseñamos un plan personalizado. Sin compromiso.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ delay: 0.3 }}
                        style={{ display: 'flex', gap: isMobile ? '12px' : '16px', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <button
                            style={{
                                padding: isMobile ? '12px 20px' : '16px 32px',
                                backgroundColor: COLORS.gold,
                                color: COLORS.navy,
                                border: 'none',
                                borderRadius: '8px',
                                fontFamily: "'Inria Serif', serif",
                                fontWeight: 'bold',
                                fontSize: isMobile ? '13px' : '16px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                        >
                            Agendar asesoría
                        </button>
                        <button
                            style={{
                                padding: isMobile ? '12px 20px' : '16px 32px',
                                backgroundColor: 'transparent',
                                color: COLORS.gold,
                                border: `2px solid ${COLORS.gold}`,
                                borderRadius: '8px',
                                fontFamily: "'Inria Serif', serif",
                                fontWeight: 'bold',
                                fontSize: isMobile ? '13px' : '16px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = `${COLORS.gold}10`)}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                        >
                            info@selloperfecto.com
                        </button>
                    </motion.div>

                    <p style={{ color: '#999', fontFamily: "'Inria Serif', serif", fontSize: '12px', marginTop: isMobile ? '20px' : '32px' }}>
                        Respuesta en menos de 24 horas
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// ============================================
// FOOTER
// ============================================

function Footer({ isMobile }) {
    return (
        <footer style={{ backgroundColor: COLORS.navy, borderTop: `1px solid ${COLORS.gold}33`, padding: isMobile ? '40px 16px' : '48px 24px' }}>
            <div
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    marginBottom: '32px',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
                        gap: isMobile ? '24px' : '32px',
                        marginBottom: '32px',
                    }}
                >
                    {/* Branding */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    backgroundColor: COLORS.gold,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: COLORS.navy,
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                }}
                            >
                                SP
                            </div>
                            <span style={{ color: COLORS.gold, fontFamily: "'Great Vibes', cursive", fontSize: '18px' }}>
                                Sello Perfecto
                            </span>
                        </div>
                        <p style={{ color: '#999', fontFamily: "'Inria Serif', serif", fontSize: '14px' }}>
                            Atención de fideliza, calidad que sella.
                        </p>
                    </div>

                    {/* Links */}
                    <div> <h4 style={{ color: COLORS.gold, fontFamily: "'Inria Serif', serif", fontWeight: 'bold', marginBottom: '16px' }}> Redes </h4> <ul style={{ listStyle: 'none' }}> <li> <a href="https://www.instagram.com/selloperfecto.ve?igsh=b3hycGpoaW8xeTJ0" target="_blank" rel="noopener noreferrer" style={{ color: '#999', fontFamily: "'Inria Serif', serif", fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s ease', }} onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.gold)} onMouseLeave={(e) => (e.currentTarget.style.color = '#999')} > <FaInstagram size={18} /> Instagram </a> </li> </ul> </div>

                    {/* Servicios */}
                    <div>
                        <h4 style={{ color: COLORS.gold, fontFamily: "'Inria Serif', serif", fontWeight: 'bold', marginBottom: '16px' }}>
                            Servicios
                        </h4>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ color: '#999', fontFamily: "'Inria Serif', serif", fontSize: '14px', marginBottom: '8px' }}>
                                Diagnóstico
                            </li>
                            <li style={{ color: '#999', fontFamily: "'Inria Serif', serif", fontSize: '14px', marginBottom: '8px' }}>
                                Capacitación
                            </li>
                            <li style={{ color: '#999', fontFamily: "'Inria Serif', serif", fontSize: '14px', marginBottom: '8px' }}>
                                Asecoría
                            </li>
                            <li style={{ color: '#999', fontFamily: "'Inria Serif', serif", fontSize: '14px' }}>
                                Herramientas
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 style={{ color: COLORS.gold, fontFamily: "'Inria Serif', serif", fontWeight: 'bold', marginBottom: '16px' }}>
                            Contacto
                        </h4>
                        <p style={{ color: '#999', fontFamily: "'Inria Serif', serif", fontSize: '14px', marginBottom: '8px' }}>
                            info@selloperfecto.com
                        </p>
                        <p style={{ color: '#999', fontFamily: "'Inria Serif', serif", fontSize: '14px' }}>
                            +58 412-5442517
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div
                    style={{
                        borderTop: `1px solid ${COLORS.gold}33`,
                        paddingTop: '32px',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: isMobile ? 'flex-start' : 'center',
                        gap: '16px',
                    }}
                >
                    <p style={{ color: '#666', fontFamily: "'Inria Serif', serif", fontSize: '12px' }}>
                        &copy; 2024 Sello Perfecto. Todos los derechos reservados.
                    </p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <a
                            href="#"
                            style={{
                                color: '#666',
                                textDecoration: 'none',
                                fontFamily: "'Inria Serif', serif",
                                fontSize: '12px',
                            }}
                        >
                            Privacidad
                        </a>
                        <a
                            href="#"
                            style={{
                                color: '#666',
                                textDecoration: 'none',
                                fontFamily: "'Inria Serif', serif",
                                fontSize: '12px',
                            }}
                        >
                            Términos
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
