import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Importar los logos
import EmprenderJuntos from '../assets/EmprenderJuntos.png';
import LogoAlcaldia from '../assets/logo-alcaldia.png';
import LogoSapi from '../assets/logo-sapi.png';
import LogoSaren from '../assets/logo-saren.png';
import LogoSeniat from '../assets/LogoSENIAT.png';

// ============================================
// COLORES
// ============================================

const COLORS = {
    navy: '#000b3d',
    gold: '#f4d289',
    white: '#ffffff',
    lightGray: '#f8f8f8',
    textGray: '#666666',
};

// ============================================
// COMPONENTE PARTNERS/APOYO
// ============================================

export function PartnersSection({ isMobile }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const partners = [
        { logo: EmprenderJuntos, alt: 'Emprender Juntos' },
        { logo: LogoAlcaldia, alt: 'Alcaldía' },
        { logo: LogoSapi, alt: 'SAPI' },
        { logo: LogoSaren, alt: 'SAREN' },
        { logo: LogoSeniat, alt: 'SENIAT' },
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
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
                        Respaldado por
                    </p>
                    <h2
                        style={{
                            fontFamily: "'Great Vibes', cursive",
                            fontSize: isMobile ? '28px' : '42px',
                            fontWeight: '400',
                            marginBottom: '8px',
                            background: 'linear-gradient(90deg, #7a5a1a 0%, #c9a24d 20%, #f5e6a8 40%, #ffd86b 50%, #f5e6a8 60%, #c9a24d 80%, #7a5a1a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Nuestros Aliados
                    </h2>
                    <p
                        style={{
                            fontSize: isMobile ? '12px' : '16px',
                            color: COLORS.textGray,
                            fontFamily: "'Inria Serif', serif",
                        }}
                    >
                        Instituciones y organizaciones que creen en nuestra misión
                    </p>
                </motion.div>

                {/* Línea decorativa superior */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{
                        height: '2px',
                        background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)`,
                        marginBottom: isMobile ? '40px' : '50px',
                        transformOrigin: 'center',
                    }}
                />

                {/* Grid de logos */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile 
                            ? 'repeat(2, 1fr)' 
                            : 'repeat(5, 1fr)',
                        gap: isMobile ? '24px' : '32px',
                        alignItems: 'center',
                        justifyItems: 'center',
                    }}
                >
                    {partners.map((partner, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: isMobile ? '16px' : '24px',
                                borderRadius: '12px',
                                backgroundColor: 'transparent',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                width: '100%',
                                height: isMobile ? '100px' : '140px',
                                border: `1px solid ${COLORS.gold}33`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = `${COLORS.gold}08`;
                                e.currentTarget.style.borderColor = `${COLORS.gold}80`;
                                e.currentTarget.style.boxShadow = `0 8px 24px ${COLORS.navy}0a`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.borderColor = `${COLORS.gold}33`;
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.alt}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                    filter: 'grayscale(100%)',
                                    opacity: 0.7,
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.filter = 'grayscale(0%)';
                                    e.target.style.opacity = '1';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.filter = 'grayscale(100%)';
                                    e.target.style.opacity = '0.7';
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Línea decorativa inferior */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    style={{
                        height: '2px',
                        background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)`,
                        marginTop: isMobile ? '40px' : '50px',
                        transformOrigin: 'center',
                    }}
                />

                {/* Texto de cierre */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    style={{
                        textAlign: 'center',
                        marginTop: isMobile ? '32px' : '48px',
                        fontSize: isMobile ? '12px' : '14px',
                        color: COLORS.textGray,
                        fontFamily: "'Inria Serif', serif",
                        fontStyle: 'italic',
                    }}
                >
                    Instituciones públicas y organizaciones que respaldan nuestro trabajo transformacional
                </motion.p>
            </div>
        </section>
    );
}