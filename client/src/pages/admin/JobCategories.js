import MasterList from 'components/MasterList'
import PageTitle from 'components/PageTitle'
import Button from 'components/form/Button'
import MasterLayout from 'components/layout/MasterLayout'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useCreateCategoryMutation, useDeleteCategoryMutation, useGetCategoriesQuery, useUpdateCategoryMutation } from 'store/apis/job-categories'

const JobCategories = () => {
  // const items = ["Human Resources", "Sales", "Management", "Marketing", "Engineer", "Computer Programmer", "Electrician"];

  const { data, isLoading, isFetching } = useGetCategoriesQuery();
  const [categories, setCategories] = useState([]);
  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleCreate = async (name) => {
    await createCategory(name)
      .unwrap()
      .then((fulfilled) => {
        toast.success(fulfilled.status.message);
      })
      .catch((rejected) => {
        if (rejected.data) {
          toast.error(rejected.data.status.message);
        }
      });
  }

  const handleUpdate = async (id, name) => {
    await updateCategory({ id, name })
      .unwrap()
      .then((fulfilled) => {
        toast.success(fulfilled.status.message);
      })
      .catch((rejected) => {
        if (rejected.data) {
          toast.error(rejected.data.status.message);
        }
      });
  }

  const handleDelete = async (id) => {
    await deleteCategory(id)
      .unwrap()
      .then((fulfilled) => {
        toast.success(fulfilled.status.message);
      })
      .catch((rejected) => {
        if (rejected.data) {
          toast.error(rejected.data.status.message);
        }
      });
  }

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  return (
    <MasterLayout>
      <div className="flex items-center justify-between mb-8">
        <PageTitle>Job Categories</PageTitle>
        <Button type="button">
          Add New Category
        </Button>
      </div>
      
      <div className="">
        {categories && !isLoading && !isFetching 
          ? <MasterList 
              items={categories} 
              handleCreate={handleCreate}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          : <>Loading...</>}
      </div>
    </MasterLayout>
  )
}

export default JobCategories
