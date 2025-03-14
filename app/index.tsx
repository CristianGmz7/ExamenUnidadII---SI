import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
// import { Formik, useFormik } from "formik";
import { useFormulario } from "@/presentation/hooks/useFormulario";
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";

const index = () => {
  const {
    buttonDisable,
    code,
    name,
    entryDate,
    observation,
    quantity,
    unitPrice,
    codeError,
    category,
    entryDateError,
    nameError,
    observationError,
    quantityError,
    unitPriceError,
    categoryError,
    changeCode,
    changeEntryDate,
    changeName,
    changeObservation,
    changeQuantity,
    changeUnitPrice,
    changeCategory,
  } = useFormulario();

  const onPress = () => {

    //hacer validacion acerca de si alguno es diferente de null tirar error como modal
    console.log("click sobre boton")
  }

  console.log({entryDate});

  //estado para mostrar o no el calenddario
  const [showDate, setShowDate] = useState(false);

  return (
    <ScrollView>
      <Text className="text-3xl text-green-700 mb-2">
        Sistema Gestion de Inventario
      </Text>

      <Text className="mb-2 mt-4">Codigo del producto:</Text>
      <TextInput
        className={`bg-gray-200 ${codeError ? "bg-red-400" : ""}`}
        onChangeText={changeCode}
        placeholder="Ingrese el codigo"
        value={code}
      />
      {
        codeError && <Text className="mt-2 color-red-400">{codeError}</Text>
      }

      <Text className="mb-2 mt-4">Nombre del producto:</Text>
      <TextInput
        className="bg-gray-200"
        onChangeText={changeName}
        placeholder="Ingrese el nombre"
        value={name}
      />
      {
        nameError && <Text className="mt-2 color-red-400">{codeError}</Text>
      }

      <Text className="mb-2 mt-4">Categoria:</Text>
      <RNPickerSelect 
        items={[
          {label: 'Comida', value: 'Comida'},
          {label: 'Limpieza', value: 'Limpieza'},
          {label: 'Tecnologia', value: 'Tecnologia'},
        ]}
        onValueChange={changeCategory}
        value={category}
      />
      {
        categoryError && <Text className="mt-2 color-red-400">{categoryError}</Text>
      }

      <Text className="mb-2 mt-4">Cantidad:</Text>
      <TextInput
        className="bg-gray-200"
        keyboardType="numeric"
        onChangeText={changeQuantity}
        placeholder="Ingrese la cantidad"
        value={quantity}
      />
      {
        quantityError && <Text className="mt-2 color-red-400">{quantityError}</Text>
      }

      <Text className="mb-2 mt-4">Precio Unitario:</Text>
      <TextInput
        className="bg-gray-200"
        keyboardType="numeric"
        onChangeText={changeUnitPrice}
        placeholder="Ingrese el precio unitario"
        value={unitPrice}
      />
      {
        unitPriceError && <Text className="mt-2 color-red-400">{unitPriceError}</Text>
      }

      <Text className="mb-2 mt-4">Fecha de ingreso:</Text>
      <Pressable className="bg-gray-200 mt-5  h-10" onPress={() => setShowDate(true)}>
        <Text>Seleccionar fecha</Text>
      </Pressable>
      {/* Por alguna razón solo funcionó una vez y cuando refresque el proyecto ya no servia */}
      {/* {
        showDate && (
          <DateTimePicker 
            value={new Date()}
            mode="date"
            display="default"
            onChange={(e, selectedDate) => {
              if(selectedDate){
                changeEntryDate(selectedDate.toString());
                setShowDate(false);
              }
            }}
          />
        )
      } */}

      <Text className="mb-2 mt-4">Observacion:</Text>
      <TextInput
        className="bg-gray-200"
        onChangeText={changeObservation}
        placeholder="Ingrese la obvervacion (opcional)"
        value={observation}
      />
      {
        observationError && <Text className="mt-2 color-red-400">{observationError}</Text>
      }

      <Pressable 
        className={`mt-5 bg-blue-300 w-14 h-10`} 
        onPress={onPress}
        disabled={false}
      >
        <Text>Enviar</Text>
      </Pressable>
    </ScrollView>
  );
};

export default index;
