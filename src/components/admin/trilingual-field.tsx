"use client";

import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLang, LANG_SUFFIX } from "@/components/admin/lang-context";

// Every content field in this schema is trilingual: a French default (unsuffixed, e.g.
// `name`) plus `${base}En` and `${base}Es`. This renders whichever one matches the page's
// shared active language (see lang-context.tsx) — the field itself no longer owns any
// tab/language state, so switching language once at the top of the page updates every
// field on it in one click instead of N.
//
// `control` is intentionally typed loosely (not generic over the form's field-value type):
// zodResolver's Input/Output types diverge whenever a schema field uses `.default()`, and
// threading that through a second, independently-generic component reliably breaks
// TypeScript's Resolver variance checking. Every real call site is still fully typed by
// its own `useForm<FormValues>()` — only this shared, cross-form wrapper loosens it.
export function TrilingualField({
  control,
  baseName,
  label,
  multiline = false,
  required = false,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  baseName: string;
  label: string;
  multiline?: boolean;
  required?: boolean;
}) {
  const { lang } = useLang();
  const Field = multiline ? Textarea : Input;
  const name = `${baseName}${LANG_SUFFIX[lang]}`;

  return (
    <div className="space-y-1.5">
      <span className="text-sm leading-none font-medium">
        {label}
        {required && <span className="text-brand-accent"> *</span>}
      </span>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Field {...field} rows={multiline ? 4 : undefined} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
