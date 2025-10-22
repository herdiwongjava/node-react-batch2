export const Input = (props) => {
  return (
    <>
    <div className="container_input">
        <input type="checkbox" />
        <span>{props.todo}</span>
    </div>
    </>
  );
};
