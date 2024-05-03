import { useSetAtom } from "jotai";
import CommonBtn from "./CommonBtn";
import {
  deleteFormValuesAtom,
  formValuesAtom,
  showFormAtom,
} from "../store/board";

const CommonCard = (props) => {
  const { title, description, id } = props;
  const deleteTask = useSetAtom(deleteFormValuesAtom);
  const showForm = useSetAtom(showFormAtom);
  const setFormValues = useSetAtom(formValuesAtom);
  return (
    <>
      <div
        key={id}
        className="shadow-lg bg-white rounded-md m-2 p-2 mt-5 max-w-[600px] cursor-grab"
      >
        <div className="">
          <h1 className="text-3xl font-medium text-black w-[95%] overflow-hidden overflow-ellipsis">
            {title}
          </h1>
          <p className="text-2xl font-normal text-gray-900/50 w-[95%] h-[70px] overflow-hidden overflow-ellipsis">
            {description}
          </p>
        </div>
        <div className="flex justify-end gap-6 mt-5">
          <CommonBtn
            buttonName={`Edit 📝`}
            buttonOnClick={() => {
              setFormValues({ ...props, isEdit: true });
              showForm(true);
            }}
          />
          <CommonBtn
            buttonName={"Delete 🗑️"}
            buttonOnClick={() => {
              deleteTask(id);
            }}
          />
        </div>
      </div>
      {/* )}
      </Draggable> */}
    </>
  );
};

export default CommonCard;
