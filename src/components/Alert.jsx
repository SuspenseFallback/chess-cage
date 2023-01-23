import "../css/components/Alert.css";

import {
  faCheck,
  faEllipsisH,
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Alert = ({ type, onClose, title, message }) => {
  const [show, setShow] = React.useState("show");
  const [icon, setIcon] = React.useState(null);

  useEffect(() => {
    let iconF;
    switch (type) {
      case "success":
        iconF = faCheck;
        break;
      case "warning":
        iconF = faExclamationTriangle;
        break;
      case "error":
        iconF = faExclamationCircle;
        break;
      case "info":
        iconF = faInfoCircle;
        break;
      case "critical":
        iconF = faSkullCrossbones;
        break;
    }
    setIcon(iconF);
  }, []);

  function close() {
    setShow("hide");
    onClose();
  }

  return (
    <div className={`alert ${type} ${show}`}>
      <div className="alert-content">
        <div className="alert-icon">
          <FontAwesomeIcon
            icon={icon === null ? faEllipsisH : icon}
            beat={icon === null ? "true" : "false"}
          />
        </div>
        <div className="alert-text">
          <p>
            <strong>{title}</strong> {message}
            <span onClick={close}>&times;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
