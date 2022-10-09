export interface UserState {
  status: {
    created: boolean;
    loggedIn: boolean;
  };
  data: {
    id: number;
    first_name: string;
    last_name: string;
    genre: string;
    register_number: string;
    mother_name: string;
    birthday: string;
    description: string;
    website: string;
    twitter: string;
    occupation: string;
    company: string;
    phone: string;
    tags: string;

    address: {
      label: string;
      country?: string;
      city?: string;
      postal_code?: string;
      state?: string;
      street?: string;
    };

    product_id: number;

    email: string;
    avatar: { image: File | null; url: string };
    username: string;
    password: string;
  };
}
