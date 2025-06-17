
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, ArrowLeft } from 'lucide-react';

const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-red-600" />
          </div>
          <CardTitle className="text-xl font-bold text-gray-900">
            Akses Ditolak
          </CardTitle>
          <CardDescription>
            Anda tidak memiliki izin untuk mengakses halaman ini
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600">
            Silakan hubungi administrator jika Anda yakin ini adalah kesalahan.
          </p>
          <div className="flex flex-col space-y-2">
            <Button asChild>
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali ke Dashboard
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/auth">
                Keluar dan Masuk Ulang
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Unauthorized;
