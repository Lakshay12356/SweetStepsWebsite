import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BookingModal from './BookingModal';
import { BookingProvider, useBooking } from '../context/BookingContext';

interface LayoutContentProps {
    children: ReactNode;
}

const LayoutContent = ({ children }: LayoutContentProps) => {
    const { isModalOpen, closeBookingModal } = useBooking();
    return (
        <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
            <Navbar />
            <main className="flex-1 w-full pt-16">
                {children}
            </main>
            <Footer />
            <BookingModal isOpen={isModalOpen} onClose={closeBookingModal} />
        </div>
    );
};

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <BookingProvider>
            <LayoutContent>{children}</LayoutContent>
        </BookingProvider>
    );
};

export default Layout;
