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
      street: string;
      number: string;
      zipcode: string;
      neighborhood: string;
      complement: string;
      state: string;
      city: string;
      country: string;
    };

    product_id: number;

    email: string;
    avatar: { image: File | null; url: string };
    username: string;
    password: string;
  };
}
