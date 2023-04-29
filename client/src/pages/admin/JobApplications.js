import Card from 'components/Card'
import CustomLink from 'components/CustomLink'
import PageTitle from 'components/PageTitle'
import MasterLayout from 'components/layout/MasterLayout'
import React from 'react'

const JobApplicationItem = () => {
  return (
    <CustomLink to="/admin/job-applications/view" className="block text-gray-800 no-underline hover:no-underline">
      <Card>
        <div className="">Candidate: Abhishek Mankar</div>
        <div className="">Job: ReactJS Developer</div>
      </Card>
    </CustomLink>
  )
}

const JobApplications = () => {
  return (
    <MasterLayout>
      <div className="flex items-center justify-between mb-8">
        <PageTitle>Job Applications</PageTitle>
      </div>

      <div className="space-y-2">
        <JobApplicationItem />
        <JobApplicationItem />
        <JobApplicationItem />
        <JobApplicationItem />
      </div>
    </MasterLayout>
  )
}

export default JobApplications
