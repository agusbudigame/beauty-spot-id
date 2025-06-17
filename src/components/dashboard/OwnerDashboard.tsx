
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Users, Settings, Camera, DollarSign, Calendar, Store, LogOut } from 'lucide-react';
import { toast } from 'sonner';

const OwnerDashboard = () => {
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
              <Badge variant="secondary" className="ml-3">Pemilik Salon</Badge>
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
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pendapatan Bulan Ini</p>
                  <p className="text-2xl font-bold text-gray-900">Rp 0</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Booking Bulan Ini</p>
                  <p className="text-2xl font-bold text-gray-900">0</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Staff</p>
                  <p className="text-2xl font-bold text-gray-900">0</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Store className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Outlet</p>
                  <p className="text-2xl font-bold text-gray-900">0</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Dashboard Analytics
                </CardTitle>
                <CardDescription>
                  Monitoring performa bisnis salon Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Data analytics akan muncul setelah ada transaksi</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Manajemen Staff
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-sm text-gray-600">Kelola staff dan jadwal kerja</p>
                  <Button size="sm">Tambah Staff</Button>
                </div>
                <div className="text-center py-8 text-gray-500">
                  <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Belum ada staff yang terdaftar</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Menu Manajemen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Pengaturan Layanan
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Camera className="h-4 w-4 mr-2" />
                  Upload Portofolio
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Kelola Promosi
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Laporan Keuangan
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Status Salon</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Status Approval</span>
                  <Badge variant="secondary">Pending</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Paket Langganan</span>
                  <Badge variant="outline">Basic</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Upgrade Paket
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Multi-Outlet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Kelola beberapa cabang salon</p>
                <Button className="w-full">Tambah Outlet Baru</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
