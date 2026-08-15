"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactSchemaType } from "@/utils/contact.schema";
import { sendMsg } from "@/api/contact.api";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Spinner } from "../ui/spinner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    mode:"all",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function getInTouch(values: ContactSchemaType) {
    setLoading(true);

    try {
      const response = await sendMsg(values);

      toast.success(response.message);
      form.reset();
    } catch (error: any) {
      toast.error(error?.message || "Error With Send Email!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(getInTouch)} className="w-full">
      <FieldGroup className="gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="name"
                  className="font-mono text-[10px] tracking-[0.15em] uppercase text-foreground"
                >
                  Name
                </FieldLabel>

                <Input
                  {...field}
                  id="name"
                  aria-invalid={fieldState.invalid}
                  placeholder="e.g. Diaa Eldeen"
                  autoComplete="name"
                  className="h-11 rounded-none border-border bg-transparent px-3 font-sans text-sm shadow-none placeholder:text-muted-foreground/60 focus-visible:border-accent focus-visible:ring-accent/30"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="email"
                  className="font-mono text-[10px] tracking-[0.15em] uppercase text-foreground"
                >
                  Email
                </FieldLabel>

                <Input
                  {...field}
                  id="email"
                  type="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="e.g. diaa@example.com"
                  autoComplete="email"
                  className="h-11 rounded-none border-border bg-transparent px-3 font-sans text-sm shadow-none placeholder:text-muted-foreground/60 focus-visible:border-accent focus-visible:ring-accent/30"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        <Controller
          name="subject"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor="subject"
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-foreground"
              >
                Subject
              </FieldLabel>

              <Input
                {...field}
                id="subject"
                aria-invalid={fieldState.invalid}
                placeholder="e.g. I need a dashboard"
                autoComplete="off"
                className="h-11 rounded-none border-border bg-transparent px-3 font-sans text-sm shadow-none placeholder:text-muted-foreground/60 focus-visible:border-accent focus-visible:ring-accent/30"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor="message"
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-foreground"
              >
                Message
              </FieldLabel>

              <InputGroup className="rounded-none border-border bg-transparent shadow-none focus-within:border-accent focus-within:ring-1 focus-within:ring-accent/30">
                <InputGroupTextarea
                  {...field}
                  id="message"
                  rows={7}
                  maxLength={1000}
                  aria-invalid={fieldState.invalid}
                  placeholder="Tell me about your project..."
                  className="min-h-36 resize-none rounded-none border-0 bg-transparent px-3 py-3 font-sans text-sm shadow-none placeholder:text-muted-foreground/60 focus-visible:ring-0"
                />

                <InputGroupAddon
                  align="block-end"
                  className="border-t border-border bg-transparent px-3 py-2"
                >
                  <InputGroupText className="font-mono text-[9px] tracking-[0.08em] text-muted-foreground">
                    {field.value.length}/1000
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>

              <FieldDescription className="font-sans text-xs text-muted-foreground">
                I&apos;ll get back to you as soon as possible.
              </FieldDescription>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Button
          type="button"
          variant="outline"
          onClick={() => form.reset()}
          disabled={loading}
          className="cursor-pointer h-10 rounded-none border-border bg-transparent px-5 font-mono text-[10px] tracking-[0.12em] text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          RESET
        </Button>

        <Button
          type="submit"
          disabled={loading || form.formState.isSubmitting}
          className="cursor-pointer h-10 rounded-none bg-foreground px-6 font-mono text-[10px] tracking-[0.12em] text-background hover:bg-foreground/90"
        >
          {loading ? (
            <>
              SENDING
              <Spinner data-icon="inline-start" />
            </>
          ) : (
            "SEND MESSAGE"
          )}
        </Button>
      </div>
    </form>
  );
}
