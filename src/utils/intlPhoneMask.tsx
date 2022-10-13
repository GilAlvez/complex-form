export interface IntlPhone {
  countryCode: string;
  isoCode: string;
  name: string;
  mask: string;
}

export const intlPhoneMask = [
  { countryCode: "1", isoCode: "ca", name: "Canada", mask: "(999) 999-9999" },
  { countryCode: "1", isoCode: "us", name: "United States", mask: "(999) 999-999" },
  { countryCode: "27", isoCode: "za", name: "South Africa", mask: "999 999 9999" },
  { countryCode: "55", isoCode: "br", name: "Brazil", mask: "(99) 9 9999-9999" },
  { countryCode: "64", isoCode: "nz", name: "New Zealand", mask: "99-999 9999" },
  { countryCode: "65", isoCode: "sg", name: "Singapore", mask: "9999 9999" },
  { countryCode: "81", isoCode: "jp", name: "Japan", mask: "999 999 999" },
  { countryCode: "82", isoCode: "kr", name: "South Korea", mask: "99-9999-9999" },
  { countryCode: "351", isoCode: "pt", name: "Portugal", mask: "999 999 999" },
  { countryCode: "852", isoCode: "hk", name: "Hong Kong", mask: "9999 9999" },
];
