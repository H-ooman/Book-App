import styles from "./layout.module.css"

function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <h1>Book App</h1>
            <p>botostart | react.js full  Course</p>
        </header>
            {children}
        <footer className={styles.footer }>
            <p>Developed by Hooman sedaghat</p>
        </footer>
    </>
  )
}

export default Layout