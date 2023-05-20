# Complex Form

## Overview

The Complex Form project is an in-depth exploration and implementation of advanced React techniques, including `useReducer` and `useContext`. The project features a secure, multi-step form complete with robust validation rules at both the field and step level.

Visit the project here: [Complex Form](https://wizard-complex-form.vercel.app/)

## Technologies

- **React**: The foundational UI library for the project, providing component-based structure.
- **TypeScript**: Ensures static typing within the application, increasing maintainability and developer efficiency.
- **useReducer**: Enables predictable state change management throughout the form.
- **Context API**: Facilitates global state management across the application.
- **Chakra UI**: Provides a robust component library to create an intuitive and user-friendly interface.
- **yup**: Enables comprehensive field validation rules to maintain form data integrity.

## Features

- Advanced multi-step form functionality
- Secure and structured state management system
- Field-level validation
- Step-level validation
- Allows navigation between steps, but completion of all steps is required to finalize the form
- Variety of custom fields, including:
  - An international phone number field with country code selection and automatic number formatting
  - An image upload field with a built-in preview function
  - A user profile Tag field with automatic data structure generation
- Address input step equipped with API-based search and auto-complete functionality (Note: The free API currently supports HTTP only, not HTTPS)
- Plan selection step featuring "radio cards" for clear and straightforward plan choice, which in turn automatically generates the plan ID
- Elegant error handling with toasts and inline field errors
- Username and password fields with stringent validation rules, ensuring account security

## Future Improvements

- Transition the Address request API to a solution that supports both local and production environments
- Expand the selection of custom field types to further demonstrate form handling capabilities
- Enhance user experience for fields with multiple or complex validations, such as the username and password fields
- Further refine UI/UX design for a smoother, more engaging user interaction
