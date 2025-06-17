
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Star, Heart, Calendar, Bell, LogOut } from 'lucide-react';
import { toast } from 'sonner';

const CustomerDashboard = () => {
  const { profile, signOut } = useAuth();
  const [salons, setSalons] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchSalons();
    fetchAppointments();
    fetchNotifications();
  }, []);

  const fetchSalons = async () => {
    try {
      const { data, error } = await supabase
        .from('salons')
        .select('*')
        .eq('status', 'approved')
        .order('rating', { ascending: false });

      if (error) throw error;
      setSalons(data || []);
    } catch (error) {
      console.error('Error fetching salons:', error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .select(`
          *,
          salons(name),
          services(name, price)
        `)
        .eq('customer_id', profile?.id)
        .order('appointment_date', { ascending: false })
        .limit(5);

      if (error) throw error;
      setAppointments(data || []);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const fetchNotifications = async () => {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', profile?.id)
        .eq('is_read', false)
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) throw error;
      setNotifications(data || []);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Berhasil keluar');
    } catch (error) {
      toast.error('Gagal keluar');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-rose-600">BOOK BEAUTY</h1>
              <Badge variant="secondary" className="ml-3">Pelanggan</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-400" />
                {notifications.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </div>
              <span className="text-sm text-gray-700">Halo, {profile?.full_name}</span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Keluar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  Cari Salon
                </CardTitle>
                <CardDescription>
                  Temukan salon kecantikan terbaik di sekitar Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Cari berdasarkan nama salon atau lokasi..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button>
                    <MapPin className="h-4 w-4 mr-2" />
                    Lokasi Saya
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Salons */}
            <Card>
              <CardHeader>
                <CardTitle>Salon Populer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {salons.slice(0, 4).map((salon: any) => (
                    <div key={salon.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{salon.name}</h3>
                        <Heart className="h-4 w-4 text-gray-400 hover:text-red-500 cursor-pointer" />
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{salon.address}</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm ml-1">{salon.rating || 0}</span>
                        </div>
                        <span className="text-sm text-gray-500">({salon.total_reviews} reviews)</span>
                      </div>
                      <Button className="w-full mt-3" size="sm">
                        Lihat Detail
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Appointment Terbaru
                </CardTitle>
              </CardHeader>
              <CardContent>
                {appointments.length > 0 ? (
                  <div className="space-y-3">
                    {appointments.slice(0, 3).map((appointment: any) => (
                      <div key={appointment.id} className="border-l-4 border-rose-500 pl-3">
                        <p className="font-medium text-sm">{appointment.salons?.name}</p>
                        <p className="text-xs text-gray-600">{appointment.services?.name}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(appointment.appointment_date).toLocaleDateString('id-ID')} - {appointment.appointment_time}
                        </p>
                        <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'} className="text-xs">
                          {appointment.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">Belum ada appointment</p>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Aksi Cepat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Riwayat Booking
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="h-4 w-4 mr-2" />
                  Salon Favorit
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Star className="h-4 w-4 mr-2" />
                  Review Saya
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
