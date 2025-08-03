import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

interface UseFetchParams {
  url: string;
  slug?: string;
}

export interface PaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  total: number;
}

interface ApiResponse<T> {
  data: T;
  message?: string;
  meta?: PaginationMeta;
}

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  meta: PaginationMeta | null;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export function useFetchClient<T = unknown>({
  url,
  slug = "public",
}: UseFetchParams): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [meta, setMeta] = useState<PaginationMeta | null>(null);
  const [loading, setLoading] = useState<boolean>(!!url);
  const [error, setError] = useState<Error | null>(null);
  const locale = useLocale();

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${API_BASE_URL}/api/${slug}/${url}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Accept-Language": locale,
          },
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch from ${url}: ${res.status}`);
        }

        const result: ApiResponse<T> = await res.json();

        setData(result.data ?? null);
        setMeta(result.meta ?? null);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [url, locale, slug]);

  return { data, loading, error, meta };
}
