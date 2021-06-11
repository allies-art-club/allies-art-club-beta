import React from 'react';
import DatePicker from 'react-datepicker';
import {useFormikContext,useField} from 'formik';
const DatePickerComponent = ({...props})=>{
    const {setFieldValue}= useFormikContext();
    const [field] = useField(props)
    return(
        <DatePicker {...field} {...props} 
            selected={(field.value && new Date(field.value)) || null}
            onChange={val=>{
                console.log(val);
                console.log(field.name);
                console.log(props)
                setFieldValue(field.name,val)
            }
            } 
        >

            </DatePicker>
    )
}

export default DatePickerComponent