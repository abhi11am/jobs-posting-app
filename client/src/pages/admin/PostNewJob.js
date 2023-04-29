import Card from 'components/Card'
import PageTitle from 'components/PageTitle'
import Button from 'components/form/Button'
import Input from 'components/form/Input'
import InputLabel from 'components/form/InputLabel'
import MasterLayout from 'components/layout/MasterLayout'
import React from 'react'

const PostNewJob = () => {
  return (
    <MasterLayout>
      <div className="flex items-center justify-between mb-8">
        <PageTitle>Post New Job</PageTitle>
      </div>
      
      <Card>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <InputLabel for="title">Job Title</InputLabel>
            <Input type="text" name="title" id="title" placeholder="e.g. ReactJS Developer" required />
          </div>

          <div>
            <InputLabel for="company-name">Company Name</InputLabel>
            <Input type="text" name="company-name" id="company-name" placeholder="XYZ Technologies" required />
          </div>

          <div>
            <InputLabel for="tags">Tags</InputLabel>
            <Input type="text" name="tags" id="tags" placeholder="" required />
          </div>

          <div>
            <InputLabel for="skills">Skills Required</InputLabel>
            <Input type="text" name="skills" id="skills" placeholder="" required />
          </div>

          <div>
            <InputLabel for="experience-required">Experience Required</InputLabel>
            <Input type="text" name="experience-required" id="experience-required" placeholder="" required />
          </div>

          <div>
            <InputLabel for="description">Description</InputLabel>
            <Input type="text" name="description" id="description" placeholder="" />
          </div>

          <div>
            <InputLabel for="salary">Salary</InputLabel>
            <Input type="text" name="salary" id="salary" placeholder="" />
          </div>

          <div>
            <InputLabel for="category">Category</InputLabel>
            <Input type="text" name="category" id="category" placeholder="" />
          </div>

          <div>
            <InputLabel for="type">Type</InputLabel>
            <Input type="text" name="type" id="type" placeholder="" />
          </div>

          <div>
            <InputLabel for="additional-details">Additional Details</InputLabel>
            <Input type="text" name="additional-details" id="additional-details" placeholder="" />
          </div>

          <Button type="submit">Submit Job Post</Button>
        </form>
      </Card>
    </MasterLayout>
  )
}

export default PostNewJob
