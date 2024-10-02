import { body } from 'express-validator';

export const signupValidators = () => {
  return [
    // Validate fullName
    body('fullName')
      .notEmpty()
      .withMessage('Full name is required')
      .isLength({ min: 2, max: 50 })
      .withMessage('Full name must be between 2 and 50 characters long')
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage('Full name can only contain letters and spaces'),

    // Validate username
    body('username')
      .notEmpty()
      .withMessage('Username is required')
      .isLength({ min: 3, max: 30 })
      .withMessage('Username must be between 3 and 30 characters long')
      .matches(/^[a-zA-Z0-9]+$/)
      .withMessage('Username can only contain letters and numbers'),

    // Validate password
    body('password')
      .notEmpty()
      .withMessage('Password is required')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long')
      .matches(/[0-9]/)
      .withMessage('Password must contain at least one number')
      .matches(/[a-z]/)
      .withMessage('Password must contain at least one lowercase letter'),

    // Validate confirmPassword
    body('confirmPassword')
      .notEmpty()
      .withMessage('Please confirm your password')
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Passwords do not match');
        }
        return true;
      }),

    // Validate gender
    body('gender')
      .notEmpty()
      .withMessage('Gender is required')
      .isIn(['male', 'female'])
      .withMessage('Gender must be either "male" or "female"'),
  ];
};

export const loginValidators = () => {
  return [
    // Validate username for login
    body('username')
      .notEmpty()
      .withMessage('Username is required'),

    // Validate password for login
    body('password')
      .notEmpty()
      .withMessage('Password is required'),
  ];
};
