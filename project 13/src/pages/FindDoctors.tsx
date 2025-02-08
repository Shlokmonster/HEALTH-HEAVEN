import { useState } from 'react';
import { Search, MapPin, Star, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  location: string;
  rating: number;
  available: boolean;
  image: string;
  nextAvailable: string;
  fee: string;
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    specialty: 'Cardiologist',
    experience: '15 years',
    location: 'Mumbai',
    rating: 4.8,
    available: true,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    nextAvailable: 'Today, 2:00 PM',
    fee: '₹1000'
  },
  {
    id: 2,
    name: 'Dr. Rajesh Kumar',
    specialty: 'Pediatrician',
    experience: '12 years',
    location: 'Delhi',
    rating: 4.7,
    available: true,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    nextAvailable: 'Tomorrow, 10:00 AM',
    fee: '₹800'
  },
];

export function FindDoctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const specialties = ['Cardiologist', 'Pediatrician', 'Dermatologist', 'Neurologist', 'Orthopedic'];
  const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
    const matchesLocation = !selectedLocation || doctor.location === selectedLocation;
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Find Doctors</h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Book appointments with the best doctors
          </p>
        </div>

        <div className="mt-8">
          <div className="max-w-xl mx-auto">
            <div className="flex shadow-sm rounded-md">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-l-md"
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

          <div className="mt-4 flex flex-wrap gap-4 justify-center">
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-primary focus:border-primary"
            >
              <option value="">All Specialties</option>
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-primary focus:border-primary"
            >
              <option value="">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <img className="h-16 w-16 rounded-full object-cover" src={doctor.image} alt={doctor.name} />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{doctor.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{doctor.specialty}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mr-1" />
                    {doctor.location}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Star className="h-4 w-4 mr-1 text-yellow-400" />
                    {doctor.rating} • {doctor.experience} experience
                  </div>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Next Available: {doctor.nextAvailable}
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                    Consultation Fee: {doctor.fee}
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