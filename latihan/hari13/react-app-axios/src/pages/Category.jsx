import { useState } from "react";
import { FormInputCat } from "./FormInputCat";
import { CRUDCat } from "./CRUDCat";


export const Category = () => {
  const [fetch, setFetch] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  return (
    <>
      <div className="conatainer_root flex gap-20">
          <FormInputCat
            setFetch={setFetch}
            fetch={fetch}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
          />
          <CRUDCat fetch={fetch} setDataUpdate={setDataUpdate} />
        </div>
    </>
  );
};
