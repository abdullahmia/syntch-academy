export const endpoints = {
  auth: {
    login: "/auth/login",
    signup: "/auth/register",
    forgotPassword: "/auth/forgot-password",
    verifyEmail: "/auth/verify-email",
    resetPassword: "/auth/reset-password",
  },
  user: {
    root: "/users",
    deleteProfilePicture: "/users/delete-profile-picture",
    updateProfilePicture: "/users/upload-profile-picture",
  },
};
