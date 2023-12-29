"use client";

import { Button } from "./ui/button";

export const UpdateUser = () => {
  const updateUserHandler = async () => {};

  return (
    <div>
      <Button onClick={updateUserHandler} variant="primary">
        Update User by Session
      </Button>
    </div>
  );
};
