function Square(props) {
  return (
    <div
      className="sq"
      style={{
        backgroundColor: props.color.color,
        fontSize: "42px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: props.rotateIndex % 2 === 0 ? "rotate(20deg)" : null,
      }}
    >
      {props.index}
    </div>
  );
}

export default Square;
