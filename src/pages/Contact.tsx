
import { Button } from '../components/ui/button';
import { useBooking } from '../context/BookingContext';

const Contact = () => {
    const { openBookingModal } = useBooking();

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Get in Touch</h2>
                    <p className="text-muted-foreground">
                        Have questions? We'd love to hear from you. Reach out to us for bookings, inquiries, or just to say hello.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium">Phone</h3>
                            <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Email</h3>
                            <p className="text-muted-foreground">hello@sweetsteps.com</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Location</h3>
                            <p className="text-muted-foreground">123 Memory Lane, Creative City, CA 90210</p>
                        </div>
                    </div>

                    <Button onClick={openBookingModal} size="lg" className="w-full md:w-auto">
                        Book an Appointment
                    </Button>
                </div>

                <div className="h-[400px] bg-muted rounded-lg flex items-center justify-center text-muted-foreground border border-border">
                    {/* Map Placeholder */}
                    Map Interactive Placeholder
                </div>
            </div>
        </div>
    );
};

export default Contact;
