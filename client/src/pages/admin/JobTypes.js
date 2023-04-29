import MasterList from 'components/MasterList';
import PageTitle from 'components/PageTitle';
import Button from 'components/form/Button';
import MasterLayout from 'components/layout/MasterLayout'
import React from 'react'

const JobTypes = () => {
  const items = ["Full-time", "Part-time", "Temporary", "Contract", "Freelance"];

  return (
    <MasterLayout>
      <div className="flex items-center justify-between mb-8">
        <PageTitle>Job Types</PageTitle>
        <Button type="button">
          Add New Type
        </Button>
      </div>

      <div className="">
        <MasterList items={items} />
      </div>
    </MasterLayout>
  )
}

export default JobTypes
