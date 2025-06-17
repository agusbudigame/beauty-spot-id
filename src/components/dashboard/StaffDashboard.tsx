
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, MessageCircle, BarChart3, LogOut } from 'lucide-react';
import { toast } from 'sonner';

const StaffDashboard = () => {
  const { profile, signOut } = useAuth();

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
              <Badge variant="secondary" className="ml-3">Staff Salon</Badge>
            </div>
            <div className="flex items-center space-x-4">
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Jadwal Hari Ini
                </CardTitle>
                <CardDescription>
                  Kelola appointment dan jadwal kerja Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Belum ada appointment hari ini</p>
                  <Button variant="outline" className="mt-4">
                    Lihat Jadwal Lengkap
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat dengan Pelanggan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <MessageCircle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Tidak ada pesan baru</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Status Ketersediaan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Status Saat Ini</span>
                  <Badge variant="default">Tersedia</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Update Status
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Performa Bulan Ini
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Layanan</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Rating Rata-rata</span>
                  <span className="font-semibold">0.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pendapatan</span>
                  <span className="font-semibold">Rp 0</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Menu Cepat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  Jadwal Mingguan
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Konfirmasi Appointment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Laporan Performa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
