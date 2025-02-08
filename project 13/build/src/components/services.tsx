import { Video, FileText, Truck, FlaskRound as Flask } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    name: 'Video Consultation',
    description: 'Connect with doctors online from the comfort of your home',
    icon: Video,
    buttonText: 'Start Consultation',
  },
  {
    name: 'Digital Prescriptions',
    description: 'Get digital prescriptions and medical records securely',
    icon: FileText,
    buttonText: 'View Records',
  },
  {
    name: 'Medicine Delivery',
    description: 'Order medicines online with doorstep delivery',
    icon: Truck,
    buttonText: 'Order Now',
  },
  {
    name: 'Lab Tests',
    description: 'Book lab tests with home sample collection',
    icon: Flask,
    buttonText: 'Book Test',
  },
];

export function Services() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-500">
            Comprehensive healthcare services for you and your family
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="absolute h-12 w-12 rounded-md bg-primary text-white flex items-center justify-center">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg font-medium text-gray-900">{service.name}</p>
              </div>
              <p className="mt-4 text-base text-gray-500">{service.description}</p>
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  {service.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}