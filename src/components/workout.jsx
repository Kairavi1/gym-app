import React from 'react'
import Sectionwrapper from './sectionwrapper'
import ExerciseCard from './exercisecard'

export default function Workout(props) {
  const {workout} = props
  return (
    <Sectionwrapper id={'workout'} header title={['Workout']}>

        <div className="flex flex-col gap-4">
          {workout.map((exercise, i) => {
            return(
              <ExerciseCard i={i} exercise={exercise} key={i} />
            )
          })}
          
        </div>
      </Sectionwrapper>
  )
}
