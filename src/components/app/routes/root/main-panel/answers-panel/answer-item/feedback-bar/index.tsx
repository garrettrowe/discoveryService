

import React, { FunctionComponent, ReactElement } from 'react'
import { FeedbackProps } from './types'
import { storeContext } from '../../../../../../../../../src'
import { wdsFeedback } from '../../../../../../../../store/actions'

import { Tooltip } from 'carbon-components-react'
import { settings } from 'carbon-components'

import ThumbsUp20 from '@carbon/icons-react/es/thumbs-up/20'
import ThumbsDown20 from '@carbon/icons-react/es/thumbs-down/20'

import './styles.scss'

export const FeedbackBar: FunctionComponent<FeedbackProps> = (props): ReactElement<HTMLDivElement> => {

  const
    { title, originalQuery } = props,
    { prefix } = settings,
    prop = {
      voteUp: () => ({
        triggerClassName: 'vote-up',
        clickToOpen: true,
        renderIcon: ThumbsUp20,
        showIcon: true,
        triggerText: ''
      }),
      voteDown: () => ({
        triggerClassName: 'vote-down',
        clickToOpen: true,
        renderIcon: ThumbsDown20,
        showIcon: true,
        triggerText: ''
      }),
      tooltipText: 'Thanks for providing feedback. Your feedback is used by Watson Discovery as part of the Continuous Relevancy Training so that your AI system improves automatically without significant training investment from your SMEs.',
      learnMoreURL: 'https://cloud.ibm.com/docs/services/discovery?topic=discovery-crt'
    }

  const captureVote = (voteValue) => {
    (voteValue == 'up') ? console.log('Vote Up is captured for the title: ' + title) : console.log('Vote Down is captured for the title: ' + title)
    document.getElementsByClassName('bx--tooltip')[0].classList.remove('bx--tooltip--shown')
  }


  // to send vote up
  // const sendVote = () => {
  //   dispatch(
  //     wdsFeedback({
  //       segment_title: title,
  //       query: originalQuery,
  //       feedback_positive: voteValue == 'up' ? true : false
  //    }))
  // }

  const Feedback = ({ title }) => (
    <span className='feedback-bar'>
      <Tooltip {...prop.voteUp()}>
        <p> {prop.tooltipText} </p>
        <div className={`${prefix}--tooltip__footer`}>
          <a href={prop.learnMoreURL} target='_blank' className={`${prefix}--link`}> Learn More </a>
          <button className={`${prefix}--btn ${prefix}--btn--primary`}
            type="button" onClick={() => captureVote('up')}> Ok </button>
        </div>
      </Tooltip>

      <Tooltip {...prop.voteDown()}>
        <p> {prop.tooltipText} </p>
        <div className={`${prefix}--tooltip__footer`}>
          <a href={prop.learnMoreURL} target='_blank' className={`${prefix}--link`}> Learn More </a>
          <button className={`${prefix}--btn ${prefix}--btn--primary`}
            type="button" onClick={() => captureVote('down')}> Ok </button>
        </div>
      </Tooltip>
    </span>
  )

  // main component render
  return (
    <Feedback title={title}></Feedback>
  )
}