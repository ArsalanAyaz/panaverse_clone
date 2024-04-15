import Core_Tracks from "@/components/widgets/Core_Tracks";
import Footer from "@/components/widgets/Footer";
import Hero from "@/components/widgets/Hero"
import ProgramOutcome from "@/components/widgets/ProgramOutcome";
import SpecializedTrack from "@/components/widgets/SpecializedTrack";

export default function Home() {
  return (
    <div>

        <Hero/>
        
        <Core_Tracks/>

        <SpecializedTrack/>

        <ProgramOutcome/>

        <Footer/>



    </div>
  );
}
