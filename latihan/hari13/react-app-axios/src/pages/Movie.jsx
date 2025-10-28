import { useState } from "react";
import { CRUDAxios } from "./CRUDAxios";
import { FormInput } from "./FormInput";

export const Movie = () => {
  const [fetch, setFetch] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  return (
    <>
      <div className="conatainer_root flex gap-3">
          <FormInput
            setFetch={setFetch}
            fetch={fetch}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
          />
          <CRUDAxios fetch={fetch} setDataUpdate={setDataUpdate} />
        </div>
    </>
  );
};
