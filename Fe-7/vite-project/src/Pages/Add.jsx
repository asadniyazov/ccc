import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';

function Add() {

  return (
  <>
    <Formik
       initialValues={{ title: '', price: '', img: '' }}
       validationSchema={Yup.object({
         title: Yup.string()
           ,
         price: Yup.number(),
         img: Yup.string(),
       })}
       onSubmit={(values) => {
        fetch("http://localhost:3000/men",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(values)
})

       }}
     >
       <Form>
         <label style={{marginTop:"300px"}} htmlFor="title"> title</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
   <br></br>
         <label htmlFor="price">Price</label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />
 <br></br>
         <label htmlFor="img">img Address</label>
         <Field name="img" type="string" />
         <ErrorMessage name="img" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
  </>
  )
}

export default Add