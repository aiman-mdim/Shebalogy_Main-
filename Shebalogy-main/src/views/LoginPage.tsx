"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { AuthField as Field } from "@/components/AuthField";
import { useI18n } from "@/lib/i18n";
import { useAuth } from "@/lib/auth";
import { useState } from "react";

import bgLoginImg from "@/assets/bg-login.jpeg";

export default function LoginPage() {
  const { t } = useI18n();
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <PageShell>
      <div
        className="min-h-screen w-full flex justify-center items-center px-4 sm:px-6 py-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgLoginImg.src})`,
        }}
      >
        <div className="glass rounded-3xl p-8 sm:p-10 w-full max-w-md animate-fade-up shadow-soft">
          <h1 className="text-3xl font-bold text-white/80">{t("welcome_back")}</h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              login(email, pw);
              router.push("/");
            }}
            className="mt-6 space-y-4"
          >
            <Field label={t("email")} type="email" value={email} onChange={setEmail} />
            <Field label={t("password")} type="password" value={pw} onChange={setPw} />
            <button className="w-full rounded-full bg-primary text-primary-foreground py-3 font-semibold hover:opacity-90 transition shadow-soft">
              {t("login")}
            </button>
          </form>
          <p className="mt-6 text-sm text-center text-white/80">
            {t("no_account")}{" "}
            <Link href="/signup" className="text-white/80 font-semibold hover:underline">
              {t("signup")}
            </Link>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
