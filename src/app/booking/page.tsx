import BookingForm from '../../components/ui/BookingForm';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-24 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Book a 15min Planning Call</h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">Schedule a free 15-minute call to discuss your photography needs, check availability, and get a quote. Fill out the form below and we'll be in touch soon!</p>
      <BookingForm />
    </div>
  );
} 