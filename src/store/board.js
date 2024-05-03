import { atom } from "jotai";
import { v4 as uuid } from "uuid";

export const formEntriesAtom = atom([]);

export const addFormValues = atom(null, async function (get, set, formValues) {
  const { title = "", description = "", taskStatus = "" } = formValues;
  if (title?.length && description?.length && taskStatus?.length) {
    const currentFormEntries = get(formEntriesAtom);
    set(formEntriesAtom, [
      ...currentFormEntries,
      {
        id: uuid(),
        ...formValues,
      },
    ]);
    set(formValuesAtom, {
      title: "",
      description: "",
      taskStatus: "",
      isEdit: false,
    });
  }
});

export const deleteFormValuesAtom = atom(
  null,
  async function (get, set, idToBeDeleted) {
    const currentFormEntries = get(formEntriesAtom);
    const updatedFormEntries = currentFormEntries.filter(
      ({ id }) => id !== idToBeDeleted
    );
    set(formEntriesAtom, updatedFormEntries);
  }
);

export const updateFormValuesAtom = atom(
  null,
  async function (get, set, formValues) {
    const { title = "", description = "", id: idToBeUpdated = "" } = formValues;
    if (title?.length && description?.length && idToBeUpdated?.length) {
      const currentFormEntries = get(formEntriesAtom);
      const updatedFormEntries = currentFormEntries.map((datum) => {
        const { id } = datum;
        if (id === idToBeUpdated) {
          return {
            ...datum,
            ...formValues,
          };
        }
        //  else {
        //   return datum;
        // }
      });
      set(formEntriesAtom, updatedFormEntries);
    }
  }
);

export const showFormAtom = atom(false);

export const formValuesAtom = atom({
  title: "",
  description: "",
  taskStatus: "",
  isEdit: false,
});
