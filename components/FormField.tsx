type FormFieldProps = {
  label: string;
  placeholder: string;
  type?: string;
};

export default function FormField({ label, placeholder, type = "text" }: FormFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold uppercase tracking-[0.08em] text-mkb-muted">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-14 w-full rounded-2xl border border-black/10 bg-white px-5 text-base font-semibold text-mkb-dark outline-none transition placeholder:text-black/35 hover:border-mkb-red/45 focus:border-mkb-red focus:ring-4 focus:ring-mkb-red/10"
      />
    </label>
  );
}
