import { useRef, useState } from "react";

import VisibilityOff from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOn from "@mui/icons-material/VisibilityOutlined";

// TODO: getData to withEntry second argument (form action?)

export const withEntry = (BaseComponent) => {
  return (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const passwordRef = useRef(null);
    const passwordIcon = isVisible ? <VisibilityOn fontSize="small" /> : <VisibilityOff fontSize="small" />;

    const togglePasswordVisibility = () => {
      passwordRef.current.type = isVisible ? "password" : "text";
      setIsVisible(() => !isVisible);
    };

    return (
      <BaseComponent
        {...props}
        passwordRef={passwordRef}
        togglePasswordVisibility={togglePasswordVisibility}
        passwordIcon={passwordIcon}
      />
    );
  };
};