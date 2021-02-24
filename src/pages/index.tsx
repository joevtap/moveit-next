import React from "react";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountDown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.scss";
import Head from "next/head";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Move.it</title>
            </Head>
            <ExperienceBar />

            <section>
                <div>
                    <Profile />
                    <CompletedChallenges />
                    <CountDown />
                </div>
                <div>
                    <ChallengeBox />
                </div>
            </section>
        </div>
    );
}

// Dia 1: #juntosparaoproximonivel
// Dia 2: #jornadainfinita
// Dia 3: #focopraticagrupo
