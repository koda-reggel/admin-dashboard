'use client'

import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { RootState } from '@/store'
import { Button, Input } from '@nextui-org/react'
import { counterActions } from '../_redux/counter-slice'

export default function Form() {
  const dispatch = useAppDispatch()

  const state = useAppSelector((state: RootState) => state.counterState)

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button onPress={() => dispatch(counterActions.plusButtonPressed())}>
          +
        </Button>
        {state.count}
        <Button onPress={() => dispatch(counterActions.minusButtonPressed())}>
          -
        </Button>
      </div>
      <Input
        label='First Name'
        value={state.firstName}
        onChange={(e) =>
          dispatch(counterActions.firstNameChanged(e.target.value))
        }
      />
      {state.firstName}
    </div>
  )
}
