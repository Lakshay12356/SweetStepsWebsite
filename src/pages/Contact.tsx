
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
                            <p className="text-muted-foreground">+91 8302419714</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Email</h3>
                            <p className="text-muted-foreground">sweetsteps05@gmail.com</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Location</h3>
                            <p className="text-muted-foreground">73/45-A, Paramhans Marg, Mansarovar, Jaipur</p>
                        </div>
                    </div>

                    <Button onClick={openBookingModal} size="lg" className="w-full md:w-auto">
                        Book an Appointment
                    </Button>
                </div>

                <div className="h-[400px] bg-muted rounded-lg overflow-hidden border border-border">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4594431218457!2d75.76712067458804!3d26.857140276680315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db53962efcb8f%3A0xae986bdc5dc8e3ad!2sSweet%20Steps%20Impressions%20(3D%20Hand%20%26%20Foot%20Casting)!5e0!3m2!1sen!2sin!4v1765088033214!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
