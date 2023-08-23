const Spinner = ({ size = 150 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{margin: "auto", background: "rgba(255, 255, 255, 0)", display: "block", shapeRendering: "auto"}}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path d="M24 50A26 26 0 0 0 76 50A26 28.1 0 0 1 24 50" fill="#1b70f1" stroke="none">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.7042253521126761s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 51.05;360 50 51.05"
        ></animateTransform>
      </path>
    </svg>
  );
};

export default Spinner;