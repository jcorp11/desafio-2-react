import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const SocialButton = ({ faFacebook, faGithub, faLinkedinIn }) => {
  return (
    <div className="social-container mt-3" style={styles.socialContainer}>
      <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
      <FontAwesomeIcon icon={faGithub} style={styles.icon} />
      <FontAwesomeIcon icon={faLinkedinIn} style={styles.icon} />
    </div>
  );
};

const styles = {
  socialContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  icon: {
    fontSize: "2rem",
    padding: "15px",
    borderRadius: "50%",
    border: "1px solid #000000",
    color: "#000000",
  },
};

export default SocialButton;
