import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

interface UseFetchParams {
  url: string;
}

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export function useFetchClient<T = any>({
  url,
}: UseFetchParams): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const locale = useLocale();

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${API_BASE_URL}/api/public/${url}`, {
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

        const json = await res.json();
        setData(json.data);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url, locale]);

  return { data, loading, error };
}
