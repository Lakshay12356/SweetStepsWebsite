import { Button } from '../components/ui/button';
import { useBooking } from '../context/BookingContext';
import { motion } from 'framer-motion';

const Products = () => {
    const { openBookingModal } = useBooking();

    const products = [
        { id: 1, title: "Classic Baby Hands", price: "$99", desc: "A timeless classic for your little one's first memories." },
        { id: 2, title: "Couple's Clasp", price: "$149", desc: "Solidify your bond with this elegant couple's casting." },
        { id: 3, title: "Family Circle", price: "$299", desc: "The whole family together, forever." },
        { id: 4, title: "Pet Paws", price: "$89", desc: "Don't forget the furry family members." },
        { id: 5, title: "Golden Edition", price: "$199", desc: "Premium gold finish for that extra sparkle." },
        { id: 6, title: "Shadow Box Set", price: "$129", desc: "Deep shadow box framing for dramatic effect." },
    ];

    return (
        <div className="min-h-screen bg-background pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight"
                    >
                        Our Collections
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        Explore our handcrafted range of 3D impression framings. Each piece is unique, just like your memories.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group bg-card rounded-3xl border border-border/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="h-72 bg-secondary/20 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="text-muted-foreground/50 font-medium text-lg">Product Image {item.id}</span>
                            </div>

                            <div className="p-8 space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                                    <p className="text-primary font-medium">{item.price}</p>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>

                                <Button
                                    onClick={openBookingModal}
                                    className="w-full rounded-xl mt-4 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    Book This Style
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
