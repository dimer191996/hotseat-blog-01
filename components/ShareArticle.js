import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";

import {
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
export default function ShareArticle({ slug }) {
  function share(params) {
    axios
      .put(`http://localhost:3020/api/article/share/${slug}`)
      .then(({ data }) => {})
      .catch((err) => {});
  }

  return (
    <div className=" sticky top-0 z-50 ">
      <div
        onClick={share}
        className=" absolute md:-left-16 -left-10 border-r bg-white   p-1 top-24 sm:mt-28 "
      >
        <div className="flex flex-col  space-y-4 ">
          <FacebookMessengerShareButton
            url={`${process.env.API_URL_ARTICLE}${slug}`}
          >
            <FacebookMessengerIcon size={28} round={true} />
          </FacebookMessengerShareButton>

          <FacebookShareButton url={`${process.env.API_URL_ARTICLE}${slug}`}>
            <FacebookIcon size={28} round={true} />
          </FacebookShareButton>

          <TwitterShareButton url={`${process.env.API_URL_ARTICLE}${slug}`}>
            <TwitterIcon size={28} round={true} />
          </TwitterShareButton>

          <EmailShareButton url={`${process.env.API_URL_ARTICLE}${slug}`}>
            <EmailIcon size={28} round={true} />
          </EmailShareButton>

          <WhatsappShareButton url={`${process.env.API_URL_ARTICLE}${slug}`}>
            <WhatsappIcon size={28} round={true} />
          </WhatsappShareButton>

          <TelegramShareButton url={`${process.env.API_URL_ARTICLE}${slug}`}>
            <TelegramIcon size={28} round={true} />
          </TelegramShareButton>

          <MailruShareButton url={`${process.env.API_URL_ARTICLE}${slug}`}>
            <MailruIcon size={28} round={true} />
          </MailruShareButton>

          <WorkplaceShareButton url={`${process.env.API_URL_ARTICLE}${slug}`}>
            <WorkplaceIcon size={28} round={true} />
          </WorkplaceShareButton>
        </div>
      </div>
    </div>
  );
}
