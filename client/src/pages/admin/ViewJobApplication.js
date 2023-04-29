import Card from 'components/Card'
import PageTitle from 'components/PageTitle'
import MasterLayout from 'components/layout/MasterLayout'
import React from 'react'

const ViewJobApplication = () => {
  return (
    <MasterLayout>
      <div className="flex items-center justify-between mb-8">
        <PageTitle>View Job Application</PageTitle>
      </div>

      <Card>
        <div className="">
          Candidate: Abhishek Mankar
        </div>
        <div className="">
          Job: ReactJS Developer
        </div>
        <div className="">
          Cover Letter: Sample cover letter
        </div>
        <div className="">
          Expected Salary: 12-15 Lakhs per year
        </div>
        
      </Card>
    </MasterLayout>
  )
}

export default ViewJobApplication
