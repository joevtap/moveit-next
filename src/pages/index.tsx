import React from "react";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountDown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.scss";
import Head from "next/head";
import { CountdownProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
    level: number;
    currentXp: number;
    challengesCompleted: number;
}

export default function Home(props: HomeProps) {
    return (
        <ChallengesProvider
            level={props.level}
            currentXp={props.currentXp}
            challengesCompleted={props.challengesCompleted}
        >
            <div className={styles.container}>
                <Head>
                    <title>Move.it</title>
                </Head>
                <ExperienceBar />
                <CountdownProvider>
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
                </CountdownProvider>
            </div>
        </ChallengesProvider>
    );
}

// getServerSideProps é uma função que roda no servidor do Next

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentXp, challengesCompleted } = ctx.req.cookies;

    return {
        props: {
            level: Number(level),
            currentXp: Number(currentXp),
            challengesCompleted: Number(challengesCompleted),
        },
    };
};

// Dia 1: #juntosparaoproximonivel
// Dia 2: #jornadainfinita
// Dia 3: #focopraticagrupo
// Dia 4: #neverstoplearning
