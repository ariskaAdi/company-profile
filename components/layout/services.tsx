import React from "react";
import { Card, CardContent } from "../ui/card";
import { Bell, GraduationCap, Lightbulb, Shield, Wrench } from "lucide-react";

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Passenger Safety</h3>
              <p className="text-gray-600 text-sm">
                Ensuring the highest safety standards for every journey.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Wrench className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bus Maintenance</h3>
              <p className="text-gray-600 text-sm">
                Regular inspections and maintenance to keep our fleet running
                smoothly.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Bell className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-gray-600 text-sm">
                Track your bus live for accurate arrival times.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Lightbulb className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Comfortable Seating
              </h3>
              <p className="text-gray-600 text-sm">
                Spacious and ergonomic seats for a relaxed trip.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <GraduationCap className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Driver Training</h3>
              <p className="text-gray-600 text-sm">
                Professional training to ensure safe and courteous drivers.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Bell className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600 text-sm">
                24/7 support to assist with your inquiries and bookings.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
