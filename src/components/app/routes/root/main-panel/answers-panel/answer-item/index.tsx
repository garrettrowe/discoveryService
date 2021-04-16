

import React, { FunctionComponent, ReactElement, useContext } from 'react'
import { AnswerProps } from './types'
import { storeContext } from '../../../../../../../../src'
import { ActionTypes } from 'store/actions'

import { ConfidenceBar } from './confidence-bar'
import { FeedbackBar } from './feedback-bar'


import ClassSet from 'classnames'
import './styles.scss'

export const AnswerItem: FunctionComponent<AnswerProps> = (props): ReactElement<HTMLDivElement> => {

	const { answer, selected, originalQuery, index } = props
	const { dispatch } = useContext(storeContext)

	const answerClasses = ClassSet({
		'answer-item': true,
		'not-selected': selected && (selected !== answer) && !selected.documentLevelAnswer,
		'selected': selected && (selected === answer)
	})

	const onSelectAnswer = () => {
		let selection = answer
		if (selected === answer) {
			selection = null
		}
		dispatch({
			type: ActionTypes.SET_SELECTED_ANSWER,
			payload: { selectedAnswer: selection }
		})
	}

	// main component render
	return (
		<div className={answerClasses}>
			<div className='answer-header'>
				<div className='title-section' onClick={onSelectAnswer} title='Click to open the document'>
					<h3>{answer.title}</h3>
					<p className='doc-source'>{answer.file_title}</p>
				</div>
				<div className='confidence-section' onClick={onSelectAnswer}>
					<p className='confidence-label'>confidence</p>
					<div className='confidence-bar-section'>
							<h4>{Math.round(answer.confidence * 100)}%</h4>
							<ConfidenceBar confidence={Math.round(answer.confidence * 100)}></ConfidenceBar>
							<p className='confidence-label-mini'>confidence</p>
					</div>
				</div>
				{ index == 0
					? <div id="confidence"><div /></div>
					: null
				}
				<div className='feedback-section'>
					<FeedbackBar title={answer.title} originalQuery={originalQuery}/>
				</div>
			</div >
			<div className='answer-text' onClick={onSelectAnswer}>
				<p>
					{answer.leading_text}
					<span className='passage'>{answer.text}</span>
					{answer.trailing_text}
				</p>
				<p className='page-location'>{answer.page_num ? (' starting on pg ' + answer.page_num) : null}</p>
			</div>
		</div >
	)
}