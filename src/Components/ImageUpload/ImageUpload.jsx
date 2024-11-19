"use client"

import { UploadButton } from "@/utils/uploadthing"

const ImageUpload = ({subAdhar}) => {
  const hh = async(url)=>{
    subAdhar(url);
  }
  return (
    <>
    <UploadButton
        appearance={{
            button:
              "ut-ready:bg-blue-500 ut-uploading:cursor-not-allowed rounded-r-none bg-red-500 bg-none after:bg-orange-400",
            container: "w-max flex-row rounded-md border-cyan-300 bg-slate-800",
            allowedContent:
              "hidden",
          }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          hh(res[0].url);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </>
  )
}

export default ImageUpload
