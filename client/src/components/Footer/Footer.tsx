import styles from "./Footer.module.scss";

function BlogList() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__copyright}>
        Copyright © {new Date().getFullYear()} WhoStoleMySleep
      </p>
    </footer>
  );
}

export default BlogList;
