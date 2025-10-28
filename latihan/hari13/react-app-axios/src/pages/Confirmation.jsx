export const Confirmation = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;
  console.log("isOpen");
    console.log(isOpen);
  return (
    <>
      <div className=" modal-bottom sm:modal-middle">
        <div className="">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Apakah anda yakin ?</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={onConfirm}>
                Yes
              </button>
              <button className="btn" onClick={onCancel}>
                Cancle
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
