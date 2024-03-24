import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">How to download Suno song？</h4>
        <p className="text-sm text-muted-foreground">
          <p>1、Copy share link into the input</p>
          <p>2、Click Download</p>
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div><a href="https://suno.ai/"></a>Suno</div>
        <Separator orientation="vertical" />
        <div><a href="https://github.com/tsui66/suno-ai-music">Github</a></div>
      </div>
    </div>
  )
}
