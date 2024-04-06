import { useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";

const intialState = { citiesList: [], status: "loading" };

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
    default: {
      throw new Error("Error caught command");
    }
  }
}

export default function App() {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AppLayout" element={<AppLayout />}>
          <Route index element={<CityList state={state} />} />
          <Route path="cities" element={<CityList state={state} />} />
          <Route path="countries" element={<CountryList state={state} />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
