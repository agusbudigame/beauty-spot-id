export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: {
          appointment_date: string
          appointment_time: string
          created_at: string | null
          customer_id: string | null
          duration: number
          id: string
          notes: string | null
          salon_id: string | null
          service_id: string | null
          staff_id: string | null
          status: Database["public"]["Enums"]["appointment_status"] | null
          total_price: number
          updated_at: string | null
        }
        Insert: {
          appointment_date: string
          appointment_time: string
          created_at?: string | null
          customer_id?: string | null
          duration: number
          id?: string
          notes?: string | null
          salon_id?: string | null
          service_id?: string | null
          staff_id?: string | null
          status?: Database["public"]["Enums"]["appointment_status"] | null
          total_price: number
          updated_at?: string | null
        }
        Update: {
          appointment_date?: string
          appointment_time?: string
          created_at?: string | null
          customer_id?: string | null
          duration?: number
          id?: string
          notes?: string | null
          salon_id?: string | null
          service_id?: string | null
          staff_id?: string | null
          status?: Database["public"]["Enums"]["appointment_status"] | null
          total_price?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_salon_id_fkey"
            columns: ["salon_id"]
            isOneToOne: false
            referencedRelation: "salons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      favorites: {
        Row: {
          created_at: string | null
          customer_id: string | null
          id: string
          salon_id: string | null
        }
        Insert: {
          created_at?: string | null
          customer_id?: string | null
          id?: string
          salon_id?: string | null
        }
        Update: {
          created_at?: string | null
          customer_id?: string | null
          id?: string
          salon_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "favorites_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_salon_id_fkey"
            columns: ["salon_id"]
            isOneToOne: false
            referencedRelation: "salons"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          related_id: string | null
          title: string
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          related_id?: string | null
          title: string
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          related_id?: string | null
          title?: string
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          is_active: boolean | null
          phone: string | null
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          is_active?: boolean | null
          phone?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          is_active?: boolean | null
          phone?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string | null
        }
        Relationships: []
      }
      reviews: {
        Row: {
          appointment_id: string | null
          comment: string | null
          created_at: string | null
          customer_id: string | null
          id: string
          images: string[] | null
          rating: number | null
          salon_id: string | null
        }
        Insert: {
          appointment_id?: string | null
          comment?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          images?: string[] | null
          rating?: number | null
          salon_id?: string | null
        }
        Update: {
          appointment_id?: string | null
          comment?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          images?: string[] | null
          rating?: number | null
          salon_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_salon_id_fkey"
            columns: ["salon_id"]
            isOneToOne: false
            referencedRelation: "salons"
            referencedColumns: ["id"]
          },
        ]
      }
      salon_staff: {
        Row: {
          created_at: string | null
          id: string
          is_active: boolean | null
          position: string | null
          salon_id: string | null
          staff_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          position?: string | null
          salon_id?: string | null
          staff_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          position?: string | null
          salon_id?: string | null
          staff_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "salon_staff_salon_id_fkey"
            columns: ["salon_id"]
            isOneToOne: false
            referencedRelation: "salons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "salon_staff_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      salons: {
        Row: {
          address: string
          city: string
          created_at: string | null
          description: string | null
          email: string | null
          id: string
          images: string[] | null
          instagram: string | null
          is_active: boolean | null
          latitude: number | null
          longitude: number | null
          name: string
          opening_hours: Json | null
          owner_id: string | null
          phone: string | null
          postal_code: string | null
          province: string
          rating: number | null
          status: Database["public"]["Enums"]["salon_status"] | null
          subscription_expires_at: string | null
          subscription_plan: string | null
          total_reviews: number | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          address: string
          city: string
          created_at?: string | null
          description?: string | null
          email?: string | null
          id?: string
          images?: string[] | null
          instagram?: string | null
          is_active?: boolean | null
          latitude?: number | null
          longitude?: number | null
          name: string
          opening_hours?: Json | null
          owner_id?: string | null
          phone?: string | null
          postal_code?: string | null
          province: string
          rating?: number | null
          status?: Database["public"]["Enums"]["salon_status"] | null
          subscription_expires_at?: string | null
          subscription_plan?: string | null
          total_reviews?: number | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          address?: string
          city?: string
          created_at?: string | null
          description?: string | null
          email?: string | null
          id?: string
          images?: string[] | null
          instagram?: string | null
          is_active?: boolean | null
          latitude?: number | null
          longitude?: number | null
          name?: string
          opening_hours?: Json | null
          owner_id?: string | null
          phone?: string | null
          postal_code?: string | null
          province?: string
          rating?: number | null
          status?: Database["public"]["Enums"]["salon_status"] | null
          subscription_expires_at?: string | null
          subscription_plan?: string | null
          total_reviews?: number | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "salons_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          duration: number
          id: string
          is_active: boolean | null
          name: string
          price: number
          salon_id: string | null
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          duration: number
          id?: string
          is_active?: boolean | null
          name: string
          price: number
          salon_id?: string | null
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          duration?: number
          id?: string
          is_active?: boolean | null
          name?: string
          price?: number
          salon_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "services_salon_id_fkey"
            columns: ["salon_id"]
            isOneToOne: false
            referencedRelation: "salons"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: { user_id: string }
        Returns: Database["public"]["Enums"]["app_role"]
      }
    }
    Enums: {
      app_role: "customer" | "staff" | "owner" | "super_admin"
      appointment_status:
        | "pending"
        | "confirmed"
        | "in_progress"
        | "completed"
        | "cancelled"
        | "no_show"
      booking_status: "pending" | "confirmed" | "cancelled" | "completed"
      salon_status: "pending" | "approved" | "rejected" | "suspended"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["customer", "staff", "owner", "super_admin"],
      appointment_status: [
        "pending",
        "confirmed",
        "in_progress",
        "completed",
        "cancelled",
        "no_show",
      ],
      booking_status: ["pending", "confirmed", "cancelled", "completed"],
      salon_status: ["pending", "approved", "rejected", "suspended"],
    },
  },
} as const
