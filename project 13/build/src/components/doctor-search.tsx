import { useState } from 'react';
import { Search, MapPin, Star } from 'lucide-react';
import { Button } from './ui/button';

const doctors = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    specialty: 'Cardiologist',
    experience: '15 years',
    location: 'Mumbai',
    rating: 4.8,
    available: true,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    name: 'Dr. Rajesh Kumar',
    specialty: 'Pediatrician',
    experience: '12 years',
    location: 'Delhi',
    rating: 4.7,
    available: true,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
];

export function DoctorSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Find Doctors Near You</h2>
          <p className="mt-4 text-lg text-gray-500">
            Book appointments with the best doctors
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="max-w-xl w-full">
            <div className="flex shadow-sm rounded-md">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-l-md"
                  placeholder="Search doctors, specialties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button className="rounded-l-none">
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <img className="h-16 w-16 rounded-full" src={doctor.image} alt={doctor.name} />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{doctor.name}</h3>
                    <p className="text-sm text-gray-500">{doctor.specialty}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {doctor.location}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 mr-1 text-yellow-400" />
                    {doctor.rating} • {doctor.experience} experience
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full">Book Appointment</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}