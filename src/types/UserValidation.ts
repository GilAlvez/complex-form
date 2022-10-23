export interface StepOneValidation {
  first_name?: string[];
  last_name?: string[];
  genre?: string[];
  birthday?: string[];
  description?: string[];
  website?: string[];
  countryCode?: string[];
  phone?: string[];
  tags?: string[];
}

export interface StepTwoValidation {
  label?: string[];
  city?: string[];
  country?: string[];
  postal_code?: string[];
  state?: string[];
  street?: string[];
}

export interface StepFourValidation {
  avatar?: string[];
  email?: string[];
  username?: string[];
  password?: string[];
}
