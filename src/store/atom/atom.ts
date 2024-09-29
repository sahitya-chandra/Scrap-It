import { atom } from 'recoil'

export const currentQueryAtom = atom({
    key: "currentQueryAtom",
    default: "" 
})

export const currentDataAtom = atom({
    key: 'currentDataAtom',
    default: {
        children: []
    }
})