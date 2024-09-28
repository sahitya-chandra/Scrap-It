import { atom } from 'recoil'

type FormDataValueType = FormDataEntryValue | null;

export const currentQueryAtom = atom<FormDataValueType>({
    key: "currentQueryAtom",
    default: "" 
})