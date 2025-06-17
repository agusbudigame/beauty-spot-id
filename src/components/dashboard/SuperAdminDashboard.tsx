
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Store, BarChart3, CreditCard, MessageSquare, Settings, LogOut } from 'lucide-react';
import { toast } from 'sonner';

const SuperAdminDashboard = () => {
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
              <Badge variant="destructive" className="ml-3">Super Admin</Badge>
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
        {/* Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900">0</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Store className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Salons</p>
                  <p className="text-2xl font-bold text-gray-900">0</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                  <p className="text-2xl font-bold text-gray-900">0</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <CreditCard className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">Rp 0</p>
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
                  <Shield className="h-5 w-5 mr-2" />
                  Monitoring Platform
                </CardTitle>
                <CardDescription>
                  Pantau seluruh aktivitas platform secara real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Dashboard analytics platform</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Store className="h-5 w-5 mr-2" />
                  Salon Approval Queue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Store className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Tidak ada salon yang menunggu approval</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Admin Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  User Management
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Store className="h-4 w-4 mr-2" />
                  Salon Verification
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Content Moderation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Payment Gateway
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Tickets Pending</span>
                  <Badge variant="secondary">0</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Chats</span>
                  <Badge variant="secondary">0</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Support Dashboard
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Platform Status</span>
                  <Badge variant="default">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database</span>
                  <Badge variant="default">Healthy</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  System Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
