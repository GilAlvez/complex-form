export interface UserState {
  status: {
    step1: boolean;
    step2: boolean;
    step3: boolean;
    step4: boolean;
  };
  data: {
    id: number;
    first_name: string;
    last_name: string;
    genre: string;
    birthday: string;
    description: string;
    website: string;
    countryCode: string;
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
