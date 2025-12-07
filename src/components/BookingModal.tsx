import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Booking submitted:', formData);
        // Here you would typically send data to backend
        alert('Thank you for your booking request! We will contact you shortly.');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-card p-6 rounded-lg shadow-xl z-50 border border-border"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-foreground">Book Appointment</h2>
                            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <Input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Phone</label>
                                <Input
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <Input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Preferred Date</label>
                                <Input
                                    name="date"
                                    type="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Message (Optional)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Any specific requests?"
                                    className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 min-h-[80px]"
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                Confirm Booking
                            </Button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
