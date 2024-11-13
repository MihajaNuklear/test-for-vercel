const IconOpenWhite: React.FC<{ width?: string; height?: string }> = ({
  width = '26px',
  height = '26px',
}) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 38 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="38" height="6" rx="3" fill="white" />
        <rect y="10" width="38" height="6" rx="3" fill="white" />
        <rect y="20" width="38" height="6" rx="3" fill="white" />
      </svg>
    </div>
  );
};

export default IconOpenWhite;
