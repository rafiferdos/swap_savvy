import { useContext } from 'react';
import f1 from '../../assets/images/feature1.jpg'
import f2 from '../../assets/images/feature2.jpg'
import { ThemeContext } from '../../provider/ThemeProvider';

const Features = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <section className={theme === 'light' ? "bg-purple-50 text-base-content rounded-3xl" : "bg-purple-950/30 text-base-content rounded-3xl"}>
            <div className="container max-w-2xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-primary">What We Feature</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-secondary">Still not convinced? Take a look at our provided features that we offer</p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-base-content">Reliable and Accurate</h3>
                        <p className="mt-3 text-lg text-base-content opacity-60">Our system is built on a foundation of reliability and accuracy. We ensure that the product information you receive is up-to-date and precise, helping you make informed decisions.</p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-base-content">Comprehensive Data</h4>
                                    <p className="mt-2 text-gray-400">Our system provides comprehensive and accurate data about a wide range of products, helping businesses make informed decisions.</p>

                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-base-content">User-Friendly Interface</h4>
                                    <p className="mt-2 text-gray-400">Our system is designed with user experience in mind. It&apos;s easy to navigate, and the information is presented in a clear and concise manner.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-base-content">Real-Time Updates</h4>
                                    <p className="mt-2 text-gray-400">Our system provides real-time updates on product information, ensuring you always have the most current data at your fingertips.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src={f1} alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                    </div>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-base-content">Efficient Data Management</h3>
                            <p className="mt-3 text-lg text-gray-400">Our system offers efficient data management. With our system, you can easily organize, track, and analyze product information, leading to improved business operations and decision-making.</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 text-base-content">Advanced Search Capabilities</h4>
                                        <p className="mt-2 text-gray-400">Our system includes advanced search capabilities, allowing you to quickly find the product information you need. This feature enhances efficiency and productivity.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 text-base-content">Customizable Reports</h4>
                                        <p className="mt-2 text-gray-400">Our system allows you to generate customizable reports based on the product information. This feature helps in better analysis and decision-making.</p>

                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 text-base-content">Data Security</h4>
                                        <p className="mt-2 text-gray-400">We prioritize data security. Our system is designed with advanced security measures to ensure your product information is safe and protected.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src={f2} alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;