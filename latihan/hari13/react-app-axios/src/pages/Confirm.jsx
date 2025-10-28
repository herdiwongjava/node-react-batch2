export const Confirm = ({ idGet, nameGet = "none", action ,text}) => {
    return (
    <>
      {/* The button to open modal */}
      {/* <label htmlFor="my_modal_6" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">🚧 Attentions</h3>
          <p className="py-4">😒 Yakin ingin {text} ini?</p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn" onClick={() => action(idGet, nameGet)}>
              Yes
            </label>
            <label htmlFor="my_modal_6" className="btn">
              Cencel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
