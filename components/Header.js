import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div style={{ alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: '163px', display: 'inline-flex' }}>
                <div className={styles.logo}>BloggedIn</div>
                <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: '52px', display: 'flex' }}>
                    <div style={{ justifyContent: 'center', alignItems: 'center', gap: '80px', display: 'flex' }}>
                        <div style={{ justifyContent: 'center', alignItems: 'center', gap: '86px', display: 'flex' }}>
                            <div style={{ width: '105px', height: '20px', color: 'black', fontSize: '24px', fontFamily: 'ITC Cheltenham Std', fontWeight: 400, wordWrap: 'break-word' }}>
                                Trending
                            </div>
                            <div style={{ width: '60px', height: '20px', color: 'black', fontSize: '24px', fontFamily: 'ITC Cheltenham Std', fontWeight: 400, wordWrap: 'break-word' }}>
                                Local
                            </div>
                            <div style={{ width: '111px', height: '20px', color: 'black', fontSize: '24px', fontFamily: 'ITC Cheltenham Std', fontWeight: 400, wordWrap: 'break-word' }}>
                                Following
                            </div>
                        </div>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: '11px', display: 'flex' }}>
                            <div style={{ width: '323px', height: '29px', background: '#F6F6F6', boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.25) inset' }}></div>
                            <img style={{ width: '27.01px', height: '30.28px' }} src="public/Search.svg" alt="Search icon" />
                        </div>
                    </div>
                    <img style={{ width: '27px', height: '24.43px' }} src="public/Directory.svg" alt="Directory icon" />
                </div>
            </div>
        </header>
    );
}

export default Header;
