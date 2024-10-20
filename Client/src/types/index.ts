type User = {
  id: number;
  first_name: string;
  last_name: string;
  address: string;
  postal_code: string;
  city: string;
  country: string;
  mobile_phone_number: string;
  is_email_verified: boolean;
  is_video_verified: boolean;
  is_premium_user: boolean;
  is_verified: boolean;
  email: string;
  created_at: string;
  updated_at: string;
};

type Plan = {
  id: number;
  title: string;
  price: number;
  features: string[];
  created_at: string;
  updated_at: string;
};

export type { User, Plan };
