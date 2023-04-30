import { Field } from 'formik'
import React from 'react'

const FormikSelect = ({ className = "", children, ...props }) => {
  return (
    <Field as="select" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 ${className}`} {...props}>
      {children}
    </Field>
  )
}

export default FormikSelect
