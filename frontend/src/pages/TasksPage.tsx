// import React from 'react'
import FilterDropdown from '../components/DateFilter'
import UserInfo from '../components/UserInfo'
// import TaskCard from '../components/TaskCard'

export const TasksPage = () => {
  return (
    <div className='p-10'>
        <div className="flex justify-between">
            <UserInfo/>
            <FilterDropdown/>
          </div>
          <div>
            {/* <TaskCard/> */}
          </div>
    </div>
  )
}
