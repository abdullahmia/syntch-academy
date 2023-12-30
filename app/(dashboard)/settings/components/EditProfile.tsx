"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import { constants } from "@/app/constants";
import { IUser } from "@/app/features/auth/auth.interface";
import { setUser } from "@/app/features/auth/auth.slice";
import { useUpdateUserMutation } from "@/app/features/users/users.api";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { ISelectOption } from "@/app/types";
import { generateDisplayNames } from "@/app/utils";
import toast from "cogo-toast";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export const EditProfile = () => {
  // Local state
  const [displayNamesOptions, setDisplayNamesOptions] = useState<
    ISelectOption[]
  >([]);

  // Hooks
  const dispatch = useAppDispatch();
  const { setItem } = useLocalStorage();

  // Redux store
  const { user, token } = useAppSelector((state) => state.auth);

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<Partial<IUser>>({
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      phoneNumber: "",
      displayName: "",
      occupation: "",
      socialProfile: {
        website: "",
        github: "",
        linkedIn: "",
      },
    },
  });

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  /**
   * HANDLERS
   */
  const onSubmit = async (data: Partial<IUser>) => {
    if (user?.id) {
      const res: any = await updateUser({ payload: data, id: user.id });

      if (res?.data) {
        // update the local storage
        setItem(constants.USER, JSON.stringify(res.data));

        dispatch(setUser({ user: res.data, token }));

        toast.success("Profile updated successfully", {
          position: "top-right",
        });
      } else {
        toast.error("Something went wrong", {
          position: "top-right",
        });
      }
    }
  };

  /**
   *
   * EFFECTS
   */
  useEffect(() => {
    if (user) {
      const nameOptions = generateDisplayNames(
        `${user.firstName} ${user.lastName}`
      )?.map((name: string) => ({
        value: name,
        label: name,
      }));
      setDisplayNamesOptions(nameOptions);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setValue("firstName", user?.firstName ?? "");
      setValue("lastName", user?.lastName ?? "");
      setValue("username", user?.username ?? "");
      setValue("phoneNumber", user?.phoneNumber ?? "");
      setValue("occupation", user?.occupation ?? "");
      setValue("displayName", user?.displayName ?? "");
      setValue("socialProfile.website", user?.socialProfile?.website ?? "");
      setValue("socialProfile.github", user?.socialProfile?.github ?? "");
      setValue("socialProfile.linkedIn", user?.socialProfile?.linkedIn ?? "");
    }
  }, [user, setValue]);

  return (
    <div className="w-full p-6">
      <div>
        <p className="text-primary font-semibold">Personal Details</p>
        <p className="text-sm text-deepGray">Edit your personal information.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 mt-8">
        <div className="flex items-center gap-8">
          <div className="w-full">
            <FormElements.Label withAsterisk>First Name</FormElements.Label>

            <Controller
              name="firstName"
              control={control}
              render={({ field: { value, onChange } }) => (
                <FormElements.Input
                  placeholder="First Name"
                  type="text"
                  value={value}
                  onChange={onChange}
                />
              )}
              rules={{
                required: "First name is required",
              }}
            />
            {errors.firstName && (
              <FormElements.Error>
                {errors.firstName.message}
              </FormElements.Error>
            )}
          </div>
          <div className="w-full">
            <FormElements.Label withAsterisk>Last Name</FormElements.Label>
            <Controller
              name="lastName"
              control={control}
              render={({ field: { value, onChange } }) => (
                <FormElements.Input
                  placeholder="Last Name"
                  type="text"
                  value={value}
                  onChange={onChange}
                />
              )}
              rules={{
                required: "last name is required",
              }}
            />
            {errors.lastName && (
              <FormElements.Error>{errors.lastName.message}</FormElements.Error>
            )}
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="w-full">
            <FormElements.Label withAsterisk>Username</FormElements.Label>
            <Controller
              name="username"
              control={control}
              render={({ field: { value, onChange } }) => (
                <FormElements.Input
                  placeholder="Username"
                  type="text"
                  value={value}
                  onChange={onChange}
                  disabled={user?.username ? true : false}
                />
              )}
              rules={{
                required: "Username is required",
              }}
            />
            {errors.username && (
              <FormElements.Error>{errors.username.message}</FormElements.Error>
            )}
          </div>
          <div className="w-full">
            <FormElements.Label withAsterisk>Phone Number</FormElements.Label>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field: { value, onChange } }) => (
                <FormElements.Input
                  placeholder="Phone Number"
                  type="text"
                  value={value}
                  onChange={onChange}
                />
              )}
              rules={{
                required: "Phone number is required",
                validate: (value) => {
                  if ((value as string).length < 11) {
                    // phone number should be digits only
                    if (!/^\d+$/.test(value as string)) {
                      return "Phone number should be digits only";
                    }

                    return "Phone number must be at least 11 characters";
                  }
                  return true;
                },
              }}
            />
            {errors.phoneNumber && (
              <FormElements.Error>
                {errors.phoneNumber.message}
              </FormElements.Error>
            )}
          </div>
        </div>

        <div className="w-full">
          <FormElements.Label>Skill/Occupation</FormElements.Label>
          <Controller
            name="occupation"
            control={control}
            render={({ field: { value, onChange } }) => (
              <FormElements.Input
                placeholder="Web Developer"
                type="text"
                value={value}
                onChange={onChange}
              />
            )}
            // rules={{
            //   required: "Occupation is required",
            // }}
          />
          {/* {errors.occupation && (
            <FormElements.Error>{errors.occupation.message}</FormElements.Error>
          )} */}
        </div>

        <div className="w-full">
          <FormElements.Label>Display name publicly as</FormElements.Label>

          <Controller
            name="displayName"
            control={control}
            render={({ field: { value, onChange } }) => (
              <FormElements.Select
                options={displayNamesOptions}
                placeholder="Select an option"
                value={value}
                onChange={onChange}
              />
            )}
            // rules={{
            //   required: "Display name is required",
            // }}
          />
          {/* {errors.displayName && (
            <FormElements.Error>
              {errors.displayName.message}
            </FormElements.Error>
          )} */}

          <p className="text-sm font-extralight pt-2 text-deepGray">
            The display name is shown in all public fields, such as the author
            name, instructor name, student name, and name that will be printed
            on the certificate.
          </p>
        </div>

        <div className="py-4">
          <hr className="border-lightGray" />
        </div>
        <div>
          <p className="text-primary font-semibold">Social Profiles</p>
          <p className="text-sm text-deepGray">
            Add your social profile links in below social accounts.
          </p>
        </div>

        {/* Social Profiles */}
        <div className="space-y-6">
          <div className="w-full">
            <FormElements.Label>Website</FormElements.Label>
            <Controller
              name="socialProfile.website"
              control={control}
              render={({ field: { value, onChange } }) => (
                <FormElements.Input
                  placeholder="https://example.com"
                  type="text"
                  value={value}
                  onChange={onChange}
                />
              )}
              rules={{
                validate: (value) => {
                  if (value) {
                    if (
                      !/^(ftp|http|https):\/\/[^ "]+$/.test(value as string)
                    ) {
                      return "Please enter a valid URL";
                    }
                  }
                  return true;
                },
              }}
            />
            {errors.socialProfile?.website && (
              <FormElements.Error>
                {errors.socialProfile?.website.message}
              </FormElements.Error>
            )}
          </div>
          <div className="w-full">
            <FormElements.Label>Github</FormElements.Label>
            <Controller
              name="socialProfile.github"
              control={control}
              render={({ field: { value, onChange } }) => (
                <FormElements.Input
                  placeholder="https://github.com/example"
                  type="text"
                  value={value}
                  onChange={onChange}
                />
              )}
              rules={{
                validate: (value) => {
                  if (value) {
                    if (
                      !/^(ftp|http|https):\/\/[^ "]+$/.test(value as string)
                    ) {
                      return "Please enter a valid URL";
                    }
                  }
                  return true;
                },
              }}
            />
            {errors.socialProfile?.github && (
              <FormElements.Error>
                {errors.socialProfile?.github.message}
              </FormElements.Error>
            )}
          </div>
          <div className="w-full">
            <FormElements.Label>Linkedin</FormElements.Label>
            <Controller
              name="socialProfile.linkedIn"
              control={control}
              render={({ field: { value, onChange } }) => (
                <FormElements.Input
                  placeholder="https://linkedin.com/example"
                  type="text"
                  value={value}
                  onChange={onChange}
                />
              )}
              rules={{
                validate: (value) => {
                  if (value) {
                    if (
                      !/^(ftp|http|https):\/\/[^ "]+$/.test(value as string)
                    ) {
                      return "Please enter a valid URL";
                    }
                  }
                  return true;
                },
              }}
            />
            {errors.socialProfile?.linkedIn && (
              <FormElements.Error>
                {errors.socialProfile?.linkedIn.message}
              </FormElements.Error>
            )}
          </div>
        </div>

        {/* Submit */}
        <div>
          <Button
            type="submit"
            variant="primary"
            loading={isLoading}
            disabled={isLoading}
          >
            Update Profile
          </Button>
        </div>
      </form>
    </div>
  );
};
