

import React, { FunctionComponent, ReactElement } from 'react'
import { connect } from 'react-redux'
import { ToastNotification } from 'carbon-components-react'

import { NotificationProps } from './types'

import './styles.scss'

const Notification: FunctionComponent<NotificationProps> = (props): ReactElement<HTMLDivElement> => {

  const { data } = props

  const renderErrorCode = () => {
    return (<p>
        {data.error_code
          ? data.error_code + " error"
          : "Unknown error"
        }
      </p>
    )
  }
  // main component render
  return (
    <>
      { data ?
        <div className='notification'>
          <ToastNotification
            kind={data.kind}
            title={data.title ? data.title : "An unknown error occured"}
            subtitle={data.subtitle ? data.subtitle : "Please resubmit your request"}
            caption=''
            timeout={10000}
          />
          {data.kind == 'error' ? renderErrorCode() : null}
        </div>
      :
        null
      }
    </>
  )
}


const mapStateToProps = (state: any) => {
  const data = state.appState.notification
  return { data }
}

export default connect(mapStateToProps)(Notification)
