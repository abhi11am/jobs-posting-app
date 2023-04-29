import React from 'react'

const ListActionButton = ({ children, className = "", ...props }) => {
  return (
    <button type="button" className={`text-sm font-medium ${className}`} {...props}>
      {children}
    </button>
  )
}

const ListItem = ({ item }) => {
  return (
    <div className="group bg-white text-gray-800 p-4 flex items-center justify-between first:rounded-t-lg last:rounded-b-lg">
      <div>{item}</div>
      <div className="hidden group-hover:flex items-center justify-center space-x-4">
        <ListActionButton className="text-primary-600 hover:text-primary-800">Edit</ListActionButton>
        <ListActionButton className="text-red-600 hover:text-red-800">Delete</ListActionButton>
      </div>
    </div>
  )
}

const MasterList = ({ items }) => {
  return (
    <div className="space-y-[1px]">
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  )
}

export default MasterList
