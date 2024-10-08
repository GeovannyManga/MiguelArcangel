"use client";
import TopBar from "../components/TopBar.jsx";
import NavBar from "../components/NavBar.jsx";
import Carrucel from "../components/Carrucel.jsx";
import Cards from "../components/cards.jsx";
import SecctionWelcome from "../components/secctionWelcome.jsx";
import MedicalDepartaments from "../components/MedicalDepartaments.jsx";
import FeactureServices from "../components/FeactureServices.jsx";
import PersonalPlan from "../components/PersonalPlan.jsx";
import Footer from "../components/Footer.jsx";


export default function HomePage() {
  return (
    <main className="main-container" >
      <TopBar></TopBar>
      <NavBar></NavBar>
      <Carrucel></Carrucel>
      <Cards></Cards>
      <SecctionWelcome></SecctionWelcome>
      <MedicalDepartaments></MedicalDepartaments>
      <FeactureServices></FeactureServices>
      <PersonalPlan></PersonalPlan>
      <Footer></Footer>
    </main>
  );
}
