import Head from "next/head";
import { useRef } from "react";
import { useRouter } from "next/router";
import HeaderPage from "../components/HeaderPage";

export default function About(data) {
  const searchInputRef = useRef(null);
  const router = useRouter();
  


  return (
    <div>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HeaderPage />

      <div style="padding-top: 80px; padding-left: 170px; color: #2ca7eec2"> 
        <h2>About us</h2>
    </div>
      <div style="font-family: verdana; padding-top: 2px; padding-left: 170px">
        <p style="color: #2ca7eec2"> <strong>Ownnership</strong> </p>
        <p>Konlap Web Browser and this website are owned and operated by Konlap Technologies E.I.R.L. <br>We are an enterprise based on Amazonas (Peru) and
            our goal is to reduce the Internet's language <br> barrier by allowing people to find and access information in 100+ languages. 
        <br>Keep updated about us <a href="https://www.linkedin.com/company/konlap" target="_blank">here</a>.</p>
        </div>
        <div style="font-family: verdana; padding-top: 12px; padding-left: 170px">
        <p style="color: #2ca7eec2"> <strong>Contact</strong> </p>
        <p>You can contact us at konlaptechs@gmail.com</p>
        <div style="font-family: verdana; padding-top: 60px"> 
            Go to <a href="https://konlap.co"> homepage </a> 
        </div>

    </div>
  );
}
