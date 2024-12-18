import Image from "next/image";
import React from "react";
import StyledButton from "../ui/StyledButton";
import {
  instantWisdomThumbnail,
  iqWalletThumbnail,
} from "@/public/cdns/projectCard.cdn";

const testImage = "https://placehold.co/300x300/png";

function ProjectCard() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-y-5">
      {/* Muslim PrayerPal TODO add thumbnail */}
      <div className="mx-6 flex flex-col-reverse justify-between rounded-2xl border border-black p-3 lg:mx-0 lg:w-7/12 lg:flex-row">
        <div className="flex flex-col text-pretty pb-5 pl-5 pt-5 lg:w-1/2">
          <h1 className="pb-3 font-coolvetica text-4xl">Muslim Prayerpal</h1>
          <p>
            Muslim PrayerPal is a comprehensive Islamic lifestyle app designed
            to support your spiritual journey. The app offers: Accurate Prayer
            Alarms, Complete Quran, Quran Translations, and User-Friendly
            Interface
          </p>
          <p>
            Muslim PrayerPal is your all-in-one companion for maintaining a
            strong connection to Allah SWT., whether you&apos;re at home or on
            work.
          </p>
          <div className="space-x-3 pt-3">
            <StyledButton
              color="lime"
              text="Mobile App"
              className="rounded-full p-3 py-1"
            />
            <StyledButton
              color="blue"
              text="Quran App"
              className="rounded-full p-3 py-1"
            />
            <StyledButton
              color="yellow"
              text="WIP"
              className="rounded-full p-3 py-1"
            />
          </div>
        </div>
        <Image
          alt=""
          className="rounded-xl object-contain"
          src={testImage}
          width={300}
          height={300}
        />
      </div>

      <div className="mx-6 flex flex-col-reverse justify-between rounded-2xl border border-black p-3 lg:mx-0 lg:w-7/12 lg:flex-row">
        <div className="flex flex-col text-pretty pb-5 pl-5 pt-5 lg:w-1/2">
          <h1 className="pb-3 font-coolvetica text-4xl">IQ Wallet</h1>
          <p>
            This is a simple Solana Wallet Cross-Platform App built with Expo,
            Web3 & React Native to learn about web3 and smart contract. The
            Solana Wallet is an essential bridge connecting DeFi developers and
            the Solana blockchain. With Solana&apos;s quick and low-cost
            transactions.
          </p>
          <p>Solana Wallet Cross-Platform App with Expo, Web3 & React Native</p>
          <div className="space-x-3 pt-3">
            <StyledButton
              color="lime"
              text="Mobile App"
              className="rounded-full p-3 py-1"
            />
            <StyledButton
              color="white"
              text="Web3"
              className="rounded-full p-3 py-1"
            />
          </div>
        </div>

        <Image
          alt=""
          className="rounded-xl object-cover"
          src={iqWalletThumbnail}
          width={300}
          height={300}
        />
      </div>

      <div className="mx-6 flex flex-col-reverse justify-between rounded-2xl border border-black p-3 lg:mx-0 lg:w-7/12 lg:flex-row">
        <div className="flex flex-col text-pretty pb-5 pl-5 pt-5 lg:w-1/2">
          <h1 className="pb-3 font-coolvetica text-4xl">Instant Wisdom</h1>
          <p>
            Instant Wisdom is a unique app designed to deliver daily doses of
            inspiration, motivation, and guidance right to user fingertips. this
            app has something for everyone. Key features include: Daily Quotes,
            Engaging Content: Pulls data from carefully curated APIs to present
            meaningful insights in an engaging and user-friendly manner. Save &
            Share
          </p>
          <p>
            Instant Wisdom is pocket-sized companion for a more enlightened,
            inspired, and engaging life.
          </p>
          <div className="space-x-3 pt-3">
            <StyledButton
              color="green"
              text="Web App"
              className="rounded-full p-3 py-1"
            />
            <StyledButton
              color="pink"
              text="Quotes"
              className="rounded-full p-3 py-1"
            />
            <StyledButton
              color="red"
              text="Live"
              className="rounded-full p-3 py-1"
            />
          </div>
        </div>
        <Image
          alt=""
          className="rounded-xl object-contain"
          src={instantWisdomThumbnail}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
