const Testimonial = () => {
    return (
        <section className="bg-base-200 text-base-content rounded-3xl">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl font-bold">What Our Customers Say</h2>
                        <p className="text-gray-400">Our product information system has transformed the way we operate. The comprehensive data and user-friendly interface have made decision-making a breeze. We highly recommend it to any business looking for a reliable product information solution.</p>
                    </div>
                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded-2xl shadow-2xl bg-base-300">
                                    <p>Switching to this product information system was one of the best decisions we&apos;ve made. It&apos;s intuitive, reliable, and packed with features that have made our work easier. The support team is also very responsive and helpful.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Lara Salley</p>
                                            <p className="text-sm text-gray-400">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded-2xl shadow-2xl bg-base-300">
                                    <p>Our team has been using this product information system for a few months now, and we&apos;re extremely satisfied with it. The system is easy to use, the data is accurate, and it has significantly improved our productivity.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Demon Salvador</p>
                                            <p className="text-sm text-gray-400">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded-2xl shadow-2xl bg-base-300">
                                    <p>The product information system has been a game-changer for us. It&apos;s efficient, easy to use, and provides accurate data. We&apos;ve been able to streamline our processes and improve our decision-making. Highly recommended!</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Sezza Hui</p>
                                            <p className="text-sm text-gray-400">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded-2xl shadow-2xl bg-base-300">
                                    <p>We&apos;ve been using this product information system for a while now, and it&apos;s been a great asset to our company. It&apos;s user-friendly, efficient, and provides us with the accurate data we need to make informed decisions. We couldn&apos;t be happier with it.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm text-gray-400">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;