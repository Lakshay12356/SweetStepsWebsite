
import { Button } from '../components/ui/button';
import { useBooking } from '../context/BookingContext';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Heart, Users, Calendar } from 'lucide-react';
import HeroBg from '../assets/Images/hero-bg.png';

const Home = () => {
    const { openBookingModal } = useBooking();



    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img src={HeroBg} alt="Background" className="w-full h-full object-cover opacity-40 blur-[2px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
                </div>

                {/* Background Blurs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] z-0 animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-secondary/30 rounded-full blur-[120px] z-0" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8 z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-border/50 bg-background/50 backdrop-blur-md shadow-sm mb-4"
                    >
                        <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">Premium 3D Casting Services</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground leading-[1.1]">
                        Memories <br />
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Cast in Time</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Preserve the fleeting moments with our handcrafted 3D impressions.
                        A timeless keepsake for you and your loved ones.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="pt-8"
                    >
                        <Button
                            size="lg"
                            className="rounded-full px-10 py-7 text-lg shadow-lg hover:shadow-primary/25 transition-all duration-500 bg-foreground text-background hover:bg-foreground/90"
                            onClick={openBookingModal}
                        >
                            Start Your Journey
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Bento Grid - What We Do */}
            <section className="py-24 px-4 container mx-auto">
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Curated Keepakes.</h2>
                    <p className="text-lg text-muted-foreground">
                        Discover our collection of premium casting services, tailored to celebrate every stage of life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
                    {/* Large Item - Baby */}
                    <motion.div
                        className="col-span-1 md:col-span-2 md:row-span-2 rounded-[2rem] bg-card border border-border/50 p-8 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                        whileHover={{ y: -5 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-bold mb-2">Baby Impressions</h3>
                                <p className="text-muted-foreground text-lg max-w-md">Capture those tiny fingers and toes before they grow big. The perfect gift for new parents.</p>
                            </div>
                            <div className="h-64 mt-8 bg-muted/50 rounded-2xl flex items-center justify-center border border-border/50">
                                <span className="text-muted-foreground font-medium">Baby Cast Image</span>
                            </div>
                            <Button variant="ghost" className="self-start mt-6 group-hover:translate-x-2 transition-transform">
                                Learn more <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Medium Item - Couple */}
                    <motion.div
                        className="col-span-1 bg-card rounded-[2rem] border border-border/50 p-8 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
                        whileHover={{ y: -5 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div>
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <Heart className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Couple Casts</h3>
                            <p className="text-muted-foreground">Freeze your bond in time forever. A romantic gesture.</p>
                        </div>
                    </motion.div>

                    {/* Medium Item - Family */}
                    <motion.div
                        className="col-span-1 bg-card rounded-[2rem] border border-border/50 p-8 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
                        whileHover={{ y: -5 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-bl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div>
                            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-secondary-foreground" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Family Frames</h3>
                            <p className="text-muted-foreground">Unite the whole family in a masterpiece of holding hands.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Dynamic Process Section */}
            <section className="py-24 bg-secondary/20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl font-bold mb-4">Simple, Seamless, Sweet.</h2>
                        <p className="text-muted-foreground text-lg">Our process is designed to be as enjoyable as the result.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {[
                            { step: "01", title: "Book", desc: "Select your preferred slot online.", icon: Calendar },
                            { step: "02", title: "Impress", desc: "We take the mold with care.", icon: Heart },
                            { step: "03", title: "Detail", desc: "Refining every tiny crease.", icon: Star },
                            { step: "04", title: "Cherish", desc: "Delivered to your doorstep.", icon: ArrowRight }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-background/80 backdrop-blur-md rounded-2xl p-6 border border-border/50 shadow-sm text-center relative group hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-16 h-16 mx-auto bg-gradient-to-b from-primary/10 to-transparent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modern CTA */}
            <section className="py-32 container mx-auto px-4">
                <div className="rounded-[2.5rem] bg-foreground text-background p-12 md:p-24 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />

                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to freeze time?</h2>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            Don't let these precious memories fade away. Book your session today and create a legacy.
                        </p>
                        <Button
                            size="lg"
                            className="bg-background text-foreground hover:bg-zinc-200 text-lg px-10 py-6 rounded-full"
                            onClick={openBookingModal}
                        >
                            Book Appointment Now
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
