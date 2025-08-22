'use client'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/features/slice'
import type { RootState } from '../store/store'

export default function Counter() {
	const count = useSelector((state: RootState) => state.counter.value)
	const dispatch = useDispatch()
	return (
		<div>
			<button
				aria-label='Increment value'
				onClick={() => dispatch(increment())}>
				Increment
			</button>
			<span>{count}</span>
			<button
				aria-label='Decrement value'
				onClick={() => dispatch(decrement())}>
				Decrement
			</button>
		</div>
	)
}
