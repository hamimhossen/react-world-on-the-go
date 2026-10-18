import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/Countries";

const countriesPromise = fetch(
    "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
    return (
        <>
            <h1>World React On The Go...</h1>
            <Suspense fallback={<h3>waiting for message...</h3>}>
                <Countries countriesPromise={countriesPromise}></Countries>
            </Suspense>
        </>
    );
}

export default App;
