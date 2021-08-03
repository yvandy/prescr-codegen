export interface StateItem {
    medicines: any,
    formValues?: any
}

export interface ActionItem {
    type: string,
    payload?: any
}

export interface FormItem {
    patientName: string,
    patientAge: number,
    patientID: string,
    date: any,
    medicine1: {
        name: string,
        dosage: number
    },
    medicine2: {
        name: string,
        dosage: number
    }
}

export interface MedicineItem {
    id: string,
    label: string,
    value: string
}