"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";

export const EditProfile = () => {
  return (
    <div className="w-full p-6">
      <div>
        <p className="text-primary font-semibold">Personal Details</p>
        <p className="text-sm text-deepGray">Edit your personal information.</p>
      </div>

      <form className="space-y-7 mt-8">
        <div className="flex items-center gap-8">
          <div className="w-full">
            <FormElements.Label withAsterisk>First Name</FormElements.Label>
            <FormElements.Input placeholder="First Name" />
          </div>
          <div className="w-full">
            <FormElements.Label withAsterisk>Last Name</FormElements.Label>
            <FormElements.Input placeholder="Last Name" />
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="w-full">
            <FormElements.Label withAsterisk>Username</FormElements.Label>
            <FormElements.Input placeholder="Username" />
          </div>
          <div className="w-full">
            <FormElements.Label withAsterisk>Phone Number</FormElements.Label>
            <FormElements.Input placeholder="Phone Number" />
          </div>
        </div>

        <div className="w-full">
          <FormElements.Label withAsterisk>Skill/Occupation</FormElements.Label>
          <FormElements.Input placeholder="Web Developer" />
        </div>

        <div className="w-full">
          <FormElements.Label withAsterisk>
            Display name publicly as
          </FormElements.Label>
          <FormElements.Input placeholder="Web Developer" />
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
            <FormElements.Input placeholder="https://example.com" />
          </div>
          <div className="w-full">
            <FormElements.Label>Github</FormElements.Label>
            <FormElements.Input placeholder="https://github.com/example" />
          </div>
          <div className="w-full">
            <FormElements.Label>Linkedin</FormElements.Label>
            <FormElements.Input placeholder="https://linkedin.com/example" />
          </div>
        </div>

        {/* Submit */}
        <div>
          <Button type="submit" variant="primary">
            Update Profile
          </Button>
        </div>
      </form>
    </div>
  );
};
