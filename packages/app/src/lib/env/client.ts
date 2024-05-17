import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "VITE_", // クライアント側で使う環境変数のプレフィックス
  client: {
    VITE_FIREBASE_API_KEY: z.string(),
    VITE_FIREBASE_AUTH_DOMAIN: z.string(),
    VITE_FIREBASE_PROJECT_ID: z.string(),
    VITE_FIREBASE_STORAGE_BUCKET: z.string(),
    VITE_FIREBASE_MESSAGING_SENDER_ID: z.string(),
    VITE_FIREBASE_APP_ID: z.string(),
    VITE_FIREBASE_MEASUREMENT_ID: z.string().optional(), // オプションの場合
  },
  runtimeEnv: import.meta.env,
});
