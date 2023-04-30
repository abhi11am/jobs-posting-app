import React from 'react'
import { Formik, Form, Field } from 'formik';

const ListActionButton = ({ children, className = "", ...props }) => {
  return (
    <button type="button" className={`text-sm font-medium ${className}`} {...props}>
      {children}
    </button>
  )
}

const ListItem = ({ item, handleDelete }) => {
  return (
    <div className="group bg-white text-gray-800 p-4 flex items-center justify-between first:rounded-t-lg last:rounded-b-lg">
      <div>{item.name}</div>
      <div className="hidden group-hover:flex items-center justify-center space-x-4">
        <ListActionButton className="text-primary-600 hover:text-primary-800">Edit</ListActionButton>
        <ListActionButton className="text-red-600 hover:text-red-800" onClick={() => handleDelete(item.id)}>Delete</ListActionButton>
      </div>
    </div>
  )
}

const EditListItem = ({ item }) => {
  return (
    <Formik
      initialValues={{ name: item.name }}
      onSubmit={(values) => handleSaveClick(item.id, values)}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <div className="group bg-white text-gray-800 p-4 flex items-center justify-between first:rounded-t-lg last:rounded-b-lg">
            <div>{item.name}</div>
            <div className="hidden group-hover:flex items-center justify-center space-x-4">
              <ListActionButton className="text-primary-600 hover:text-primary-800">Edit</ListActionButton>
              <ListActionButton className="text-red-600 hover:text-red-800" onClick={() => handleDelete(item.id)}>Delete</ListActionButton>
            </div>
          </div>
        <Form>
      )}
    </Formik>
  )
}

const MasterList = ({ items, handleCreate, handleUpdate, handleDelete }) => {
  const [isEditingItem, setIsEditingItem] = useState(false);



  return (
    <div className="space-y-[1px]">
      {items.length
        ? items.map((item) => (
            <ListItem 
              key={item.id} 
              item={item} 
              handleDelete={handleDelete} 
            />
          ))
        : <div className="flex items-center justify-center">No data found</div>
      }
    </div>
  )
}

export default MasterList
