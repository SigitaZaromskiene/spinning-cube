function SpinningBtn(props) {
  return (
    <div>
      <button
        style={{
          animation: "App-logo-spin infinite 20s linear",
          marginBottom: "60px",
        }}
        className={props.cl}
      >
        Spinning button
      </button>
    </div>
  );
}

export default SpinningBtn;
