import { useRef, useState } from "react";

// TODO: getData to withEntry second argument (form action?)

export const withEntry = (BaseComponent) => {
  return (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const passwordRef = useRef(null);

    const togglePasswordVisibility = () => {
      passwordRef.current.type = isVisible ? "password" : "text";
      setIsVisible(() => !isVisible);
    };

    return (
      <BaseComponent
        {...props}
        isVisible={isVisible}
        passwordRef={passwordRef}
        togglePasswordVisibility={togglePasswordVisibility}
      />
    );
  };
};