import styles from './Header.module.css'



const Header = () =>{
    return(
        <div className={styles.header}>
            <img className={styles.image} src='https://www.alasala-united.com/wp-content/uploads/2020/03/instagram-icon-white-png-4.png' />
        </div>
    )
}
export default Header;