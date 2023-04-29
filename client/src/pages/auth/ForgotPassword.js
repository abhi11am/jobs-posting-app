import CustomLink from 'components/CustomLink'
import Button from 'components/form/Button'
import Input from 'components/form/Input'
import InputLabel from 'components/form/InputLabel'
import React from 'react'

const ForgotPassword = () => {
  return (
    <div class="flex items-center justify-center min-h-screen py-8">
      <div className="w-full sm:max-w-md">
        <div class="text-center mb-6 text-2xl font-semibold text-gray-900">
          Jobs Posting App
        </div>
        <div class="w-full bg-white rounded-lg shadow md:mt-0 xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Reset Password
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <InputLabel for="email">Email</InputLabel>
                <Input type="email" name="email" id="email" placeholder="example@domain.com" required />
              </div>
              <Button type="submit" className="w-full">Send reset password email</Button>
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

export default ForgotPassword
