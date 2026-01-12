import { Button } from "./ui/button";
import { socialLinks } from "@/constants";

export const Profile = () => {
  return (
    <aside
      className="
        w-full max-w-sm
        m-6
        rounded-3xl
        border border-neutral-800
        bg-neutral-900
        text-white
        p-6
        shadow-xl
        lg:sticky lg:top-6
      "
    >
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">
            Kene
          </h1>
          <p className="text-sm text-neutral-400">
            Software Engineering
          </p>
        </div>

        {/* Profile Image */}
        <img
          src="/images/me.jpg"
          alt="Kene"
          className="
            w-full
            aspect-[3/4]
            rounded-3xl
            object-cover
            border border-neutral-800
          "
        />

        {/* Specialization */}
        <div className="mt-2">
          <p className="text-xs uppercase tracking-wide text-neutral-500">
            Specialization
          </p>
          <p className="text-lg font-medium">
            Backend Engineer
          </p>
        </div>

        {/* Location + Socials */}
        <div>
          <p className="text-xs uppercase tracking-wide text-neutral-500">
            Based in
          </p>
          <p className="text-lg font-medium">
            Nigeria
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 pt-4">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;

              return (
                <a
                  key={i}
                  href={social.link}
                  className="
                    flex items-center justify-center
                    h-11 w-11
                    rounded-xl
                    border border-neutral-700
                    text-neutral-400
                    hover:text-white
                    hover:border-primary
                    hover:bg-neutral-800
                    transition
                  "
                >
                  <Icon className="size-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="
            mt-4
            w-full
            rounded-xl
            bg-neutral-100
            text-black
            hover:bg-neutral-200
            font-medium
          "
        >
         <a href="www.linkedin.com/in/kenejustin-ijeh">Let’s Connect!</a> 
        </Button>
      </div>
    </aside>
  );
};
