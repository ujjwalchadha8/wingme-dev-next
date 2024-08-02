'use client'

import { ChangeEvent, useState } from "react";
import { SignUpModal, UserDetails } from "./signupmodal";

export const ResumeUploader = () => {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [fileName, setFileName] = useState('');

  const logAndReturn = (x: any) => {
    console.log(x);
    return x;
  }

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsDialogOpen(true);
    const name = "resume-" + Math.random() + ".pdf";
    setFileName(name);

    await fetch('https://7bxz913pw6.execute-api.ap-south-1.amazonaws.com/ResumeUpload', logAndReturn({
      method: 'POST',
      headers: {
        'Content-Type': 'application/pdf',
        'filename': name,
      },
      body: e.target.files![0]
    }));
  }

  const handleSignupSubmit = async (details: UserDetails) => {
    const response = await fetch('https://7bxz913pw6.execute-api.ap-south-1.amazonaws.com/AnalyzeResume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": details.userName,
        "phonenumber": details.phone,
        "key": fileName,
      }),
      mode: 'no-cors',
    });
    console.log((await response.text()));
  }

  return <>
    <div className="flex flex-col drop-shadow-xl">
      <SignUpModal isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} onSubmit={handleSignupSubmit} />
      <div className="max-w-lg w-500 h-50 rounded-lg border-2 border-dashed border-b-0 flex items-center justify-center bg-white shadow-sm">
        <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">
          <svg className="w-12 h-10 mx-auto" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1667 26.6667C8.48477 26.6667 5.5 23.6819 5.5 20C5.5 16.8216 7.72428 14.1627 10.7012 13.4949C10.5695 12.9066 10.5 12.2947 10.5 11.6667C10.5 7.0643 14.231 3.33334 18.8333 3.33334C22.8655 3.33334 26.2288 6.19709 27.0003 10.0016C27.0556 10.0006 27.1111 10 27.1667 10C31.769 10 35.5 13.731 35.5 18.3333C35.5 22.3649 32.6371 25.7279 28.8333 26.5M25.5 21.6667L20.5 16.6667M20.5 16.6667L15.5 21.6667M20.5 16.6667L20.5 36.6667" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span className="font-medium text-indigo-600">Upload your Resume</span> or drag and drop your file here</p>
        </label>
        <input id="file" type="file" className="hidden" onChange={handleUpload} />
      </div>
      <button
        type="button"
        className="px-3 py-2 text-white duration-150 border border-indigo-600 bg-indigo-600 rounded-b-lg hover:bg-indigo-700 active:shadow-lg"
      >
        Get Free Resume Analysis
      </button>
    </div>
  </>
}