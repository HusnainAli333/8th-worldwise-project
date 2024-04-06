/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

const intialState = { citiesList: [], status: "loading", currentCity: {} };

function reducer(state, action) {
  switch (action.type) {
    case "loading": {
      return { ...state };
    }
    case "ready": {
      return { ...state, citiesList: action.payload, status: "ready" };
    }
    case "error": {
      return { ...state, status: "error" };
    }
    case "selectedCity": {
      return { ...state, currentCity: action.payload };
    }
    default: {
      throw new Error("Error caught command");
    }
  }
}

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, intialState);

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8000/cities");
        if (!res.ok) throw new Error("Enable to fetch data");
        const data = await res.json();

        dispatch({ type: "ready", payload: data });
      } catch (error) {
        dispatch({ type: "error" });
      }
    }
    fetchData();
  }, []);

  async function getCity(id) {
    try {
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      if (!res.ok) throw new Error("Enable to fetch data");
      const data = await res.json();

      dispatch({ type: "selectedCity", payload: data });
    } catch (error) {
      dispatch({ type: "error" });
    }
  }

  return (
    <CitiesContext.Provider value={{ dispatch, state, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("cities context was read from a wrong place");
  }
  return context;
}

export { CitiesProvider, useCities };
