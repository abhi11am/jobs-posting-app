import MasterList from 'components/MasterList'
import PageTitle from 'components/PageTitle'
import Button from 'components/form/Button'
import MasterLayout from 'components/layout/MasterLayout'
import React from 'react'

const JobCategories = () => {
  const items = ["Human Resources", "Sales", "Management", "Marketing", "Engineer", "Computer Programmer", "Electrician"];

  return (
    <MasterLayout>
      <div className="flex items-center justify-between mb-8">
        <PageTitle>Job Categories</PageTitle>
        <Button type="button">
          Add New Category
        </Button>
      </div>
      
      <div className="">
        <MasterList items={items} />
      </div>
    </MasterLayout>
  )
}

export default JobCategories
