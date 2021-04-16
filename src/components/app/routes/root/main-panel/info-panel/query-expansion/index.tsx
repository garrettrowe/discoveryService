

import React, { FunctionComponent, ReactElement, useState, useContext } from "react";
import { QueryExpansionProps } from "./types";
import { ActionTypes } from "store/actions";
import { storeContext } from 'index'
import { ConceptCarousel } from "./concept-carousel";
import { AnswerItem, DocumentItem } from "../../../../../../../types/common/types";

import { wdsNlQuery } from "../../../../../../../store/actions";


import ChevronDown24 from "@carbon/icons-react/es/chevron--down/24";
import ChevronRight24 from "@carbon/icons-react/es/chevron--right/24";

import ClassSet from "classnames";
import "./styles.scss";

export const QueryExpansionPanel: FunctionComponent<QueryExpansionProps> = (props): ReactElement<HTMLDivElement> => {
  const [expandedConcepts, setExpandedConcepts] = useState(false);
  const [expandedDocs, setExpandedDoc] = useState(false);

  const { queryAggregation, selectedStory, dispatch, mode } = props;
  const { state } = useContext(storeContext)
  

  const conceptAccordionClasses = ClassSet({
    "mobile-accordion-content": true,
    "hide-accordion": !expandedConcepts
  });

  const docAccordionClasses = ClassSet({
    "mobile-accordion-content": true,
    "hide-accordion": !expandedDocs
  });

  const selectDoc = (doc: DocumentItem) => {
    dispatch(
      wdsNlQuery({
        query_string: doc.name,
      }
    )
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleExpansion = (type: string) => {
    if (type === "concept") {
      expandedConcepts ? setExpandedConcepts(false) : setExpandedConcepts(true);
    } else if (type === "doc") {
      expandedDocs ? setExpandedDoc(false) : setExpandedDoc(true);
    }
  };

  const renderConcepts = () => {
    return (
      <div className="qe-row">
        <div
          className="mobile-accordion-title"
          onClick={() => toggleExpansion("concept")}
        >
          <div className="button">
            {expandedConcepts ? <ChevronDown24 /> : <ChevronRight24 />}
          </div>
          <div className="title">
            <h2>Relevant concepts from results</h2>
          </div>
        </div>
        <div className={conceptAccordionClasses}>
          {expandedConcepts ? (
            <ConceptCarousel
              dispatch={dispatch}
              concepts={queryAggregation ? queryAggregation.concepts : null}
            />
          ) : null}
        </div>
        <div className="qe-row-header">
          <div className="title">
            
            <div id="concepts">
              <h2>Relevant concepts from results</h2>
            </div>
          </div>
        </div>
        <div className="carousel-row">
          <ConceptCarousel
            dispatch={dispatch}
            concepts={queryAggregation ? queryAggregation.concepts : null}
          />
        </div>
      </div>
    );
  };

  const renderDocs = () => {
  console.log(queryAggregation);
    return (
      <div className="qe-row">
        <div
          className="mobile-accordion-title"
          onClick={() => toggleExpansion("doc")}
        >
          <div className="button">
            {expandedDocs ? <ChevronDown24 /> : <ChevronRight24 />}
          </div>
          <div className="title">
            <h2>Related Topics</h2>
          </div>
        </div>
        <div className={docAccordionClasses}>
          {expandedDocs ? (
            queryAggregation.file_names.map((item: DocumentItem, index) =>
              renderDocumentTag(item, index)
            )
          ) : (
            <br />
          )}
        </div>
        <div className="qe-row-header">
          <div className="title">
            <h2>Related Topics</h2>
            <div id="aggregation"><div/></div>
          </div>
        </div>
        <div className="mentions-section">
          {queryAggregation.file_names.map((item: DocumentItem, index) =>
            renderDocumentTag(item, index)
          )}
        </div>
      </div>
    );
  };

  const renderDocumentTag = (doc: DocumentItem, index) => {
    return (
      <div key={index} onClick={() => selectDoc(doc)} className="fit-content">
        <p className="document-item">{doc.name}</p>
        <span className="document-count">{doc.matching_results}</span>
      </div>
    );
  };

  // main component render
  return (
    <div className="qe-panel">
      {queryAggregation.concepts.length > 0 ? renderConcepts() : null}
      {queryAggregation.file_names.length > 0 ? renderDocs() : null}
    </div>
  );
};
