import { useEffect, useState } from "react"

export const useFormulario = () => {

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [observation, setObservation] = useState("");
    const [entryDate, setEntryDate] = useState("");             ////

    const [codeError, setCodeError] = useState<null | string>(null);
    const [nameError, setNameError] = useState<null | string>(null);
    const [quantityError, setQuantityError] = useState<null | string>(null);
    const [categoryError, setCategoryError] = useState("");
    const [unitPriceError, setUnitPriceError] = useState<null | string>(null);
    const [observationError, setObservationError] = useState<null | string>(null);
    const [entryDateError, setEntryDateError] = useState<null | string>(null);      ////

    //tienen que ir otras validaciones de errores
    const buttonDisable = (code == "" || codeError)
 
    const changeCode = (value: string) => {

        if(value.length > 10){
            setCodeError("Error, el codigo no puede tener mas de 10 caracteres");
            setCode(value);
            return
        }

        //busqueda por el arreglo
        setCodeError(null);         //si todos los filtros pasan pues quitar el error
        setCode(value);
    }

    const changeName = (value: string) => {

        //las validaciones de que no vaya vacio se hacen en el boton

        setName(value);
    }

    const changeQuantity = (value: string) => {

        if(value == '.' || value == ","){
            return;
        }

        if(value[0] == '-' && value.length > 1){
            setQuantityError("No se permiten valores negativos")
            return;
        }

        setQuantityError(null);         //si todos los filtros pasan pues quitar el error
        setQuantity(value);
    }

    const changeUnitPrice = (value: string) => {
        if(value == ","){
            return;
        }

        setUnitPrice(value);
    }

    const changeObservation = (value: string) => {
        setObservation(value);

    }

    const changeCategory = (value: string) => {
        setCategory(value);
    }

    const changeEntryDate = (value: string) => {                ////
        setEntryDate(value);
    }

    return {
        buttonDisable,
        code,
        name,
        quantity,
        unitPrice,
        observation,
        entryDate,
        category,

        codeError,
        nameError,
        quantityError,
        unitPriceError,
        observationError,
        entryDateError,
        categoryError,

        changeCode,
        changeName,
        changeQuantity,
        changeUnitPrice,
        changeObservation,
        changeEntryDate,
        changeCategory
    }

}