import React from "react";
import StudentLoginButton from "../Components/Buttons/StudentLoginButton";
import UniversityLoginButton from "../Components/Buttons/UniversityLoginButton";
import CollegeLoginButton from "../Components/Buttons/CollegeLoginButton";
import Navbar from "../Components/Navbar";
import HomeInfo from "./HomeInfo";
import Footer from "../Components/Footer";

function Home() {
    return (
        <div className="scrollbar-thin scrollbar-webkit dark:bg-gray-800">
           
            <Navbar />
            <div className="flex h-full justify-center dark:bg-gray-800">
                <div className="text-center max-w-6xl mx-10">
                    <p className="my-3 text-sm font-bold tracking-widest text-white uppercase">
                        MIT Art, Design &amp; Technology University, Pune
                    </p>
                    <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row pt-10">
                        <UniversityLoginButton />
                        <CollegeLoginButton />
                        <StudentLoginButton />
                    </div>
                </div>
            </div>
            <HomeInfo />
            <Footer />
           
        </div>

    );
}

export default Home;