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
      }}
    >
      {props.index}
    </div>
  );
}

export default Square;
