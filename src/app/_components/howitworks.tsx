import Image from "next/image"

export const HowItWorks = () => {
  return (
    <>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl text-center">
            How it works?
          </h3>
          <p className="mt-3 text-center">
            75% of the candidates are rejected at first sight. Here's how we help you fix it
          </p>
          <div className="flex flex-row p-4 mt-5">
            <div>
              <Image
                src="/graphic1.png"
                alt="Resume building graphic"
                width={500}
                height={500} />
            </div>
            <div className="ml-5">
              <div className="flex flex-row">
                {/* <div className="h-24 w-24">
                  <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#4f46e5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.14636 10.022C6.80636 9.32201 7.03936 9.13102 7.32136 9.04102C7.51602 8.98972 7.72024 8.98664 7.91636 9.03202C8.17436 9.10802 8.24236 9.16402 9.08836 10.007C9.83136 10.747 9.90536 10.828 9.97736 10.972C10.1137 11.2264 10.1348 11.527 10.0354 11.798C9.96236 12.004 9.85336 12.14 9.40336 12.598L9.10936 12.898C9.03004 12.9772 9.01178 13.099 9.06436 13.198C9.71769 14.3125 10.6446 15.2418 11.7574 15.898C11.8855 15.9664 12.0432 15.9442 12.1474 15.843L12.4304 15.565C12.605 15.3857 12.79 15.2168 12.9844 15.059C13.2865 14.8677 13.6659 14.8454 13.9884 15C14.1454 15.074 14.1974 15.121 14.9644 15.886C15.7554 16.674 15.7774 16.699 15.8644 16.88C16.0293 17.1784 16.0293 17.5406 15.8644 17.839C15.7794 18.007 15.7274 18.068 15.2834 18.522C15.0144 18.796 14.7624 19.049 14.7224 19.084C14.3546 19.3888 13.8825 19.5381 13.4064 19.5C12.5374 19.4208 11.6964 19.1521 10.9424 18.713C9.27229 17.8278 7.85066 16.5382 6.80736 14.962C6.57927 14.6328 6.37636 14.2868 6.20036 13.927C5.73125 13.1216 5.48933 12.204 5.50036 11.272C5.53604 10.7846 5.76943 10.333 6.14636 10.022Z" stroke="#4f46e5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.7764 4.75C15.3622 4.75 15.0264 5.08579 15.0264 5.5C15.0264 5.91421 15.3622 6.25 15.7764 6.25V4.75ZM19.4884 6.25C19.9026 6.25 20.2384 5.91421 20.2384 5.5C20.2384 5.08579 19.9026 4.75 19.4884 4.75V6.25ZM20.2384 5.5C20.2384 5.08579 19.9026 4.75 19.4884 4.75C19.0742 4.75 18.7384 5.08579 18.7384 5.5H20.2384ZM18.7384 9C18.7384 9.41421 19.0742 9.75 19.4884 9.75C19.9026 9.75 20.2384 9.41421 20.2384 9H18.7384ZM20.0187 6.03033C20.3116 5.73744 20.3116 5.26256 20.0187 4.96967C19.7258 4.67678 19.2509 4.67678 18.958 4.96967L20.0187 6.03033ZM13.708 10.2197C13.4151 10.5126 13.4151 10.9874 13.708 11.2803C14.0009 11.5732 14.4758 11.5732 14.7687 11.2803L13.708 10.2197ZM15.7764 6.25H19.4884V4.75H15.7764V6.25ZM18.7384 5.5V9H20.2384V5.5H18.7384ZM18.958 4.96967L13.708 10.2197L14.7687 11.2803L20.0187 6.03033L18.958 4.96967Z" fill="#4f46e5"></path> </g></svg>
                </div> */}
                <div className="ml-5">
                  <div>
                    <h3 className="text-3xl font-semibold sm:text-5xl inline">
                      1.
                    </h3>
                    <p className="inline text-2xl ml-3">
                      Get on a call with us. Tell us your background & goals.
                    </p>
                  </div>
                  <p className="mt-3">
                    We will ask detailed questions on your education, knowledge, skills, projects and experience and take notes
                  </p>
                </div>
              </div>
              <div className="flex flex-row mt-10">
                {/* <div className="h-24 w-24">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15 14.25C13.3431 14.25 12 15.5931 12 17.25C12 18.9069 13.3431 20.25 15 20.25C16.6569 20.25 18 18.9069 18 17.25C18 15.5931 16.6569 14.25 15 14.25ZM10.5 17.25C10.5 14.7647 12.5147 12.75 15 12.75C17.4853 12.75 19.5 14.7647 19.5 17.25C19.5 19.7353 17.4853 21.75 15 21.75C12.5147 21.75 10.5 19.7353 10.5 17.25Z" fill="#4f46e5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 8.25H8.25V6.75H15.75V8.25Z" fill="#4f46e5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 11.25H8.25V9.75H15.75V11.25Z" fill="#4f46e5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 3H16.0607L18.75 5.68934V12H17.25V6.31066L15.4393 4.5H6.75V19.5H9.75V21H5.25V3Z" fill="#4f46e5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 14.25H8.25V12.75H9.75V14.25Z" fill="#4f46e5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5791 16.0854L14.9207 15.4146L15.4634 16.5H16.4999V18H14.5364L13.5791 16.0854Z" fill="#4f46e5"></path> </g></svg>
                </div> */}
                <div className="ml-5">
                  <div>
                    <h3 className="text-3xl font-semibold sm:text-5xl inline">
                      2.
                    </h3>
                    <p className="inline text-2xl ml-3">
                      Get a detailed analysis of your profile & a strategy to evolve.
                    </p>
                  </div>
                  <p className="mt-3">
                    Wait while we prepare your draft
                  </p>
                </div>
              </div>
              <div className="flex flex-row mt-10">
                {/* <div className="h-24 w-24">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15 14.25C13.3431 14.25 12 15.5931 12 17.25C12 18.9069 13.3431 20.25 15 20.25C16.6569 20.25 18 18.9069 18 17.25C18 15.5931 16.6569 14.25 15 14.25ZM10.5 17.25C10.5 14.7647 12.5147 12.75 15 12.75C17.4853 12.75 19.5 14.7647 19.5 17.25C19.5 19.7353 17.4853 21.75 15 21.75C12.5147 21.75 10.5 19.7353 10.5 17.25Z" fill="#4f46e5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 8.25H8.25V6.75H15.75V8.25Z" fill="#4f46e5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 11.25H8.25V9.75H15.75V11.25Z" fill="#4f46e5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 3H16.0607L18.75 5.68934V12H17.25V6.31066L15.4393 4.5H6.75V19.5H9.75V21H5.25V3Z" fill="#4f46e5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 14.25H8.25V12.75H9.75V14.25Z" fill="#4f46e5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5791 16.0854L14.9207 15.4146L15.4634 16.5H16.4999V18H14.5364L13.5791 16.0854Z" fill="#4f46e5"></path> </g></svg>
                </div> */}
                <div className="ml-5">
                  <div>
                    <h3 className="text-3xl font-semibold sm:text-5xl inline">
                      3.
                    </h3>
                    <p className="inline text-2xl ml-3">
                      Get a detailed roadmap to follow and a rewritten Resume
                    </p>
                  </div>
                  <p className="mt-3">
                    Get the first draft ready and review. Provide your
                  </p>
                </div>
              </div>
              <div className="flex flex-row mt-10">
                {/* <div className="h-24 w-24">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15 14.25C13.3431 14.25 12 15.5931 12 17.25C12 18.9069 13.3431 20.25 15 20.25C16.6569 20.25 18 18.9069 18 17.25C18 15.5931 16.6569 14.25 15 14.25ZM10.5 17.25C10.5 14.7647 12.5147 12.75 15 12.75C17.4853 12.75 19.5 14.7647 19.5 17.25C19.5 19.7353 17.4853 21.75 15 21.75C12.5147 21.75 10.5 19.7353 10.5 17.25Z" fill="#4f46e5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 8.25H8.25V6.75H15.75V8.25Z" fill="#4f46e5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 11.25H8.25V9.75H15.75V11.25Z" fill="#4f46e5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 3H16.0607L18.75 5.68934V12H17.25V6.31066L15.4393 4.5H6.75V19.5H9.75V21H5.25V3Z" fill="#4f46e5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 14.25H8.25V12.75H9.75V14.25Z" fill="#4f46e5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5791 16.0854L14.9207 15.4146L15.4634 16.5H16.4999V18H14.5364L13.5791 16.0854Z" fill="#4f46e5"></path> </g></svg>
                </div> */}
                <div className="ml-5">
                  <div>
                    <h3 className="text-3xl font-semibold sm:text-5xl inline">
                      4.
                    </h3>
                    <p className="inline text-2xl ml-3">
                      Start applying with optimized Resume and LinkedIn!
                    </p>
                  </div>
                  <p className="mt-3">
                    Get the first draft ready and review. Provide your
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}