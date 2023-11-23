import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({ icons }) => {
  console.log(icons);
  return (
    <div className="social-container mt-3" style={styles.socialContainer}>
      {icons.map((icon, index) => (
        <FontAwesomeIcon key={index} icon={icon} style={styles.icon} />
      ))}
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
    cursor: "pointer",
  },
};

export default SocialButton;
