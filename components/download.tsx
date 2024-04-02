"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  shareLink: z.string().url(),
})

export function DownloadForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      shareLink: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const sunoId = data.shareLink.match(/\/song\/(.*?)\//)[1];
    const fileUrl = `https://cdn1.suno.ai/${sunoId}.mp3`
    return fetch(fileUrl).then(res => res.blob().then(blob => {
      var a = document.createElement('a');
      var url = window.URL.createObjectURL(blob);
      var filename = `${sunoId}.mp3`;
      a.href = url;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);
    }))
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="shareLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Download Suno Song</FormLabel>
              <FormControl>
                <Input placeholder="https://app.suno.ai/song/b27fd-efb85c84..." {...field} />
              </FormControl>
              <FormDescription>
                Input the share link from Suno and download the MP3 file.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Download</Button>
      </form>
    </Form>
  )
}
