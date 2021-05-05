import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
  Fragment,
} from "react";
import { QueryBarProps } from "./types.d";
import { wdsNlQuery, setTAOptions, ActionTypes } from "../../../../../../store/actions";

import axios from "axios";

import { Typeahead, AsyncTypeahead } from "react-bootstrap-typeahead";
import ClassSet from "classnames";

import Search20 from "@carbon/icons-react/es/search/20";
import "./styles.scss";

import { Toggle } from "carbon-components-react";

export const QueryBar: FunctionComponent<QueryBarProps> = (
  props
): ReactElement<HTMLDivElement> => {
  const { dispatch, selectedStory, loading, query, loadO } = props;
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);

  let qq =
    query.location.search === ""
      ? false
      : decodeURI(query.location.search.replace("?", ""));
  let instance;

  useEffect(() => {
    function connect() {
      console.log("socket with: " + qq);
      let ws = new WebSocket("wss://" + qq + "/ws/discovery");
      ws.onopen = () => console.log("ws opened");
      ws.onclose = () => {
        console.log("ws closed");
        setTimeout(function () {
          connect();
        }, 1000);
      };

      ws.onmessage = (e) => {
        const message = e.data;
        sendTestQuery(message);
      };
    }
    if (qq){
      connect();
      console.log("set up socket");
    } 
  }, []);


  const AsyncTypeAhead = () => {
    const handleSearch = (query) => {
      dispatch(setTAOptions(true));

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nlq: query,
          filter: null,
          document: null,
        }),
      };

      fetch(`/api/wdsAC`, requestOptions)
        .then(response => response.json())
        .then(data => {
          const o = data.answerItems.map((i) => ({
            question: i.text,
            term: i.title
          })); 
          setOptions(o)
          setSelected([]);
          dispatch(setTAOptions(false));
        });
    };

    const filterBy = () => true;

    return (
      <AsyncTypeahead
        filterBy={filterBy}
        id="search-bar"
        className="search-bar"
        isLoading={loadO}
        labelKey="term"
        selected={selected}
        minLength={4}
        onSearch={handleSearch}
        options={options}
        placeholder="Search the Knowledge Base"
        onKeyDown={onSearchBarKeydown}
        onChange={onSearchBarChange}
        renderMenuItemChildren={(option, props) => (
                    <Fragment>
                        <span>{option.question}</span>
                     </Fragment>
                )}
      />
    );
  };

  const onSearchBarKeydown = (e) => {
    setSelected([])
    if (e.keyCode === 13 && e.currentTarget.value.length > 0) {
      sendTestQuery(e.currentTarget.value);
    }
    if (e[0] !== undefined) {
      sendTestQuery(e[0].question);
    }
  };
  const onSearchBarChange = (e) => {
    if (e[0] !== undefined) {
      setSelected([e[0].question])
      sendTestQuery(e[0].question)
    }
  };

  const sendTestQuery = (query_string) => {
    dispatch(wdsNlQuery({ query_string: query_string }));
  };

  const queryBarClasses = ClassSet({
    "query-bar": true
  });

  // main component render
  return (
    <div className={queryBarClasses}>
      <Search20 className="search" />
      {AsyncTypeAhead()}
    </div>
  );
};
