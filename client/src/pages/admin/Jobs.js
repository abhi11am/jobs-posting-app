import Card from 'components/Card'
import CustomLink from 'components/CustomLink'
import PageTitle from 'components/PageTitle'
import Button from 'components/form/Button'
import MasterLayout from 'components/layout/MasterLayout'
import React from 'react'

const JobListItem = () => {
  return (
    <CustomLink to="/admin/jobs/view" className="block text-gray-800 no-underline hover:no-underline">
      <Card>
        <div className="text-lg font-medium">ReactJS Developer</div>
        <div className="">ABC Technologies</div>
        <div className="">15 - 20 Lakhs / Year</div>
      </Card>
    </CustomLink>
  )
}

const Jobs = () => {
  return (
    <MasterLayout>
      <div className="flex items-center justify-between mb-8">
        <PageTitle>All Jobs</PageTitle>
        <CustomLink to="/admin/jobs/create">
          <Button type="button">Post New Job</Button>
        </CustomLink>
      </div>

      <div className="space-y-2">
        <JobListItem />
        <JobListItem />
        <JobListItem />
        <JobListItem />
      </div>
    </MasterLayout>
  )
}

export default Jobs
