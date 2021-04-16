

import React, { FunctionComponent, ReactElement, useState, useEffect } from 'react'
import { SkeletonText, SkeletonPlaceholder } from 'carbon-components-react'
import { ConceptCarouselProps } from './types'

import axios from 'axios'

import ChevronLeft24 from '@carbon/icons-react/es/chevron--left/24'
import ChevronRight24 from '@carbon/icons-react/es/chevron--right/24'

import './styles.scss'

export const ConceptCarousel: FunctionComponent<ConceptCarouselProps> = (props): ReactElement<HTMLDivElement> => {
  
  const [ selectedConceptIndex, setSelectedConceptIndex ] = useState(0)
  const [ loadingConcept, setLoadingConcept ] = useState(false)
  const [ selectedConceptData, setSelectedConceptData] = useState(null)

  const { concepts } = props

  useEffect(() => {
    getConcepts()
  }, [selectedConceptIndex])


  const getConcepts = () => {
    setLoadingConcept(true)
    axios.post('/api/concept', { concept: concepts[selectedConceptIndex] }).then(res => {
      let dbpediaData = res.data.dbpediaObject
      if (dbpediaData.dbpedia_abstract.length > 440) {
        dbpediaData.dbpedia_abstract = dbpediaData.dbpedia_abstract.slice(0,440) + "..."
      }
      setSelectedConceptData(dbpediaData)
      setLoadingConcept(false)
    })

  }

  const onBackConcept = () => {
    let backOne = selectedConceptIndex - 1
    setSelectedConceptIndex(backOne)
  }

  const onForwardConcept = () => {
    let forwardOne = selectedConceptIndex + 1
    setSelectedConceptIndex(forwardOne)
  }


  const renderSkeletonConceptBody = () => {
    return (
      <div className='concept-body'>
        <div className='concept-img-section'>
          <SkeletonPlaceholder className='concept-img-skeleton'/>
        </div>
        <div className='concept-abstract'>
          <SkeletonText width={'70%'} />
          <SkeletonText width={'90%'} />
          <SkeletonText width={'50%'} />
          <SkeletonText width={'60%'} />
          <SkeletonText width={'90%'} />
          <SkeletonText width={'70%'} />
          </div>
      </div>
    )

  }

  const renderConceptBody = () => {
    return (
      <div className='concept-body'>
      <div className='concept-img-section'>
        <img 
          className='concept-img' 
          src={selectedConceptData.dbpedia_image}
        />
      </div>
      <div className='concept-abstract'>
        {selectedConceptData.dbpedia_abstract}
      </div>
    </div>
    )
  }

// main component render
  return (
    <div className='carousel-panel'>
      <div className='concept-title'>
      <h4>{concepts[selectedConceptIndex].text}</h4>
        <div className='toggler'>
          {selectedConceptIndex === 0
            ? <ChevronLeft24 className="grayed-out"/>
            : <ChevronLeft24 className="chevron-toggle" onClick={onBackConcept}/>
          }
          {selectedConceptIndex === concepts.length - 1
            ? <ChevronRight24 className="grayed-out"/>
            : <ChevronRight24 className="chevron-toggle" onClick={onForwardConcept}/>
          }
          </div>
      </div>
      {loadingConcept || !selectedConceptData
        ? renderSkeletonConceptBody()
        : renderConceptBody()
      }
    </div>
  )
}