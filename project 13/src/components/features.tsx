import { 
  Stethoscope, 
  Pill, 
  TestTube, 
  Activity, 
  Ambulance, 
  Brain,
  Shield, 
  Wallet 
} from 'lucide-react';

const features = [
  {
    name: 'Find Doctors',
    description: 'Search and book appointments with top doctors',
    icon: Stethoscope,
  },
  {
    name: 'Order Medicines',
    description: 'Order medicines online with doorstep delivery',
    icon: Pill,
  },
  {
    name: 'Lab Tests',
    description: 'Book lab tests with home sample collection',
    icon: TestTube,
  },
  {
    name: 'Health Tracking',
    description: 'Track your vitals and get personalized insights',
    icon: Activity,
  },
  {
    name: 'Emergency Care',
    description: '24/7 emergency response and ambulance services',
    icon: Ambulance,
  },
  {
    name: 'Mental Health',
    description: 'Online therapy and mental wellness support',
    icon: Brain,
  },
  {
    name: 'Insurance',
    description: 'Manage health insurance and track claims',
    icon: Shield,
  },
  {
    name: 'Health Wallet',
    description: 'Secure payments and exclusive health benefits',
    icon: Wallet,
  },
];

export function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for better health
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Comprehensive healthcare solutions at your fingertips
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}