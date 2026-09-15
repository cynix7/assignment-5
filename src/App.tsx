import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies/Technologies";
import type { TechType } from "./Type/Type";
import Footer from "./components/Footer";


const techPromise = async (): Promise<TechType[]> => {
 const res=await fetch('/data.json');
 const data=await res.json();
 return data;
}

function App() {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies techPromise={techPromise()}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
