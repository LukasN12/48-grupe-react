import style from './Footer.module.css'

function Footer() {
    return (
        <footer className={style.mainFooter}>
        <a className={style.link} href="/">Terms of service</a>
        <p className={style.copyright}>Copyright &copy; 2024. LN + 48 grupe</p>
        </footer>
    );
}

export { Footer };