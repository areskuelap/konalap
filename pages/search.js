import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Response from "../Response";
import translate from 'translatte';
import AdSense from 'react-adsense';
import * as React from "react";



const Search = ({ results, imageResults }) => {
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'auto'}, 'google_translate_element');
}


function loadError(onError) {
console.error(`Failed ${onError.target.src} didn't load correctly`);
}
  const router = useRouter();
    
  React.useEffect(async() => {
    const LoadExternalScript = async () => {
      const externalScript = document.createElement("script");
      externalScript.onerror = loadError;
      externalScript.id = "external";
      externalScript.async = true;
      externalScript.type = "text/javascript";
      //externalScript.setAttribute("crossorigin", "anonymous");
      document.body.appendChild(externalScript);
      externalScript.src = `//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
      
    };
    await LoadExternalScript();
    // setTimeout(function(){ googleTranslateElementInit(); }, 400);
    
  }, []);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <SearchResults results={results} imageResults={imageResults}/>

     {/* <AdSense.Google
  client='ca-pub-7292810486004926'
  slot='7806394673'
  />*/}

    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  
  console.log(context.query)
  const useDummyData = false;
  const startIndex = context.query.start || "0";
  

  const translatedText = await translate(context.query.term, {to: context?.query?.lan||'en'});
  const data = useDummyData
    ? Response
    : await fetch(
      encodeURI(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBxN3-lApxwD736Mm3Hd3WlSiViLCJTfWs&cx=88201975a12a6f4fd&q=${translatedText.text}&start=${startIndex}`)
      ).then((response) => response.json());
  console.log("@@@@@@");
  console.log(data);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd473e08ed5msh3bfd2bb98cda2d5p15864bjsn1829cc23a127',
      'X-RapidAPI-Host': 'duckduckgo-duckduckgo-zero-click-info.p.rapidapi.com'
    }
  };
  const imageData = await fetch(`https://duckduckgo-duckduckgo-zero-click-info.p.rapidapi.com/?q=${translatedText.text}&no_html=1&no_redirect=1&skip_disambig=1&format=json`, options).then(response => response.json());
  console.log("!!!!!!!!!!");
  console.log(imageData);

  return {
    props: {
      results: data,
      imageResults: imageData,
      language: context?.query?.lan||'en'
    },
  };
}
