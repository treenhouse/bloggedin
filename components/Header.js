import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div style="align-self: stretch; justify-content: center; align-items: center; gap: 163px; display: inline-flex">
                <div className={styles.logo}>BloggedIn</div>
                <div style="justify-content: flex-start; align-items: center; gap: 52px; display: flex">
                    <div style="justify-content: center; align-items: center; gap: 80px; display: flex">
                        <div style="justify-content: center; align-items: center; gap: 86px; display: flex">
                            <div style="width: 105px; height: 20px; color: black; font-size: 24px; font-family: ITC Cheltenham Std; font-weight: 400; word-wrap: break-word">Trending</div>
                            <div style="width: 60px; height: 20px; color: black; font-size: 24px; font-family: ITC Cheltenham Std; font-weight: 400; word-wrap: break-word">Local</div>
                            <div style="width: 111px; height: 20px; color: black; font-size: 24px; font-family: ITC Cheltenham Std; font-weight: 400; word-wrap: break-word">Following</div>
                        </div>
                        <div style="justify-content: flex-start; align-items: flex-start; gap: 11px; display: flex">
                            <div style="width: 323px; height: 29px; background: #F6F6F6; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25) inset"></div>
                            <img style="width: 27.01px; height: 30.28px" src="https://via.placeholder.com/27x30"/> 
                        </div>
                    </div>
                    <img style="width: 27px; height: 24.43px" src="https://via.placeholder.com/27x24"/>
                </div>
            </div>
        </header>
    )
}

export default Header