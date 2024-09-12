"use client"
import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {useFormikContext,useField} from 'formik';
const DatePickerComponent = ({...props})=>{
    const {setFieldValue}= useFormikContext();
    const [field] = useField(props)
    return(
        <DatePicker {...field} {...props} 
            id={"dob"}
            selected={(field.value && new Date(field.value)) || null}
            placeholderText={"DD / MM / YYYY"}
            dateFormat="dd-MM-yyyy"
            showYearDropdown
            showMonthDropdown
            dropdownMode="select"
      
            onChange={val=>{
                setFieldValue(field.name,val)
            }
            } 
        >

            </DatePicker>
    )
}

export default DatePickerComponent