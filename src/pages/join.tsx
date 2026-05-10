import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Heart,
  Loader2,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";

type FormData = {
  fullName: string;
  email: string;
  location: string;
  customLocation: string;
  role: string;
  reason: string;
  hearAbout: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type Option = {
  label: string;
  value: string;
};

type CustomDropdownProps = {
  label: string;
  value: string;
  placeholder: string;
  options: Option[];
  onChange: (value: string) => void;
  error?: string;
  icon?: ReactNode;
  required?: boolean;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const initialFormData: FormData = {
  fullName: "",
  email: "",
  location: "",
  customLocation: "",
  role: "",
  reason: "",
  hearAbout: "",
  consent: false,
};

const roleOptions: Option[] = [
  { label: "Student", value: "Student" },
  { label: "Young professional", value: "Young professional" },
  { label: "Founder / builder", value: "Founder / builder" },
  { label: "Mentor", value: "Mentor" },
  { label: "Community organizer", value: "Community organizer" },
  { label: "Other", value: "Other" },
];

const locationOptions: Option[] = [
  { label: "Mogadishu, Somalia", value: "Mogadishu, Somalia" },
  { label: "Hargeisa, Somalia", value: "Hargeisa, Somalia" },
  { label: "Garowe, Somalia", value: "Garowe, Somalia" },
  { label: "Kismayo, Somalia", value: "Kismayo, Somalia" },
  { label: "Nairobi, Kenya", value: "Nairobi, Kenya" },
  { label: "Addis Ababa, Ethiopia", value: "Addis Ababa, Ethiopia" },
  { label: "Istanbul, Turkey", value: "Istanbul, Turkey" },
  { label: "London, United Kingdom", value: "London, United Kingdom" },
  { label: "Minneapolis, United States", value: "Minneapolis, United States" },
  { label: "Other / not listed", value: "Other / not listed" },
];

const hearAboutOptions: Option[] = [
  { label: "Social media", value: "Social media" },
  { label: "School / university", value: "School / university" },
  { label: "Friend or member", value: "Friend or member" },
  { label: "Tanwiir event", value: "Tanwiir event" },
  { label: "Other", value: "Other" },
];

const benefits = [
  "Access community events and workshops",
  "Meet mentors, peers, and builders",
  "Join topic-based conversations",
  "Find people to build projects with",
  "Free membership",
];

const trustItems = [
  "Free to join",
  "No spam",
  "Your data is safe",
  "Unsubscribe anytime",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CustomDropdown = ({
  label,
  value,
  placeholder,
  options,
  onChange,
  error,
  icon,
  required,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label} {required && <span>*</span>}
      </label>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className={`flex h-11 w-full items-center justify-between rounded-xl border bg-slate-50 px-3 text-left text-sm outline-none transition ${
          error
            ? "border-red-300 ring-2 ring-red-50"
            : isOpen
              ? "border-cyan-400 bg-white ring-2 ring-cyan-100"
              : "border-slate-200 hover:border-slate-300 hover:bg-white"
        }`}
      >
        <span className="flex min-w-0 items-center gap-2">
          {icon && <span className="shrink-0 text-slate-400">{icon}</span>}

          <span
            className={`truncate ${
              selectedOption ? "text-slate-900" : "text-slate-400"
            }`}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </span>

        <ChevronDown
          size={16}
          className={`shrink-0 text-slate-400 transition ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
          className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-xl shadow-slate-200/60"
        >
          <div className="max-h-64 overflow-y-auto">
            {options.map((option) => {
              const isSelected = option.value === value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                    isSelected
                      ? "bg-cyan-50 text-cyan-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="truncate">{option.label}</span>

                  {isSelected && (
                    <Check size={15} className="shrink-0 text-cyan-600" />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
};

const Join = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const completionLabel = useMemo(() => {
    const completed =
      Number(Boolean(formData.fullName.trim())) +
      Number(Boolean(formData.email.trim())) +
      Number(Boolean(formData.role)) +
      Number(Boolean(formData.location)) +
      Number(Boolean(formData.reason.trim())) +
      Number(formData.consent);

    return `${completed}/6 complete`;
  }, [formData]);

  const setField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setField(name as keyof FormData, value as FormData[keyof FormData]);
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setField("consent", event.target.checked);
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Please enter your name.";
    }

    if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email.";
    }

    if (!formData.role) {
      nextErrors.role = "Please choose one option.";
    }

    if (!formData.location) {
      nextErrors.location = "Please choose your location.";
    }

    if (
      formData.location === "Other / not listed" &&
      !formData.customLocation.trim()
    ) {
      nextErrors.customLocation = "Please type your city and country.";
    }

    if (formData.reason.trim().length < 10) {
      nextErrors.reason = "Please share a short reason.";
    }

    if (!formData.consent) {
      nextErrors.consent = "Please confirm before joining.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const finalLocation =
      formData.location === "Other / not listed"
        ? formData.customLocation.trim()
        : formData.location;

    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      location: finalLocation,
      role: formData.role,
      reason: formData.reason.trim(),
      hearAbout: formData.hearAbout,
      consent: formData.consent,
      source: "join-page",
      submittedAt: new Date().toISOString(),
    };

    try {
      // Backend-ready:
      // await fetch("/api/members/join", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });

      await new Promise((resolve) => setTimeout(resolve, 800));

      console.log("Tanwiir join submission:", payload);

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Join submission failed:", error);

      setErrors({
        consent: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        .font-display { font-family: 'DM Serif Display', Georgia, serif; }
      `}</style>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 pt-28 pb-12">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-600"
            >
              <span className="h-px w-6 bg-cyan-600" />
              Join Tanwiir
            </motion.span>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="font-display text-4xl font-normal leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl"
            >
              Become part of a{" "}
              <span className="italic bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                growing community.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Join students, professionals, organizers, mentors, and builders
              learning together and creating impact across communities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-5">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8"
              >
                <div className="mb-6 flex flex-col gap-3 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="font-display text-2xl font-normal text-slate-950">
                      Create your member profile
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      It takes less than 2 minutes.
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
                    {completionLabel}
                  </span>
                </div>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
                  >
                    <CheckCircle
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />
                    <div>
                      <p className="font-semibold">
                        You’re in. Welcome to Tanwiir.
                      </p>
                      <p className="mt-1 text-emerald-700">
                        Check your email for your next steps.
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Full name *
                      </label>

                      <div className="relative">
                        <User
                          size={16}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`h-11 w-full rounded-xl border bg-slate-50 pl-9 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 ${
                            errors.fullName
                              ? "border-red-300 focus:border-red-300 focus:ring-red-50"
                              : "border-slate-200 focus:border-cyan-400 focus:ring-cyan-100"
                          }`}
                          placeholder="Ahmed Hassan"
                          autoComplete="name"
                        />
                      </div>

                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Email address *
                      </label>

                      <div className="relative">
                        <Mail
                          size={16}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`h-11 w-full rounded-xl border bg-slate-50 pl-9 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 ${
                            errors.email
                              ? "border-red-300 focus:border-red-300 focus:ring-red-50"
                              : "border-slate-200 focus:border-cyan-400 focus:ring-cyan-100"
                          }`}
                          placeholder="hello@example.com"
                          autoComplete="email"
                          inputMode="email"
                        />
                      </div>

                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <CustomDropdown
                      label="I am a..."
                      required
                      value={formData.role}
                      placeholder="Select one"
                      options={roleOptions}
                      error={errors.role}
                      icon={<Users size={16} />}
                      onChange={(value) => setField("role", value)}
                    />

                    <CustomDropdown
                      label="Location"
                      required
                      value={formData.location}
                      placeholder="Select city"
                      options={locationOptions}
                      error={errors.location}
                      icon={<MapPin size={16} />}
                      onChange={(value) => {
                        setField("location", value);

                        if (value !== "Other / not listed") {
                          setField("customLocation", "");
                        }
                      }}
                    />
                  </div>

                  {formData.location === "Other / not listed" && (
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Your city and country *
                      </label>

                      <input
                        type="text"
                        name="customLocation"
                        value={formData.customLocation}
                        onChange={handleChange}
                        className={`h-11 w-full rounded-xl border bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 ${
                          errors.customLocation
                            ? "border-red-300 focus:border-red-300 focus:ring-red-50"
                            : "border-slate-200 focus:border-cyan-400 focus:ring-cyan-100"
                        }`}
                        placeholder="Your city, country"
                      />

                      {errors.customLocation && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.customLocation}
                        </p>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Why do you want to join? *
                    </label>

                    <textarea
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      rows={3}
                      maxLength={280}
                      className={`w-full resize-none rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 ${
                        errors.reason
                          ? "border-red-300 focus:border-red-300 focus:ring-red-50"
                          : "border-slate-200 focus:border-cyan-400 focus:ring-cyan-100"
                      }`}
                      placeholder="I want to learn, meet like-minded people, and contribute to community projects."
                    />

                    <div className="mt-1.5 flex justify-between gap-3">
                      {errors.reason ? (
                        <p className="text-xs text-red-500">{errors.reason}</p>
                      ) : (
                        <p className="text-xs text-slate-400">
                          A short honest answer is enough.
                        </p>
                      )}

                      <p className="text-xs text-slate-400">
                        {formData.reason.length}/280
                      </p>
                    </div>
                  </div>

                  <div className="max-w-sm">
                    <CustomDropdown
                      label="How did you hear about us?"
                      value={formData.hearAbout}
                      placeholder="Select one"
                      options={hearAboutOptions}
                      icon={<Sparkles size={16} />}
                      onChange={(value) => setField("hearAbout", value)}
                    />
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={handleCheckboxChange}
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-cyan-600"
                      />

                      <span className="text-sm text-slate-600">
                        <span className="block font-medium text-slate-800">
                          Tanwiir may contact me about membership and events. *
                        </span>
                        <span className="mt-0.5 block text-xs text-slate-500">
                          We respect your privacy and never sell your data.
                        </span>
                      </span>
                    </label>

                    {errors.consent && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-cyan-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Creating profile...
                      </>
                    ) : (
                      <>
                        Join the community
                        <ArrowRight
                          size={15}
                          className="transition group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5 lg:col-span-2"
            >
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-6"
              >
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-cyan-600" />
                  <h3 className="font-semibold text-slate-800">What you get</h3>
                </div>

                <ul className="space-y-3">
                  {benefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle
                        size={14}
                        className="shrink-0 text-emerald-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-2">
                  <Users size={20} className="text-cyan-600" />
                  <h3 className="font-semibold text-slate-800">
                    Join the network
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-slate-500">
                  You will be joining students, professionals, organizers,
                  mentors, and builders who want to grow and contribute.
                </p>

                <div className="mt-4 flex -space-x-2">
                  {["AM", "HA", "NY", "KM", "LB"].map((initials) => (
                    <div
                      key={initials}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-cyan-100 text-[10px] font-bold text-cyan-700"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Heart size={18} className="text-rose-500" />
                  <h3 className="font-semibold text-slate-800">
                    No spam. No pressure.
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-slate-500">
                  We will only contact you about membership, events, and helpful
                  community updates.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-500" />
                  <h3 className="font-semibold text-slate-800">
                    After you join
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-slate-500">
                  You will receive next steps by email, including events,
                  community circles, and ways to start participating.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-1">
                ✓ {item}
              </span>
            ))}
          </div>

          <div className="mt-5 text-center">
            <Link
              to="/community"
              className="text-xs font-medium text-cyan-600 hover:underline"
            >
              Explore the Tanwiir community first
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
