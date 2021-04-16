

import React, { FunctionComponent, StatelessComponent, ReactElement, useState, useContext, useEffect } from 'react'
import { SkeletonText, TagSkeleton } from 'carbon-components-react'
import { SkeletonAnswerProps } from './types'
import { ConfidenceBar } from '../answer-item/confidence-bar'

import './styles.scss'

export const SkeletonAnswerItem: FunctionComponent<SkeletonAnswerProps> = (props): ReactElement<HTMLDivElement> => {

// main component render
  return (
		<div className='answer-item'>
			<div className='answer-header'>
				<div className='title-section'>
					<SkeletonText width={'70%'} heading={true} />
					<SkeletonText width={'60%'} heading={false} />
				</div>
				<div className='confidence-section'>
					<p className='confidence-label'>confidence</p>
					<div className='confidence-bar-section'>
						<SkeletonText width={'5%'} heading={true} />
						<ConfidenceBar confidence={0}></ConfidenceBar>					
					</div>
				</div>
			</div>
			<div className='answer-text'>
				<SkeletonText width={'100%'} paragraph={true} lineCount={3} />
			</div>
		</div>





		// <div className='answer-item'>
		// 	<div className='answer-header'>
		// 		<div className='title-section'>
		// 			<SkeletonText width={'70%'} heading={true} />
		// 			<SkeletonText width={'60%'} heading={false} />
		// 		</div>
		// 		<div className='confidence-section'>
		// 			<div className='confidence-bar-section'>
		// 				<SkeletonText width={'5%'} heading={true} />
		// 				
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className='answer-text'>
		// 		<SkeletonText width={'100%'} paragraph={true} lineCount={3} />
		// 	</div>
		// </div>
  )
}



export const SkeletonAnswerGroup: StatelessComponent = () => {
  return (
		<div>
      <SkeletonAnswerItem />
      <SkeletonAnswerItem />
      <SkeletonAnswerItem />
		</div>
  )
}