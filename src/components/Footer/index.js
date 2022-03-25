import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="img-link">
        <a href="https://www.linkedin.com/in/grant-strehlow-54206b22a/">
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="LinkedIn"
            className="icon"
          />
        </a>
        <a href="https://github.com/gstrehlow">
          <img
            src="https://img.icons8.com/color/48/000000/github-2.png"
            alt="Github"
            className="icon"
          />
        </a>
        <a href="mailto:gdstrehlow@outlook.com">
          <img
            src="https://img.icons8.com/color/48/000000/mailbox-closed-flag-down--v1.png"
            alt="Mail"
            className="icon"
          />
        </a>
      </div>
      <div className="footer-content">&copy;2022 by Grant Strehlow</div>
    </footer>
  );
}
