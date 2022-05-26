import { CheckCircleIcon, MailIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import WithScreen from "../Layouts/WithScreen";
import Head from "next/head";
import { OKIcon } from "react-share";

export default function contact() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);
  return (
    <div className=" bg-gray-50">
      <WithScreen width="">
        <Head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

          <title>Newsletter Subscription | HotSeatMag</title>

          <meta
            property="og:title"
            content="Newsletter Subscription | HotSeatMag"
          />

          <meta
            property="og:url"
            content="https://www.hotseatmag.com/contact-us"
          />

          <meta property="og:locale" content="en_US" />
          <meta
            name="description"
            content="All the latest movie news, movie trailers & reviews - and the same for TV, too."
          />
        </Head>
        <div className=" border-b mb-10">
          <div className=" flex justify-center my-8">
            <div className="">
              <div id="respond" className=" p-5" style={{ display: "block" }}>
                <span className=" items-center font-bold my-5 justify-center flex text-xl lg:text-3xl">
                  Subscribe To Our Newsletter
                </span>
                <form
                  name="subscription"
                  method="POST"
                  action="/subscription/?success=true"
                  data-netlify="true"
                  id="sqv-comment-form-media"
                  className="comment-form svq-form svq-media-form"
                >
                  <input type="hidden" name="form-name" value="subscription" />
                  <p className="comment-notes flex justify-center items-center">
                    <span className="px-2 text-sm rounded-md bg-gray-200 ">
                      Required fields are marked{" "}
                      <span className="required px-1"> * </span>
                    </span>
                    {success && (
                      <span className=" flex">
                        <span className="required px-1 hidden md:flex">
                          {" "}
                          |{" "}
                        </span>
                        <p className=" px-2 rounded-md shadow-md font-bold bg-green-600 text-white">
                          You in thank you !{" "}
                        </p>
                      </span>
                    )}
                  </p>
                  <div className="comment-form-notifications svq-notice request-response not-logged"></div>
                  <div className=" flex flex-col my-4 justify-center items-center">
                    <div className="form-group ">
                      <input
                        id="author"
                        name="author"
                        type="text"
                        className=" p-3 my-2 border  rounded-lg focus:outline-none"
                        placeholder="Name *"
                        size="30"
                        aria-required="true"
                      />
                    </div>
                    <div className="form-group ">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        className=" p-3 my-2 border rounded-lg focus:outline-none"
                        placeholder="Email *"
                        size="30"
                        aria-required="true"
                      />
                    </div>

                    <div className="w-full flex text-center mt-4">
                      <button
                        type="submit"
                        className=" w-full  text-gray-100 border bg-red-500 hover:bg-red-600 hover:text-white flex justify-center items-center px-4 py-2 rounded-lg"
                        id="submit"
                        name="submit"
                      >
                        <span className=" font-bold">SUBSCRIBE NOW</span>
                        <CheckCircleIcon className="h-6 px-2 text-green-400" />{" "}
                        {/* <span className="btn--loading-state">
                  <span className="svq-icon icon-loading icon-is-loading icon--x18"></span>
                  Loading
                </span> */}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </WithScreen>
    </div>
  );
}