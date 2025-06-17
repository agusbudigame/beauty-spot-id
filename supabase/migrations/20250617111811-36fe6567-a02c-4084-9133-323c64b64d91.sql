
-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('customer', 'staff', 'owner', 'super_admin');

-- Create enum for appointment status
CREATE TYPE public.appointment_status AS ENUM ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled', 'no_show');

-- Create enum for salon status
CREATE TYPE public.salon_status AS ENUM ('pending', 'approved', 'rejected', 'suspended');

-- Create enum for booking status
CREATE TYPE public.booking_status AS ENUM ('pending', 'confirmed', 'cancelled', 'completed');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  role app_role NOT NULL DEFAULT 'customer',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create salons table
CREATE TABLE public.salons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  province TEXT NOT NULL,
  postal_code TEXT,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  phone TEXT,
  email TEXT,
  website TEXT,
  instagram TEXT,
  opening_hours JSONB,
  images TEXT[],
  rating DECIMAL(2,1) DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  status salon_status DEFAULT 'pending',
  subscription_plan TEXT DEFAULT 'basic',
  subscription_expires_at TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create salon_staff table
CREATE TABLE public.salon_staff (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  salon_id UUID REFERENCES public.salons(id) ON DELETE CASCADE,
  staff_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  position TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(salon_id, staff_id)
);

-- Create services table
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  salon_id UUID REFERENCES public.salons(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  duration INTEGER NOT NULL, -- in minutes
  price DECIMAL(10,2) NOT NULL,
  category TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create appointments table
CREATE TABLE public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  salon_id UUID REFERENCES public.salons(id) ON DELETE CASCADE,
  staff_id UUID REFERENCES public.profiles(id),
  service_id UUID REFERENCES public.services(id),
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  duration INTEGER NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  status appointment_status DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create reviews table
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  salon_id UUID REFERENCES public.salons(id) ON DELETE CASCADE,
  appointment_id UUID REFERENCES public.appointments(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  images TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create favorites table
CREATE TABLE public.favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  salon_id UUID REFERENCES public.salons(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(customer_id, salon_id)
);

-- Create notifications table
CREATE TABLE public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  related_id UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.salons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.salon_staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Create security definer function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID)
RETURNS app_role
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT role FROM public.profiles WHERE id = user_id;
$$;

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Super admins can view all profiles" ON public.profiles
  FOR SELECT USING (public.get_user_role(auth.uid()) = 'super_admin');

-- RLS Policies for salons
CREATE POLICY "Anyone can view approved salons" ON public.salons
  FOR SELECT USING (status = 'approved' OR owner_id = auth.uid() OR public.get_user_role(auth.uid()) = 'super_admin');

CREATE POLICY "Owners can manage their salons" ON public.salons
  FOR ALL USING (owner_id = auth.uid());

CREATE POLICY "Super admins can manage all salons" ON public.salons
  FOR ALL USING (public.get_user_role(auth.uid()) = 'super_admin');

-- RLS Policies for appointments
CREATE POLICY "Users can view their appointments" ON public.appointments
  FOR SELECT USING (
    customer_id = auth.uid() OR 
    staff_id = auth.uid() OR 
    salon_id IN (SELECT id FROM public.salons WHERE owner_id = auth.uid()) OR
    public.get_user_role(auth.uid()) = 'super_admin'
  );

CREATE POLICY "Customers can create appointments" ON public.appointments
  FOR INSERT WITH CHECK (customer_id = auth.uid());

CREATE POLICY "Staff and owners can update appointments" ON public.appointments
  FOR UPDATE USING (
    staff_id = auth.uid() OR 
    salon_id IN (SELECT id FROM public.salons WHERE owner_id = auth.uid()) OR
    public.get_user_role(auth.uid()) = 'super_admin'
  );

-- RLS Policies for reviews
CREATE POLICY "Anyone can view reviews" ON public.reviews
  FOR SELECT USING (true);

CREATE POLICY "Customers can create reviews" ON public.reviews
  FOR INSERT WITH CHECK (customer_id = auth.uid());

-- RLS Policies for favorites
CREATE POLICY "Users can manage their favorites" ON public.favorites
  FOR ALL USING (customer_id = auth.uid());

-- RLS Policies for notifications
CREATE POLICY "Users can view their notifications" ON public.notifications
  FOR SELECT USING (user_id = auth.uid());

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update salon rating
CREATE OR REPLACE FUNCTION public.update_salon_rating()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE public.salons 
  SET 
    rating = (SELECT AVG(rating)::DECIMAL(2,1) FROM public.reviews WHERE salon_id = NEW.salon_id),
    total_reviews = (SELECT COUNT(*) FROM public.reviews WHERE salon_id = NEW.salon_id)
  WHERE id = NEW.salon_id;
  RETURN NEW;
END;
$$;

-- Create trigger to update salon rating when review is added
CREATE TRIGGER update_salon_rating_trigger
  AFTER INSERT ON public.reviews
  FOR EACH ROW EXECUTE FUNCTION public.update_salon_rating();
