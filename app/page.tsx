import { DownloadForm } from "@/components/download";
import { Footer } from "@/components/footer";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <DownloadForm></DownloadForm>
        <div className="mt-96">
          <Footer></Footer>
        </div>
      </div>

    </main>
  );
}
