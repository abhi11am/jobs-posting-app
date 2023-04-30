import Card from 'components/Card'
import Loader from 'components/Loader'
import PageTitle from 'components/PageTitle'
import MasterLayout from 'components/layout/MasterLayout'
import React, { useEffect, useState } from 'react'
import { useGetJobApplicationByIdQuery, useGetJobApplicationsQuery } from 'store/apis/admin/job-application'

const JobAppDetail = ({ id }) => {
  const { data, isLoading, isFetching } = useGetJobApplicationByIdQuery(id);

  if (!id || isLoading || isFetching || !data) return <Loader />

  return (
    <Card className="">
      <div className="text-lg font-medium mb-1">{data.user.name}</div>
    </Card>  
  )
}

const JobAppListItem = ({ data, jobAppDetailId, handleViewJobAppDetail }) => {
  return (
    <Card
      className={`text-gray-800 cursor-pointer ${jobAppDetailId === data.id ? 'outline outline-2 outline-primary-600' : ''}`}
      onClick={() => handleViewJobAppDetail(data.id)}
    >
      <div className="text-lg font-medium mb-1">{data.user.name}</div>
    </Card>
  )
}

const JobApplicationList = ({ jobApps, jobAppDetailId, handleViewJobAppDetail, isLoading }) => {
  if (isLoading) return <Loader />

  if (!isLoading && !jobApps) return (
    <div className="flex items-center justify-center">No data found</div>
  )

  return (
    <div className="space-y-2">
      {jobApps.map((jobApp) => (
        <JobAppListItem
          key={jobApp.id}
          jobAppDetailId={jobAppDetailId}
          handleViewJobAppDetail={handleViewJobAppDetail}
          data={jobApp}
        />
      ))}
    </div>
  )
}

const ViewJobApplication = () => {
  const { data: jobApps, isLoading, isFetching } = useGetJobApplicationsQuery();
  const [jobAppDetailId, setJobAppDetailId] = useState(null);

  useEffect(() => {
    if (jobApps) setJobAppDetailId(jobApps[0].id);
  }, [jobApps]);

  const handleViewJobAppDetail = (id) => {
    setJobAppDetailId(id);
  }

  return (
    <MasterLayout>
      <div className="flex items-center justify-between mb-8">
        <PageTitle>View Job Application</PageTitle>
      </div>

      <div className="flex space-x-2">
        <div className="w-1/2">
          <JobApplicationList
            jobApps={jobApps}
            jobAppDetailId={jobAppDetailId}
            handleViewJobAppDetail={handleViewJobAppDetail}
            isLoading={isLoading || isFetching}
          />
        </div>
        <div className="w-1/2">
          {jobAppDetailId ? <JobAppDetail id={jobAppDetailId} /> : <Loader />}
        </div>
      </div>
    </MasterLayout>
  )
}

export default ViewJobApplication
