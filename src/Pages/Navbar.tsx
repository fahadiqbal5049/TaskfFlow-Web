import { useNavigate } from 'react-router-dom';

export function Navbar() {
    const navigate = useNavigate();
    
    const navStyle = {
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    } as React.CSSProperties;

    const logoStyle = {
        margin: 0,
        fontSize: '24px',
        fontWeight: '800',
        color: '#ffffff',
        cursor: 'pointer',
    } as React.CSSProperties;

    const navLinksStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        alignItems: 'center',
    } as React.CSSProperties;

    const navButtonStyle = {
        padding: '8px 16px',
        background: 'transparent',
        color: '#ffffff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
    } as React.CSSProperties;
    
    return (
        <nav style={navStyle}>
            <h1 style={logoStyle} onClick={() => navigate('/')}>TaskFlow</h1>
            <div style={navLinksStyle}>
                <button
                    style={navButtonStyle}
                    onClick={() => navigate('/')}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                    }}
                >
                    Home
                </button>
                <button
                    style={navButtonStyle}
                    onClick={() => navigate('/about')}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                    }}
                >
                    About
                </button>
                <button
                    style={navButtonStyle}
                    onClick={() => navigate('/services')}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                    }}
                >
                    Services
                </button>
                <button
                    style={navButtonStyle}
                    onClick={() => navigate('/contact')}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                    }}
                >
                    Contact
                </button>
            </div>
        </nav>
    );
} 