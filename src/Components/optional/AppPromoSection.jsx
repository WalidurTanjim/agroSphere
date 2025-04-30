import { MoveRight } from "lucide-react";
import appMockup from '../../assets/images/ChatGPT Image Apr 28, 2025, 08_06_14 PM.png';
import ScrollReveal from "./ScrollReveal ";
import AgroButton from "../../shared/Button/AgroButton";


const features = [
  "Smart Crop Advisory",
  "Real-Time Weather Alerts",
  "Instant Market Updates",
  "Farming Success Community",
];

const AppPromoSection = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6 md:px-20 mt-16">
      <ScrollReveal direction="up" delay={0.2} duration={0.8} blur={true}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          

          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Farming Meets Future
              <br />
              <span className="text-lime-400">AgroSphere App</span> Launching Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Supercharge your farming with AI-powered advice, real-time weather alerts, market updates, and a vibrant community — all from your pocket.
            </p>

 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <MoveRight className="text-green-500" size={22} />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>


            <div className="flex flex-wrap gap-2 mt-8">
              {/* <div className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-2 text-sm font-semibold shadow-md transition cursor-pointer">
                📱 App Store (Coming Soon)
              </div> */}
              {/* <div className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-2 text-sm font-semibold shadow-md transition cursor-pointer">
                🤖 Play Store (Coming Soon)
              </div> */}
              <AgroButton >
              📱 App Store (Coming Soon)
              </AgroButton>
                <AgroButton variant="outline" size="sm">
                🤖 Play Store (Coming Soon)
                </AgroButton>

            </div>
          </div>

    
          <div className="relative flex justify-center">
            <div className="relative w-[300px] md:w-[400px]">
              <img
                src={appMockup}
                alt="AgroSphere App Mockup"
                className="w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700 ease-in-out"
              />
        
              <div className="absolute inset-0 rounded-3xl bg-green-400 opacity-10 blur-3xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </ScrollReveal>

     
      <div className="absolute top-[-80px] right-[-80px] w-72 h-72 bg-green-300 opacity-20 dark:opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-60px] left-[-60px] w-60 h-60 bg-green-400 opacity-20 dark:opacity-10 rounded-full blur-2xl animate-ping"></div>
    </section>
  );
};

export default AppPromoSection;
