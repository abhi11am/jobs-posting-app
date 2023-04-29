import CustomLink from 'components/CustomLink'
import Button from 'components/form/Button'
import Input from 'components/form/Input'
import InputLabel from 'components/form/InputLabel'
import Select from 'components/form/Select'
import React from 'react'

const Register = () => {
  return (
    <div class="flex items-center justify-center min-h-screen py-8">
      <div className="w-full sm:max-w-md">
        <div class="text-center mb-6 text-2xl font-semibold text-gray-900">
          Jobs Posting App
        </div>
        <div class="w-full bg-white rounded-lg shadow md:mt-0 xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <InputLabel for="name">Full Name</InputLabel>
                <Input type="text" name="name" id="name" placeholder="John Doe" required />
              </div>
              <div>
                <InputLabel for="email">Email</InputLabel>
                <Input type="email" name="email" id="email" placeholder="example@domain.com" required />
              </div>
              <div>
                <InputLabel>Password</InputLabel>
                <Input type="password" name="password" id="password" placeholder="••••••••" required />
              </div>
              <div>
                <InputLabel>Confirm Password</InputLabel>
                <Input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" required />
              </div>
              <div>
                <InputLabel for="role">Select Your Role</InputLabel>
                <Select name="role" id="role">
                  <option value="">Admin</option>
                  <option value="">Candidate</option>
                </Select>
              </div>
              <Button type="submit" className="w-full">Create an account</Button>
              <p class="text-sm font-light text-gray-500">
                Already have an account? <CustomLink to="/login">Login here</CustomLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
