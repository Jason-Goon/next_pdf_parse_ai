import React from "react";
import { NavBar, Footer } from '../src/components';
import AIForm from '../src/components/AIform';

const Page: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-700 text-white">
            <div className="bg-gray-700">
                <NavBar />
            </div>
            <main className="flex-grow container mx-auto px-4 py-8">
                <AIForm />
                <div className="bg-white text-black p-4 mt-8 mb-8 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">HOW TO USE:</h3>
                    <p>upload a pdf file and ask a question about itQ</p>
                </div>
                <div className="bg-white text-black p-4 mt-8 mb-8 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">STILL IN DEVELOPMENT</h3>
                    <p>This app is still in heavy development to bring api call cost down as much as possible by refining prompt cfafting, integrating it with more natural language processing</p>
                </div>
                <div className="bg-white text-black p-4 mt-8 mb-8 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">GITHUB</h3>
                    <p>The sources for this project are located in github</p>
                </div>
            </main>
            <div className="bg-black mt-8">
                <Footer />
            </div>
        </div>
    );
};

export default Page;