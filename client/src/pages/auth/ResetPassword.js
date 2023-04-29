import CustomLink from 'components/CustomLink'
import Button from 'components/form/Button'
import Input from 'components/form/Input'
import InputLabel from 'components/form/InputLabel'
import React from 'react'

const ResetPassword = () => {
  return (
    <div class="flex items-center justify-center min-h-screen py-8">
      <div className="w-full sm:max-w-md">
        <div class="text-center mb-6 text-2xl font-semibold text-gray-900">
          Jobs Posting App
        </div>
        <div class="w-full bg-white rounded-lg shadow md:mt-0 xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Change Password
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <InputLabel>Password</InputLabel>
                <Input type="password" name="password" id="password" placeholder="••••••••" required />
              </div>
              <div>
                <InputLabel>Confirm Password</InputLabel>
                <Input type="password" name="confirm password" id="confirm password" placeholder="••••••••" required />
              </div>
              <Button type="submit" className="w-full">Reset password</Button>
              <p class="text-sm font-light text-gray-500">
                Return back to <CustomLink to="/login">Login</CustomLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
