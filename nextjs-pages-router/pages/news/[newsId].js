import { useRouter } from "next/router";

export default function NewsDetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;
  return <h1>News {newsId} Page</h1>;
}
